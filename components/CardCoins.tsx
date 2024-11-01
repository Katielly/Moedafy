import { colorsTheme } from "@/constants/Colors";
import { Button, StyleSheet, View } from "react-native";
import { Card, Props, Text } from "react-native-paper";

export function CardCoins() {
    return (
        <Card style={styles.card}>
        
        <Card.Title title="Titulo" />
        <Card.Content>
          <Text>TEstes descricao le bu jdskjdks sfisdfjid neuwh kl fsdfsdfkl j4  s purpd sudbfuisbdkfsd oansl lkjdfd sjskd iusbjdn tton sfosidfjsfl nm lskfnlisd nlskndfsldkn ioewhofiwen sjdksfdbkjds suksbfskj</Text>
        </Card.Content>

        <Card.Actions style={styles.cardActions}>
          <View style={styles.viewActions}>
            <Text>R$ 11,32</Text>

            <Button
              onPress={() => console.log("test")}
              title="Aceitar"
              color={colorsTheme.black}
              accessibilityLabel="Learn more about thi"
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
    borderRadius: 10
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
