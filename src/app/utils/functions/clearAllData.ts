import { resetFavPlayer, resetSelectedFavPlayer } from 'src/store/FavPlayer.slice';
import { resetFavTeam, resetSelectedFavTeam } from 'src/store/FavTeam.slice';
import { resetSelectedFavTopTeams, resetTopTeams } from 'src/store/FavTopTeam.slice';
import { clearCreateProfile } from 'src/store/user/CreateProfile.slice';
import { clearGetProfile } from 'src/store/user/getProfile.slice';
import { removeGuestId } from 'src/store/user/GuestId.slice';
import { clearLogin } from 'src/store/user/Login.slice';
import { resetOtpUser } from 'src/store/user/OTP.slice';
import { clearPhoneNumber } from 'src/store/user/RegisterNumberPhone.slice';
import { clearSetProfile } from 'src/store/user/setProfile.slice';

export const clearAllData = (dispatch: any) => {
    dispatch(clearCreateProfile({}));
    dispatch(removeGuestId([]));
    // Clear Fav Team
    dispatch(resetFavTeam([]));
    dispatch(resetSelectedFavTeam([]));
    // Clear Fav Player
    dispatch(resetFavPlayer([]));
    dispatch(resetSelectedFavPlayer([]));
    // Clear Fav Top Team
    dispatch(resetTopTeams([]));
    dispatch(resetSelectedFavTopTeams([]));
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
