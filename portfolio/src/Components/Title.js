import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

export const Title = () => {
  const [titleStyle, setTitleStyle] = useState(
    window.innerWidth > 520
      ? {
          display: "flex",
          flexGrow: 1,
          height: "fill",
          WebkitUserSelect: "none",
          borderRight: "solid",
          paddingRight: 20,
        }
      : {
          display: "flex",
          height: "fill",
          marginRight: 20,
          WebkitUserSelect: "none",
        }
  );

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 520) {
        setTitleStyle({
          display: "flex",
          flexGrow: 1,
          height: "fill",
          WebkitUserSelect: "none",
          borderRight: "solid",
          paddingRight: 20,
        });
      } else {
        setTitleStyle({
          display: "flex",
          height: "fill",
          marginRight: 20,
          WebkitUserSelect: "none",
        });
      }
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Typography variant="h2" style={titleStyle}>
      THIS IS MY <br /> PORTFOLIO
    </Typography>
  );
};
