/** COMPONENTS */
import Typography, { type TypographyProps } from "@mui/material/Typography";

/** LIBRARIES */
import { type FC } from "react";
import { useTranslation } from 'react-i18next';

/** STYLES */
import styled from "styled-components";

const StyledHeading = styled(Typography)`
  padding: 0.5em;
`;

const AppHeading: FC<TypographyProps> = (props) => {
  const { t } = useTranslation();

  const component = props.component || "h1";
  const variant = props.variant || "h5";

  return (
    <StyledHeading variant={variant} component={component} {...props}>
      {t('modules.shared.mainHeading')}
    </StyledHeading>
  );
};

export default AppHeading;
