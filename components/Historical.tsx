import { colorsTheme } from '@/constants/Colors';
import { View, Text, StyleSheet } from 'react-native';

export type InfosTransf = {
    amountPay: number,
    date: string,
    history: string,
    typeTransition: string
}

export function Historical({typeTransition, amountPay, date, history}: InfosTransf) {
    const valueFormated = `${typeTransition == 'credit' ? '-' : '+' } ${amountPay}`

    return (
        <View style={styles.container}>
            <View style={styles.topdescription}>
                <Text style={styles.description}>R$ {amountPay}</Text>
                <Text>{date}</Text>
            </View>
            <Text>{history}</Text>
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
    },
    topdescription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10
    }
})