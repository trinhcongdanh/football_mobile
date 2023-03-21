import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IContactUsScreenProps } from '@football/app/screens/football-contact-us/ContactUsScreen.type';
import { useRef, useState } from 'react';
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { ACTION, AUTH_URL, TOKEN } from '@football/core/api/auth/config';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import { isEmpty } from 'lodash';
import { AuthData } from '@football/app/utils/constants/enum';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

export const useViewModel = ({ navigation, route }: IContactUsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const login = useSelector((state: any) => state.login);
    const userLogin = useSelector((state: RootState) => state.otpUser);
    const authToken = userLogin?.otp?.token ? userLogin?.otp?.token : login?.login?.token;

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

    const submitContact = async () => {
        const postData = {
            action: ACTION,
            token: authToken,
            call: AuthData.CONTACT,
            item: {
                name,
                email,
                subject: title,
                message: content,
            },
        };
        const { data }: any = await axiosAuth.post(
            `${AUTH_URL}`,
            serializeParams(postData),

            {
                headers: {},
            }
        );

        if (!isEmpty(data)) {
            return data;
        }
    };

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
