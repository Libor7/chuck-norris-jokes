/** COMPONENTS */
import Paper from "@mui/material/Paper";

/** LIBRARIES */
import { type FC, type PropsWithChildren } from "react";

/** STYLES */
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  margin: 2em;
  max-width: 900px;
  width: 80%;
`;

const CategoriesContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledPaper elevation={4} square>
      {children}
    </StyledPaper>
  );
};

export default CategoriesContainer;
