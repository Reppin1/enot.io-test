export interface Result {
  description: string;
  link: string;
  title: string;
  content: string;
  category: string[];
  country: string[];
  creator: string[];
  language: string;
}

export interface Response {
  status: string;
  nextPage: number;
  totalResults: number;
  results: Result[];
}