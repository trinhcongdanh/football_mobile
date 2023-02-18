import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import styles from './InfoPerson.styles';
import { IInfoPersonComponent } from './InfoPerson.type';

export const InfoPerson = ({
    name,
    data_1,
    data_2,
    data_3,
    avt,
    img_logo,
    title_1,
    title_2,
    title_3,
    rating,
}: IInfoPersonComponent) => {
    const { t } = useTranslation();
    return (
        <View>
            <View style={[appStyles.align_justify, { marginTop: getSize.m(16) }]}>
                <Avatar
                    source={{ uri: avt }}
                    size={getSize.m(78)}
                    rounded
                    containerStyle={styles.avt_person}
                />
                <View style={[appStyles.flex_row_align, { marginTop: getSize.m(16) }]}>
                    <View>
                        <Text style={styles.name_person}>{name}</Text>
                    </View>
                    {rating && (
                        <View style={[appStyles.flex_row_align, { marginLeft: getSize.m(13) }]}>
                            <Text style={styles.rating}>{t('pitch.rating')}</Text>
                            <Text style={styles.content_rating}>{rating}</Text>
                        </View>
                    )}
                </View>
            </View>
            <View style={styles.line_dots} />
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginHorizontal: getSize.m(20),
                        height: getSize.m(60),
                        alignItems: 'flex-end',
                    },
                ]}
            >
                <View style={[appStyles.align_justify, { width: getSize.m(100) }]}>
                    <Text style={styles.data}>{data_1}</Text>
                    <Text style={styles.title}>{title_1}</Text>
                </View>
                <View style={appStyles.align_justify}>
                    <View style={appStyles.flex_row_space_center}>
                        {img_logo && (
                            <Avatar
                                source={{ uri: img_logo }}
                                size={getSize.m(18)}
                                rounded
                                containerStyle={styles.avt_national}
                            />
                        )}

                        <Text style={styles.data}>{data_2}</Text>
                    </View>
                    <Text style={styles.title}>{title_2}</Text>
                </View>
                <View style={appStyles.align_justify}>
                    <Text style={styles.data}>{data_3}</Text>
                    <Text style={styles.title}>{title_3}</Text>
                </View>
            </View>
        </View>
    );
};
