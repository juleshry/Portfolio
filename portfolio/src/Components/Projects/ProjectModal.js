import React from "react";

import Modal from "@mui/material/Modal";
import { Typography } from "@material-ui/core";
import CardContent from "@mui/material/CardContent";
import { ButtonBase } from "@mui/material";
import { Link } from "@mui/material";
import styled from "@emotion/styled";
import { Backdrop } from "@mui/material";

export class ProjectModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.imageColor =
      document.body.className === "light-theme" ? "#000000" : "#ffffff";
    this.state.backgroundStyle = {
      display: "block",
      width: "100%",
      height: "100%",
      transition: "transform 0.3s ease-in-out",
      objectFit: "cover",
    };

    this.handleBackgrounMouseEnter = this.handleBackgrounMouseEnter.bind(this);
    this.handleBakcgroundMouseLeave =
      this.handleBakcgroundMouseLeave.bind(this);
    this.handleBackgrounMouseMove = this.handleBackgrounMouseMove.bind(this);
  }

  handleBackgrounMouseEnter() {
    this.setState({
      backgroundStyle: {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease-in-out",
        transform: "scale(1.05)",
      },
    });
  }

  handleBakcgroundMouseLeave() {
    this.setState({
      backgroundStyle: {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease-in-out",
        transform: "scale(1)",
      },
    });
  }

  handleBackgrounMouseMove(event) {
    let img = document.getElementsByClassName("ModaleImage").item(0);
    let center = { x: img.width / 2 };
    let horMove = -(event.nativeEvent.layerX - center.x) / 25;

    this.setState({
      backgroundStyle: {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease-in-out",
        transform: "scale(1.1)",
        objectPosition: horMove + "px ",
      },
    });
  }

  render() {
    let modalCardStyle = {
      display: "block",
      overflowY: "overlay",
      position: "relative",
      backgroundImage:
        "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      width: "80%",
      maxWidth: "750px",
      height: "80%",
      borderRadius: 25,
      margin: "auto",
      top: "10%",
      outline: "none",
    };

    let color = document.body.className === "light-theme" ? "black" : "white";
    let buttonColor =
      document.body.className === "light-theme"
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(0, 0, 0, 0.3)";

    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      modalCardStyle.backgroundColor = "rgba(230,230,230,1)";
      color = "black";
      buttonColor = "rgba(255, 255, 255, 0.3)";
    } else {
      modalCardStyle.backgroundColor = "rgba(230,230,230,0.3)";
    }

    return (
      <Modal
        open={this.props.openModal}
        onClose={this.props.handleClose}
        style={{ border: "none" }}
        BackdropProps={{ transitionDuration: 0 }}
        BackdropComponent={styled(Backdrop, {
          name: "MuiModal",
          slot: "Backdrop",
          overridesResolver: (props, styles) => {
            return null;
          },
        })({
          zIndex: -10,
          backgroundColor: "rgb(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
          transition: "none",
        })}
      >
        <div className="overFlowY card-modal" style={modalCardStyle}>
          <div
            style={{
              width: "100%",
              height: "50%",
              overflow: "hidden",
              borderTopLeftRadius: "25px",
              borderTopRightRadius: "25px",
            }}
          >
            <img
              className="ModaleImage"
              src={process.env.PUBLIC_URL + this.state.imageUrl}
              alt={this.state.name}
              style={this.state.backgroundStyle}
              onMouseEnter={this.handleBackgrounMouseEnter}
              onMouseLeave={this.handleBakcgroundMouseLeave}
              onMouseMove={this.handleBackgrounMouseMove}
            />
          </div>
          <CardContent>
            <div style={{ margin: "20px" }}>
              <Typography
                variant="h2"
                style={{
                  marginTop: "10px",
                  marginBottom: "30px",
                  color: color,
                  userSelect: "none",
                }}
              >
                {this.state.name}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ color: color, userSelect: "none" }}
              >
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
                <lord-icon
                  src="https://cdn.lordicon.com/gwlkhzue.json"
                  trigger="hover"
                  colors={"primary:" + this.state.imageColor}
                  state="hover-3"
                  style={{ marginLeft: 5 }}
                >
                  <div className="lord-icon" />
                </lord-icon>
              </ButtonBase>
            </Link>
          </CardContent>
        </div>
      </Modal>
    );
  }
}
