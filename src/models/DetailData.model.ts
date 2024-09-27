import { ReactNode } from "react";

export interface IdetailData {
    id: number;
    primaryColor: string;
    URLS: IURLS;
    title: string;
    subTitle: string;
    workTime: string;
    organize: string;
    imgs : string[];
    description: {
      topPart?: ReactNode;
      bottomPart: ReactNode;
    };
    lists: {
      title: string;
      items: ReactNode;
    }[];
}

export interface IURLS {
    githubURL : string;
    blogURL : string;
    serviceURL : string;
    serviceBoolean : boolean,
}
