import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { Button } from '@football/app/components/button';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import Input from '@football/app/components/input/Input';
import styles from '@football/app/screens/football-contact-us/ContactUsScreen.styles';
import { IContactUsScreenProps } from '@football/app/screens/football-contact-us/ContactUsScreen.type';
import { useViewModel } from '@football/app/screens/football-contact-us/ContactUsScreen.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    View,
} from 'react-native';

export const ContactUsScreen = ({ navigation, route }: IContactUsScreenProps) => {
    const {
        t,
        onGoBack,
        applicationRef,
        application,
        setApplication,
        nameRef,
        name,
        setName,
        emailRef,
        email,
        setEmail,
        titleRef,
        title,
        setTitle,
        contentRef,
        content,
        setContent,
        handleError,
        errors,
        submitContact,
    } = useViewModel({ navigation, route });
    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title={t('side_menu.contact_us')}
                        />
                    </View>
                    <ScrollView>
                        <View style={styles.contact_us_conatiner}>
                            <View style={styles.title}>
                                <Text style={styles.title_text}>התאחדות לכדורגל בישראל</Text>
                            </View>
                            <View style={{ marginTop: getSize.m(16) }}>
                                <Input
                                    input={name}
                                    inputRef={nameRef}
                                    backgroundColor={appColors.white}
                                    backgroundColorCompleted={appColors.separator}
                                    textColor={appColors.light_gray}
                                    error={errors.name}
                                    placeholder={t('contact_us.name')}
                                    onChangeTextInput={text => setName(text)}
                                    onFocus={() => {
                                        handleError('', 'name');
                                    }}
                                />
                            </View>
                            <View style={{ marginTop: getSize.m(16) }}>
                                <Input
                                    input={email}
                                    inputRef={applicationRef}
                                    error={errors.email}
                                    backgroundColor={appColors.white}
                                    backgroundColorCompleted={appColors.separator}
                                    textColor={appColors.light_gray}
                                    placeholder={t('contact_us.email')}
                                    onChangeTextInput={text => setEmail(text)}
                                    onFocus={() => {
                                        handleError('', 'email');
                                    }}
                                />
                            </View>
                            <View style={{ marginTop: getSize.m(16) }}>
                                <Input
                                    input={title}
                                    inputRef={titleRef}
                                    error={errors.title}
                                    backgroundColor={appColors.white}
                                    backgroundColorCompleted={appColors.separator}
                                    textColor={appColors.light_gray}
                                    placeholder={t('contact_us.title')}
                                    onChangeTextInput={text => setTitle(text)}
                                    onFocus={() => {
                                        handleError('', 'title');
                                    }}
                                />
                            </View>
                            <View style={{ marginTop: getSize.m(16) }}>
                                <TextInput
                                    editable
                                    multiline
                                    numberOfLines={4}
                                    style={[
                                        styles.text_input_content,
                                        {
                                            backgroundColor:
                                                content === ''
                                                    ? appColors.white
                                                    : appColors.separator,
                                        },
                                    ]}
                                    placeholderTextColor={appColors.light_gray}
                                    placeholder={t('contact_us.content')}
                                    onChangeText={text => setContent(text)}
                                    value={content}
                                    ref={contentRef}
                                    onFocus={() => {
                                        handleError('', 'content');
                                    }}
                                />
                            </View>
                            <View>
                                <Button
                                    style={{ borderRadius: getSize.m(15) }}
                                    title={t('contact_us.button')}
                                    onPress={submitContact}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
