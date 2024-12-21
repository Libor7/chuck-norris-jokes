/** COMPONENTS */
import CircularProgress from "@mui/material/CircularProgress";

/** STYLES */
import styled from "styled-components";

export const StyledFallback = styled(CircularProgress)`
  color: ${({ theme }) => theme.palette.primary.main};
  position: absolute;
  top: calc(50% - 2.5em);
  left: calc(50% - 2.5em);
`;
