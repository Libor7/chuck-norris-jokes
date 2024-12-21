/** COMPONENTS */
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";

/** ICONS */
import CloseIcon from "@mui/icons-material/Close";

/** LIBRARIES */
import { type FC } from "react";

/** STYLES */
import useTheme from "@mui/material/styles/useTheme";

interface ErrorMessageProps {
  closeHandler: () => void;
  error: string | null;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ closeHandler, error }) => {
  const { palette } = useTheme();

  const action = (
    <IconButton
      aria-label="close"
      color="inherit"
      onClick={closeHandler}
      size="large"
    >
      <CloseIcon fontSize="medium" />
    </IconButton>
  );

  return (
    <Snackbar
      action={action}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={4000}
      ContentProps={{
        sx: {
          backgroundColor: palette.warning.main,
        },
      }}
      message={error}
      onClose={closeHandler}
      open={Boolean(error)}
    />
  );
};

export default ErrorMessage;
