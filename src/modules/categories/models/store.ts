export enum Category {
  ALL = "all",
  ANIMAL = "animal",
  CAREER = "career",
  CELEBRITY = "celebrity",
  DEV = "dev",
  EXPLICIT = "explicit",
  FASHION = "fashion",
  FOOD = "food",
  HISTORY = "history",
  MONEY = "money",
  MOVIE = "movie",
  MUSIC = "music",
  POLITICAL = "political",
  RELIGION = "religion",
  SCIENCE = "science",
  SPORT = "sport",
  TRAVEL = "travel",
}

export interface ICategoriesState {
  categories: Category[];
  currentCategory: Category;
  currentPage: number;
}
