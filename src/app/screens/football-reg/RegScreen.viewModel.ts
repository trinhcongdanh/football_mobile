import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useEffect, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { IRegScreenProps } from './RegScreen.type';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileUser } from 'src/store/user/setProfile.slice';
import { ACTION } from '@football/core/api/auth/config';
import { RootState } from 'src/store/store';
import qs from 'qs';

export const useViewModel = ({ navigation, route }: IRegScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();

    const [errors, setErrors] = useState({
        userName: '',
    });

    const [onCheck, setonCheck] = useState(false);

    const onGoBack = (): void => {
        goBack();
    };

    const toggleOnCheck = () => {
        setonCheck(!onCheck);
    };

    const handleError = (errorMessage: string, input: string) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    const userNameRef = useRef<any>(null);
    const [userName, setUserName] = useState('');
    const handleOnChange = (e: string) => {
        setUserName(e);
    };

    const [date, setDate] = useState<any>();

    const handleOnDate = (e: Date) => {
        let formattedDate = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + e.getDate();
        setDate(formattedDate);
    };
    const [gender, setGender] = useState<any>();
    const handleOnGender = (e: number) => {
        if (e === 1) {
            setGender('FAN_GENDER_MALE');
        } else if (e === 2) {
            setGender('FAN_GENDER_FEMALE');
        } else if (e === 3) {
            setGender('FAN_GENDER_NOT_AVAILABLE');
        }
    };

    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        console.log(a);
        return a;
    }

    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profileUser = useSelector((state: RootState) => state.setProfile);

    const createInfo = () => {
        Keyboard.dismiss();

        dispatch(
            setProfileUser(
                serializeParams({
                    action: ACTION,
                    token: login.login.token,
                    call: AuthData.SET_PROFILE,
                    item_id: profile.profile.item_id,
                    item: {
                        EMAIL: userName,
                        GENDER: gender,
                        BIRTHDAY: date,
                    },
                })
            )
        );
    };

    useEffect(() => {
        if (profileUser.success === true) {
            navigate(ScreenName.SideBar);
        }
    }, [profileUser.success]);

    return {
        errors,
        onCheck,
        onGoBack,
        handleOnChange,
        handleError,
        createInfo,
        handleOnDate,
        toggleOnCheck,
        userName,
        userNameRef,
        handleOnGender,
    };
};
