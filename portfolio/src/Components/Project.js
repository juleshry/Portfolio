import React from "react";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

import { motion } from "framer-motion";

let ProjectsJson = require("./../Projects.json");

export const Project = (props) => {
  let sizes = {
    small: { w: 300, h: 300 },
    medium: { w: 642, h: 300 },
    large: { w: 642, h: 674 },
  };

  let name = props.name;
  let imageUrl = ProjectsJson[name].Imagelink;
  let projectUrl = ProjectsJson[name].Projectlink;
  let description = ProjectsJson[name].description;
  name = name.split("_").join(" ");

  return (
    <Card
      sx={{
        backgroundColor: "rgba(230,230,230,0.5)",
        backgroundImage:
          "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
        backdropFilter: "blur(10px)",
        boxShadow: "10px 10px 10px rgba(30,30,30,0.1)",
        borderLeft: "solid 1px rgba(255,255,255,0.3)",
        borderTop: "solid 1px rgba(255,255,255,0.8)",
        minWidth: 300,
        maxWidth: 450,
        minHeight: 300,
        maxHeight: 674,
        m: 1,
        borderRadius: 5,
        fontFamily: "Sora",
        "-webkit-user-select": "none",
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={imageUrl}
        alt={name}
      ></CardMedia>
      <CardContent>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          m={1}
          alignItems="center"
        >
          <Typography variant="h3" sx={{ fontFamily: "Sora", mr: 2 }}>
            {name}
          </Typography>
          <Link
            href={projectUrl}
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
              <IconButton
                aria-label="arrow-back"
                sx={{
                  border: 2,
                  color: "#000",
                  mt: 1,
                }}
              >
                <ArrowForwardIcon sx={{ color: "#000" }}></ArrowForwardIcon>
              </IconButton>
            </motion.div>
          </Link>
        </Box>
        <Typography marginLeft={1.5} marginTop={2} marginRight={1}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
