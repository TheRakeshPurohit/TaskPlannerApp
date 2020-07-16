import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
} from 'react-native';
import TaskTopBar from './TaskTopBar';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

function AddTask({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.AddTask}>
        <TaskTopBar navigation={navigation} />
        <View style={styles.TaskBottom}>
          <View style={styles.timeflex}>
            <View style={styles.starttime}>
              <Text>Start time</Text>
              <View style={{ flexDirection: 'row' }}>
                {/* <DateTimePicker
                  mode="time"
                  is24Hour={false}
                  display="clock"
                  value={15072020}
                /> */}
                <TextInput style={styles.inputbox} />
                <Picker mode="dropdown" style={{ width: '50%' }}>
                  <Picker.Item label="AM" value="AM" />
                  <Picker.Item label="PM" value="PM" />
                </Picker>
              </View>
            </View>
            <View style={styles.endtime}>
              <Text>End time</Text>
              <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.inputbox} />
                <Picker mode="dropdown" style={{ width: '50%' }}>
                  <Picker.Item label="AM" value="AM" />
                  <Picker.Item label="PM" value="PM" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.descflex}>
            <Text>Description</Text>
            <TextInput multiline={true} />
          </View>
          <View style={styles.categoryflex}>
            <Text>Hi</Text>
          </View>
          <View style={styles.buttonflex}>
            <Text>Hi</Text>
          </View>
        </View>
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
  TaskBottom: {
    flex: 1.9,
    backgroundColor: 'red',
    margin: '1%',
    marginBottom: '6%',
  },
  timeflex: {
    flex: 1,
    margin: '1%',
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'space-around',
  },
  descflex: {
    flex: 1,
    margin: '1%',
    backgroundColor: 'blue',
  },
  categoryflex: {
    flex: 1,
    margin: '1%',
    backgroundColor: 'green',
  },
  buttonflex: {
    flex: 1,
    margin: '1%',
    backgroundColor: 'orange',
  },
  inputbox: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    width: '60%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    //backgroundColor: 'pink',
  },
  starttime: {
    flex: 1,
    margin: '1%',
  },
  endtime: {
    flex: 1,
    margin: '1%',
  },
});

export default AddTask;
