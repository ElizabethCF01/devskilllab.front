export interface Challenge {
  id: number;
  attributes: ChallengeAttr;
}
export interface ChallengeAttr {
  Difficulty: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  ShortDescription: string;
  Title: string;
  Images: ChallengeImages;
}
export interface DescriptionBlock {
  type: string;
  children: DescriptionBlockChild[];
}
export interface DescriptionBlockChild {
  type: string;
  text: string;
}

export interface ChallengesResponse {
  data: Challenge[];
}

export interface ChallengeImages {
  data: Images[];
}
export interface Images {
  id: number;
  attributes: ImageAttr;
}
export interface ImageAttr {
  name: string;
  alternativeText: string;
  url: string;
}
// const c = {
//   id: 2,
//   attributes: {
//     name: "addy-osmani-MRbIw_76G94-unsplash.jpg",
//     alternativeText: null,
//     caption: null,
//     width: 4032,
//     height: 2268,

//     hash: "addy_osmani_M_Rb_Iw_76_G94_unsplash_b6e12aef9a",
//     ext: ".jpg",
//     mime: "image/jpeg",
//     size: 820.76,
//     url: "/uploads/addy_osmani_M_Rb_Iw_76_G94_unsplash_b6e12aef9a.jpg",
//     previewUrl: null,
//     provider: "local",
//     provider_metadata: null,
//     createdAt: "2024-06-06T21:05:29.625Z",
//     updatedAt: "2024-06-06T21:05:29.625Z",
//   },
// };
