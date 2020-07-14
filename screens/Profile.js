import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TopBar from './TopBar';

function Profile({ navigation }) {
  return (
    <View style={styles.profile}>
      <TopBar navigation={navigation} />
      <View style={styles.wrap}>
        <View style={styles.avtrbox}>
          <Image
            source={require('../assets/images/myAvatar.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.descbox}>
          <Text style={styles.txt}>Rakesh Purohit</Text>
          <Text style={styles.subtxt}>Project Manager</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flex: 0.8,
    backgroundColor: '#F4AC65',
    borderBottomStartRadius: 55,
    borderBottomEndRadius: 55,
  },
  wrap: {
    //backgroundColor: 'red',
    marginBottom: '9%',
    marginHorizontal: '6%',
    flexDirection: 'row',
  },
  avtrbox: {
    margin: '3%',
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
