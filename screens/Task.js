import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Task() {
  return (
    <View style={styles.task}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.txt}>My Tasks</Text>
        </View>
        <View style={styles.imgView}>
          <Icon name="calendar" style={styles.icn} />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.row}>
          <View style={styles.icon}>
            <View style={styles.newtaskView}>
              <Icon name="clock" style={styles.icnclock} />
            </View>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tasktxt}>To Do</Text>
            <Text style={styles.tasksubtxt}>5 tasks now </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.icon}>
            <View style={styles.inproView}>
              <Icon name="loader" style={styles.icnloader} />
            </View>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tasktxt}>In Progress</Text>
            <Text style={styles.tasksubtxt}>1 task now </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.icon}>
            <View style={styles.ffView}>
              <Icon name="fast-forward" style={styles.icnff} />
            </View>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tasktxt}>Done</Text>
            <Text style={styles.tasksubtxt}>18 tasks now </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'blue',
    marginTop: '3%',
    marginHorizontal: '3%',
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    //backgroundColor: 'red',
  },
  bottom: {
    //backgroundColor: 'green',
    flex: 3,
    //height: '50%',
    flexDirection: 'column',
    //marginHorizontal: '1%',
    justifyContent: 'space-around',
  },
  title: {
    flex: 5,
    //backgroundColor: 'green',
  },
  imgView: {
    flex: 1,
    backgroundColor: '#244749',
    borderRadius: 100,
  },
  ffView: {
    flex: 1,
    padding: '17%',
    marginHorizontal: '12%',
    backgroundColor: '#3C58B9',
    borderRadius: 100,
  },
  inproView: {
    flex: 1,
    padding: '17%',
    marginHorizontal: '12%',
    backgroundColor: '#F28333',
    borderRadius: 100,
  },
  newtaskView: {
    flex: 1,
    padding: '17%',
    marginHorizontal: '12%',
    backgroundColor: '#C63C34',
    borderRadius: 100,
  },
  icn: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: '22%',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    //padding: '11%',
    justifyContent: 'flex-start',
  },
  txt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 27,
    fontWeight: '300',
  },
  tag: {
    flex: 4,
  },
  icon: {
    flex: 1,
    //backgroundColor: 'blue',
    //padding: '3%',
  },
  icnff: {
    fontSize: 30,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //margin: '24%',
    //padding: '1%',
    color: 'white',
    //backgroundColor: 'red',
  },
  icnclock: {
    fontSize: 30,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //padding: '1%',
    //margin: '23%',
    color: 'white',
    //backgroundColor: 'red',
  },
  icnloader: {
    fontSize: 30,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //margin: '24%',
    color: 'white',
    //padding: '1%',
    //backgroundColor: 'red',
  },
  tasktxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: '300',
  },
  tasksubtxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
});

export default Task;
