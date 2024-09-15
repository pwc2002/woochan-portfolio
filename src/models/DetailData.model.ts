export interface IdetailData {
    id: number
    primaryColor: string;
    title: string;
    subTitle: string;
    workTime: string;
    organize: string;
    description: {
        topPart: React.JSX.Element;
        bottomPart: React.JSX.Element;
    };
    lists: {
        title : string;
        items : React.JSX.Element
    }[];
    
}