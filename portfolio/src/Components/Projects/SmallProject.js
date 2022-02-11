import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import { SmallProjectText } from "./SmallProjectText";
import { MyLink } from "../MyLink";

export class SmallProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
    this.state.isShown = false;
    this.state.componentWidth = Math.min(200, (window.innerWidth - 130) / 2);
  }

  handleShow = () => {
    this.setState({ isShown: true });
  };

  handleHide = () => {
    this.setState({ isShown: false });
  };

  handleResize = () => {
    this.setState({
      componentWidth: Math.min(200, (window.innerWidth - 130) / 2),
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    let style = {
      position: "absolute",
      backgroundColor: "rgba(0,0,0,0.6)",
      backgroundImage:
        "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
      borderRadius: 25,
      width: this.state.componentWidth,
      height: "100%",
      top: "0%",
      transition: " 0.5s",
      transitionTimingFunction: "cubic-bezier(0,.66,.66,.88)",
    };
    let style2 = {
      filter: "",
      transition: "1s",
      transitionTimingFunction: "cubic-bezier(.51,.2,.36,.97)",
      width: this.state.componentWidth,
    };
    if (!this.state.isShown) {
      style.transform = "translateY(100%)";
      style2.filter = "";
      style2.transitionTimingFunction = "cubic-bezier(0,.55,.36,.97)";
    } else {
      style2.filter = "blur(5px)";
      style2.transitionTimingFunction = "cubic-bezier(.51,.2,.36,.97)";
    }

    return (
      <Card
        onMouseEnter={() => this.handleShow()}
        onMouseLeave={() => {
          this.handleHide();
        }}
        style={{
          position: "relative",
          display: "flex",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, .2)",
          maxWidth: this.state.componentWidth,
          height: this.state.componentWidth,
          margin: 5,
          borderRadius: 25,
          WebkitUserSelect: "none",
        }}
      >
        <CardMedia
          component="img"
          image={process.env.PUBLIC_URL + this.state.imageUrl}
          alt={this.state.name}
          style={style2}
        ></CardMedia>
        <div className="Black-over" id="Black-over" style={style}>
          <CardContent sx={{ color: "white", height: "85%", mr: 2 }}>
            <div
              className="Text-project"
              style={{ position: "absolute", width: "75%", height: "84%" }}
            >
              <SmallProjectText
                name={this.state.name}
                projectUrl={this.state.projectUrl}
                description={this.state.description}
              ></SmallProjectText>
            </div>
            <div
              style={{
                position: "relative",
                float: "right",
                marginTop: "-10%",
                marginRight: "-20%",
              }}
            >
              <MyLink {...this.state} className="smallProject" />
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }
}
