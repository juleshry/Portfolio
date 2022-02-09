import React from "react";

import { Link } from "@material-ui/core";
import { ButtonBase } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { motion } from "framer-motion";

export class MyLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props };
  }

  render() {
    return (
      <Link
        href={this.state.projectUrl}
        style={{
          textDecoration: "none",
        }}
      >
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
          <ButtonBase style={{ margin: 7 }}>
            <ArrowForwardIcon
              sx={{
                color: this.state.color,
                border: 2,
                borderRadius: 5,
                borderWidth: 2,
              }}
            ></ArrowForwardIcon>
          </ButtonBase>
        </motion.div>
      </Link>
    );
  }
}
