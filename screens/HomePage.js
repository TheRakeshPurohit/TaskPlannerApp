import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Profile from './Profile';

function HomePage() {
  return (
    <SafeAreaView>
      <View>
        <Profile />
      </View>
    </SafeAreaView>
  );
}

export default HomePage;
