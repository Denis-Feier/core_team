import { Alert } from 'react-native';

interface ErrorAlertArgs {
    title: string;
    message?: string;
}

export const useShowError = () => {
    return ({ title, message }: ErrorAlertArgs) => {
        Alert.alert(title, message, [
            {
                text: 'Ok'
            }
        ]);
    }
}