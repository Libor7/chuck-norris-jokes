/** COMPONENTS */
import Button, { type ButtonProps } from "@mui/material/Button";

/** LIBRARIES */
import { type FC, type PropsWithChildren } from "react";

/** STYLES */
import styled from "styled-components";

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    word-spacing: 0.25em;
  }
`;

const ButtonComp: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...otherProps
}) => {
  const variant = otherProps.variant || "contained";

  return (
    <StyledButton disableElevation variant={variant} {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default ButtonComp;
