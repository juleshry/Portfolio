import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

export const Title = () => {
  const [titleStyle, setTitleStyle] = useState({
    display: "flex",
    height: "fill",
    marginRight: 20,
    WebkitUserSelect: "none",
  });

  return (
    <Typography variant="h2" style={titleStyle}>
      THIS IS MY <br /> PORTFOLIO
    </Typography>
  );
};
