/** CUSTOM COMPONENTS */
import ErrorPageContent from "@shared/components/ErrorPageContent";
import Header from "@shared/components/layout/Header";

/** MODELS */
import { type ICustomError } from "@shared/models/api";

/** OTHER */
import { CONTENT } from "@shared/utils/content";

import { type ErrorResponse, useRouteError } from "react-router";

type ErrorType = ErrorResponse | ICustomError | Response;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isCustomError = (error: any): error is ICustomError => {
  return (
    error &&
    typeof error.message === "string" &&
    typeof error.status === "number"
  );
};

const Error = () => {
  const error = useRouteError() as ErrorType;

  let statusCode = 500;
  let errorMessage = CONTENT.ERROR.MESSAGE.GENERIC;

  if (error instanceof Response) {
    statusCode = error.status;
    if (error.statusText && error.statusText.length > 0)
      errorMessage = error.statusText;
  } else if (isCustomError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  return (
    <>
      <Header />
      <ErrorPageContent message={errorMessage} statusCode={statusCode} />
    </>
  );
};

export default Error;
