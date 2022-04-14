import React, { useEffect, useState } from "react";

import SimplexNoise from "simplex-noise";

import * as PIXI from "pixi.js";
import {
  Stage,
  Container,
  withFilters,
  Graphics,
  useTick,
} from "@inlet/react-pixi";
import { KawaseBlurFilter } from "pixi-filters";

// return a random number within a range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

function setNewPositions() {
  let tmpPositions = [];
  for (let i = 0; i < 10; i++) {
    tmpPositions.push([
      window.innerWidth * Math.random(),
      window.innerHeight * Math.random(),
    ]);
  }
  return tmpPositions;
}
const positions = setNewPositions();
const sizes = [200, 600, 500, 300, 400];
const directions = [
  [-2, 2],
  [2, -2],
  [2, 2],
  [-2, -2],
  [2, 2],
  [-2, -2],
  [2, 2],
  [2, -2],
  [-2, 2],
  [2, -2],
];
const simplex = new SimplexNoise();
let xOff = random(0, 1000);
let yOff = random(0, 1000);
const inc = 0.2;

export const Background = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const Filters = withFilters(Container, {
    noise: PIXI.filters.NoiseFilter,
    blur: KawaseBlurFilter,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <Stage
      width={width}
      height={height - 1}
      options={{ backgroundAlpha: 0 }}
      style={{
        position: "absolute",
        height: "100%",
        bottom: 0,
        top: 0,
      }}
    >
      <Filters
        blur={{ blur: 40, quality: 20, autoFit: false }}
        noise={{ noise: 0.01 }}
      >
        <Graph />
      </Filters>
    </Stage>
  );
};

const Graph = (props) => {
  const [graphPositions, setGraphPositions] = useState(positions);
  const [graphSizes, setGraphSizes] = useState(sizes);
  const [tickDirection, setTickDirection] = useState(0);
  const [tickPosition, setTickPosition] = useState(0);
  const [graphDirections, setGraphDirections] = useState(directions);
  const [colors, setColors] = useState([
    0xffffff, 0xed625d, 0x4f45ff, 0xf79f88, 0xababff,
  ]);

  function changeDirections() {
    let returnDirections = [];
    for (let dir of graphDirections) {
      dir = [
        2 * Math.pow(-1, parseInt(3 * Math.random())),
        2 * Math.pow(-1, parseInt(3 * Math.random())),
      ];
      returnDirections.push(dir);
    }
    return returnDirections;
  }

  function changePositions(xOff, yOff) {
    const xNoise = 1 * simplex.noise2D(xOff, xOff);
    const yNoise = 1 * simplex.noise2D(yOff, yOff);

    let returnPositions = [];
    let i = 0;
    for (let position of graphPositions) {
      let newP = [
        position[0] + Math.abs(xNoise) * graphDirections[i][0],
        position[1] + Math.abs(yNoise) * graphDirections[i][1],
      ];
      returnPositions.push(newP);
      i++;
    }
    return returnPositions;
  }

  function checkMode() {
    if (document.body.className === "light-theme") {
      setColors([0xffffff, 0xed625d, 0x4f45ff, 0xf79f88, 0xababff]);
    } else {
      setColors([0x333333, 0xa73e3b, 0x231d9a, 0xc99082, 0x22223d]);
    }
  }

  function changeSizes(xOff, yOff) {
    const sizeNoise = simplex.noise2D(xOff, yOff);
    let returnSizes = [];
    let i = 0;
    for (let size of graphSizes) {
      size += graphDirections[i][0] * sizeNoise;
      returnSizes.push(size);
      i++;
    }
    return returnSizes;
  }

  useTick((delta) => {
    setTickPosition(tickPosition + delta);
    setTickDirection(tickDirection + delta);
    checkMode();
    if (tickPosition > 0.7) {
      setGraphPositions(changePositions(xOff, yOff));
      setGraphSizes(changeSizes(xOff, yOff));
      xOff += inc;
      yOff += inc;
      setTickPosition(0);
    }
    if (tickDirection > 150) {
      setGraphDirections(changeDirections());
      setTickDirection(0);
    }
  });

  const draw = React.useCallback(
    (g) => {
      g.clear();
      g.beginFill(colors[0]);
      g.drawCircle(graphPositions[0][0], graphPositions[0][1], graphSizes[0]);
      g.beginFill(colors[1]);
      g.drawCircle(graphPositions[1][0], graphPositions[1][1], graphSizes[1]);
      g.beginFill(colors[2]);
      g.drawCircle(graphPositions[2][0], graphPositions[2][1], graphSizes[2]);
      g.beginFill(colors[3]);
      g.drawCircle(graphPositions[3][0], graphPositions[3][1], graphSizes[3]);
      g.beginFill(colors[4]);
      g.drawCircle(graphPositions[4][0], graphPositions[4][1], graphSizes[4]);
      g.beginFill(colors[0]);
      g.drawCircle(graphPositions[5][0], graphPositions[5][1], graphSizes[0]);
      g.beginFill(colors[1]);
      g.drawCircle(graphPositions[6][0], graphPositions[6][1], graphSizes[1]);
      g.beginFill(colors[2]);
      g.drawCircle(graphPositions[7][0], graphPositions[7][1], graphSizes[2]);
      g.beginFill(colors[3]);
      g.drawCircle(graphPositions[8][0], graphPositions[8][1], graphSizes[3]);
      g.beginFill(colors[4]);
      g.drawCircle(graphPositions[9][0], graphPositions[9][1], graphSizes[4]);
      g.endFill();
    },
    [colors, graphPositions, graphSizes]
  );

  return <Graphics draw={draw}></Graphics>;
};
