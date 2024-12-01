import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const JobDetails = () => {
  const { job } = useLocalSearchParams();
  const jobDetails = typeof job === 'string' ? JSON.parse(job) : null;


  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const checkIfSaved = async () => {
      const savedJobs = JSON.parse((await AsyncStorage.getItem('savedJobs')) || '[]');
      const isSaved = savedJobs.some((savedJob) => savedJob.id === jobDetails.id);
      setSaved(isSaved);
    };
  
    checkIfSaved();
  }, []);
  


const toggleSave = async () => {
  const savedJobs = JSON.parse((await AsyncStorage.getItem('savedJobs')) || '[]');
  const isSaved = savedJobs.some((savedJob) => savedJob.id === jobDetails.id);

  if (isSaved) {
    const updatedJobs = savedJobs.filter((savedJob) => savedJob.id !== jobDetails.id);
    await AsyncStorage.setItem('savedJobs', JSON.stringify(updatedJobs));
  } else {
    savedJobs.push(jobDetails);
    await AsyncStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }

  setSaved(!isSaved); // Update UI state
};


  const getCardColor = (jobType: string) => {
    switch (jobType) {
      case 'Fulltime':
        return '#017b2d'; // Purple for full-time
      case 'Part-time':
        return '#F5001E'; // Red for part-time
      case 'Contract':
        return '#420163'; // Yellow for contract
      default:
        return '#2b2b2b'; // Default dark gray
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => router.replace('/(root)/(tabs)/home')} style={styles.backButton}>
      <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.backText}> Job Details</Text>
      </TouchableOpacity>
      <View style={styles.cardWrapper}>
      <View style={[styles.jobCard, { backgroundColor: getCardColor(jobDetails.type) }]}>
        <Image source={{ uri: jobDetails.logo }} style={styles.logo} />
        <View style={styles.jobContent}>
          <Text style={styles.jobTitle}>{jobDetails.title}</Text>
          <Text style={styles.jobCompany}>{jobDetails.company}</Text>
          <View style={styles.metadata}>
            <Text style={styles.metadataItem}>📍 {jobDetails.location}</Text>
            <Text style={styles.metadataItem}>🎓 {jobDetails.experience}</Text>
            <Text style={styles.metadataItem}>⏱️ {jobDetails.type}</Text>
          </View>
          </View>
        </View>
        <View style={styles.whiteFooter}>
            <Text style={styles.salary}>{jobDetails.salary}</Text>
            <Text style={styles.posted}>{jobDetails.posted}</Text>
          </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📄 Job Description</Text>
        <Text style={styles.sectionText}>{jobDetails.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ Skills & Requirements</Text>
        {jobDetails.skills && jobDetails.skills.map((skills: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
  <Text key={index} style={styles.listItem}>• {skills}</Text>
))}

      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👤 Your Role</Text>
        <Text style={styles.sectionText}>{jobDetails.role}</Text>
      </View>

      <View style={styles.actions}>
      <TouchableOpacity onPress={toggleSave} style={styles.saveButton}>
  <Text style={styles.saveButtonText}>{saved ? 'Saved' : 'Save'}</Text>
</TouchableOpacity>

    <TouchableOpacity
      onPress={() => router.push(`/applying?jobId=${jobDetails.id}&title=${jobDetails.title}&company=${jobDetails.company}&location=${jobDetails.location}`)}
      style={styles.applyButton}
    >
      <Text style={styles.applyButtonText}>Apply Now →</Text>
    </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 40,
    gap: 1
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  cardWrapper: {
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },
  jobCard: {
    padding: 15,
    position: 'relative',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
    position: 'absolute',
    top: 15,
    left: 15,
  },
  jobContent: {

  },
  jobTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 70
  },
  jobCompany: {
    color: '#E0E0E0',
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 70
  },
  metadata: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
    gap: 4,
    top: 10
  },
  metadataItem: {
    color: '#FFFFFF',
    backgroundColor: '#ffffff30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    fontSize: 12,
    marginRight: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'white'
  },
  whiteFooter: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  salary: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  posted: {
    color: '#333333',
    fontSize: 12,
  },
  section: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    color: '#E0E0E0',
    fontSize: 14,
    lineHeight: 20,
  },
  listItem: {
    color: '#E0E0E0',
    fontSize: 14,
    marginVertical: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },
  saveButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  saveButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});