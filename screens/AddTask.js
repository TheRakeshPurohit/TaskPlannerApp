import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import TaskTopBar from './TaskTopBar';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

function AddTask({ navigation }) {
  const [date, setDate] = useState(new Date(15022020));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const [date2, setDate2] = useState(new Date(15022020));
  const [mode2, setMode2] = useState('date');
  const [show2, setShow2] = useState(false);

  const onChange2 = (event, selectedDate2) => {
    const currentDate2 = selectedDate2 || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate2);
  };

  const showMode2 = (currentMode) => {
    setShow2(true);
    setMode2(currentMode);
  };

  const showTimepicker2 = () => {
    showMode2('time');
  };

  return (
    <SafeAreaView>
      <View style={styles.AddTask}>
        <TaskTopBar navigation={navigation} />
        <View style={styles.TaskBottom}>
          <View style={styles.timeflex}>
            <View style={styles.starttime}>
              <Text style={styles.timelabel}>Start time</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableWithoutFeedback
                  style={{ backgroundColor: 'red' }}
                  onPress={Keyboard.dismiss()}>
                  <TextInput
                    onFocus={showTimepicker}
                    value={`${date.getHours()} : ${date.getMinutes()}`}
                    style={styles.inputbox}
                  />
                </TouchableWithoutFeedback>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
                <Picker mode="dropdown" style={{ width: '58%' }}>
                  <Picker.Item label="AM" value="AM" />
                  <Picker.Item label="PM" value="PM" />
                </Picker>
              </View>
            </View>
            <View style={styles.endtime}>
              <Text style={styles.timelabel}>End time</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableWithoutFeedback
                  style={{ backgroundColor: 'red' }}
                  onPress={Keyboard.dismiss()}>
                  <TextInput
                    onFocus={showTimepicker2}
                    value={`${date2.getHours()} : ${date2.getMinutes()}`}
                    style={styles.inputbox}
                  />
                </TouchableWithoutFeedback>
                {show2 && (
                  <DateTimePicker
                    testID="dateTimePicker2"
                    value={date2}
                    mode={mode2}
                    is24Hour={true}
                    display="default"
                    onChange={onChange2}
                  />
                )}
                <Picker mode="dropdown" style={{ width: '58%' }}>
                  <Picker.Item label="AM" value="AM" />
                  <Picker.Item label="PM" value="PM" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.descflex}>
            <KeyboardAvoidingView behavior="position">
              <Text style={styles.label}>Description</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                textBreakStrategy="balanced"
                style={styles.description}
              />
            </KeyboardAvoidingView>
          </View>
          <View style={styles.categoryflex}>
            <View>
              <Text style={styles.label}>Category</Text>
            </View>
            <View style={styles.categories}>
              <View style={styles.category}>
                <TouchableOpacity>
                  <Text style={styles.categorytxt1}>SPORT APP</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.category1}>
                <TouchableOpacity>
                  <Text style={styles.categorytxt}>MEDICAL APP</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.category2}>
                <TouchableOpacity>
                  <Text style={styles.categorytxt}>RENT APP</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categories}>
              <View style={styles.category3}>
                <TouchableOpacity>
                  <Text style={styles.categorytxt}>BANKING APP</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.category4}>
                <TouchableOpacity>
                  <Text style={styles.categorytxt}>GAMING PLATFORM APP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.buttonflex}>
            <View style={styles.buttonwrapper}>
              <TouchableOpacity>
                <Text style={styles.createtasktxt}>Create Task</Text>
              </TouchableOpacity>
            </View>
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
    flex: 1.4,
    //backgroundColor: 'red',
    margin: '2%',
    marginBottom: '6.5%',
  },
  timeflex: {
    flex: 1,
    margin: '1%',
    //marginLeft: '1%',
    //alignSelf: 'center',
    //alignContent: 'center',
    alignItems: 'center',
    //padding: '1%',
    flexDirection: 'row',
    //backgroundColor: 'pink',
    justifyContent: 'space-around',
  },
  descflex: {
    flex: 1.2,
    //margin: '1%',
    //backgroundColor: 'blue',
  },
  categoryflex: {
    flex: 1.2,
    margin: '1%',
    flexDirection: 'column',
    //backgroundColor: 'green',
  },
  buttonflex: {
    flex: 1,
    margin: '1%',
    //backgroundColor: 'orange',
  },
  inputbox: {
    fontFamily: 'Poppins-Regular',
    fontSize: 21,
    width: '56%',
    //borderBottomColor: 'black',
    //borderBottomWidth: 1,
    //backgroundColor: 'pink',
  },
  starttime: {
    //flex: 0.5,
    width: '45%',
    paddingLeft: '2%',
    margin: '1%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    //backgroundColor: 'blue',
  },
  endtime: {
    //flex: 0.5,
    width: '45%',
    paddingLeft: '2%',
    margin: '1%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    //width: '90%',
    //backgroundColor: 'orange',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    marginLeft: '1%',
  },
  timelabel: {
    fontFamily: 'Poppins-Regular',
    //marginRight: '1%',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginHorizontal: '3%',
    height: '78%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    //backgroundColor: 'red',
  },
  createtasktxt: {
    paddingVertical: '2%',
    paddingHorizontal: '33%',
    color: 'white',
    backgroundColor: '#3C58B9',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 100,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  buttonwrapper: {
    //marginHorizontal: '1%',
    marginVertical: '5%',
    //backgroundColor: 'red',
  },
  categories: {
    flex: 1,
    flexDirection: 'row',
    margin: '1%',
    //backgroundColor: 'blue',
    justifyContent: 'space-around',
  },
  categorytxt: {
    color: 'black',
    //backgroundColor: 'red',
    //paddingBottom: '3%',
    //marginBottom: '1%',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  categorytxt1: {
    color: 'white',
    //backgroundColor: 'red',
    //paddingBottom: '3%',
    //marginBottom: '1%',
    fontSize: 12,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  category: {
    flex: 1,
    backgroundColor: 'rgba(198,60,52, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: '1%',
    paddingVertical: '3%',
  },
  category1: {
    flex: 1,
    backgroundColor: 'rgba(209,209,209, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: '1%',
    paddingVertical: '2%',
  },
  category2: {
    flex: 1,
    backgroundColor: 'rgba(209,209,209, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: '1%',
    paddingVertical: '2%',
  },
  category3: {
    flex: 1,
    backgroundColor: 'rgba(209,209,209, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: '1%',
    paddingVertical: '2%',
  },
  category4: {
    flex: 1.3,
    backgroundColor: 'rgba(209,209,209, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: '0.5%',
    paddingVertical: '2%',
  },
});

export default AddTask;
