import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopBar from './TopBar';

function Profile() {
  return (
    <View style={styles.profile}>
      <TopBar />
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    //flex: 3,
    backgroundColor: '#F4AC65',
    width: '100%',
    height: '70%',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
});

export default Profile;
