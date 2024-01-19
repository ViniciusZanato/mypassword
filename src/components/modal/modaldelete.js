import { View, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";

export function ModalDelete({ password, handleClose, handleDelete }) {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.tittle}>Deletar esta senha?</Text>

                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text} editable={true} selectable={true} multiline={true}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonDelete]} onPress={() => { handleDelete(); handleClose() }}>
                        <Text style={styles.buttonDeleteText}>Deletar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
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
    },
    innerPassword: {
        backgroundColor: '#000',
        width: '90%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonArea: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
    },
    buttonText: {
        padding: 10,
    },
    buttonDelete: {
        backgroundColor: '#FF5555',
        padding: 10,
        borderRadius: 50,
    },
    buttonDeleteText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
    },
    modalButton: {
        backgroundColor: '#17B0F8',
        padding: 10,
        borderRadius: 50,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
