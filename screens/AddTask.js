import React from 'react';
import { StyleSheet, View, Dimensions, SafeAreaView } from 'react-native';
import TaskTopBar from './TaskTopBar';

function AddTask({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.AddTask}>
        <TaskTopBar navigation={navigation} />
        <TaskTopBar navigation={navigation} />
        <TaskTopBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AddTask: {
    //flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default AddTask;
