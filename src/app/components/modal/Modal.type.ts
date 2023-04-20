export type IModalProps = {
    visible: boolean;
    title: string;
    subTitle: string;
    option1: string;
    option2: string;
    exitApp?: boolean;
    onDismiss?: () => void;
    onOption1?: () => void;
    onOption2?: () => void;
};
