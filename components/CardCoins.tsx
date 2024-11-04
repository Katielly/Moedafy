import { colorsTheme } from "@/constants/Colors";
import { Button, StyleSheet, View } from "react-native";
import { Card, Props, Text } from "react-native-paper";

export const CardCoins = (props: IFavor) =>  {
    return (
        <Card style={styles.card}>
        <Card.Title title={props.title} />
        <Card.Content>
          <Text>{props.description}</Text>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <View style={styles.viewActions}>
            <Text>R$ {props.value}</Text>

            <Button
              onPress={() => console.log("aceitando favor")}
              title="Aceitar"
              color={colorsTheme.black}
              accessibilityLabel="favor accept"
            />
          </View>
        </Card.Actions>
      </Card>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colorsTheme.secondary,
    borderColor: colorsTheme.black,
    borderRadius: 10,
    margin: 15,
  },
  cardTitle: {
    fontSize: 20,
  },
  viewActions: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  cardActions: {
    paddingTop: 25
  }
});
