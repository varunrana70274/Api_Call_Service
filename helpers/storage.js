import EncryptedStorage from 'react-native-encrypted-storage';

export const AppStorage = {
    saveValue,
    getValue,
    deleteValue,
    clearValue
};

async function saveValue(key, value) {
    try {
        await EncryptedStorage.setItem(
            key,
            JSON.stringify(value)
        );
    } catch (error) {
        // There was an error on the native side
        console.log(error.code); // ex: -25300 (errSecItemNotFound)
    }
}

async function getValue(key) {
    try {
        //const session = await EncryptedStorage.getItem(key).then(result => result.data);
        let session = await EncryptedStorage.getItem(key);
        if (session !== undefined) {
            //console.log(session);
            return session;
        }
        return null;
    } catch (error) {
        // There was an error on the native side
        console.log(error.code); // ex: -25300 (errSecItemNotFound)
    }
}

async function deleteValue(key) {
    try {
        await EncryptedStorage.removeItem(key);
    } catch (error) {
        // There was an error on the native side
        console.log(error.code); // ex: -25300 (errSecItemNotFound)
    }
}

async function clearValue() {
    try {
        await EncryptedStorage.clear();
    } catch (error) {
        // There was an error on the native side
        console.log(error.code); // ex: -25300 (errSecItemNotFound)
    }
}