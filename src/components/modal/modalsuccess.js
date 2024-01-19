import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

export function ModalSuccess({ handleClose }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.tittle}>
                    Senha Salva com sucesso
                </Text>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24,24,24,0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: '#fff',
        width: '80%',
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonArea: {
        flexDirection: 'row',
        width: '40%',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: '#000',
        borderRadius: 50,
    },
    buttonText: {
        padding: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
});
