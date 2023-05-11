import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import React, { useCallback, useImperativeHandle, useRef } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    Keyboard,
    InteractionManager,
    StyleSheet,
    I18nManager,
} from 'react-native';

export type InputCodeHandler = {
    focus(): void;
};

type Props = {
    code: string;
    length: number;
    onChangeCode?: (code: string) => void | Promise<void>;
    onFullFill?: (code: string) => void | Promise<void>;

    passcode?: boolean;
    passcodeChar?: string;
    autoFocus?: boolean;
    oneTimeCode?: boolean;

    style?: ViewStyle;
    codeContainerStyle?: ViewStyle;
    codeContainerCaretStyle?: ViewStyle;
    codeTextStyle?: TextStyle;

    testID?: string;
};

const InputCode = React.forwardRef<InputCodeHandler, Props>(
    (
        {
            code,
            length,
            onChangeCode,
            onFullFill,
            passcode,
            passcodeChar,
            autoFocus,
            oneTimeCode,
            style,
            testID,
        },
        ref
    ) => {
        const textInputCode = useRef<TextInput>(null);

        useImperativeHandle(ref, () => ({
            focus: () => {
                textInputCode.current!.focus();
            },
        }));

        const onPressCode = useCallback(() => {
            textInputCode.current!.blur();
            if (!textInputCode.current!.isFocused()) {
                textInputCode.current!.focus();
            }
        }, []);

        const onChangeText = useCallback(
            (value: string) => {
                const newCode = value.replace(/[^0-9]/g, '');
                if (code === newCode) return;

                onChangeCode && onChangeCode(newCode);

                if (newCode.length === length) {
                    Keyboard.dismiss();
                    InteractionManager.runAfterInteractions(() => {
                        onFullFill && onFullFill(newCode);
                    });
                }
            },
            [code, length, onChangeCode, onFullFill]
        );

        const extractCode = (index: number) => {
            if (code.length <= index) return '';

            if (passcode) {
                return passcodeChar || '*';
            }

            console.log('Extracting code', code);

            return String(code).substr(index, 1);
        };

        const renderCode = (index: number) => (
            <View
                style={[
                    styles.codeContainer,
                    {
                        borderColor:
                            index === code.length ? appColors.blue_light : appColors.medium_gray,
                    },
                ]}
                key={'input-code-' + index.toString()}
            >
                <Text
                    style={{
                        fontSize: 36,
                        color: appColors.text_dark_blue,
                        fontFamily: AppFonts.bold,
                    }}
                >
                    {extractCode(index)}
                </Text>
            </View>
        );

        return (
            <>
                <View style={style}>
                    <TouchableOpacity
                        onPress={onPressCode}
                        style={{ alignItems: 'stretch' }}
                        activeOpacity={1}
                    >
                        <View
                            style={{
                                flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
                                justifyContent: 'space-around',
                            }}
                        >
                            {Array(length)
                                .fill(0)
                                .map((item, index) => renderCode(index))}
                        </View>
                    </TouchableOpacity>
                </View>

                <TextInput
                    value={code}
                    onChangeText={onChangeText}
                    ref={textInputCode}
                    maxLength={length}
                    autoFocus={autoFocus}
                    caretHidden={true}
                    textContentType={oneTimeCode ? 'oneTimeCode' : undefined}
                    keyboardType="number-pad"
                    style={{
                        fontSize: 0,
                        height: 1,
                        opacity: 0,
                        margin: 0,
                        padding: 0,
                    }}
                    testID={testID}
                />
            </>
        );
    }
);

const styles = StyleSheet.create({
    codeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 63,
        height: 63,
        borderRadius: getSize.m(15),
        // borderColor: appColors.medium_gray,
        borderWidth: getSize.m(1),
        backgroundColor: 'white',
    },
});

InputCode.defaultProps = {
    autoFocus: false,
};

export default InputCode;
