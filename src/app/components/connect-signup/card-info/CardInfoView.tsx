import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { getSize } from '@football/app/utils/responsive/scale';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import DatePicker from 'react-native-date-picker';
import styles from './CardInfoView.style';
import { ICardInfoViewProps } from './CardInfoView.types';
import Input from '../../input/Input';
import { AppFonts } from '@football/app/assets/fonts';

export const CardInfoView = ({
    errors,
    handleError,
    handleOnDate,
    placeHolderText,
    genderLabel,
    male,
    female,
    other,
    input,
    inputRef,
    birthDateLabel,
    onChangeTextInput,
    handleOnGender,
    date,
}: ICardInfoViewProps) => {
    // const [date, setDate] = useState<Date>();
    // const date = new Date();
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
                onChangeTextInput={onChangeTextInput}
                onFocus={handleError}
                input={input}
                inputRef={inputRef}
            />

            <View style={{ marginTop: getSize.m(30) }}>
                <Text
                    style={[
                        appStyles.text_label,
                        {
                            fontFamily: AppFonts.medium,
                        },
                    ]}
                >
                    {genderLabel}
                </Text>
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
                            <TouchableOpacity
                                key={index.toString()}
                                onPress={() => {
                                    handleGender(index);
                                    handleOnGender(index);
                                }}
                                style={[
                                    styles.select_gender,
                                    {
                                        backgroundColor:
                                            gender === index
                                                ? appColors.text_dark_blue
                                                : appColors.white,
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        appStyles.text_label,
                                        {
                                            color:
                                                index === gender
                                                    ? appColors.white
                                                    : appColors.text_dark_blue,
                                        },
                                    ]}
                                >
                                    {sexual}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Text
                        style={[
                            appStyles.text_label,
                            {
                                fontFamily: AppFonts.medium,
                            },
                        ]}
                    >
                        {birthDateLabel}
                    </Text>
                    <View style={styles.date_picker}>
                        <DatePicker
                            fadeToColor="none"
                            textColor={appColors.text_dark_blue}
                            locale="he"
                            mode="date"
                            date={date}
                            onDateChange={date => {
                                handleOnDate(date);
                            }}
                            androidVariant="nativeAndroid"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};
