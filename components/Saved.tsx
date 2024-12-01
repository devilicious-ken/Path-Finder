import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';


const Saved = () => {
 
  const [savedJobs, setSavedJobs] = useState([]);

  const loadSavedJobs = async () => {
    try {
      const jobs = JSON.parse((await AsyncStorage.getItem('savedJobs')) || '[]');
      setSavedJobs(jobs);
    } catch (error) {
      console.error('Error loading saved jobs:', error);
    }
  };

  useEffect(() => {
    loadSavedJobs();
  }, []);

  const clearSavedJobs = async () => {
    try {
      await AsyncStorage.removeItem('savedJobs');
      setSavedJobs([]);
    } catch (error) {
      console.error('Error clearing saved jobs:', error);
    }
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
    <View style={styles.container}>
      {savedJobs.length > 0 ? (
        <>
        <FlatList
          data={savedJobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={() => router.push({ pathname: '/job-details', params: { job: JSON.stringify(item) } })}
            style={styles.cardWrapper}>
              <View style={[styles.jobCard, { backgroundColor: getCardColor(item.type) }]}>
                <Image source={{ uri: item.logo }} style={styles.logo} />
                <View style={styles.jobContent}>
                  <Text style={styles.jobTitle}>{item.title}</Text>
                  <Text style={styles.jobCompany}>{item.company}</Text>
                  <View style={styles.metadata}>
                    <Text style={styles.metadataItem}>📍 {item.location}</Text>
                    <Text style={styles.metadataItem}>🎓 {item.experience}</Text>
                    <Text style={styles.metadataItem}>⏱️ {item.type}</Text>
                  </View>
                  </View>
                </View>
                <View style={styles.whiteFooter}>
                    <Text style={styles.salary}>{item.salary}</Text>
                    <Text style={styles.posted}>{item.posted}</Text>
                  </View>
            </TouchableOpacity>
          )}
        />
            <TouchableOpacity style={styles.clearButton} onPress={clearSavedJobs}>
              <Text style={styles.clearButtonText}>Clear Saved Jobs</Text>
            </TouchableOpacity>
      </>
      ) : (
        <Text style={styles.noJobs}>No saved jobs found.</Text>
      )}
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 15,
    backgroundColor: '#1f1f1f',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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
  item: {
    fontSize: 14,
    color: '#555',
  },
  noJobs: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  clearButton: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
