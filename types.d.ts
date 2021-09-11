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
