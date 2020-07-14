import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CircularProgressBar from './CircularProgressBar';

function Projects() {
  return (
    <View style={styles.projects}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Active Projects</Text>
      </View>
      <View style={styles.bottom}>
        <ScrollView>
          <View style={styles.row}>
            <View style={styles.card}>
              <CircularProgressBar style={styles.bar} percent={20} />
              <Text style={styles.projecttitle}>Medical App</Text>
              <Text style={styles.projecthour}>9 Hours Progress</Text>
            </View>
            <View style={styles.card}>
              <CircularProgressBar style={styles.bar} percent={45} />
              <Text style={styles.projecttitle}>Sports App</Text>
              <Text style={styles.projecthour}>40 Hours Progress</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.card}>
              <CircularProgressBar style={styles.bar} percent={70} />
              <Text style={styles.projecttitle}>Rent App</Text>
              <Text style={styles.projecthour}>18 Hours Progress</Text>
            </View>
            <View style={styles.card}>
              <CircularProgressBar style={styles.bar} percent={10} />
              <Text style={styles.projecttitle}>Banking App</Text>
              <Text style={styles.projecthour}>21 Hours Progress</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.card}>
              <CircularProgressBar style={styles.bar} percent={30} />
              <Text style={styles.projecttitle}>Gaming Platform App</Text>
              <Text style={styles.projecthour}>1 Hour Progress</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  projects: {
    flex: 1,
    marginTop: '1%',
    marginHorizontal: '3%',
  },
  header: {
    flex: 0.6,
  },
  headertxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 21,
  },
  bottom: {
    flex: 4,
    justifyContent: 'space-around',
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#3C58B9',
    //flex: 1,
    //alignContent: 'center',
    alignItems: 'center',
    //justifyContent: 'center',
    borderRadius: 20,
    padding: '2%',
    margin: 1,
    //height: '10%',
    //width: '10%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  projecttitle: {
    fontFamily: 'Poppins-Bold',
  },
  projecthour: {
    fontFamily: 'Poppins-Regular',
  },
  progressbar: {
    backgroundColor: 'blue',
    height: '50%',
    width: '50%',
    borderRadius: 100,
  },
  bar: {
    alignSelf: 'center',
  },
});

export default Projects;
