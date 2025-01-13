import { StyleSheet, View, TextInput, TextInputProps, Text } from "react-native";

type Props = TextInputProps & {
    label: string,
    value?: string,
    placeholder?: string,
    typeContent?: string
}

export function Input({ label, value, placeholder, textContentType = 'name' }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                textContentType={textContentType}
                onChange={() => (
                    console.log('alteração no campo')
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
        paddingBottom: 6
    },
    label: {
        fontWeight: '400',
        fontSize: 14
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 8,
        height: 34,
        padding: 5
    }
})