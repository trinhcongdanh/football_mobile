import { clearCreateProfile } from 'src/store/user/CreateProfile.slice';
import { clearGetProfile } from 'src/store/user/getProfile.slice';
import { removeGuestId } from 'src/store/user/GuestId.slice';
import { clearLogin } from 'src/store/user/Login.slice';
import { resetOtpUser } from 'src/store/user/OTP.slice';
import { clearPhoneNumber } from 'src/store/user/RegisterNumberPhone.slice';
import { clearSetProfile } from 'src/store/user/setProfile.slice';

export const clearUserData = (dispatch: any) => {
    dispatch(clearCreateProfile({}));
    dispatch(removeGuestId([]));
    // Clear Fav Team
    // Clear otp
    dispatch(resetOtpUser([]));
    // Clear setProfile
    dispatch(clearSetProfile([]));
    // Clear Phone Number
    dispatch(clearPhoneNumber([]));
    // Clear getProfile
    dispatch(clearGetProfile([]));
    // Clear Login
    dispatch(clearLogin({}));
};
