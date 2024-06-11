export interface Challenge {
  id: number;
  attributes: ChallengeAttr;
}
export interface ChallengeAttr {
  Difficulty: string;
  Description: DescriptionBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  ShortDescription: string;
  Title: string;
  Images: ChallengeImages;
  styleGuide?: string;
}
export interface DescriptionBlock {
  type: string;
  children: DescriptionBlockChild[] | DescriptionBlock[];
}
export interface DescriptionBlockChild {
  type: string;
  text: string;
}

export interface ChallengesResponse {
  data: Challenge[];
}
export interface ChallengeResponse {
  data: Challenge;
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
