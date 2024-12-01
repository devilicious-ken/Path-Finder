import Applied from '@/components/Applied';
import Closed from '@/components/Closed';
import Discarded from '@/components/Discarded';
import Discover from '@/components/Discover';
import NotificationDropdown from '@/components/NotificationDropdown';
import Saved from '@/components/Saved';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  const { user } = useUser();
  const [notifications, setNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const tabs = ['Discover', 'Saved', 'Applied', 'Closed', 'Discarded'];
  const [activeTab, setActiveTab] = useState('Discover');


  const renderContent = () => {
    switch (activeTab) {
      case 'Discover':
        return <Discover searchQuery={searchQuery} />;
      case 'Saved':
        return <Saved />;
      case 'Applied':
        return <Applied />;
      case 'Closed':
        return <Closed />;
      case 'Discarded':
        return <Discarded />;
      default:
        return null;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <View style={styles.header}>
            <View>
              <Text className="font-JakartaSemiBold text-white mb-5">
                Hello, {user?.firstName || 'there'} 👋
              </Text>
              <Text style={styles.subtitle}>{activeTab} Jobs</Text>
            </View>
            <View style={styles.icons}>
              <TouchableOpacity 
              style={styles.icon} 
              onPress={() => setNotifications((prev) => !prev)}>
                <Ionicons 
                name={notifications ? "notifications" : "notifications-outline"} 
                size={24} 
                color={notifications ? 'orange' : 'white'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/profile')} style={styles.avatar}>
                <Image
                  style={styles.avatar}
                  source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=pixel' }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

          {notifications && <NotificationDropdown visible={notifications} />}

          <View style={styles.tabsContainer}>
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <Ionicons style={styles.searchicon} name="search" size={20} color="#B0B0B0" />
            <TextInput
              placeholder="Search for company or roles..."
              placeholderTextColor="#B0B0B0"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity style={styles.searchicon}>
              <Ionicons name="filter" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>{renderContent()}</View>
        </SignedIn>

        <SignedOut>
          <View style={styles.signedOutContainer}>
            <Link href="/sign-in">
              <Text style={styles.link}>Sign In</Text>
            </Link>
            <Link href="/sign-up">
              <Text style={styles.link}>Sign Up</Text>
            </Link>
          </View>
        </SignedOut>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    paddingHorizontal: 0,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20
  },
  greeting: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 20
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    bottom: 10
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    left: 10
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2b2b2b',
    borderRadius: 25,
    padding: 5,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 25,
  },
  activeTab: {
    backgroundColor: '#5424FD',
  },
  tabText: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#1f1f1f',
    borderRadius: 15,
    flex: 1,
  },
  contentText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  listItem: {
    color: 'white',
    fontSize: 14,
    marginVertical: 5,
  },
  signedOutContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  link: {
    fontSize: 18,
    color: '#0863ff',
    marginVertical: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2b2b',
    padding: 2,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 2,
    marginRight: 10,
  },
  searchicon: {
    marginLeft: 10,
    marginRight: 10,
  }
  
});
