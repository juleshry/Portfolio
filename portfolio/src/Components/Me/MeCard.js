import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "@mui/material";

const Me = require("../../Me.json");

export class MeCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.width = 428;
    this.state.imageUrl = "/assets/lofi_generator.png";
  }
  render() {
    let cardStyle = {
      display: "flex",
      flexDirection: "column",
      backgroundImage:
        "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
      backgroundColor: "rgba(230,230,230,0.1)",
      borderRadius: 25,
      maxWidth: this.state.width,
      width: this.state.width,
      height: this.state.width,
      margin: 5,
      cursor: "pointer",
    };

    let nameColor =
      document.body.className === "light-theme"
        ? "linear-gradient(" +
          Math.random() * 360 +
          "deg, #1917a0 50%, #ed625d)"
        : "linear-gradient(" +
          Math.random() * 360 +
          "deg, #ababff 50%, #974941)";

    let textColor =
      document.body.className === "light-theme" ? "#000000" : "#ffffff";

    let linkedinButton =
      document.body.className === "light-theme"
        ? process.env.PUBLIC_URL + "/assets/linkedin.png"
        : process.env.PUBLIC_URL + "/assets/linkedin-white.png";

    let githubButton =
      document.body.className === "light-theme"
        ? process.env.PUBLIC_URL + "/assets/github.png"
        : process.env.PUBLIC_URL + "/assets/github-white.png";

    return (
      <Card style={cardStyle}>
        <CardMedia
          component="img"
          image={process.env.PUBLIC_URL + this.state.imageUrl}
          alt={this.state.name}
          draggable={false}
          sx={{
            width: "100%",
            height: "50%",
            MozWindowDragging: false,
          }}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              display="inline"
              variant="h6"
              style={{
                textAlign: "justify",
                textJustify: "auto",
                color: textColor,
                transition: "color 0.3s cubic-bezier(0, 0.68, 0.78, 0.65)",
              }}
            >
              {Me.description1}
            </Typography>
            <Typography
              display="inline"
              variant="h5"
              style={{
                textAlign: "justify",
                textJustify: "auto",
                marginRight: 2,
                marginLeft: 2,
                backgroundImage: nameColor,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                MozBackgroundClip: "text",
                MozTextFillColor: "transparent",
              }}
            >
              {Me.name}
            </Typography>
            <Typography
              display="inline"
              variant="h6"
              style={{
                textAlign: "justify",
                textJustify: "auto",
                color: textColor,
                transition: "color 0.3s cubic-bezier(0, 0.68, 0.78, 0.65)",
              }}
            >
              {Me.description2}
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Link
              href="https://github.com/juleshry/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ margin: "auto" }}
            >
              <img
                src={githubButton}
                style={{
                  width: "40px",
                  padding: 4,
                  backgroundImage:
                    "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                  backgroundColor: "rgba(230,230,230,0.1)",
                  borderRadius: 25,
                }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jules-hery-897b39153"
              rel="noopener noreferrer"
              target="_blank"
              style={{ margin: "auto" }}
            >
              <img
                src={linkedinButton}
                style={{
                  width: "40px",
                  padding: 4,
                  backgroundImage:
                    "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                  backgroundColor: "rgba(230,230,230,0.1)",
                  borderRadius: 5,
                }}
              />
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }
}
