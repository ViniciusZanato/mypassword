import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native'
import Slider from '@react-native-community/slider'
import { SafeAreaView } from 'react-native'
import { useState } from 'react'
import { ModalPassword } from '../../components/modal/modal'
import { ModalSuccess } from '../../components/modal/modalsuccess'

export function Home() {

    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*"

    const [size, setSize] = useState(5)
    const [passswordValue, setPasswordValue] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [modalSVisible, setModalSVisible] = useState(false)

    function generatePassword() {
        let passsword = '';
        for (let i = 0, n = charSet.length; i < size; i++) {
            passsword += charSet.charAt(Math.floor(Math.random() * n))
        }
        setPasswordValue(passsword)
        setModalVisible(true)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>

                <Image source={require('../../assets/logo.png')} style={styles.logo} />

                <Text style={styles.tittle}>
                    MyPassWorD
                </Text>

                <Text style={{ fontSize: 50, fontWeight: 'bold' }}>
                    {size}
                </Text>

                <View style={styles.area}>
                    <Slider style={styles.slider} value={size} onValueChange={(value) => { setSize(value.toFixed(0)) }} minimumValue={0} maximumValue={20} minimumTrackTintColor='#000' thumbTintColor='#000' />
                </View>
                <TouchableOpacity style={styles.button} onPress={generatePassword}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Gerar Senha</Text>
                </TouchableOpacity>

                <Modal visible={modalVisible} animationType='fade' transparent={true}>
                    <ModalPassword password={passswordValue} handleClose={() => { setModalVisible(false) }} handleOpen={() => { setModalVisible(false); setModalSVisible(true) }} />
                </Modal>
                <Modal visible={modalSVisible} animationType='fade' transparent={true}>
                    <ModalSuccess handleClose={() => { setModalSVisible(false) }} />
                </Modal>
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
    logo: {
        marginBottom: 60,
        marginTop: -150,
        width: 110,
        height: 110,
    },
    tittle: {
        marginBottom: 50,
        marginTop: -50,
        fontWeight: 'bold',
        fontSize: 30
    },
    area: {
        width: '80%',
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        width: '100%',
    },
    button: {
        backgroundColor: '#000',
        marginTop: 50,
        marginBottom: -50,
        padding: 10,
        borderRadius: 50
    }
})