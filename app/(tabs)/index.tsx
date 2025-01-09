import { View, ScrollView, StyleSheet } from 'react-native';

import { CardCoins } from '@/components/CardCoins';

export default function HomeScreen() {

  const listFavors = [
    {title: 'Test1', description: 'Lorem wlkwefowi wfowienfwo wondwodnweiow wdownodwined', value: '15'},
    {title: 'Test2', description: 'Lorem wlkwefowi wfowienfwo wondwodnweiow wdownodwined', value: '13,23'},
    {title: 'Test3', description: 'rwew wlkwefowi wfowienfwo wondwodnweiow wdownodwined', value: '19,23'},
    {title: 'Test4', description: 'Lorem wlkwefowi wfowienfwo wondwodnweiow wdownodwined', value: '2,43'},
    {title: 'Test5', description: 'Lorem wlkwefowi wfowienfwo wondwodnweiow wdownodwined', value: '2,43'},
    {title: 'Test6', description: 'Lwew wlkwefowi wfowienfwo wondwodnweiow wdownodwined', value: '1,3'},
    {title: 'Test7', description: 'Lorem wlkwefowi wfowienfwo wondwodnweiow wdownodwined', value: '2,43'},
    {title: 'Test8', description: 'Lorem wlkwefowi wfowienfwo wondwodnweiow wdownodwined', value: '2,43'},
    {title: 'Test9', description: 'Lwew wlkwefowi wfowienfwo wondwodnweiow wdownodwined', value: '1,3'},
    {title: 'Test10', description: 'fwefwefewfwee ', value: 23}
  ]

  return (
    <View>
      <ScrollView>
        {listFavors.map((favor) => <CardCoins key={favor.title} title={favor.title} description={favor.description} value={favor.value} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
