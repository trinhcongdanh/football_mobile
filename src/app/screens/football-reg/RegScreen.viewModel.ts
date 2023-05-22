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
import { AvatarType } from '@football/core/models/AvatarType.enum';
import { isEmpty } from 'lodash';
import { clearFavoriteData } from '@football/app/utils/functions/clearFavoriteData';
import moment from 'moment';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';

enum GenderSocial {
    male = 'male',
    female = 'female',
    other = 'other',
}

enum Gender {
    MALE = 'FAN_GENDER_MALE',
    FEMALE = 'FAN_GENDER_FEMALE',
    OTHER = 'FAN_GENDER_NOT_AVAILABLE',
}

interface RegisterDetailProps {
    userName: string;
}

/**
 * view settings variables
 * @returns
 */

const useViewState = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profileUser = useSelector((state: RootState) => state.setProfile);
    const infoSocial = useSelector((state: any) => state.otpUser.infoSocial);
    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);
    const selectedFavTopTeams = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeams
    );
    const [finishRegister, setFinishRegister] = useState(false);
    const [errors, setErrors] = useState({
        userName: '',
    });
    const [onCheck, setonCheck] = useState(false);
    const userNameRef = useRef<any>(null);
    const [userName, setUserName] = useState('');
    const [date, setDate] = useState<any>(new Date());
    const [gender, setGender] = useState<any>(AvatarType.FAN_GENDER_MALE);
    const isFocused = useIsFocused();

    return {
        navigate,
        goBack,
        t,
        dispatch,
        login,
        profile,
        guestId,
        profileUser,
        infoSocial,
        selectedFavTeams,
        selectedFavPlayers,
        selectedFavTopTeams,
        finishRegister,
        setFinishRegister,
        errors,
        setErrors,
        onCheck,
        setonCheck,
        userNameRef,
        userName,
        setUserName,
        date,
        setDate,
        gender,
        setGender,
        isFocused,
    };
};

/**
 * State use event handler
 * @param state
 * @returns
 */
const useEventHandler = (state: any) => {
    const {
        navigate,
        goBack,
        t,
        dispatch,
        login,
        profile,
        selectedFavTeams,
        selectedFavPlayers,
        selectedFavTopTeams,
        setFinishRegister,
        setErrors,
        onCheck,
        setonCheck,
        userName,
        setUserName,
        date,
        setDate,
        gender,
        setGender,
    } = state;

    /**
     * Go back previous screen
     */
    const onGoBack = (): void => {
        goBack();
    };

    /**
     * Toggle button allows account registration
     */
    const toggleOnCheck = () => {
        setonCheck(!onCheck);
    };

    /**
     * Type username
     * @param e
     */
    const handleOnChange = (e: string) => {
        const regex = /^[a-zA-Z0-9\u0590-\u05fe\s]*$/;
        if (regex.test(e)) {
            setUserName(e);
        }
    };

    /**
     * Handle error response when phone number is wrong
     * @param errorMessage
     * @param input
     */
    const handleError = (errorMessage: string, input: string) => {
        setErrors((prevState: RegisterDetailProps) => ({ ...prevState, [input]: errorMessage }));
    };

    /**
     * Change date
     * @param e
     */
    const handleOnDate = (e: Date) => {
        console.log(e);
        setDate(e);
    };

    /**
     * Change gender
     * @param e
     */
    const handleOnGender = (e: number) => {
        if (e === 0) {
            setGender(AvatarType.FAN_GENDER_MALE);
        } else if (e === 1) {
            setGender(AvatarType.FAN_GENDER_FEMALE);
        } else if (e === 2) {
            setGender(AvatarType.FAN_GENDER_NOT_AVAILABLE);
        }
    };

    /**
     * create account
     */
    const createInfo = () => {
        Keyboard.dismiss();
        setFinishRegister(true);
        let fav_team: string[] = [];
        selectedFavTeams.map((item: TeamModel) => {
            fav_team.push(item._id);
        });
        let fav_player: string[] = [];
        selectedFavPlayers.map((item: PlayerModel) => {
            fav_player.push(item._id);
        });
        let fav_top_team: string[] = [];
        selectedFavTopTeams.map((item: TopTeamModel) => {
            fav_top_team.push(item._id);
        });
        if (userName.length >= 2) {
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
                            birthdate: moment(date).format('YYYY-MM-DD'),
                            favorite_israel_teams: isEmpty(fav_team) ? '' : fav_team,
                            favorite_players: isEmpty(fav_player) ? '' : fav_player,
                            favorite_national_teams: isEmpty(fav_top_team) ? '' : fav_top_team,
                        },
                    })
                )
            );
        } else {
            handleError(t('reg.error.error_char'), 'userName');
        }
    };

    /**
     * navigate to the term condition screen
     */
    const handleProvision = () => {
        navigate(ScreenName.TermsConditionPage);
    };

    return {
        onGoBack,
        toggleOnCheck,
        handleOnChange,
        handleError,
        handleOnDate,
        handleOnGender,
        createInfo,
        handleProvision,
    };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param eventHandler
 */
const useEffectHandler = (state: any, eventHandler: any, navigation: any) => {
    const {
        navigate,
        dispatch,
        profileUser,
        infoSocial,
        finishRegister,
        setUserName,
        date,
        setDate,
        setGender,
        isFocused,
    } = state;
    useEffect(() => {
        if (!isEmpty(infoSocial)) {
            setUserName(infoSocial?.name || '');
            setDate(
                infoSocial?.birthday
                    ? moment(infoSocial?.birthday, 'DD/MM/YYYY').toDate()
                    : new Date()
            );

            console.log(date);

            switch (infoSocial?.gender) {
                case GenderSocial.male:
                    setGender(Gender.MALE);
                case GenderSocial.female:
                    setGender(Gender.FEMALE);
                case GenderSocial.other:
                    setGender(Gender.OTHER);
                default:
                    setGender(Gender.MALE);
            }
        }
    }, [infoSocial]);
    useEffect(() => {
        if (!isFocused) return;
        if (profileUser.success && finishRegister) {
            navigate(ScreenName.SideBar);
            navigation.reset({
                index: 0,
                routes: [{ name: ScreenName.SideBar as never }],
            });
            clearFavoriteData(dispatch);
        }
    }, [profileUser.success, finishRegister, isFocused]);
};

export const useViewModel = ({ navigation, route }: IRegScreenProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    useEffectHandler(state, eventHandler, navigation);

    return {
        ...eventHandler,
        ...state,
    };
};
