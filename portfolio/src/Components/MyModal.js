import React from "react";

import Modal from "@mui/material/Modal";
import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { ButtonBase } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "@mui/material";
import styled from "@emotion/styled";
import { Backdrop } from "@mui/material";

export class MyModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
  }

  render() {
    let modalCardStyle = {
      display: "block",
      overflowY: "overlay",
      position: "relative",
      backgroundImage:
        "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
      width: "80%",
      maxWidth: "750px",
      height: "80%",
      margin: "auto",
      top: "10%",
      outline: "none",
    };

    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      modalCardStyle.backgroundColor = "rgba(230,230,230,1)";
    } else {
      modalCardStyle.backgroundColor = "rgba(230,230,230,0.3)";
    }

    let color = document.body.className === "light-theme" ? "black" : "white";
    let buttonColor =
      document.body.className === "light-theme"
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(0, 0, 0, 0.3)";

    return (
      <Modal
        open={this.props.openModal}
        onClose={this.props.handleClose}
        style={{ border: "none" }}
        BackdropComponent={styled(Backdrop, {
          name: "MuiModal",
          slot: "Backdrop",
          overridesResolver: (props, styles) => {
            return styles.backdrop;
          },
        })({
          zIndex: -10,
          backgroundColor: "rgb(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
        })}
      >
        <Card className="overFlowY card-modal" style={modalCardStyle}>
          <CardMedia
            component="img"
            image={process.env.PUBLIC_URL + this.state.imageUrl}
            alt={this.state.name}
            style={{
              width: "100%",
              height: "50%",
              MozWindowDragging: false,
            }}
          />
          <CardContent>
            <div style={{ margin: "20px" }}>
              <Typography
                variant="h2"
                style={{
                  marginTop: "10px",
                  marginBottom: "30px",
                  color: color,
                }}
              >
                {this.state.name}
              </Typography>
              <Typography variant="subtitle2" style={{ color: color }}>
                {this.state.description}
              </Typography>
            </div>
            <Link
              href={this.state.projectUrl}
              rel="noopener noreferrer"
              target="_blank"
              underline="none"
              color={color}
            >
              <ButtonBase
                style={{
                  padding: 15,
                  paddingLeft: 20,
                  margin: 20,
                  background: buttonColor,
                  borderColor: "this.state.color",
                  border: 10,
                  borderRadius: 30,
                  borderWidth: 2,
                }}
                disableRipple={true}
              >
                <Typography>Preview</Typography>
                <ArrowForwardIcon />
              </ButtonBase>
            </Link>
          </CardContent>
        </Card>
      </Modal>
    );
  }
}
