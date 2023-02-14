import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IContactUsScreenProps } from '@football/app/screens/football-contact-us/ContactUsScreen.type';
import { useRef, useState } from 'react';

export const useViewModel = ({ navigation, route }: IContactUsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const applicationRef = useRef<any>(null);
    const nameRef = useRef<any>(null);
    const emailRef = useRef<any>(null);
    const titleRef = useRef<any>(null);
    const contentRef = useRef<any>(null);

    const [application, setApplication] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [errors, setErrors] = useState({
        application: '',
        name: '',
        email: '',
        title: '',
    });
    const handleError = (errorMessage: string, input: string): void => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    const submitContact = () => {};

    const onGoBack = (): void => {
        goBack();
    };

    return {
        t,
        onGoBack,
        applicationRef,
        application,
        setApplication,
        nameRef,
        name,
        setName,
        emailRef,
        email,
        setEmail,
        titleRef,
        title,
        setTitle,
        contentRef,
        content,
        setContent,
        handleError,
        errors,
        submitContact,
    };
};
