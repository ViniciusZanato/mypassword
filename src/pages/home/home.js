import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'

export function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>
                    Teste
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})