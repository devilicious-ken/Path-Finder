import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import Modal from 'react-native-modal';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Applying = () => {
  const { jobId, title, company, location } = useLocalSearchParams();

  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const router = useRouter();

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        copyToCacheDirectory: false,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const file = result.assets[0]; // Get the first file in the assets array
        const fileName = file.name;
        const fileSize = (file.size / 1024).toFixed(1) + ' Kb'; // Convert bytes to Kb
  
        console.log('File selected:', fileName, fileSize);
        setFileName(fileName);
        setFileSize(fileSize);
        setIsUploaded(true);
      } else {
        console.log('No file selected or operation canceled.');
        Alert.alert('No file selected');
      }
    } catch (error) {
      console.error('Error while picking the file:', error);
      Alert.alert('Error', 'Something went wrong while picking the file.');
    }
  };

  const removeFile = () => {
    setFileName('');
    setFileSize('');
    setIsUploaded(false);
  };

  const handleSubmit = async () => {
    if (!fullName || !email || !isUploaded) {
      setIsErrorModalVisible(true);
      return;
    }
  
    try {
      // Get existing applied jobs
      const appliedJobs = JSON.parse((await AsyncStorage.getItem('appliedJobs')) || '[]');
  
      // If the job ID isn't already in the list, add it
      if (!appliedJobs.includes(jobId)) {
        appliedJobs.push({
          jobId,
          title,
          company,
          location,
        });
        await AsyncStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
      }
  
      setIsSuccessModalVisible(true);
    } catch (error) {
      console.error('Error saving applied job:', error);
    }
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={20} color="#fff" />
        <Text style={styles.backText}>Apply Job</Text>
      </TouchableOpacity>

      {/* Full Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#666"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      {/* Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#666"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Upload CV/Resume */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Upload CV/Resume</Text>
        {!isUploaded ? (
          <TouchableOpacity style={styles.uploadBox} onPress={handleFilePick}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1091/1091889.png' }}
              style={styles.uploadIcon}
            />
            <Text style={styles.uploadText}>Browse File</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.fileContainer}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/337/337946.png' }}
              style={styles.fileIcon}
            />
            <View style={styles.fileInfo}>
              <Text style={styles.fileName}>{fileName}</Text>
              <Text style={styles.fileSize}>{fileSize}</Text>
            </View>
            <TouchableOpacity onPress={removeFile}>
              <Ionicons name="close-circle" size={24} color="#FF5C5C" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Motivation Letter */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Motivation Letter (Optional)</Text>
        <TextInput
          placeholder="Motivation letter..."
          placeholderTextColor="#666"
          style={[styles.input, styles.textArea]}
          multiline
        />
      </View>
      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      {/* Error Modal */}
      <Modal isVisible={isErrorModalVisible} onBackdropPress={() => setIsErrorModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Ionicons name="alert-circle" size={50} color="#FF5C5C" style={styles.modalIcon} />
          <Text style={styles.modalTitle}>Oops, Failed!</Text>
          <Text style={styles.modalMessage}>Please, fill all requirements. Try Again.</Text>
          <TouchableOpacity style={styles.tryAgainButton} onPress={() => setIsErrorModalVisible(false)}>
            <Text style={styles.tryAgainText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal isVisible={isSuccessModalVisible} onBackdropPress={() => setIsSuccessModalVisible(false)}>
        <View style={styles.successModalContainer}>
          <Ionicons name="checkmark-circle" size={60} color="#00FF00" style={styles.successModalIcon} />
          <Text style={styles.successModalTitle}>Congratulations!</Text>
          <Text style={styles.successModalMessage}>Your application has been successfully submitted.</Text>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => {
              setIsSuccessModalVisible(false);
              router.push('/home')
              // Add navigation or other actions here
            }}
          >
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default Applying;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },  
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 30,
  },
  backText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    fontSize: 14,
  },
  uploadBox: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: '#666',
    borderWidth: 1,
  },
  uploadIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  uploadText: {
    color: '#fff',
    fontSize: 14,
  },
  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F2020',
    borderRadius: 10,
    padding: 10,
  },
  fileIcon: {
    width: 40,
    height: 50,
    marginRight: 10,
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    color: '#fff',
    fontSize: 14,
  },
  fileSize: {
    color: '#666',
    fontSize: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalIcon: {
    marginBottom: 15,
  },
  modalTitle: {
    color: '#FF5C5C',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  tryAgainButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tryAgainText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successModalContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  successModalIcon: {
    marginBottom: 15,
  },
  successModalTitle: {
    color: '#00FF00',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  successModalMessage: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  doneButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  doneText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
