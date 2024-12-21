/** COMPONENTS */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

/** CUSTOM COMPONENTS */
import AppHeading from "@shared/components/UI/AppHeading";
import Navigation from "@shared/components/Navigation";
import NavigationMobile from "@shared/components/NavigationMobile";

/** HOOKS */
import useWindowSize from "@shared/hooks/useWindowSize";

/** LIBRARIES */
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";

/** MODELS */
import { type ILink } from "@shared/models/miscellaneous";

/** OTHER */
import { useAppDispatch } from "@shared/store";
import { sharedActions } from "@shared/store/shared";
import { CONTENT } from "@shared/utils/content";

/** STYLES */
import styled from "styled-components";

const StyledToolbar = styled(Toolbar)`
  height: 100%;

  & > .MuiTypography-root {
    font-size: 2em;
  }
`;

const { CATEGORIES, HOME } = CONTENT.LINKS;

const links: ILink[] = [
  {
    label: HOME.LABEL,
    path: "home",
  },
  {
    label: CATEGORIES.LABEL,
    path: "categories",
  },
];

const Header = () => {
  const appDispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { windowWidth } = useWindowSize();
  const appBarRef = useRef<HTMLElement>(null);

  const wideScreen = windowWidth >= 600;
  const nonactiveLinks = links.filter((link) => link.path !== pathname.slice(1));

  useEffect(() => {
    if (appBarRef.current) {
      appDispatch(
        sharedActions.setAppBarHeight(appBarRef.current.offsetHeight)
      );
    }
  }, [appDispatch]);

  return (
    <>
      <AppBar position="static" ref={appBarRef}>
        <StyledToolbar disableGutters>
          {!wideScreen && <NavigationMobile links={nonactiveLinks} />}
          <AppHeading />
          {wideScreen && <Navigation links={nonactiveLinks} />}
        </StyledToolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;
