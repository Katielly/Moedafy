import { View, Text, StyleSheet } from 'react-native';

import { InfosTransf } from '@/components/Historical';
import { Historical } from '@/components/Historical';

export default function TabTwoScreen() {
  const historicalAdmin : InfosTransf[] = [
    { date: '02/04/2024', amountPay: 45, description: 'levar as mudanças'},
    { date: '03/04/2024', amountPay: 75, description: 'levar as mudanças2'},
    { date: '07/04/2024', amountPay: 175, description: 'levar as mudanças3'}
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
              description={item.description}
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