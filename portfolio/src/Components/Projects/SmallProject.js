import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "@material-ui/core";
import { ButtonBase } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { motion } from "framer-motion";

import { ProjectText } from "./ProjectText";

export const SmallProject = (props) => {
  let state = { ...props };
  const [isShown, setIsShown] = useState(false);

  const handleShow = () => {
    setIsShown(true);
  };

  const handleHide = () => {
    setIsShown(false);
  };

  let style = {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.6)",
    backgroundImage:
      "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
    borderRadius: 15,
    width: 200,
    height: "100%",
    top: "0%",
    transition: " 0.5s",
    transitionTimingFunction: "cubic-bezier(0,.66,.66,.88)",
  };
  let style2 = {
    filter: "",
    transition: "1s",
    transitionTimingFunction: "cubic-bezier(.51,.2,.36,.97)",
  };
  if (!isShown) {
    style.transform = "translateY(100%)";
    style2.filter = "";
    style2.transitionTimingFunction = "cubic-bezier(0,.55,.36,.97)";
  } else {
    style2.filter = "blur(5px)";
  }

  return (
    <Card
      onMouseEnter={() => handleShow()}
      onMouseLeave={() => {
        handleHide();
      }}
      sx={{
        position: "relative",
        display: "flex",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, .2)",
        borderLeft: "solid 1px rgba(255,255,255,0.3)",
        borderTop: "solid 1px rgba(255,255,255,0.8)",
        maxWidth: 200,
        height: 200,
        m: 1,
        borderRadius: 5,
        WebkitUserSelect: "none",
      }}
    >
      <CardMedia
        component="img"
        image={process.env.PUBLIC_URL + state.imageUrl}
        alt={state.name}
        style={style2}
      ></CardMedia>
      <div className="Black-over" id="Black-over" style={style}>
        <CardContent sx={{ color: "white", height: "85%", mr: 2 }}>
          <div
            className="Text-project"
            style={{ position: "absolute", width: "75%", height: "84%" }}
          >
            <ProjectText
              name={state.name}
              projectUrl={state.projectUrl}
              description={state.description}
            ></ProjectText>
          </div>
          <div
            style={{
              position: "relative",
              float: "right",
              marginTop: "-10%",
              marginRight: "-20%",
            }}
          >
            <Link
              href={state.projectUrl}
              style={{
                textDecoration: "none",
              }}
            >
              <motion.div
                whileHover={{
                  rotate: -45,
                  scale: 1.2,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <ButtonBase style={{ margin: 7 }}>
                  <ArrowForwardIcon
                    sx={{
                      color: "#fff",
                      border: 2,
                      borderRadius: 25,
                      borderWidth: 2,
                    }}
                  ></ArrowForwardIcon>
                </ButtonBase>
              </motion.div>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
