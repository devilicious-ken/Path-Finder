import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SignedOut } from '@clerk/clerk-expo'
import { Link } from 'expo-router'

type Props = {}

const Saved = (props: Props) => {
  return (
    <View className='bg-white'>
      <Text>Hello</Text>
      <SignedOut>
        <View>
          <Link href="/sign-in">
            <Text>SignIn</Text>
          </Link>
          <Link href="/sign-up">
            <Text>Sign Up</Text>
          </Link>
        </View>
      </SignedOut>
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({})