import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";
import { Typography } from "@material-ui/core";

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
      display: "flex",
      backgroundColor: "rgba(230,230,230,0.1)",
      backgroundImage:
        "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
      WebkitBackdropFilter: "blur(10px)",
      backdropFilter: "blur(10px)",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, .2)",
      borderLeft: "solid 1px rgba(255,255,255,0.3)",
      borderTop: "solid 1px rgba(255,255,255,0.8)",
      maxWidth: this.state.width,
      width: this.state.width,
      height: 200,
      margin: 5,
      borderRadius: 25,
      WebkitUserSelect: "none",
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
