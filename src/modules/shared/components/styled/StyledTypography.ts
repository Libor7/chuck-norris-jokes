/** COMPONENTS */
import Typography from "@mui/material/Typography";

/** STYLES */
import styled from "styled-components";

interface StyledTypographyProps {
  component?: React.ElementType;
}

export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  color: ${({ theme }) => theme.palette.secondary.dark};
  max-width: 500px;

  &.MuiTypography-root {
    margin-bottom: 1.5em;
  }
`;
