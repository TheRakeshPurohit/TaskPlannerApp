import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import TaskTopBar from './TaskTopBar';
import { Picker } from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

function AddTask({ navigation }) {
  //const [Clicked, setClicked] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.AddTask}>
        <TaskTopBar navigation={navigation} />
        <View style={styles.TaskBottom}>
          <View style={styles.timeflex}>
            <View style={styles.starttime}>
              <Text style={styles.label}>Start time</Text>
              <View style={{ flexDirection: 'row' }}>
                {/* <DateTimePicker
                  mode="time"
                  is24Hour={false}
                  display="clock"
                  value={15072020}
                /> */}
                <TextInput style={styles.inputbox} />
                <Picker mode="dropdown" style={{ width: '61%' }}>
                  <Picker.Item label="AM" value="AM" />
                  <Picker.Item label="PM" value="PM" />
                </Picker>
              </View>
            </View>
            <View style={styles.endtime}>
              <Text style={styles.label}>End time</Text>
              <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.inputbox} />
                <Picker mode="dropdown" style={{ width: '61%' }}>
                  <Picker.Item label="AM" value="AM" />
                  <Picker.Item label="PM" value="PM" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.descflex}>
            <Text style={styles.label}>Description</Text>
            <TextInput multiline={true} style={styles.description} />
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
                <TouchableOpacity
                  //onPress={()=>setClicked(true)}
                  style={styles.category4}>
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
    flex: 1.9,
    //backgroundColor: 'red',
    margin: '2%',
    marginBottom: '6.5%',
  },
  timeflex: {
    flex: 0.9,
    margin: '1%',
    marginLeft: '1%',
    //alignSelf: 'center',
    //alignContent: 'center',
    alignItems: 'center',
    padding: '1%',
    flexDirection: 'row',
    //backgroundColor: 'pink',
    justifyContent: 'space-around',
  },
  descflex: {
    flex: 1,
    //margin: '1%',
    //backgroundColor: 'blue',
  },
  categoryflex: {
    flex: 1,
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
    fontSize: 15,
    width: '45%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    //backgroundColor: 'pink',
  },
  starttime: {
    flex: 1,
    paddingLeft: '5%',
    margin: '1%',
    //backgroundColor: 'blue',
  },
  endtime: {
    flex: 1,
    paddingLeft: '5%',
    margin: '1%',
    //backgroundColor: 'orange',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    marginLeft: '2%',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    marginHorizontal: '3%',
    height: '72%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  createtasktxt: {
    paddingVertical: '2%',
    paddingHorizontal: '34%',
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
    marginVertical: '8%',
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
    paddingVertical: '1.5%',
  },
  category1: {
    flex: 1,
    backgroundColor: 'rgba(209,209,209, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: '1%',
    paddingVertical: '1.5%',
  },
  category2: {
    flex: 1,
    backgroundColor: 'rgba(209,209,209, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: '1%',
    paddingVertical: '1.5%',
  },
  category3: {
    flex: 1,
    backgroundColor: 'rgba(209,209,209, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: '1%',
    paddingVertical: '1.5%',
  },
  category4: {
    flex: 1,
    backgroundColor: 'rgba(209,209,209, 0.7)',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: '1%',
    paddingVertical: '1.5%',
  },
});

export default AddTask;
