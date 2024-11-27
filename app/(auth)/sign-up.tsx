import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { ReactNativeModal } from "react-native-modal";

import { Ionicons } from '@expo/vector-icons'; // Use appropriate icon library
import { useSignUp } from '@clerk/clerk-expo';
import { icons, images } from '@/constants';
import CustomButton from '@/components/CustomButton';

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [ showSuccessModal, setShowSuccessModal] = useState(false)

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [verification, setVerification] =useState({
    state: 'default',
    error: '',
    code: ''
  })

  const handleRegister = () => {
    if (!fullName.trim()) {
      Alert.alert('Error', 'Full Name is required');
      return;
    }
    if (!email.trim()) {
      Alert.alert('Error', 'Email is required');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Error', 'Password is required');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
  
    // Proceed to onSignUpPress if no errors
    onSignUpPress();
  };
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
        firstName: fullName
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setVerification({
        ...verification,
        state: 'pending',
      })
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
      Alert.alert("Error", err.errors[0].longMessage)
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) return


    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      })

      if (completeSignUp.status === 'complete') {
        //TODO: Create a database user!

        await setActive({ session: completeSignUp.createdSessionId })

        setVerification({
          ...verification, state:'success'
        })
      } else {
        setVerification({
          ...verification, 
          error: 'Verification Failed' ,
          state:'failed'
        })
      }
    } catch (err: any) {
      setVerification({
        ...verification, 
        error: err.errors[0].longMessage,
        state:'failed'
      })
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
          <View style={styles.header}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
            />
            <Text style={styles.title}>Register</Text>
          </View>
          <View style={styles.searchBar}>
            <Ionicons name="person-outline" size={24} color="grey" style={styles.icon} />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="grey"
              style={styles.inputTxt}
              value={fullName}
              onChangeText={setFullName}
            />
          </View>
          <View style={styles.searchBar}>
            <Ionicons name="mail-outline" size={24} color="grey" style={styles.icon} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="grey"
              style={styles.inputTxt}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.searchBar}>
            <Ionicons name="lock-closed-outline" size={24} color="grey" style={styles.icon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="grey"
              style={styles.inputTxt}
              value={password}
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.searchBar}>
            <Ionicons name="lock-closed-outline" size={24} color="grey" style={styles.icon} />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              style={styles.inputTxt}
              value={confirmPassword}
              secureTextEntry
              onChangeText={setConfirmPassword}
            />
          </View>
          <TouchableOpacity onPress={()=>router.replace('/(auth)/sign-in')}>
            <Text style={styles.alreadyHaveTxt}>Already have an Account?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister} style={styles.registerBtn}>
            <Text style={styles.registerTxt}>Register</Text>
          </TouchableOpacity>
          
          

          <ReactNativeModal 
          isVisible={verification.state === 'pending'}
          onModalHide={()=> {
            if( verification.state === 'success') setShowSuccessModal(true)
          }
          }
          >
             <View className="bg-[#1f1f1f] px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="font-JakartaExtraBold text-white text-2xl mb-2">
              Verification
            </Text>
            <Text className="font-Jakarta text-white mb-5">
              We've sent a verification code to {email}.
            </Text>
            <Text className='mb-2 font-JakartaBold text-2xl text-white'> Code </Text>
            <View style={styles.modalInputBar}>
            <Ionicons name="lock-closed-outline" size={24} color="white" style={styles.icon} />
            <TextInput
              placeholder="12345"
              placeholderTextColor="gray"
              style={styles.modalInputTxt}
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification({ ...verification, code })
              }
            />
          </View>

            {verification.error && (
              <Text className="text-red-500 text-sm mt-1">
                {verification.error}
              </Text>
            )}
            <CustomButton
              title="Verify Email"
              onPress={onPressVerify}
              className="mt-5 bg-success-500"
            />
          </View>

          </ReactNativeModal>
          
          <ReactNativeModal isVisible={showSuccessModal}>
            <View className="bg-[#1f1f1f] px-7 py-9 rounded-2xl min-h-[300px]">
              <Image source={images.check} className="w-[110px] h-[110px] mx-auto my-5"/>
            
            <Text className='text-3xl text-white font-JakartaBold text-center'>
              Verified
            </Text>
            
            <Text className='text-base text-white font-Jakarta text-center mt-2'>
              You have successfully verified your account.
            </Text>
            
            <CustomButton 
            title='Browse Home'
            onPress={()=>router.push('/(root)/(tabs)/home')}
            className='mt-5'
            />
            </View>
          </ReactNativeModal>
  
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    gap: 15,
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 309,
    height: 92,
    marginBottom: 120,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#2b2b2b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 5,
    height: 60,
    marginHorizontal: 25,
  },
  icon: {
    marginRight: 10,
  },
  inputTxt: {
    fontSize: 20,
    color: '#fff',
    flex: 1,
  },
  alreadyHaveTxt: {
    color: '#0863ff',
    fontSize: 18,
  },
  registerBtn: {
    width: 153,
    backgroundColor: '#5424FD',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  registerTxt: {
    color: '#fff',
    fontSize: 15,
  },
  modalInputBar: {
    backgroundColor: '#565757',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
    height: 47,
    marginHorizontal: 1,
  },
  modalInputTxt: {
    fontSize: 20,
    color: '#fff',
    flex: 1,
  }
})
