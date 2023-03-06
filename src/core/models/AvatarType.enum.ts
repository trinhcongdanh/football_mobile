import { AppImages } from '@football/app/assets/images';
import { isEmpty } from 'lodash';

export enum AvatarType {
    FAN_GENDER_MALE = 'FAN_GENDER_MALE',
    FAN_GENDER_FEMALE = 'FAN_GENDER_FEMALE',
    FAN_GENDER_NOT_AVAILABLE = 'FAN_GENDER_NOT_AVAILABLE',
}

export const isGuessUser = (profileUser: any) => {
    return isEmpty(profileUser.getProfile);
};

export const renderAvatar = (profileUser: any) => {
    if (isGuessUser(profileUser) || !profileUser?.getProfile?.item) {
        return AppImages.img_avt_other;
    }

    if (profileUser?.getProfile?.item?.avatar_image) {
        return { uri: profileUser.getProfile.item.avatar_image };
    }
    switch (profileUser?.getProfile?.item?.gender) {
        case AvatarType.FAN_GENDER_MALE:
            return AppImages.img_avt_man;

        case AvatarType.FAN_GENDER_FEMALE:
            return AppImages.img_avt_woman;

        default:
            return AppImages.img_avt_other;
    }
};

export const renderUserPoints = (profileUser: any, t: any) => {
    if (isGuessUser(profileUser)) {
        return t('side_menu.guest');
    }

    return profileUser.getProfile.item.points_balance || '0';
};
