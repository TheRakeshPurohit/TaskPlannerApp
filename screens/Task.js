import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Task() {
  return (
    <View style={styles.task}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.txt}>My Tasks</Text>
        </View>
        <View style={styles.imgView}>
          <Icon name="calender" style={styles.icn} />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.row}>
          <View style={styles.icon}>
            <Text>Image</Text>
          </View>
          <View style={styles.tag}>
            <Text>To Do</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.icon}>
            <Text>Image</Text>
          </View>
          <View style={styles.tag}>
            <Text>To Do</Text>
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
    margin: '3%',
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    //backgroundColor: 'red',
  },
  title: {
    flex: 3,
    //backgroundColor: 'green',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  imgView: {
    flex: 1,
    backgroundColor: '#244749',
  },
  bottom: {
    backgroundColor: 'green',
    flex: 3,
    flexDirection: 'column',
    padding: '2%',
    justifyContent: 'space-around',
  },
  icn: {
    fontSize: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  tag: {
    flex: 3,
  },
  icon: {
    flex: 1,
  },
});

export default Task;
