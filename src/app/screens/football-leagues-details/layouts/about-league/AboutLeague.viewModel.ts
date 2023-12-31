import { AppImages } from '@football/app/assets/images';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IAboutLeagueProps } from './AboutLeague.type';

export const useViewModel = ({ highlights }: IAboutLeagueProps) => {
    const { t } = useTranslation();
    const aboutGames = highlights
        ? Object.keys(highlights).map((key, index) => {
              switch (key) {
                  case 'season_name':
                      return {
                          id: index,
                          icon: AppImages.img_calendar_week,
                          text: t('leagues_details.about.seasons'),
                          value: highlights[key],
                      };

                  case 'num_of_cycles':
                      return {
                          id: index,
                          icon: AppImages.img_ball,
                          text: t('leagues_details.about.cycles'),
                          value: highlights[key],
                      };

                  case 'num_of_rounds':
                      return {
                          id: index,
                          icon: AppImages.img_goal_net_blue,
                          text: t('leagues_details.about.rounds'),
                          value: highlights[key],
                      };

                  case 'age_group_he':
                      return {
                          id: index,
                          icon: AppImages.img_user,
                          text: t('leagues_details.about.age_group'),
                          value: highlights[key],
                      };

                  case 'num_of_teams':
                      return {
                          id: index,
                          icon: AppImages.img_users,
                          text: t('leagues_details.about.groups'),
                          value: highlights[key],
                      };

                  case 'num_of_ascending_teams':
                      return {
                          id: index,
                          icon: AppImages.img_up_right,
                          text: t('leagues_details.about.rising'),
                          value: highlights[key],
                      };

                  case 'num_of_descending_teams':
                      return {
                          id: index,
                          icon: AppImages.img_down_right,
                          text: t('leagues_details.about.down'),
                          value: highlights[key],
                      };

                  case 'break':
                      return {
                          id: index,
                          icon: AppImages.img_clock,
                          text: t('leagues_details.about.pause'),
                          value: highlights[key],
                      };

                  case 'num_of_exchanges':
                      return {
                          id: index,
                          icon: AppImages.img_replace,
                          text: t('leagues_details.about.exchanges'),
                          value: highlights[key],
                      };

                  default:
                      return {};
              }
          })
        : [];
    const dots = Array(4).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    return {
        t,
        aboutGames,
        dots,
        activeIndexNumber,
        setActiveIndexNumber,
    };
};
