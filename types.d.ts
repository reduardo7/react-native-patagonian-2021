// https://app.quicktype.io/?l=ts

interface Book {
  id: number;
  title: string;
  author: string;
  publish_date: PublishDate[];
  plot_take_place_years: string[];
  book_covers: BookCover[];
  characters: number[];
}

interface BookCover {
  id: number;
  country: 'UK' | 'US';
  edition: string;
  artist: string;
  URL: string;
}

interface PublishDate {
  UK?: string;
  US?: string;
}

interface Character {
  id: number;
  name: string;
  birth: null | string;
  death: null | string;
  species: null | string;
  ancestry: null | string;
  gender: Gender | null;
  hair_color: null | string;
  eye_color: null | string;
  wand: null | string;
  patronus: null | string;
  house: null | string;
  associated_groups: string[];
  books_featured_in: number[];
}

enum Gender {
  AtLeastOneBoy = 'At least one boy',
  Female = 'Female',
  FemaleLikely = 'Female (likely)',
  Females = 'Females',
  FemalesMales = 'Females, Males',
  Male = 'Male',
  MaleLikely = 'Male (likely)',
  MaleMostLikely = 'Male (most likely)',
  Males = 'Males',
  MalesAndFemales = 'Males and females',
}
