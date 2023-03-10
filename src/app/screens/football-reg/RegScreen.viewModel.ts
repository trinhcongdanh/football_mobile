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
import { useIsFocused } from '@react-navigation/native';
import { AppImages } from '@football/app/assets/images';
import { AvatarType } from '@football/core/models/AvatarType.enum';
import { isEmpty } from 'lodash';
import { clearFavoriteData } from '@football/app/utils/functions/clearFavoriteData';

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

    const [date, setDate] = useState<any>(new Date());
    const [formattedDate, setFormattedDate] = useState<any>();

    const handleOnDate = (e: Date) => {
        console.log(e);
        setDate(e);
        let formattedDate = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + e.getDate();
        setFormattedDate(formattedDate);
    };
    const [gender, setGender] = useState<any>(AvatarType.FAN_GENDER_MALE);
    const handleOnGender = (e: number) => {
        if (e === 0) {
            setGender(AvatarType.FAN_GENDER_MALE);
        } else if (e === 1) {
            setGender(AvatarType.FAN_GENDER_FEMALE);
        } else if (e === 2) {
            setGender(AvatarType.FAN_GENDER_NOT_AVAILABLE);
        }
    };

    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        console.log(a);
        return a;
    }
    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);
    const selectedFavTopTeams = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeams
    );

    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profileUser = useSelector((state: RootState) => state.setProfile);

    const createInfo = () => {
        Keyboard.dismiss();
        let fav_team: string[] = [];
        selectedFavTeams.map(item => {
            fav_team.push(item._id);
        });
        let fav_player: string[] = [];
        selectedFavPlayers.map(item => {
            fav_player.push(item._id);
        });
        let fav_top_team: string[] = [];
        selectedFavTopTeams.map(item => {
            fav_top_team.push(item._id);
        });
        dispatch(
            setProfileUser(
                serializeParams({
                    action: ACTION,
                    token: login.login.token,
                    call: AuthData.SET_PROFILE,
                    item_id: profile.profile.item_id,
                    item: {
                        name: userName,
                        gender: gender,
                        birthdate: formattedDate,
                        favorite_israel_teams: isEmpty(fav_team) ? '' : fav_team,
                        favorite_players: isEmpty(fav_player) ? '' : fav_player,
                        favorite_national_teams: isEmpty(fav_top_team) ? '' : fav_top_team,
                        notifications: '',
                    },
                })
            )
        );
    };
    const isFocused = useIsFocused();
    useEffect(() => {
        if (!isFocused) return;
        if (profileUser.success === true) {
            navigate(ScreenName.SideBar);
            navigation.reset({
                index: 0,
                routes: [{ name: ScreenName.SideBar as never }],
            });
            clearFavoriteData(dispatch);
        }
    }, [profileUser.success, isFocused]);

    const handleProvision = () => {
        navigate(ScreenName.TermsConditionPage);
    };

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
        date,
        profileUser,
        handleProvision,
    };
};
