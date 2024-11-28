import { Stack } from 'expo-router';
import React from 'react';


const Layout = ()  => {

  return (

      <Stack>
        <Stack.Screen name='home' options={{ headerShown: false }} />
        <Stack.Screen name='profile' options={{ headerShown: false }} />
        <Stack.Screen name='job-details' options={{ headerShown: false }} />
        <Stack.Screen name='applying' options={{ headerShown: false }} />
      </Stack>

  );
}
 

export default Layout;