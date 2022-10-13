import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform,
} from 'react-native';
import React from 'react';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { useTranslation } from 'react-i18next';
import { CardHeaderView } from '@football/app/components/connect-signup/header-connect-signup/CardHeaderView';
import { CardInfoView } from '@football/app/components/connect-signup/card-info/CardInfoView';
import { getSize } from '@football/app/utils/responsive/scale';
import { Button } from '@football/app/components/button';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from './RegScreen.styles';
import { useViewModel } from './RegScreen.viewModel';
import { IRegScreenProps } from './RegScreen.type';

// type Props = {};

export const RegScreen = ({ navigation, route }: IRegScreenProps) => {
    const { t } = useTranslation();
    const {
        errors,
        onCheck,
        onGoBack,
        handleOnChange,
        handleError,
        createInfo,
        handleOnDate,
        toggleOnCheck,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                        />
                        <ScrollView>
                            <CardHeaderView title={t('reg.title')} sub_title={t('reg.sub_title')} />
                            <CardInfoView
                                placeHolderText={t('reg.place_holder_name')}
                                errors={errors.userName}
                                handleOnChange={(e: string) => handleOnChange(e)}
                                handleError={() => {
                                    handleError('', 'userName');
                                }}
                                genderLabel={t('reg.gender.label')}
                                male={t('reg.gender.male')}
                                female={t('reg.gender.female')}
                                other={t('reg.gender.other')}
                                birthDateLabel={t('reg.birth_date')}
                                handleOnDate={e => handleOnDate(e)}
                            />

                            <View style={[appStyles.flex_row_center, { marginTop: getSize.m(30) }]}>
                                <TouchableOpacity
                                    style={[
                                        styles.checkBox,
                                        {
                                            backgroundColor: onCheck
                                                ? appColors.blue_light
                                                : appColors.white,
                                        },
                                    ]}
                                    onPress={toggleOnCheck}
                                >
                                    {onCheck && <Icon name="check" color="white" />}
                                </TouchableOpacity>
                                <Text style={styles.agree}>{t('reg.agree')}</Text>
                                <Text style={styles.provision}>{t('reg.provision')}</Text>
                            </View>
                            <View style={{ marginHorizontal: getSize.m(32) }}>
                                <Button title={t('reg.button')} onPress={createInfo} />
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
