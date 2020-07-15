import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function ProjectTopBar({ navigation }) {
  return (
    <View style={styles.ProjectTopBar}>
      <View style={styles.backbar}>
        <View>
          <Icon
            onPress={() => navigation.navigate('Home')}
            name="chevron-back"
            style={styles.backbutton}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.first}>
          <Text style={styles.today}>Today</Text>
          <Text style={styles.greet}>Productive Day, Rakesh</Text>
        </View>
        <View style={styles.second}>
          <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
            <View style={styles.addtaskwrapper}>
              <Text style={styles.addtask}>Add Task</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.calender}>
        <View>
          <Text style={styles.monthTitle}>July, 2020</Text>
        </View>
        <View style={styles.days}>
          <View style={styles.dayinfowrapper}>
            <Text style={styles.sunday}>SUN</Text>
            <Text style={styles.sundate}>5</Text>
          </View>
          <View style={styles.dayinfowrapper}>
            <Text style={styles.day}>MON</Text>
            <Text style={styles.date}>6</Text>
          </View>
          <View style={styles.dayinfowrapper}>
            <Text style={styles.day}>TUE</Text>
            <Text style={styles.date}>7</Text>
          </View>
          <View style={styles.dayinfowrapper}>
            <Text style={styles.day}>WED</Text>
            <Text style={styles.date}>8</Text>
          </View>
          <View style={styles.dayinfowrapper}>
            <Text style={styles.day}>THU</Text>
            <Text style={styles.date}>9</Text>
          </View>
          <View style={styles.dayinfowrapper}>
            <Text style={styles.day}>FRI</Text>
            <Text style={styles.date}>10</Text>
          </View>
          <View style={styles.dayinfowrapper}>
            <Text style={styles.day}>SAT</Text>
            <Text style={styles.date}>11</Text>
          </View>
        </View>
        {/*//Time */}
        <ScrollView>
          <View style={styles.timewrapper}>
            <View style={styles.time}>
              <Text>9 AM</Text>
            </View>
            <View style={styles.time}>
              <Text>10 AM</Text>
            </View>
            <View style={styles.time}>
              <Text>11 AM</Text>
            </View>
            <View style={styles.time}>
              <Text>12 AM</Text>
            </View>
            <View style={styles.time}>
              <Text>1 PM</Text>
            </View>
            <View style={styles.time}>
              <Text>2 PM</Text>
            </View>
            <View style={styles.time}>
              <Text>3 PM</Text>
            </View>
            <View style={styles.time}>
              <Text>4 PM</Text>
            </View>
            <View style={styles.time}>
              <Text>5 PM</Text>
            </View>
            <View style={styles.time}>
              <Text>6 PM</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ProjectTopBar: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'pink',
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
  content: {
    flexDirection: 'row',
    marginHorizontal: '3%',
    marginVertical: '6%',
    //backgroundColor: 'red',
  },
  first: {
    flex: 3,
  },
  second: {
    flex: 2,
    marginHorizontal: '3%',
    marginVertical: '3%',
    //backgroundColor: 'blue',
  },
  today: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
  },
  greet: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  addtaskwrapper: {
    margin: '3%',
    borderRadius: 25,
    backgroundColor: '#244749',
  },
  addtask: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    marginVertical: '5%',
    textAlign: 'center',
    //marginHorizontal: '21%',
    color: 'white',
  },
  calender: {
    flexDirection: 'column',
    //backgroundColor: 'red',
    marginHorizontal: '3%',
  },
  days: {
    flexDirection: 'row',
  },
  dayinfowrapper: {
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
  },
  timewrapper: {
    flexDirection: 'column',
  },
  time: {
    //justifyContent: 'space-around',
    //flex: 1,
    //backgroundColor: 'red',
    marginVertical: '2%',
    padding: '2%',
    //alignItems: 'center',
  },
  monthTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 21,
  },
  day: {
    fontFamily: 'Poppins-Regular',
  },
  date: {
    fontFamily: 'Poppins-Bold',
  },
  sunday: {
    fontFamily: 'Poppins-Regular',
    color: 'red',
  },
  sundate: {
    fontFamily: 'Poppins-Bold',
    color: 'red',
  },
});

export default ProjectTopBar;
