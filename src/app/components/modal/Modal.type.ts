export type IModalProps = {
    title: string;
    subTitle: string;
    onDismiss?: () => void;
    onClose?: () => void;
    onOk?: () => void;
};
