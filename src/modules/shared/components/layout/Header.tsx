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
import { useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router";

/** MODELS */
import { type ILink } from "@shared/models/miscellaneous";

/** OTHER */
import { useAppDispatch } from "@shared/store";
import { sharedActions } from "@shared/store/shared";
/** STYLES */
import styled from "styled-components";

const StyledToolbar = styled(Toolbar)`
  height: 100%;

  & > .MuiTypography-root {
    font-size: 2em;
  }
`;

const Header = () => {
  const appDispatch = useAppDispatch();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { windowWidth } = useWindowSize();
  const appBarRef = useRef<HTMLElement>(null);

  const links: ILink[] = useMemo(
    () => [
      {
        label: t("modules.shared.links.home.label"),
        path: "home",
      },
      {
        label: t("modules.shared.links.categories.label"),
        path: "categories",
      },
    ],
    [t]
  );

  const wideScreen = windowWidth >= 600;
  const nonactiveLinks = links.filter(
    (link) => link.path !== pathname.slice(1)
  );

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
