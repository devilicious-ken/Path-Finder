import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons
import { router } from 'expo-router';
import { useAuth, useUser } from '@clerk/clerk-expo';

const ProfilePage = () => {
  const { signOut } = useAuth()
  const { user } = useUser();

  const handleSignOut = () => {
    signOut()
    router.replace('/(auth)/welcome')
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
        onPress={()=>router.back()}
        style={styles.btn}>
          <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={handleSignOut}
        style={styles.btn}>
        <Text 
        style={styles.logoutText}>Logout</Text>
          <Ionicons name="log-out-outline" size={24} color="#FC5D5E" />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=pixel' }} // Replace with your image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{user?.firstName || "Username"}</Text>
        <Text style={styles.profileTitle}>Web Developer</Text>
        <Text style={styles.profileContact}>{user?.emailAddresses[0].emailAddress}</Text>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={16} color="white" />
        </TouchableOpacity>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <View style={styles.jobCard}>
          <View style={styles.titleCard}>
            <View style={styles.titleCardIn}>
              <Ionicons name='briefcase' size={16} color={'orange'}/>
              <Text style={styles.sectionTitle}>Work Experience</Text>
            </View>
            <View>
              <TouchableOpacity>
                  <Ionicons name='add' size={16} color={'orange'} style={{}}/>
              </TouchableOpacity>
            </View>
          </View>
        <Text></Text>
          <Text style={styles.jobTitle}>Senior Web Developer</Text>
          <Text style={styles.jobDate}>January 2020 - December 2022</Text>
          <Text style={styles.jobDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisl dolor. Donec
            convallis quam a dignissim pulvinar.
          </Text>
          <Text style={styles.borderW}></Text>
          <Text style={styles.jobTitle}>Junior Web Developer</Text>
          <Text style={styles.jobDate}>Januari 2018 - Desember 2019</Text>
          <Text style={styles.jobDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisl dolor. Donec
            convallis quam a dignissim pulvinar.
          </Text>
        </View>

      </View>

      {/* Education */}
      <View style={styles.section}>
        <View style={styles.jobCard}>
        <View style={styles.titleCard}>
            <View style={styles.titleCardIn}>
              <Ionicons name='school' size={16} color={'orange'}/>
              <Text style={styles.sectionTitle}>Education</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Ionicons name='add' size={16} color={'orange'} style={{}}/>
              </TouchableOpacity>
            </View>
          </View>
        <Text></Text>
          <Text style={styles.jobTitle}>Information Technology</Text>
          <Text style={styles.jobDate}>USTP</Text>
          <Text style={styles.jobDate}>Agustus 2013 - Desember 2017</Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <View style={styles.jobCard}>
        <View style={styles.titleCard}>
            <View style={styles.titleCardIn}>
              <Ionicons name='bulb' size={16} color={'orange'}/>
              <Text style={styles.sectionTitle}>Skills</Text>
            </View>
            <View>
              <TouchableOpacity>
                  <Ionicons name='add' size={16} color={'orange'} style={{}}/>
              </TouchableOpacity>
            </View>
          </View>
        <Text ></Text>
        <Text style={styles.skillItem}>• Proficiency in HTML and CSS</Text>
        <Text style={styles.skillItem}>• Competence in JavaScript or Python</Text>
        <Text style={styles.skillItem}>• Git proficiency</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark theme background
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'space-between'
  },
  btn: {
    flexDirection: 'row'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  logoutText: {
    color: '#FC5D5E',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 16,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  profileName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileTitle: {
    color: '#BBBBBB',
    fontSize: 14,
  },
  profileContact: {
    color: '#BBBBBB',
    fontSize: 12,
    marginBottom: 8,
  },
  editButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#F39C12',
    borderRadius: 16,
    padding: 8,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    bottom: 4
  },
  borderW: {
    borderTopColor: 'gray',
    borderTopWidth: 2,
    marginTop: 10
  },
  jobCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  jobTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleCard: {
    justifyContent: 'space-between',
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    flexDirection: 'row'
  },
  titleCardIn: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 9,
  },
  jobDate: {
    color: '#BBBBBB',
    fontSize: 12,
    marginBottom: 8,
  },
  jobDescription: {
    color: '#BBBBBB',
    fontSize: 14,
  },
  skillItem: {
    color: '#BBBBBB',
    fontSize: 14,
    marginBottom: 4,
  },
});

export default ProfilePage;
