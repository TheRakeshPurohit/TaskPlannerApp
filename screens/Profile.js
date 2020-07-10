import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TopBar from './TopBar';

function Profile() {
  return (
    <View style={styles.profile}>
      <TopBar />
      <View style={styles.wrap}>
        <View style={styles.avtrbox}>
          <Image
            source={require('../assets/images/myAvatar.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.descbox}>
          <Text style={styles.txt}>Philip Mccoy</Text>
          <Text style={styles.subtxt}>Project Manager</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    //flex: 1,
    backgroundColor: '#F4AC65',
    width: '100%',
    height: '55%',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  wrap: {
    //backgroundColor: 'red',
    margin: '5%',
    flexDirection: 'row',
  },
  avtrbox: {
    padding: 9,
    flex: 1,
    //backgroundColor: 'blue',
  },
  descbox: {
    flex: 2,
    marginTop: '3%',
    padding: 10,
    //backgroundColor: 'white',
  },
  avatar: {
    borderRadius: 100,
    width: '100%',
    height: '80%',
    //backgroundColor: 'red',
    resizeMode: 'contain',
  },
  txt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  subtxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
  },
});

export default Profile;
