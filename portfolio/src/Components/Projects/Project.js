import React from "react";

import { SmallProject } from "./SmallProject";
import { LargeProject } from "./LargeProject";

let ProjectsJson = require("../../Projects.json");

const FORCESMALL = 520;

export class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name.split("_").join(" "),
      imageUrl: ProjectsJson[props.name].Imagelink,
      isLocal: props.isLocal,
      projectUrl: props.isLocal
        ? process.env.PUBLIC_URL + ProjectsJson[props.name].Projectlink
        : ProjectsJson[props.name].Projectlink,
      description: ProjectsJson[props.name].description,
      componentWidth: window.innerWidth,
    };

    this.dimensions = { width: window.innerWidth, height: window.innerHeight };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ componentWidth: window.innerWidth });
  };

  render() {
    let ret =
      (this.state.name.length >= 10 || this.state.description.length > 60) &&
      this.state.componentWidth > FORCESMALL ? (
        <LargeProject {...this.state} />
      ) : (
        <SmallProject {...this.state} />
      );

    return ret;
  }
}
