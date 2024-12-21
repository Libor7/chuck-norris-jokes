/** COMPONENTS */
import TextField from "@mui/material/TextField";

/** STYLES */
import styled from "styled-components";

export const StyledSearchField = styled(TextField)`
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  max-width: 350px;

  &.MuiTextField-root * {
    border: none;
  }

  & input[type="search"]::-webkit-search-cancel-button {
    display: none;
  }
`;
