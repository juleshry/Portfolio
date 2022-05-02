import React from "react";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import ReactRoundedImage from "react-rounded-image";

function getGoodAvatar(dimensions) {
  let ret = "";

  if (dimensions.w > 520) {
    ret = (
      <Box
        display="flex"
        flexDirection="row"
        mr={1}
        ml={4}
        mt={-2}
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          mr={1}
          alignItems="flex-end"
          style={{ marginTop: 20, marginRight: -3 }}
        >
          <Typography variant="h5">Jules Hery</Typography>
          <Typography variant="subtitle2">Developer</Typography>
        </Box>
        <ReactRoundedImage
          image={process.env.PUBLIC_URL + "/assets/Apple_Avatar.png"}
          roundedColor="none"
          imageWidth="100"
          imageHeight="100"
        />
      </Box>
    );
  } else {
    ret = (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        mr={1}
        pl={4}
        mt={-2}
        alignItems="center"
        style={{ borderLeft: "solid" }}
      >
        <ReactRoundedImage
          image={process.env.PUBLIC_URL + "/assets/Apple_Avatar.png"}
          roundedColor="none"
          imageWidth="75"
          imageHeight="75"
        ></ReactRoundedImage>
        <Box
          display="flex"
          flexDirection="column"
          mr={1}
          mt={-1}
          alignItems="center"
          style={{ marginRight: 10 }}
        >
          <Typography variant="h5">Jules Hery</Typography>
          <Typography variant="subtitle2">Developer</Typography>
        </Box>
      </Box>
    );
  }
  return ret;
}

export function MyAvatar() {
  const [dimensions, setDimensions] = React.useState({
    h: window.innerHeight,
    w: window.innerWidth,
  });

  let ret = getGoodAvatar(dimensions);

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        h: window.innerHeight,
        w: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return ret;
}
