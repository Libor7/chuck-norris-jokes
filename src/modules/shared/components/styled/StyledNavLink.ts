/** LIBRARIES */
import { NavLink } from "react-router";

/** MODELS */
import {
  type ColorModeMap,
  type CustomPaletteKeys,
} from "@shared/models/theme";

/** STYLES */
import styled from "styled-components";
import { type Theme } from "@mui/material/styles";

const notForwardProps = ["color", "colorMode"];

interface StyledNavLinkProps {
  color?: CustomPaletteKeys;
  colorMode?: ColorModeMap[CustomPaletteKeys];
}

export const StyledNavLink = styled(NavLink).withConfig({
  shouldForwardProp: (prop) => notForwardProps.indexOf(prop) === -1,
})<StyledNavLinkProps>`
  color: ${({ color = "primary", colorMode = "main", theme }) =>
    theme.palette[color as keyof Theme["palette"]][colorMode]};
  display: block;
  font-size: 1.25em;
  height: 100%;
  padding: 0.375em 1em;
  text-decoration: none;
  width: 100%;

  &.active {
    cursor: default;
  }

  &:not(.active) {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;
