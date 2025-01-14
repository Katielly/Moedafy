import { View, Text, StyleSheet } from 'react-native';

import { InfosTransf } from '@/components/Historical';
import { Historical } from '@/components/Historical';

export default function TabTwoScreen() {
  const historicalAdmin : InfosTransf[] = [
    { date: '02/04/2024', amountPay: 45, history: 'levar as mudanças', typeTransition: 'credit'},
    { date: '03/04/2024', amountPay: 75, history: 'levar as mudanças2', typeTransition: 'debit'},
    { date: '07/04/2024', amountPay: 175, history: 'levar as mudanças3', typeTransition: 'debit'}
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.historical}>Historico Favores</Text>
      <View style={styles.histories}>
        {
          historicalAdmin.map((item) => (
            <Historical
              key={item.date}
              date={item.date}
              history={item.history}
              typeTransition={item.typeTransition}
              amountPay={item.amountPay}
            />
          ))
        }
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
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