import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';

function TaskTopBar({ navigation }) {
  return (
    <View>
      <View style={styles.TaskTopBar}>
        <View style={styles.backbar}>
          <View>
            <Icon
              onPress={() => navigation.navigate('ProjectPage')}
              name="chevron-back"
              style={styles.backbutton}
            />
          </View>
        </View>
        <View style={styles.uprcontentwrapper}>
          <Text style={styles.title}>Create New Task</Text>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.inputbox} />
          <Text style={styles.label}>Date</Text>
          <TextInput style={styles.inputbox} />
        </View>
      </View>
      <View style={styles.second}>
        <Text> hi</Text>
      </View>
      <View style={styles.third}>
        <Text>hi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TaskTopBar: {
    flex: 1,
    backgroundColor: '#F4AC65',
    borderBottomStartRadius: 55,
    borderBottomEndRadius: 55,
  },
  second: {
    flex: 1,
  },
  third: {
    flex: 1,
  },
  backbutton: {
    //backgroundColor: 'blue',
    fontSize: 30,
    width: '10%',
  },
  backbar: {
    //backgroundColor: 'red',
    margin: '1%',
  },
  uprcontentwrapper: {
    marginHorizontal: '10%',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 21,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  inputbox: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default TaskTopBar;
