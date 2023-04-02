import { placesName } from "./Course.type";

export interface CourseList {
  id?: number;
  title: string;
  likeCount: number;
  courseDays?: string;
  createdDate?: string;
  thumbnailUrl: string;
  isPublished?: boolean;
  content?: string;
  places?: placesName[];
}

export type CourseListProps = {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  courseDays: string;
  thumbnailUrl: string;
  places: placesName[];
};

export interface RoughMapTitle {
  RoughMapData: placesName[];
  onClose: any;
}

export interface CourseDetailType {
  title: string;
  nickname: string;
  likeCount: number | string;
  courseDays: string;
  region: string;
  content: string;
  createdDate: string;
  places: CourseDetailPlaces[];
}

export interface CourseDetailPlaces {
  placeId: number;
  imgUrl: string;
  name: string;
  address: string;
  mapX: string;
  mapY: string;
}

export interface kakaoPlaces {
  placeId: number;
  name: string;
  mapX: string;
  mapY: string;
}

export interface PositionsProps {
  positions: kakaoPlaces[];
}

export interface formatPositions {}
