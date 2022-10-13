import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

export const getPermissions = (args: {
    success: () => void
    failure: () => void
}) => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
    })
        .then((res) => {
            if (PermissionsAndroid.RESULTS.GRANTED === res) {
                args.success();
            } else {
                args.failure();
            }
        })
        .catch((error) => {
            console.error('Permission error: ', error);
        });
}

