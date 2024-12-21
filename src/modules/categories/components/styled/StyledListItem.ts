/** COMPONENTS */
import ListItem from "@mui/material/ListItem";

/** STYLES */
import styled from "styled-components";

const notForwardProps = ["button"];

interface StyledListItemProps {
  button?: boolean;
}

export const StyledListItem = styled(ListItem).withConfig({
  shouldForwardProp: (prop) => notForwardProps.indexOf(prop) === -1,
})<StyledListItemProps>`
  cursor: pointer;
  font-size: 1.25em;

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 700;
  }

  &.MuiListItem-root {
    display: block;
    padding: 1em;
    text-align: center;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:not(.active):hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  &:not(.active):focus,
  &:not(.active):focus-visible {
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex: 0 0 50%;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex: 0 0 calc(100% / 3);
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    flex: 0 0 25%;
  }
`;
