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
import { useCallback, type FC } from "react";
import { useSelector } from "react-redux";

/** MODELS */
import { Category } from "@categories/models/store";

/** OTHER */
import { CONTENT } from "@categories/utils/content";
import { RECORDS_PER_PAGE } from "@shared/utils/constants";
import { keyHandler } from "@shared/utils/helper";
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
  const { currentCategory, currentPage } = useSelector(
    ({ categories }: RootState) => categories
  );
  const { appBarHeight } = useSelector(({ shared }: RootState) => shared);

  const wideScreen = windowWidth >= 600;
  const pageCount = Math.ceil(items.length / RECORDS_PER_PAGE);  
  const { CATEGORY_SELECTED, HINT, RESET_BTN_LABEL } = CONTENT.TEXT;
  const noCategorySelected = currentCategory === Category.ALL;
  const categoryInfo = noCategorySelected
    ? HINT
    : CATEGORY_SELECTED(currentCategory);

  const categoryResetHandler = useCallback(
    () => appDispatch(categoriesActions.setCategory(Category.ALL)),
    [appDispatch]
  );

  return (
    <StyledGrid headerHeight={appBarHeight}>
      <StyledHeading2>{CONTENT.HEADING}</StyledHeading2>
      <Text text={categoryInfo} />
      {!noCategorySelected && (
        <ResetButton
          onClick={categoryResetHandler}
          onKeyDown={({ key }) => keyHandler(key, categoryResetHandler)}
          size="large"
        >
          {RESET_BTN_LABEL}
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
