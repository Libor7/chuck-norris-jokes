/** MODELS */
import { type UrlParam } from "modules/shared/models/api";

export const appendUrlParams = (url: string, param: UrlParam) => {
  const [key, value] = Object.entries(param)[0];
  return `${url}?${key}=${value}`;
};

export const getArraySlice = <T>(arr: T[], from: number, to: number) =>
  arr.slice(from, to);

export const getRandomArrayItem = <T>(arr: T[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const keyHandler = (key: string, handler: () => void) =>
  key === "Enter" && handler();
