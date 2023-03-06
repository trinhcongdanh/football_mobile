import { AppImages } from '@football/app/assets/images';
import { isEmpty } from 'lodash';

export enum AvatarType {
    FAN_GENDER_MALE = 'FAN_GENDER_MALE',
    FAN_GENDER_FEMALE = 'FAN_GENDER_FEMALE',
    FAN_GENDER_NOT_AVAILABLE = 'FAN_GENDER_NOT_AVAILABLE',
}

export const renderAvatar = (profileUser: any) => {
    if (!isEmpty(profileUser.getProfile)) {
        if (profileUser.getProfile.item.avatar_image) {
            return { uri: profileUser.getProfile.item.avatar_image };
        }
        switch (profileUser.getProfile.item.gender) {
            case AvatarType.FAN_GENDER_MALE:
                return AppImages.img_avt_man;

            case AvatarType.FAN_GENDER_FEMALE:
                return AppImages.img_avt_woman;

            default:
                return AppImages.img_avt_other;
        }
    }
};
