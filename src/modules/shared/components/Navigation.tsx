/** LIBRARIES */
import { type FC } from "react";

/** MODELS */
import { type ILink } from "@shared/models/miscellaneous";

/** STYLED COMPONENTS */
import { StyledNavLink } from "@shared/components/styled/StyledNavLink";

/** STYLES */
import styled from "styled-components";

const StyledNav = styled("nav")`
  display: flex;
`;

interface NavigationProps {
  links: ILink[];
}

const Navigation: FC<NavigationProps> = ({ links }) => {
  return (
    <StyledNav>
      {links.map(({ label, path }) => (
        <StyledNavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          colorMode="contrastText"
          key={path}
          to={path}
        >
          {label}
        </StyledNavLink>
      ))}
    </StyledNav>
  );
};

export default Navigation;
