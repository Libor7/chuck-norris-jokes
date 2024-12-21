/** CUSTOM COMPONENTS */
import Button from "@shared/components/UI/Button";

/** STYLES */
import styled from "styled-components";

export const StyledSearchButton = styled(Button)`
  &.MuiButton-root {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    border-radius: 0;
    margin-bottom: 2em;
    max-width: 350px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;
