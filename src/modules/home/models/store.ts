/** MODELS */
import { Category } from "@categories/models/store";

export interface IHomeState {
  currentJoke: IJoke | null;
  searchedText: string;
}

export interface IJoke {
  categories: Category[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}
