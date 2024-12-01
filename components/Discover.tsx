import { ScrollView, StyleSheet, Text, Image, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { jobs } from '@/constants';
import { router } from 'expo-router';

type Props = {
  searchQuery: string;
};

const Discover = ({ searchQuery }: Props) => {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    // Simulating a delay for loading data
    setIsLoading(true);
    setTimeout(() => {
      const filtered = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredJobs(filtered);
      setIsLoading(false); // Set loading to false after data is fetched
    }, 1000); // Simulated delay of 1 second
  }, [searchQuery]);

  // Map job type to specific background colors
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
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.loadingText}>Loading jobs...</Text>
        </View>
      ) : filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <View key={job.id} style={styles.cardWrapper}>
            <TouchableOpacity onPress={() => router.push({ pathname: '/job-details', params: { job: JSON.stringify(job) } })}>
              <View style={[styles.jobCard, { backgroundColor: getCardColor(job.type) }]}>
              <Image source={{ uri: job.logo }} style={styles.logo} />
              <View style={styles.jobContent}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobCompany}>{job.company}</Text>
                <View style={styles.metadata}>
                  <Text style={styles.metadataItem}>{job.location}</Text>
                  <Text style={styles.metadataItem}>• {job.experience}</Text>
                  <Text style={styles.metadataItem}>• {job.type}</Text>
                </View>
                <Text style={styles.description} numberOfLines={2}>
                  {job.description}
                </Text>
                <TouchableOpacity
                  onPress={() => router.push({ pathname: '/job-details', params: { job: JSON.stringify(job) } })}
                  style={styles.viewButton}
                >
                  <Text style={styles.viewButtonText}>View</Text>
                </TouchableOpacity>
              </View>
              </View>
            
            {/* White strip at the bottom */}
              <View style={styles.whiteFooter}>
                <Text style={styles.salary}>{job.salary}</Text>
                <Text style={styles.posted}>{job.posted}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.noResults}>No jobs found</Text>
      )}
    </ScrollView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    bottom: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100, // Adjust position to your liking
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
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
  jobContent: {},
  jobTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 70,
  },
  jobCompany: {
    color: '#E0E0E0',
    fontSize: 14,
    marginVertical: 5,
    marginLeft: 70,
  },
  metadata: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
    gap: 4,
    top: 10,
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
    borderColor: 'white',
  },
  description: {
    color: '#E0E0E0',
    fontSize: 14,
    marginVertical: 10,
    lineHeight: 18,
  },
  viewButton: {
    position: 'absolute',
    right: 1,
    top: 1,
    backgroundColor: '#1f1f1f',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
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
  noResults: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});
