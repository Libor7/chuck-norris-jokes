/** LIBRARIES */
import { type FC, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

/** MODELS */
import { Category } from "@categories/models/store";

/** OTHER */
import { RECORDS_PER_PAGE } from "@shared/utils/constants";
import { getArraySlice, keyHandler } from "@shared/utils/helper";
import { type RootState, useAppDispatch } from "@shared/store";
import { categoriesActions } from "@categories/store/categories";

/** STYLED COMPONENTS */
import { StyledListItem } from "@categories/components/styled/StyledListItem";
import { StyledList } from "@shared/components/styled/StyledList";

interface ListProps {
  items: Category[];
}

const List: FC<ListProps> = ({ items }) => {
  const appDispatch = useAppDispatch();
  const { currentPage, currentCategory } = useSelector(
    ({ categories }: RootState) => categories
  );

  const fromIndex = Math.max(
    RECORDS_PER_PAGE * currentPage - RECORDS_PER_PAGE,
    0
  );
  
  const itemsDisplayed = useMemo(
    () =>
      items.length > RECORDS_PER_PAGE
        ? getArraySlice(items, fromIndex, RECORDS_PER_PAGE + fromIndex)
        : items,
    [fromIndex, items]
  );

  const itemClickHandler = useCallback(
    (value: Category) => {
      if (value !== currentCategory)
        appDispatch(categoriesActions.setCategory(value));
    },
    [appDispatch, currentCategory]
  );

  return (
    <StyledList>
      {itemsDisplayed.map((item) => (
        <StyledListItem
          button
          className={`${item === currentCategory && "active"}`}
          key={item}
          onClick={itemClickHandler.bind(null, item)}
          onKeyDown={({ key }) =>
            keyHandler(key, itemClickHandler.bind(null, item))
          }
          tabIndex={0}
        >
          {item}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;
