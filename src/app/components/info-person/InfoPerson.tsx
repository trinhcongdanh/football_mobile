import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { AppImages } from '@football/app/assets/images';
import { IInfoPersonComponent } from './InfoPerson.type';
import styles from './InfoPerson.styles';

export const InfoPerson = ({ name_person, date, number, avt }: IInfoPersonComponent) => {
    const { t } = useTranslation();
    return (
        <View>
            <View style={[appStyles.align_justify, { marginTop: getSize.m(16) }]}>
                <Avatar
                    source={avt}
                    size={getSize.m(78)}
                    rounded
                    containerStyle={styles.avt_person}
                />
                <Text style={styles.name_person}>{name_person}</Text>
            </View>
            <View style={styles.line_dots} />
            <View style={[appStyles.flex_row_space_center, { marginHorizontal: getSize.m(20) }]}>
                <View style={appStyles.align_justify}>
                    <Text style={styles.data}>{date}</Text>
                    <Text style={styles.title}>{t('data_player.birthday')}</Text>
                </View>
                <View style={appStyles.align_justify}>
                    <View style={appStyles.flex_row_space_center}>
                        <Avatar
                            source={AppImages.img_israel}
                            size={getSize.m(18)}
                            rounded
                            containerStyle={styles.avt_national}
                        />
                        <Text style={styles.data}>{t('data_player.national.israel')}</Text>
                    </View>
                    <Text style={styles.title}>{t('data_player.national.title')}</Text>
                </View>
                <View style={appStyles.align_justify}>
                    <Text style={styles.data}>{number}</Text>
                    <Text style={styles.title}>{t('data_player.number')}</Text>
                </View>
            </View>
        </View>
    );
};
