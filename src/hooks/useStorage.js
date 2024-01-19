import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log('Erro ao buscar', error)
            return [];
        }
    }

    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);

            if (passwords && passwords.includes(value)) {
                console.log('Esta senha já existe.');
                return;
            }

            passwords = passwords || [];
            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
            console.log('Erro ao salvar', error);
        }
    };


    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((password) => {
                return (password !== item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;
        } catch (error) {
            console.log('Erro ao deletar', error)
        }
    }

    const clearData = async () => {
        try {
            await AsyncStorage.clear();
        }
        catch (error) {
            console.log('Não foi possível limpar os dados')
        }
    }

    return {
        getItem,
        saveItem,
        removeItem,
        clearData,
    }
}

export default useStorage;