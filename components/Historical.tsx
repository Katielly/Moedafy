import { colorsTheme } from '@/constants/Colors';
import { View, Text, StyleSheet } from 'react-native';

export type InfosTransf = {
    amountPay: number,
    date: string,
    description: string
}

export function Historical({amountPay, date, description}: InfosTransf) {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorsTheme.secondary,
        width: '100%',
        height: 70,
        borderRadius: 15,
        padding: 12
    },
    description: {
        fontSize: 14

    }
})