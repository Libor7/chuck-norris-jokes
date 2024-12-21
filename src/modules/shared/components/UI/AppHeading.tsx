/** COMPONENTS */
import Typography, { type TypographyProps } from "@mui/material/Typography";

/** LIBRARIES */
import { type FC } from "react";

/** OTHER */
import { CONTENT } from "@shared/utils/content";

/** STYLES */
import styled from "styled-components";

const StyledHeading = styled(Typography)`
  padding: 0.5em;
`;

const AppHeading: FC<TypographyProps> = (props) => {
  const component = props.component || "h1";
  const variant = props.variant || "h5";

  return (
    <StyledHeading variant={variant} component={component} {...props}>
      {CONTENT.MAIN_HEADING}
    </StyledHeading>
  );
};

export default AppHeading;
