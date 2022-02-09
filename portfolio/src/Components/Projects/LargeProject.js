import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import { ProjectText } from "./ProjectText";
import { MyLink } from "../MyLink";

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
        <MyLink {...this.state} color="black" />
      </Card>
    );
  }
}
