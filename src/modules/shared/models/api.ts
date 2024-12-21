/** MODELS */
import { Category } from "@categories/models/store";
import { type IJoke } from "@home/models/store";

export type UrlParam = { category: Category } | { query: string };

export interface ISearchResponse {
  result: IJoke[];
  total: number;
}

export interface ICustomError {
  status: number;
  message: string;
}
