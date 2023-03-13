export type IModalProps = {
    visible: boolean;
    title: string;
    subTitle: string;
    onDismiss?: () => void;
    onClose?: () => void;
    onOk?: () => void;
};
