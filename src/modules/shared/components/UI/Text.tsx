/** LIBRARIES */
import { type FC } from "react";

/** STYLED COMPONENTS */
import { StyledTypography } from "@shared/components/styled/StyledTypography";

interface TextProps {
  text: string;
}

const Text: FC<TextProps> = ({ text }) => {
  return <StyledTypography component="p">{text}</StyledTypography>;
};

export default Text;
