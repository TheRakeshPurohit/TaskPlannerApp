import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

function TaskTopBar({ navigation }) {
  return (
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
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.inputbox} />
        </View>
        <View style={styles.row}>
          <View style={styles.inputwrapper}>
            <Text style={styles.label}>Date</Text>
            <TextInput style={styles.inputbox} />
          </View>
          <View style={styles.iconwrapper}>
            <IconFeather name="calendar" style={styles.calendaricon} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TaskTopBar: {
    flex: 1.5,
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
    margin: '5%',
  },
  uprcontentwrapper: {
    marginHorizontal: '7%',
    flexDirection: 'column',
    //backgroundColor: 'red',
    marginTop: '5%',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
    marginBottom: '5%',
    //backgroundColor: 'green',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    //backgroundColor: 'blue',
  },
  inputbox: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    //backgroundColor: 'pink',
  },
  row: {
    flexDirection: 'row',
  },
  inputwrapper: {
    flex: 4,
  },
  iconwrapper: {
    flex: 1,
    padding: '2%',
    //backgroundColor: 'red',
  },
  calendaricon: {
    padding: '30%',
    borderRadius: 100,
    margin: '1%',
    backgroundColor: '#244749',
    color: 'white',
    alignSelf: 'center',
    fontSize: 21,
  },
  TaskBottom: {
    flex: 2,
  },
  flex: {
    flex: 1,
  },
});

export default TaskTopBar;
