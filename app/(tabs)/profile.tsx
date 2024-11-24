import * as React from 'react';
import { Avatar } from 'react-native-paper';

import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  // const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View style={styles.center}>
      <Avatar.Image size={84} source={require('../../assets/images/perfil.jpg')} />
      <Text>Usuario</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  //alinha ao centro
  center : {
    justifyContent: 'center'
  }
});