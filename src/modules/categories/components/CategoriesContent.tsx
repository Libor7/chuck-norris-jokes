/** COMPONENTS */
import Pagination from "@mui/material/Pagination";

/** CUSTOM COMPONENTS */
import CategoriesContainer from "@categories/components/layout/CategoriesContainer";
import List from "@categories/components/List";
import ResetButton from "@shared/components/UI/Button";
import Text from "@shared/components/UI/Text";

/** HOOKS */
import useWindowSize from "@shared/hooks/useWindowSize";

/** LIBRARIES */
import { useCallback, useMemo, type FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

/** MODELS */
import { Category } from "@categories/models/store";

/** OTHER */
import { RECORDS_PER_PAGE } from "@shared/utils/constants";
import { getRandomArrayItem, keyHandler } from "@shared/utils/helper";
import { type RootState, useAppDispatch } from "@shared/store";
import { categoriesActions } from "@categories/store/categories";

/** STYLED COMPONENTS */
import { StyledGrid } from "@shared/components/styled/StyledGrid";
import { StyledHeading2 } from "@shared/components/styled/StyledHeading2";

interface CategoriesContentProps {
  items: Category[];
}

const CategoriesContent: FC<CategoriesContentProps> = ({ items }) => {
  const appDispatch = useAppDispatch();
  const { windowWidth } = useWindowSize();
  const { t } = useTranslation();
  const { currentCategory, currentPage } = useSelector(
    ({ categories }: RootState) => categories
  );
  const { appBarHeight } = useSelector(({ shared }: RootState) => shared);

  const categoryTextOptions = useMemo(
    () => [
      t("modules.categories.categoryTextOptions.option1"),
      t("modules.categories.categoryTextOptions.option2"),
      t("modules.categories.categoryTextOptions.option3"),
      t("modules.categories.categoryTextOptions.option4"),
      t("modules.categories.categoryTextOptions.option5"),
      t("modules.categories.categoryTextOptions.option6"),
      t("modules.categories.categoryTextOptions.option7"),
      t("modules.categories.categoryTextOptions.option8"),
      t("modules.categories.categoryTextOptions.option9"),
      t("modules.categories.categoryTextOptions.option10"),
      t("modules.categories.categoryTextOptions.option11"),
      t("modules.categories.categoryTextOptions.option12"),
      t("modules.categories.categoryTextOptions.option13"),
    ],
    [t]
  );
  const randomOption = getRandomArrayItem(categoryTextOptions);

  const wideScreen = windowWidth >= 600;
  const pageCount = Math.ceil(items.length / RECORDS_PER_PAGE);
  const noCategorySelected = currentCategory === Category.ALL;
  const categoryInfo = noCategorySelected
    ? t("modules.categories.hint")
    : t("modules.categories.categorySelected", {
        text: randomOption,
        selectedCategory: currentCategory,
      });

  const categoryResetHandler = useCallback(
    () => appDispatch(categoriesActions.setCategory(Category.ALL)),
    [appDispatch]
  );

  return (
    <StyledGrid headerHeight={appBarHeight}>
      <StyledHeading2>{t("modules.categories.heading")}</StyledHeading2>
      <Text text={categoryInfo} />
      {!noCategorySelected && (
        <ResetButton
          onClick={categoryResetHandler}
          onKeyDown={({ key }) => keyHandler(key, categoryResetHandler)}
          size="large"
        >
          {t("modules.categories.resetBtnLabel")}
        </ResetButton>
      )}
      {wideScreen ? (
        <CategoriesContainer>
          <List items={items} />
        </CategoriesContainer>
      ) : (
        <List items={items} />
      )}
      <Pagination
        color="secondary"
        count={pageCount}
        onChange={(_, value) =>
          appDispatch(categoriesActions.setCurrentPage(value))
        }
        page={currentPage}
        showFirstButton
        showLastButton
        size="large"
      />
    </StyledGrid>
  );
};

export default CategoriesContent;
