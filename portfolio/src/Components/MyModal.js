import React from "react";

import Modal from "@mui/material/Modal";
import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { ButtonBase } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "@mui/material";

const modalCardStyle = {
  display: "block",
  overflowY: "overlay",
  position: "relative",
  backgroundColor: "rgba(230,230,230,0.3)",
  backgroundImage:
    "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
  WebkitBackdropFilter: "blur(10px)",
  backdropFilter: "blur(20px)",
  boxShadow: "2px 2px 2px rgba(0, 0, 0, .2)",
  borderLeft: "solid 1px rgba(255,255,255,0.3)",
  borderTop: "solid 1px rgba(255,255,255,0.8)",
  width: "80%",
  height: "80%",
  borderRadius: 25,
  WebkitUserSelect: "none",
  margin: "auto",
  top: "10%",
};

export class MyModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
  }

  render() {
    let color = document.body.className == "light-theme" ? "black" : "white";
    let buttonColor =
      document.body.className == "light-theme"
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(0, 0, 0, 0.3)";
    return (
      <Modal open={this.props.openModal} onClose={this.props.handleClose}>
        <Card className="card-modal" style={modalCardStyle}>
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
