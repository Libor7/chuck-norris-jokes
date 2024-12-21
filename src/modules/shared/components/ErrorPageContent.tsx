/** CUSTOM COMPONENTS */
import Button from "@shared/components/UI/Button";

/** LIBRARIES */
import { type FC } from "react";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

/** OTHER */
import { type RootState } from "@shared/store";

/** STYLES */
import styled from "styled-components";

const notForwardProps = ["headerHeight"];

interface StyledErrorContentProps {
  headerHeight: number;
}

const StyledButton = styled(Button)`
  &.MuiButton-root {
    margin: 2em;
  }
`;

const StyledErrorContent = styled("section").withConfig({
  shouldForwardProp: (prop) => notForwardProps.indexOf(prop) === -1,
})<StyledErrorContentProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${({ headerHeight }) => `calc(100% - ${headerHeight}px)`};

  & > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 2em;

    & > p,
    & > strong {
      flex: 0 1 auto;
    }

    & > strong {
      font-size: 2.5em;
    }

    & > p {
      font-size: 1.25em;
    }
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    & > div {
      flex-direction: row;

      & > strong {
        border-right: 2px solid black;
        padding-right: 0.25em;
      }

      & > p {
        padding-left: 0.5em;
      }
    }
  }
`;

interface ErrorPageContentProps {
  message: string;
  statusCode: number;
}

const ErrorPageContent: FC<ErrorPageContentProps> = ({
  message,
  statusCode,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { appBarHeight } = useSelector(({ shared }: RootState) => shared);

  return (
    <StyledErrorContent headerHeight={appBarHeight}>
      <div>
        <strong>{statusCode}</strong>
        <p>{message}</p>
      </div>
      <StyledButton onClick={() => navigate("home", { replace: true })}>
        {t('modules.error.navigateBtnLabel')}
      </StyledButton>
    </StyledErrorContent>
  );
};

export default ErrorPageContent;
