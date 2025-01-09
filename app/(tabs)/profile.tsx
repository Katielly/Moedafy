import * as React from 'react';
import { Avatar } from 'react-native-paper';

import { Historical, InfosTransf } from '@/components/Historical';

import { StyleSheet, Text, View } from 'react-native';
import { colorsTheme } from '@/constants/Colors';

type Props = {
  name: string,
  company: string,
  mount: number
}

export default function Profile({name, company, mount} : Props) {
  // const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Avatar.Image size={84} source={require('../../assets/images/perfil.jpg')} />
        <Text style={styles.name}>Usuario Admin</Text>
        <Text style={styles.company}>Company</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 16,
    alignContent: 'center',
    backgroundColor: colorsTheme.ternary
  },
  user : {
    alignItems: 'center',
    width: '100%',
    gap: 6,
  },
  company: {
    fontSize: 16
  },
  name: {
    fontSize: 16,
    fontWeight: '700'
  }
});