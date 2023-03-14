export interface NotificationModel {
    collapseKey: string;
    data: NotificationData;
    from: string;
    messageId: string;
    notification: Notification;
    sentTime: number;
    ttl: number;
}

interface Notification {
    body: string;
    title: string;
}

export interface NotificationData {
    target_id: string;
    target_section: string;
    target_type: string;
}
