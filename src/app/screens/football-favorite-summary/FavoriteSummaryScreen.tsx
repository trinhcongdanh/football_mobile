import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderAdded } from '@football/app/components/header-added/HeaderAdded';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { getSize } from '@football/app/utils/responsive/scale';
import _ from 'lodash';
import { useViewModel } from './FavoriteSummaryScreen.viewModel';
import { IFavoriteSummaryScreenProps } from './FavoriteSummaryScreen.type';
import styles from './FavoriteSummaryScreen.style';

export const FavoriteSummaryScreen = ({ navigation, route }: IFavoriteSummaryScreenProps) => {
    const { t, onGoBack, onImagePicker, toggleOnCheck, images, onCheck } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <ScrollView>
                        <View style={appStyles.container}>
                            <CardGoBack
                                iconName={appIcons.ic_right_ios}
                                iconStyle={styles.ic_back}
                                goBack={onGoBack}
                            />
                            <View style={styles.block_add_group}>
                                <HeaderAdded
                                    leftIcon
                                    headerTitle={t('fav_summary.group')}
                                    headerSkip={t('settings.sleep')}
                                    iconName={appIcons.ic_left_ios}
                                />
                                <View style={styles.item_render}>
                                    {images.map((item, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={styles.item_container}
                                            >
                                                {_.isEmpty(item) ? (
                                                    <>
                                                        <TouchableOpacity
                                                            style={styles.btn_add}
                                                            onPress={() => onImagePicker(index)}
                                                        >
                                                            <Icon
                                                                name={appIcons.ic_plus}
                                                                size={getSize.m(14)}
                                                                color={appColors.blue_light}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text style={styles.txt_add_group}>
                                                            {t('fav_summary.add_group')}
                                                        </Text>
                                                    </>
                                                ) : (
                                                    <>
                                                        <TouchableOpacity
                                                            style={styles.btn_img}
                                                            onPress={() => onImagePicker(index)}
                                                        >
                                                            <Image
                                                                resizeMode="cover"
                                                                source={{ uri: item.uri }}
                                                                style={styles.img_view}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text
                                                            numberOfLines={2}
                                                            style={styles.txt_add_group}
                                                        >
                                                            {item.fileName}
                                                        </Text>
                                                    </>
                                                )}
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={styles.block_add_actress}>
                                <HeaderAdded
                                    leftIcon
                                    headerTitle={t('fav_summary.favorite')}
                                    headerSkip={t('settings.sleep')}
                                    iconName={appIcons.ic_left_ios}
                                />
                                <View style={styles.item_render}>
                                    {images.map((item, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={styles.item_container}
                                            >
                                                {_.isEmpty(item) ? (
                                                    <>
                                                        <TouchableOpacity
                                                            style={styles.btn_add}
                                                            onPress={() => onImagePicker(index)}
                                                        >
                                                            <Icon
                                                                name={appIcons.ic_plus}
                                                                size={getSize.m(14)}
                                                                color={appColors.blue_light}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text style={styles.txt_add_group}>
                                                            {t('fav_summary.add_actress')}
                                                        </Text>
                                                    </>
                                                ) : (
                                                    <>
                                                        <TouchableOpacity
                                                            style={styles.btn_img}
                                                            onPress={() => onImagePicker(index)}
                                                        >
                                                            <Image
                                                                resizeMode="cover"
                                                                source={{ uri: item.uri }}
                                                                style={styles.img_view}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text
                                                            numberOfLines={2}
                                                            style={styles.txt_add_group}
                                                        >
                                                            {item.fileName}
                                                        </Text>
                                                    </>
                                                )}
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={styles.block_add_actress}>
                                <HeaderAdded
                                    leftIcon
                                    headerTitle={t('fav_summary.national_team')}
                                    headerSkip={t('settings.sleep')}
                                    iconName={appIcons.ic_left_ios}
                                />
                                <View style={styles.item_render}>
                                    {images.map((item, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={styles.item_container}
                                            >
                                                {_.isEmpty(item) ? (
                                                    <>
                                                        <TouchableOpacity
                                                            style={styles.btn_add}
                                                            onPress={() => onImagePicker(index)}
                                                        >
                                                            <Icon
                                                                name={appIcons.ic_plus}
                                                                size={getSize.m(14)}
                                                                color={appColors.blue_light}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text style={styles.txt_add_group}>
                                                            {t('fav_summary.add_squad')}
                                                        </Text>
                                                    </>
                                                ) : (
                                                    <>
                                                        <TouchableOpacity
                                                            style={styles.btn_img}
                                                            onPress={() => onImagePicker(index)}
                                                        >
                                                            <Image
                                                                resizeMode="cover"
                                                                source={{ uri: item.uri }}
                                                                style={styles.img_view}
                                                            />
                                                        </TouchableOpacity>
                                                        <Text
                                                            numberOfLines={2}
                                                            style={styles.txt_add_group}
                                                        >
                                                            {item.fileName}
                                                        </Text>
                                                    </>
                                                )}
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
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
                                <Text style={styles.agree}>{t('fav_summary.save_agree')}</Text>
                                <Text style={styles.provision}>{t('fav_summary.term_use')}</Text>
                            </View>
                            <TouchableOpacity
                                disabled={onCheck}
                                style={onCheck ? styles.btn_complete : styles.btn_complete_disable}
                            >
                                <Text
                                    style={
                                        onCheck ? styles.txt_complete : styles.txt_complete_disable
                                    }
                                >
                                    {t('fav_summary.complete')}
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.bottom_text}>
                                {onCheck ? t('fav_summary.guest') : t('fav_summary.login_as_guest')}
                            </Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
