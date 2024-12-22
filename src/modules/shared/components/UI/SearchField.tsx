/** COMPONENTS */
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

/** ICONS */
import ClearIcon from "@mui/icons-material/Clear";

/** LIBRARIES */
import { type ChangeEvent, useCallback, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";

/** MODERN */
import { type ClearIconDisplayType } from "@shared/models/miscellaneous";

/** OTHER */
import { type RootState, useAppDispatch } from "@shared/store";
import { homeActions } from "@home/store/home";
import { keyHandler } from "@shared/utils/helper";

/** STYLED COMPONENTS */
import { StyledSearchField } from "@shared/components/styled/StyledSearchField";

/** STYLES */
import styled from "styled-components";

const StyledClearIcon = styled(ClearIcon)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

const SearchField = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation();
  const { searchedText } = useSelector(({ home }: RootState) => home);
  const [showClearIcon, setShowClearIcon] =
    useState<ClearIconDisplayType>("none");

  const changeHandler = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setShowClearIcon(target.value === "" ? "none" : "flex");
      appDispatch(homeActions.setSearchedText(target.value));
    },
    [appDispatch]
  );

  const clearHandler = useCallback(() => {
    setShowClearIcon("none");
    appDispatch(homeActions.setSearchedText(""));
  }, [appDispatch]);

  return (
    <StyledSearchField
      fullWidth
      InputProps={{
        onKeyDown: ({ key }) => keyHandler(key, () => setShowClearIcon("none")),
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{ display: showClearIcon, cursor: "pointer" }}
            onClick={clearHandler}
          >
            <IconButton>
              <StyledClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      onChange={changeHandler}
      placeholder={t("modules.home.searchBtn.placeholder")}
      type="search"
      value={searchedText}
    />
  );
};

export default SearchField;
