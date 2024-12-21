/** LIBRARIES */
import { type FC } from "react";

/** STYLED COMPONENTS */
import { StyledTypography } from "@shared/components/styled/StyledTypography";

interface InfoText {
  text: string;
}

const InfoText: FC<InfoText> = ({ text }) => {
  return <StyledTypography component="p">{text}</StyledTypography>;
};

export default InfoText;
