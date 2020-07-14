import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
function TopBar({ navigation }) {
  return (
    <View style={styles.TopBar}>
      <Icon name="menu" style={styles.menu} />
      <TouchableOpacity
        style={styles.btnsearch}
        onPress={() => navigation.navigate('ProjectPage')}>
        <Image
          style={styles.btnimg}
          source={require('../assets/images/search.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    fontSize: 30,
    //backgroundColor: 'blue',
    marginTop: '1%',
  },
  btnimg: {
    width: '60%',
    height: '100%',
    resizeMode: 'contain',
  },
  btnsearch: {
    width: '9%',
    height: '100%',
    //backgroundColor: 'blue',
    resizeMode: 'contain',
    borderRadius: 100,
  },
  TopBar: {
    width: '100%',
    height: '15%',
    alignContent: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '5%',
    //backgroundColor: 'red',
    //flex: 1,
  },
});

export default TopBar;
