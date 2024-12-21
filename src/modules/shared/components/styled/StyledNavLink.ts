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
  font-size: 1.5em;
  padding: 0.25em 1em;
  text-decoration: none;

  &:focus,
  &:focus-visible {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    outline: none;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 1em;

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`;
