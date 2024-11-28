import React, { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSignIn } from '@clerk/clerk-expo';

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = useCallback(async () => {
    if (!isLoaded) {
      return;
    }
  
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });
  
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/');
      } else {
        Alert.alert('Error', 'Unable to complete sign-in. Please try again.');
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      const errorMessage =
        err.errors?.[0]?.longMessage || 'An unexpected error occurred.';
      Alert.alert('Login Failed', errorMessage);
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, email, password]);
  


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
          />
          <Text style={styles.title}>Login</Text>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="grey" style={styles.icon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="grey"
            style={styles.inputTxt}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="grey" style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            style={styles.inputTxt}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity onPress={() => router.replace('/(auth)/sign-up')}>
          <Text style={styles.createAccountTxt}>Create new account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 90,
    marginBottom: 140,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#fff',
  },
  inputContainer: {
    backgroundColor: '#2b2b2b',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 60,
    marginVertical: 0,
    width: '100%',
  },
  inputTxt: {
    fontSize: 18,
    color: '#fff',
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  createAccountTxt: {
    color: '#0863ff',
    fontSize: 16,
    marginTop: 10,
  },
  loginBtn: {
    backgroundColor: '#5424FD',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  loginTxt: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SignIn;
