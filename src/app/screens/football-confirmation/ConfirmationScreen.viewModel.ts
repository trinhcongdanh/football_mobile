import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useRef, useState } from 'react';
import { IConfirmationScreenProps } from '@football/app/screens/football-confirmation/ConfirmationScreen.type';

export const useViewModel = ({ navigation, route }: IConfirmationScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const fullNameRef = useRef<any>(null);
    const emailRef = useRef<any>(null);
    const phoneNumberRef = useRef<any>(null);
    const cityRef = useRef<any>(null);
    const streetRef = useRef<any>(null);
    const noHomeRef = useRef<any>(null);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [noHome, setNoHome] = useState('');

    const [onCheck, setonCheck] = useState(false);
    const toggleOnCheck = () => {
        setonCheck(!onCheck);
    };

    return {
        t,
        onGoBack,
        fullNameRef,
        emailRef,
        phoneNumberRef,
        cityRef,
        streetRef,
        noHomeRef,
        fullName,
        email,
        phoneNumber,
        city,
        street,
        noHome,
        setFullName,
        setEmail,
        setPhoneNumber,
        setCity,
        setStreet,
        setNoHome,
        toggleOnCheck,
        onCheck,
    };
};
