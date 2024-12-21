/** CUSTOM COMPONENTS */
import Button from "@shared/components/UI/Button";

/** STYLES */
import styled from "styled-components";

export const StyledSearchButton = styled(Button)`
  &.MuiButton-root {
    background-color: ${({ theme }) => theme.palette.warning.main};
    border-radius: 0;
    margin-bottom: 2em;
    max-width: 500px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.warning.dark};
  }
`;
