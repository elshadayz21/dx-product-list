import { ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  description: ReactNode;
  link?: string;
  file?: string;
  moto?: string;
  video?: string;
  videos?: string[];
  iframeUrls?: string[];
  imageUrl: string;
  type?:string;
  vslaPhotos?: VslaPhoto[];
  produtType?:string;

}
interface VslaPhoto {
  src: string;
  alt: string;
}

export interface ImageSliderProps1 {
vslaPhotos: VslaPhoto[];
  autoplayInterval?: number
  className?: string
}


export interface ImageSliderProps {
  vslaPhotos: VslaPhoto[];
}

export interface DashboardStat {
  key: string;
  label: string;
  target: number;
  suffix?: string;
  icon: ReactNode;
}
