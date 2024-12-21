/** COMPONENTS */
import Typography from "@mui/material/Typography";

/** STYLES */
import styled from "styled-components";

interface StyledTypographyProps {
  component?: React.ElementType;
}

export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  color: ${({ theme }) => theme.palette.primary.main};
  max-width: 750px;

  &.MuiTypography-root {
    margin: 1.5em 0;
  }
`;
