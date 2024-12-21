/** LIBRARIES */
import { useSelector } from "react-redux";

/** OTHER */
import { type RootState } from "@shared/store";

/** STYLED COMPONENTS */
import { StyledTypography } from "@shared/components/styled/StyledTypography";

const Joke = () => {
  const { currentJoke } = useSelector(({ home }: RootState) => home);

  return <StyledTypography component="p">{currentJoke?.value}</StyledTypography>;
};

export default Joke;
