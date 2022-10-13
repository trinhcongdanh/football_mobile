import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { getSize } from '@football/app/utils/responsive/scale';
import { appStyles } from '@football/app/utils/constants/appStyles';
import styles from './CardInfoView.style';
import Input from '../../input/Input';
import { ICardInfoViewProps } from './CardInfoView.types';
import DatePicker from 'react-native-date-picker';
import { appColors } from '@football/app/utils/constants/appColors';

export const CardInfoView = ({
    errors,
    handleOnChange,
    handleError,
    handleOnDate,
    placeHolderText,
    genderLabel,
    male,
    female,
    other,
    input,
    birthDateLabel,
}: ICardInfoViewProps) => {
    const date = new Date();
    const [gender, setGender] = useState(0);

    const genders = [male, female, other];

    const handleGender = (index: number) => {
        setGender(index);
    };

    return (
        <View style={appStyles.account_container}>
            <Input
                error={errors}
                placeholder={placeHolderText}
                onChangeText={e => handleOnChange(e)}
                onFocus={handleError}
                ref={input}
            />

            <View style={{ marginTop: getSize.m(30) }}>
                <Text style={appStyles.text_label}>{genderLabel}</Text>
                <View
                    style={[
                        appStyles.flex_row_space,
                        {
                            marginTop: getSize.m(10),
                        },
                    ]}
                >
                    {genders.map((sexual: string, index: number) => {
                        return (
                            <Text
                                key={index.toString()}
                                style={[
                                    appStyles.text_label,
                                    styles.select_gender,
                                    {
                                        backgroundColor:
                                            gender === index
                                                ? appColors.text_dark_blue
                                                : appColors.white,
                                        color:
                                            index === gender
                                                ? appColors.white
                                                : appColors.text_dark_blue,
                                    },
                                ]}
                                onPress={() => handleGender(index)}
                            >
                                {sexual}
                            </Text>
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Text style={appStyles.text_label}>{birthDateLabel}</Text>
                    <View style={styles.date_picker}>
                        <DatePicker
                            fadeToColor="none"
                            textColor={appColors.text_dark_blue}
                            locale="he"
                            mode="date"
                            date={date}
                            onDateChange={() => handleOnDate(date)}
                            androidVariant="nativeAndroid"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};
