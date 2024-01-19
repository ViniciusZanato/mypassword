import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { ModalDelete } from '../../components/modal/modaldelete';
import { ModalClear } from '../../components/modal/modalclear';

import useStorage from '../../hooks/useStorage';

export function Passwords() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalCVisible, setModalCVisible] = useState(false);
    const [listPasswords, setListPasswords] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const focused = useIsFocused();
    const { getItem, removeItem, clearData } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem('@pass');
            setListPasswords(passwords);
            setModalVisible(false);
            setModalCVisible(false);
        }
        loadPasswords();
    }, [focused]);

    async function handleDeletePassword() {
        if (selectedItem) {
            const passwords = await removeItem('@pass', selectedItem);
            setListPasswords(passwords);
        }
        setModalVisible(false);
    }

    async function handleClearData() {
        clearData();
        const passwords = await getItem('@pass');
        setListPasswords(passwords);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.tittle}>Minhas senhas</Text>
                <TouchableOpacity style={styles.clearButton} onPress={() => { setModalCVisible(true) }}>
                    <Icon name="trash" size={25} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => (
                        <View style={styles.passwords}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }} editable={true} selectable={true} multiline={true}>
                                {item}
                            </Text>
                            <TouchableOpacity style={styles.clearButton} onPress={() => { setSelectedItem(item); setModalVisible(true); }}>
                                <Icon name="trash" size={25} color="#000" />
                            </TouchableOpacity>
                            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                                <ModalDelete password={selectedItem} handleClose={() => setModalVisible(false)} handleDelete={handleDeletePassword} />
                            </Modal>


                            <Modal visible={modalCVisible} animationType="fade" transparent={true}>
                                <ModalClear handleClose={() => setModalCVisible(false)} handleDelete={handleClearData} />
                            </Modal>


                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        paddingTop: 50,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tittle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        padding: 15,
    },
    passwords: {
        backgroundColor: '#000',
        margin: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
        color: '#fff',
        borderRadius: 10,
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    clearButton: {
        width: 35,
        height: 35,
        backgroundColor: '#FF5555',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
