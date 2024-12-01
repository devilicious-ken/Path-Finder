import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const router = useRouter();

  // Load applied jobs from AsyncStorage when the component mounts
  useEffect(() => {
    const loadAppliedJobs = async () => {
      try {
        const storedJobs = await AsyncStorage.getItem('appliedJobs');
        if (storedJobs) {
          setAppliedJobs(JSON.parse(storedJobs));
        }
      } catch (error) {
        console.error('Error loading applied jobs:', error);
      }
    };
    
    loadAppliedJobs();
  }, []);

  // Function to handle job deletion
  const handleDeleteJob = async (jobId) => {
    try {
      // Filter out the job to be deleted
      const updatedJobs = appliedJobs.filter(job => job.jobId !== jobId);
      setAppliedJobs(updatedJobs);

      // Update AsyncStorage with the new list of applied jobs
      await AsyncStorage.setItem('appliedJobs', JSON.stringify(updatedJobs));
    } catch (error) {
      console.error('Error deleting job:', error);
      Alert.alert('Error', 'Unable to delete the job. Please try again.');
    }
  };

  const renderJobItem = ({ item }) => (
    <View style={styles.jobCard}>
      <View style={styles.jobDetails}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobCompany}>{item.company}</Text>
        <Text style={styles.jobLocation}>{item.location}</Text>
      </View>

      {/* Delete Button */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteJob(item.jobId)}
      >
        <Ionicons name="close-circle" size={24} color="#FF5C5C" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
  

      {/* Display applied jobs */}
      {appliedJobs.length > 0 ? (
        <FlatList
          data={appliedJobs}
          keyExtractor={(item) => item.jobId.toString()}
          renderItem={renderJobItem}
          contentContainerStyle={styles.jobList}
        />
      ) : (
        <Text style={styles.noJobsText}>No applied jobs yet.</Text>
      )}
    </View>
  );
};

export default AppliedJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#',
    padding: 20,
    bottom: 15
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  jobList: {
    paddingBottom: 20,
  },
  jobCard: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  jobDetails: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  jobCompany: {
    color: '#aaa',
    fontSize: 14,
  },
  jobLocation: {
    color: '#888',
    fontSize: 12,
  },
  deleteButton: {
    padding: 5,
  },
  noJobsText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
  },
});
