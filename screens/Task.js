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
    margin: '6%',
  },
  header: {
    flexDirection: 'row',
    flex: 5,
    //backgroundColor: 'red',
  },
  title: {
    flex: 5,
    //backgroundColor: 'green',
  },
  image: {
    height: '100%',
    width: '100%',
    //resizeMode: 'cover',
  },
  imgView: {
    flex: 0.9,
    backgroundColor: '#244749',
    borderRadius: 100,
  },
  bottom: {
    backgroundColor: 'green',
    flex: 2,
    flexDirection: 'column',
    padding: '2%',
    justifyContent: 'space-around',
  },
  icn: {
    fontSize: 30,
    alignSelf: 'center',
    margin: '15%',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txt: {
    fontFamily: 'Poppins',
    fontSize: 27,
    fontWeight: '300',
  },
  tag: {
    flex: 3,
  },
  icon: {
    flex: 1,
  },
});

export default Task;
