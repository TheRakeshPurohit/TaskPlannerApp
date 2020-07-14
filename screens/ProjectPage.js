import React from 'react';
import { StyleSheet, View, Dimensions, SafeAreaView } from 'react-native';
import ProjectTopBar from './ProjectTopBar';

function ProjectPage({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.ProjectPage}>
        <ProjectTopBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ProjectPage: {
    //flex: 1,
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
});

export default ProjectPage;
