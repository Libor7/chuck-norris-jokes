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
import { Outlet } from "react-router";

/** MODELS */
import { type ILink } from "@shared/models/miscellaneous";

/** OTHER */
import { useAppDispatch } from "@shared/store";
import { sharedActions } from "@shared/store/shared";
import { CONTENT } from "@shared/utils/content";

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
  const { windowWidth } = useWindowSize();
  const appBarRef = useRef<HTMLElement>(null);

  const wideScreen = windowWidth >= 600;

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
        <Toolbar disableGutters>
          {!wideScreen && <NavigationMobile links={links} />}
          <AppHeading />
          {wideScreen && <Navigation links={links} />}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Header;
