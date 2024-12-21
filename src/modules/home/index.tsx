/** CUSTOM COMPONENTS */
import ErrorMessage from "@shared/components/UI/ErrorMessage";
import SearchField from "@shared/components/UI/SearchField";
import Text from "@shared/components/UI/Text";

/** LIBRARIES */
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router";

/** MODELS */
import { Category } from "@categories/models/store";
import { type IJoke } from "@home/models/store";
import { type ICustomError, type ISearchResponse } from "@shared/models/api";

/** OTHER */
import { PATHS } from "@shared/utils/constants";
import { getRandomArrayItem } from "@shared/utils/helper";
import { type RootState, useAppDispatch } from "@shared/store";
import { homeActions } from "@home/store/home";

/** SERVICES */
import { getData } from "@shared/services/api/chuckNorris";

/** STYLED COMPONENTS */
import { StyledSearchButton } from "@home/components/styled/StyledSearchButton";
import { StyledGrid } from "@shared/components/styled/StyledGrid";

export const randomJokeUrl = `${import.meta.env.VITE_DOMAIN}${PATHS.JOKES}${PATHS.RANDOM}`;
const textSearchUrl = `${import.meta.env.VITE_DOMAIN}${PATHS.JOKES}${PATHS.SEARCH}`;

const HomePage = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation();
  const data = useLoaderData<IJoke>();
  const { currentCategory } = useSelector(
    ({ categories }: RootState) => categories
  );
  const { searchedText, currentJoke } = useSelector(
    ({ home }: RootState) => home
  );
  const { appBarHeight } = useSelector(({ shared }: RootState) => shared);
  const [error, setError] = useState<string | null>(null);

  const btnLabel = useMemo(
    () =>
      searchedText.length > 0 || currentCategory === Category.ALL
        ? "some "
        : currentCategory,
    [currentCategory, searchedText.length]
  );

  const textContent = useMemo(
    () => (currentJoke ? currentJoke.value : t("modules.home.noJokeFound")),
    [currentJoke, t]
  );

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
          {t("modules.home.searchBtn.label", { content: btnLabel })}
        </StyledSearchButton>
        <Text text={textContent} />
      </StyledGrid>
      <ErrorMessage closeHandler={errorCloseHandler} error={error} />
    </>
  );
};

export default HomePage;
