/** COMPONENTS */
import Grid2 from "@mui/material/Grid2";

/** STYLES */
import styled from "styled-components";

const notForwardProps = ["headerHeight"];

interface StyledGridProps {
  headerHeight: number;
}

export const StyledGrid = styled(Grid2).withConfig({
  shouldForwardProp: (prop) => notForwardProps.indexOf(prop) === -1,
})<StyledGridProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: ${({ headerHeight }) => `calc(100% - ${headerHeight}px)`};
  padding: 2em;
`;
