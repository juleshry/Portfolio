import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import { LargeProjectText } from "./LargeProjectText";
import { MyModal } from "../MyModal";

const LARGEWIDTH = 428;

export class LargeProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.width = LARGEWIDTH;
    this.state.openModal = false;
  }

  handleOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
  };

  render() {
    let cardStyle = {
      flexDireaction: "row",
      backgroundImage:
        "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
      backgroundColor: "rgba(230,230,230,0.1)",
      maxWidth: this.state.width,
      width: this.state.width,
      cursor: "pointer",
    };

    return (
      <>
        <Card onClick={this.handleOpen} style={cardStyle}>
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + this.state.imageUrl}
            alt={this.state.name}
            sx={{
              width: "150px",
              MozWindowDragging: false,
            }}
          ></CardMedia>
          <CardContent>
            <div
              style={{
                position: "relative",
                width: "80%",
                height: "100%",
              }}
            >
              <LargeProjectText
                name={this.state.name}
                projectUrl={this.state.projectUrl}
                description={this.state.description}
              ></LargeProjectText>
            </div>
            <div
              style={{
                position: "fixed",
                top: "1%",
                right: "1%",
                float: "right",
              }}
            ></div>
          </CardContent>
        </Card>
        <MyModal
          openModal={this.state.openModal}
          handleClose={this.handleClose}
          {...this.state}
        />
      </>
    );
  }
}
