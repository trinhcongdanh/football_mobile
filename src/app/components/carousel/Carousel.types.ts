export type ICarouselProps = {
    data: any[];
    itemPerPage?: number;
    height: number;
    widthPerItem?: number;
    renderItem: (item: any) => any;
    center?: boolean;
    activePageColor?: string;
    autoPlay?: boolean;
    defaultIndex?: number;
};
