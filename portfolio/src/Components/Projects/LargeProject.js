import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "@material-ui/core";
import { ButtonBase } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { motion } from "framer-motion";

import { ProjectText } from "./ProjectText";

const LARGELENGTH = 428;

export class LargeProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.width = LARGELENGTH;
  }

  render() {
    return (
      <Card
        sx={{
          display: "flex",
          backgroundColor: "rgba(230,230,230,0.1)",
          backgroundImage:
            "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, .2)",
          borderLeft: "solid 1px rgba(255,255,255,0.3)",
          borderTop: "solid 1px rgba(255,255,255,0.8)",
          maxWidth: this.state.width,
          height: 200,
          m: 1,
          borderRadius: 5,
          WebkitUserSelect: "none",
        }}
      >
        <CardMedia
          component="img"
          image={process.env.PUBLIC_URL + this.state.imageUrl}
          alt={this.state.name}
          sx={{ width: "150px" }}
        ></CardMedia>
        <CardContent>
          <ProjectText
            name={this.state.name}
            projectUrl={this.state.projectUrl}
            description={this.state.description}
          ></ProjectText>
        </CardContent>
        <Link
          href={this.state.projectUrl}
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
  }
}
