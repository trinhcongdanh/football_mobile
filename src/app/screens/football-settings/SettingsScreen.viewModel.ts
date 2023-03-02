import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { resetSearchFavPlayer, SelectedPlayer } from 'src/store/FavPlayer.slice';
import { resetFavTeam } from 'src/store/FavTeam.slice';
import qs from 'qs';
import { resetTopTeams } from 'src/store/FavTopTeam.slice';
import { RootState } from 'src/store/store';
import { ISettingsScreenProps } from './SettingsScreen.type';
import { ACTION } from '@football/core/api/auth/config';
import { getProfileUser } from 'src/store/user/getProfile.slice';

export const useViewModel = ({ navigation, route }: ISettingsScreenProps) => {
    const { t } = useTranslation();
    const { goBack, navigate, replace } = useAppNavigator();
    const [image, setImage] = useState<any>();
    const dispatch = useDispatch<any>();

    const date = new Date();

    const user = { username: '', gender: '', date: '' };

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const handleOnDate = (e: Date) => {
        user.date = e.toString();
    };

    const onImagePicker = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        // eslint-disable-next-line array-callback-return
        result.assets?.map(item => {
            setImage(item.uri);
        });
    };
    const previous_screen = route?.params?.previous_screen;
    const onGoBack = () => {
        if (previous_screen === ScreenName.FavTeamPage) {
            navigate(ScreenName.SideBar);
        } else {
            goBack();
        }
    };

    const backFavTeam = () => {
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const backFavPlayer = () => {
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const backFavTopTeam = () => {
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.SettingsPage,
        });
        goBack();
    };

    // team
    const [firstTeams, setFirstTeams] = useState<TeamModel>();
    const [secondTeams, setSecondTeams] = useState<TeamModel>();
    const [thirdTeams, setThirdTeams] = useState<TeamModel>();
    const teams = [firstTeams, secondTeams, thirdTeams];
    useEffect(() => {
        if (selectedFavTeams.length === 3) {
            setFirstTeams(selectedFavTeams[0]);
            setSecondTeams(selectedFavTeams[1]);
            setThirdTeams(selectedFavTeams[2]);
        } else if (selectedFavTeams.length === 2) {
            setFirstTeams(selectedFavTeams[0]);
            setSecondTeams(selectedFavTeams[1]);
        } else if (selectedFavTeams.length === 1) {
            setFirstTeams(selectedFavTeams[0]);
        }
    }, []);

    // player
    const [firstPlayers, setFirstPlayers] = useState<SelectedPlayer>();
    const [secondPlayers, setSecondPlayers] = useState<SelectedPlayer>();
    const [thirdPlayers, setThirdPlayers] = useState<SelectedPlayer>();
    const players = [firstPlayers, secondPlayers, thirdPlayers];
    useEffect(() => {
        if (selectedFavPlayers.length === 3) {
            setFirstPlayers(selectedFavPlayers[0]);
            setSecondPlayers(selectedFavPlayers[1]);
            setThirdPlayers(selectedFavPlayers[2]);
        } else if (selectedFavPlayers.length === 2) {
            setFirstPlayers(selectedFavPlayers[0]);
            setSecondPlayers(selectedFavPlayers[1]);
        } else if (selectedFavPlayers.length === 1) {
            setFirstPlayers(selectedFavPlayers[0]);
        }
    }, []);

    // top team
    const [firstTopTeams, setFirstTopTeams] = useState<TopTeamModel>();
    const [secondTopTeams, setSecondTopTeams] = useState<TopTeamModel>();
    const topTeams = [firstTopTeams, secondTopTeams];
    useEffect(() => {
        if (selectedFavTopTeams.length === 2) {
            setFirstTopTeams(selectedFavTopTeams[0]);
            setSecondTopTeams(selectedFavTopTeams[1]);
        } else if (selectedFavTopTeams.length === 1) {
            setFirstTopTeams(selectedFavTopTeams[0]);
        }
    }, []);

    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);
    const selectedFavTopTeams = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeams
    );

    const addFavTeam = (index: number) => {
        dispatch(resetFavTeam([]));
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const changeFavTeam = (index: string) => {
        dispatch(resetFavTeam([]));
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const addFavPlayer = (index: number) => {
        dispatch(resetSearchFavPlayer({ id: '', label: '', listFavPlayers: [] }));
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const changeFavPlayer = (index: number) => {
        dispatch(resetSearchFavPlayer({ id: '', label: '', listFavPlayers: [] }));
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const addFavTopTeam = (index: number) => {
        dispatch(resetTopTeams([]));
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const changeFavTopTeam = (index: string) => {
        dispatch(resetTopTeams([]));
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };
    const handleError = (errorMessage: string, input: string) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    const userNameRef = useRef<any>(null);
    const [userName, setUserName] = useState('');
    const [errors, setErrors] = useState({
        userName: '',
        email: '',
    });
    const handleOnChangeName = (e: string) => {
        setUserName(e);
    };

    const emailRef = useRef<any>(null);
    const [email, setEmail] = useState('');
    const handleOnChangeEmail = (e: string) => {
        setUserName(e);
    };

    const handleSaveChange = () => {};

    const login = useSelector((state: RootState) => state.login);

    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        console.log(a);
        return a;
    }

    useEffect(() => {
        dispatch(
            getProfileUser(
                serializeParams({
                    action: ACTION,
                    token: login.login.token,
                    call: AuthData.GET_PROFILE,
                    item: login.login.user.item_id,
                })
            )
        );
    }, []);

    return {
        date,
        image,
        isEnabled1,
        isEnabled2,
        isEnabled3,
        t,
        goBack,
        navigate,
        handleOnDate,
        onImagePicker,
        toggleSwitch1,
        toggleSwitch2,
        toggleSwitch3,
        backFavPlayer,
        backFavTeam,
        backFavTopTeam,
        handleSaveChange,
        teams,
        players,
        topTeams,
        addFavTeam,
        changeFavTeam,
        addFavPlayer,
        changeFavPlayer,
        addFavTopTeam,
        changeFavTopTeam,
        onGoBack,
        userNameRef,
        userName,
        setUserName,
        handleError,
        errors,
        handleOnChangeName,
        handleOnChangeEmail,
        emailRef,
        email,
        setEmail,
    };
};
function getProfile(): any {
    throw new Error('Function not implemented.');
}
