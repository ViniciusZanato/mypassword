import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'

export function Passwords() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>
                    Passwords
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})