import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import Contacts from 'react-native-contacts';

import { useShowError } from './src/hooks/useShowError';
import MainScreen from "./src/screens/MainScreen";
import SpinnerScreen from './src/screens/SpinnerScreen';
import { getPermissions } from './src/utils/permissions';

export default function App() {
  const showError = useShowError();
  const [showSpinner, setShowSpinner] = useState(true);
  const [contactsList, setContactsList] = useState<string[]>([]);

  const getContacts = async () => {
    try {
      const contacts = await Contacts.getAll();
      const formatedContacts = contacts.map(contact => {
        const firstName = contact.givenName;
        const lastName = contact.familyName;
        return `${firstName} ${lastName}`;
      })
      setShowSpinner(false);
      setContactsList(formatedContacts);
    } catch {
      showError({
        title: 'Error',
        message: "Can\'t fetch contacts!"
      })
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      getPermissions({
        success: () => {
          getContacts().then();
        },
        failure: () => {
          showError({
            title: 'Error no Permission',
          })
        }
      })
    } else {
      getContacts().then();
    }
  }, []);

  return showSpinner ? <SpinnerScreen /> : <MainScreen contactsList={contactsList} />;
}
