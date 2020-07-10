import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Profile from './Profile';
import Task from './Task';
import Projects from './Projects';

function HomePage() {
  return (
    <SafeAreaView>
      <View style={styles.home}>
        <Profile />
        <Task />
        <Projects />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    //flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

export default HomePage;
