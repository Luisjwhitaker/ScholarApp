import React from 'react';
import { StyleSheet} from 'react-native';

if (state.isLoading) {
  // We haven't finished checking for the token yet
  return <SplashScreen />;
}

return (
  <Stack.Navigator>
    {state.userToken == null ? (
      // No token found, user isn't signed in
      <Stack.Screen name="LoginScreen"
      component={LoginScreen}
      options={{
        header: () => null
        animationTypeForReplace: state.isSignout ? 'pop' : 'push',
    }}
  />
    ) : (
      // User is signed in
      <Stack.Screen name="LobbyScreen" component={LobbyScreen} />
    )}
  </Stack.Navigator>
);
