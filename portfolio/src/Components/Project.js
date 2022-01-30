import React from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@material-ui/core";

export class Project extends React.Component {
  render() {
    let name = this.props.name;
    let imageUrl = "./assets/" + name + "/" + name + ".png";
    let projectUrl = "./assets/" + name + "/" + name + ".html";
    name = name.split("_").join(" ");
    return (
      <Card
        sx={{ maxWidth: 300, margin: 3, borderRadius: 5, fontFamily: "Sora" }}
      >
        <Link
          href={projectUrl}
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imageUrl}
              alt={name}
            ></CardMedia>
            <CardContent>
              <Typography variant="h3" sx={{ fontFamily: "Sora" }}>
                {" "}
                {name}{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    );
  }
}
