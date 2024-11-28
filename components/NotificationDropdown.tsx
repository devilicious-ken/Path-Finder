import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

type NotificationDropdownProps = {
  visible: boolean;
};

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ visible }) => {
  const dropdownAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(dropdownAnim, {
      toValue: visible ? 1 : 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false, // Allows animations for non-transform properties
    }).start();
  }, [visible]);

  const dropdownHeight = dropdownAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 500], // Adjust height to fit content
  });

  const dropdownOpacity = dropdownAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Animated.View
      style={[
        styles.dropdown,
        { height: dropdownHeight, opacity: dropdownOpacity },
      ]}
    >
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.divider} />
      <Text style={styles.item}>🎉 You have a new message!</Text>
      <Text style={styles.item}>💼 Job alert: Software Engineer at Google</Text>
      <Text style={styles.item}>🚀 New feature: Apply with one click!</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    top: 70, // Adjust to match the notification icon
    right: 10, // Align with the icon
    width: 250, // Adjust width as needed
    backgroundColor: '#2b2b2b',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    zIndex: 10, // Ensure it overlays content
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#FFFFFF50',
    marginVertical: 5,
  },
  item: {
    color: '#FFFFFF',
    fontSize: 14,
    marginVertical: 5,
  },
});

export default NotificationDropdown;
