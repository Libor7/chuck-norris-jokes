/** CUSTOM COMPONENTS */
import ErrorMessage from "@shared/components/UI/ErrorMessage";
import InfoText from "@shared/components/UI/InfoText";
import Joke from "@home/components/Joke";
import SearchField from "@shared/components/UI/SearchField";

/** LIBRARIES */
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { type LoaderFunction, useLoaderData } from "react-router";

/** MODELS */
import { Category } from "@categories/models/store";
import { type IJoke } from "@home/models/store";
import { type ICustomError, type ISearchResponse } from "@shared/models/api";

/** OTHER */
import { DOMAIN, PATHS } from "@shared/utils/constants";
import { CONTENT } from "@home/utils/content";
import { getRandomArrayItem } from "@shared/utils/helper";
import { type RootState, useAppDispatch } from "@shared/store";
import { homeActions } from "@home/store/home";

/** SERVICES */
import { getData } from "@shared/services/api/chuckNorris";

/** STYLED COMPONENTS */
import { StyledSearchButton } from "@home/components/styled/StyledSearchButton";
import { StyledGrid } from "@shared/components/styled/StyledGrid";

const randomJokeUrl = `${DOMAIN}${PATHS.JOKES}${PATHS.RANDOM}`;
const textSearchUrl = `${DOMAIN}${PATHS.JOKES}${PATHS.SEARCH}`;

const HomePage = () => {
  const appDispatch = useAppDispatch();
  const data = useLoaderData<IJoke>();
  const { currentCategory } = useSelector(
    ({ categories }: RootState) => categories
  );
  const { searchedText, currentJoke } = useSelector(
    ({ home }: RootState) => home
  );
  const { appBarHeight } = useSelector(({ shared }: RootState) => shared);
  const [error, setError] = useState<string | null>(null);

  const btnLabel =
    searchedText.length > 0 || currentCategory === Category.ALL
      ? null
      : currentCategory;
  const { NO_JOKE_FOUND, SEARCH_BTN } = CONTENT.TEXT;

  useEffect(() => {
    if (data) appDispatch(homeActions.setJoke(data));
  }, [appDispatch, data]);

  const searchHandler = useCallback(() => {
    if (searchedText.length > 0) {
      getData(textSearchUrl, { query: searchedText })
        .then(({ result, total }: ISearchResponse) => {
          if (total === 0) {
            appDispatch(homeActions.setJoke(null));
          } else {
            const joke = getRandomArrayItem<IJoke>(result);
            appDispatch(homeActions.setJoke(joke));
          }
        })
        .catch(({ message }: ICustomError) => setError(message));
    } else if (currentCategory === Category.ALL) {
      getData(randomJokeUrl)
        .then((joke: IJoke) => appDispatch(homeActions.setJoke(joke)))
        .catch(({ message }: ICustomError) => setError(message));
    } else {
      getData(randomJokeUrl, { category: currentCategory })
        .then((joke: IJoke) => appDispatch(homeActions.setJoke(joke)))
        .catch(({ message }: ICustomError) => setError(message));
    }
  }, [appDispatch, currentCategory, searchedText]);

  const errorCloseHandler = useCallback(() => setError(null), []);

  return (
    <>
      <StyledGrid headerHeight={appBarHeight}>
        <SearchField />
        <StyledSearchButton fullWidth size="large" onClick={searchHandler}>
          {SEARCH_BTN.LABEL(btnLabel)}
        </StyledSearchButton>
        {currentJoke ? (
          <Joke />
        ) : (
          <InfoText text={NO_JOKE_FOUND(searchedText)} />
        )}
      </StyledGrid>
      <ErrorMessage closeHandler={errorCloseHandler} error={error} />
    </>
  );
};

export default HomePage;

export const loader: LoaderFunction = async () => {
  return getData(randomJokeUrl);
};