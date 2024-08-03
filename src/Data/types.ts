//Homepage swiper
export interface MinSwiper {
  image: {
    src: string;
  };
  title: string;
  content: string;
}

//Footer
export interface FooterData {
  id: number;
  title: string;
  withLinks?: boolean;
  textInfo?: string[];
  sublink?: Sublink[];
}

export interface Sublink {
  sublinkTitle: string;
  sublinkLink: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

export interface CardData {
  title: string;
  description: string;
  linkName: string;
  linkUrl: string;
  image: {
    src: string;
  };
}

export interface CardData {
  title: string;
  description: string;
  linkName: string;
  linkUrl: string;
  image: {
    src: string;
  };
}

export interface TesimonialData {
  testimonial: string;
  name: string;
  subName: string;
}
