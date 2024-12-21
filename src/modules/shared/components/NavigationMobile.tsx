/** COMPONENTS */
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

/** LIBRARIES */
import { useCallback, useState, type FC } from "react";

/** MODELS */
import { type ILink } from "@shared/models/miscellaneous";

/** STYLED COMPONENTS */
import { StyledNavLink } from "@shared/components/styled/StyledNavLink";
import { StyledMenuItem } from "@shared/components/styled/StyledMenuItem";

interface NavigationMobileProps {
  links: ILink[];
}

const NavigationMobile: FC<NavigationMobileProps> = ({ links }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const openMenu = useCallback(
    ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(currentTarget);
    },
    []
  );

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <nav>
      <IconButton
        size="large"
        aria-label="open menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={openMenu}
        color="inherit"
      >
        <MenuIcon aria-hidden="false" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        {links.map(({ label, path }) => (
          <StyledMenuItem key={path} onClick={closeMenu}>
            <StyledNavLink key={path} to={path}>
              {label}
            </StyledNavLink>
          </StyledMenuItem>
        ))}
      </Menu>
    </nav>
  );
};

export default NavigationMobile;
