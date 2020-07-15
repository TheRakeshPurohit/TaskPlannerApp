import React from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import Profile from './Profile';
import Task from './Task';
import Projects from './Projects';

function HomePage({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.home}>
        <Profile navigation={navigation} />
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
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default HomePage;
