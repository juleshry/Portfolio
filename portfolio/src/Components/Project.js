import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "@material-ui/core";
import { ButtonBase } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { motion } from "framer-motion";

import { ProjectText } from "./ProjectText";

let ProjectsJson = require("./../Projects.json");

export const Project = (props) => {
  let name = props.name;
  let imageUrl = ProjectsJson[name].Imagelink;
  let projectUrl = ProjectsJson[name].Projectlink;
  let description = ProjectsJson[name].description;
  name = name.split("_").join(" ");

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "rgba(230,230,230,0.5)",
        backgroundImage:
          "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
        backdropFilter: "blur(7px)",
        boxShadow: "10px 10px 10px rgba(30,30,30,0.1)",
        borderLeft: "solid 1px rgba(255,255,255,0.3)",
        borderTop: "solid 1px rgba(255,255,255,0.8)",
        width: 428,
        height: 200,
        m: 1,
        borderRadius: 5,
        WebkitUserSelect: "none",
      }}
    >
      <CardMedia
        component="img"
        image={process.env.PUBLIC_URL + imageUrl}
        alt={name}
        sx={{ width: 150 }}
      ></CardMedia>
      <CardContent>
        <ProjectText
          name={name}
          projectUrl={projectUrl}
          description={description}
        ></ProjectText>
      </CardContent>
      <Link
        href={process.env.PUBLIC_URL + projectUrl}
        style={{
          textDecoration: "none",
          color: "black",
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
                color: "#000",
                border: 2,
                borderRadius: 25,
                borderWidth: 2,
              }}
            ></ArrowForwardIcon>
          </ButtonBase>
        </motion.div>
      </Link>
    </Card>
  );
};
