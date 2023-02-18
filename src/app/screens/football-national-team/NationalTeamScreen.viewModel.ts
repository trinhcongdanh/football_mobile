import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { INationalTeamScreenProps } from './NationalTeamScreen.type';

export const useViewModel = ({ navigation, route }: INationalTeamScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const data = [
        {
            id: 1,
            image: AppImages.img_thumbnail,
            minute: '04:50',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../assets/video/neymarSkill.mp4'),
        },
        {
            id: 2,
            image: AppImages.img_gallery,
            minute: '04:50',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../assets/video/neymarSkill.mp4'),
        },
        {
            id: 3,
            image: AppImages.img_thumbnail,
            minute: '04:50',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../assets/video/neymarSkill.mp4'),
        },
        {
            id: 4,
            image: AppImages.img_gallery,
            minute: '04:50',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../assets/video/neymarSkill.mp4'),
        },
        {
            id: 5,
            image: AppImages.img_thumbnail,
            minute: '04:50',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../assets/video/neymarSkill.mp4'),
        },
    ];

    const [display, setDisplay] = useState(false);
    const [sourceVideo, setSourceVideo] = useState();
    const [autoPlay, setAutoPlay] = useState(true);

    const handlePlayVideo = (video: any) => {
        setDisplay(true);
        setSourceVideo(video);
        setAutoPlay(false);
    };

    const handleEndVideo = () => {
        setAutoPlay(true);
        setDisplay(false);
    };

    const width = Dimensions.get('window').width;

    const video = require('../../assets/video/neymarSkill.mp4');

    const listGames = [
        {
            id: 1,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '21:45  |  27/9/22',
            result: null,
            schedule: null,
            details: 'הרכב',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: false,
            isLive: true,
        },
        {
            id: 2,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '27/9/22',
            result: '3:1',
            schedule: 'V S',
            details: 'פרטי משחק',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: false,
            isLive: false,
        },
        {
            id: 3,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '21:45  |  27/9/22',
            result: null,
            schedule: 'V S',
            details: 'פרטי משחק',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: false,
            isLive: false,
        },
    ];

    const handleDetailMatch = () => {
        navigate(ScreenName.MatchPage);
    };

    const handleStadium = () => {
        navigate(ScreenName.PitchPage);
    };

    const handleNavigation = () => {
        navigate(ScreenName.PreviousCampaignsPage);
    };

    const onNavigateConquerors = () => {
        navigate(ScreenName.ConquerorsPage);
    };

    const onNavigatePlayerData = () => {
        navigate(ScreenName.DataPlayerPage);
    };

    const listTeams = [
        {
            id: 1,
            logo:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
        {
            id: 2,
            logo:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
        {
            id: 3,
            logo:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
        {
            id: 4,
            logo:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
    ];

    const options = [
        t('national_team.list_game.home_away'),
        t('national_team.list_game.house'),
        t('national_team.list_game.outside'),
    ];

    const [select, setSelect] = useState(0);
    const selectOption = (index: any) => {
        setSelect(index);
    };

    const listMatches = [
        {
            id: 1,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '15.09.22',
            result: '3:1',
            schedule: '11:00',
            details: 'פרטי משחק',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: false,
        },
        {
            id: 2,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '10.09.22',
            result: '3:1',
            schedule: '11:00',
            details: 'פרטי משחק',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: true,
        },
        {
            id: 3,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '01.09.22',
            result: '3:1',
            schedule: '11:00',
            details: 'פרטי משחק',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: true,
        },
    ];

    const teamSquads = [
        { id: 1, name: 'סגל נבחרת', avt: AppImages.img_logo, screen: ScreenName.TeamSquadPage },
        { id: 2, name: 'בעלי תפקידים', avt: AppImages.img_logo, screen: ScreenName.TeamStaffPage },
    ];

    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const handleDetails = () => {
        navigate(ScreenName.ListGamePage);
    };

    const cupsAround = [
        {
            id: 1,
            name: 'איאד אבו עוביד',
            number: '12',
        },
        {
            id: 2,
            name: 'איאד אבו עוביד',
            number: '10',
        },
        {
            id: 3,
            name: 'איאד אבו עוביד',
            number: '10',
        },
        {
            id: 4,
            name: 'איאד אבו עוביד',
            number: '10',
        },
        {
            id: 5,
            name: 'איאד אבו עוביד',
            number: '10',
        },
    ];

    return {
        t,
        onGoBack,
        handlePlayVideo,
        setDisplay,
        setAutoPlay,
        handleDetailMatch,
        handleNavigation,
        selectOption,
        video,
        display,
        data,
        width,
        sourceVideo,
        autoPlay,
        listGames,
        listTeams,
        options,
        select,
        listMatches,
        teamSquads,
        activeIndexNumber,
        setActiveIndexNumber,
        handleDetails,
        cupsAround,
        handleStadium,
        onNavigateConquerors,
        onNavigatePlayerData,
        navigate,
    };
};
