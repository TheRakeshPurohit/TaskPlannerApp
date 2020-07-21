import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Text,
  Keyboard,
  Platform,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

function TaskTopBar({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (_event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

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
            <TouchableWithoutFeedback
              style={{ backgroundColor: 'red' }}
              onPress={Keyboard.dismiss()}>
              <TextInput
                onPress={showDatepicker}
                onKeyPress={showDatepicker}
                onFocus={showDatepicker}
                style={styles.inputbox}
                value={date.toLocaleDateString()}
              />
            </TouchableWithoutFeedback>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                minimumDate={date}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
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
    flex: 1.2,
    backgroundColor: '#F4AC65',
    borderBottomStartRadius: 55,
    borderBottomEndRadius: 55,
  },
  second: {
    flex: 1,
    //backgroundColor: 'rgb(12,12,12)',
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
    //marginTop: '4%',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
    marginBottom: '5%',
    //backgroundColor: 'green',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    //marginVertical: '1%',
    //backgroundColor: 'blue',
  },
  inputbox: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    borderBottomColor: 'black',
    //height: '40%',
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
