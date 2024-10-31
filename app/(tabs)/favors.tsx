import { colorsTheme } from '@/constants/Colors';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

export default function TabTwoScreen() {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <Title> Teste</Title>
          <Paragraph>TEstes descricao</Paragraph>
        </Card.Content>

        <Card.Actions style={styles.cardActions}>

          <Text>R$ 11,32</Text>

          <Button
            onPress={() => console.log("test")}
            title="Aceitar"
            color={colorsTheme.black}
            accessibilityLabel="Learn more about this purple button"
            />
        </Card.Actions>

      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: colorsTheme.black,
    borderRadius: 10
  },
  cardActions: {
    alignContent: 'space-around'
  }
});
