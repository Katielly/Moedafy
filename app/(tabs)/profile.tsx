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

  const historicalAdmin : InfosTransf[] = [
    { date: '02/04/2024', amountPay: 45, description: 'levar as mudanças'},
    { date: '03/04/2024', amountPay: 75, description: 'levar as mudanças2'},
    { date: '07/04/2024', amountPay: 175, description: 'levar as mudanças3'}
  ]
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Avatar.Image size={84} source={require('../../assets/images/perfil.jpg')} />
        <Text style={styles.name}>Usuario Admin</Text>
        <Text style={styles.company}>Company</Text>
      </View>
      <View>
        <Text style={styles.historical}>Historico Favores</Text>
        <View style={styles.histories}>
        {
          historicalAdmin.map((item) => (
            <Historical
            date={item.date} 
            description={item.description} 
            amountPay={item.amountPay} 
            />
          ))
        }
        </View>
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
  },
  historical: {
    fontSize: 18,
    fontWeight: '800',
    paddingBottom: 16,
    paddingTop: 12
  },
  histories: {
    gap: 8
  }
});