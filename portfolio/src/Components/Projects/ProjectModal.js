import React from "react";

import { Link } from "@material-ui/core";
import { ButtonBase } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@material-ui/core";

import { motion } from "framer-motion";

const cardStyle = {
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
  height: "70%",
  margin: 5,
  borderRadius: 25,
  WebkitUserSelect: "none",
  margin: "auto",
  marginTop: "15%",
};

export class ProjectModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.openModal = false;
  }

  handleOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
  };

  render() {
    console.log(this.state);
    return (
      //      <Link
      //        href={this.state.projectUrl}
      //        style={{
      //          textDecoration: "none",
      //          height: 2,
      //        }}
      //      >
      <div>
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
          <ButtonBase onClick={this.handleOpen} style={{ margin: 7 }}>
            <ArrowForwardIcon
              className={this.state.className}
              sx={{
                border: 2,
                borderRadius: 5,
                borderWidth: 2,
              }}
            ></ArrowForwardIcon>
          </ButtonBase>
        </motion.div>
        <Modal open={this.state.openModal} onClose={this.handleClose}>
          <Card style={cardStyle} raised={true}>
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
                  style={{ marginTop: "10px", marginBottom: "30px" }}
                >
                  {this.state.name}
                </Typography>
                <Typography variant="subtitle2">
                  {this.state.description}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Modal>
      </div>
      //      </Link>
    );
  }
}
