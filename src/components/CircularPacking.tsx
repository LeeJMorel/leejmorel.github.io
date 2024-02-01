import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { makeCircles } from "./makeCircles";
import { scaleSqrt, extent } from "d3";
import { Node as NodeType } from "../types";

const BUBBLE_MIN_SIZE = 1;
const BUBBLE_MAX_SIZE = 50;

type CircularPackingProps = {
  width: number;
  height: number;
  data: NodeType[];
};

const CircularPacking = ({ width, height, data }: CircularPackingProps) => {
  const margin = 70; // Add a margin to ensure nodes are not at the edge of the screen
  const nodes: NodeType[] = data.map((d) => ({
    ...d,
    x: Math.random() * (width - 2 * margin) + margin,
    y: Math.random() * height,
  }));

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [min, max] = extent(nodes.map((d) => d.size)) as [number, number];
  const sizeScale = scaleSqrt()
    .domain([min, max])
    .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);

  const handleNodeClick = (node: NodeType) => {
    // Handle the click event for the node
    console.log("Node clicked:", node.label);
  };

  useEffect(() => {
    // set dimension of the canvas element
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) {
      return;
    }

    // run d3-force to find the position of nodes on the canvas
    d3.forceSimulation(nodes)
      .force(
        "collide",
        d3.forceCollide().radius((node) => sizeScale(node.size) + 1)
      )
      .force("charge", d3.forceManyBody().strength(80))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("charge", d3.forceY(0).strength(0.01))
      .on("tick", () => {
        makeCircles(context, width, height, nodes, sizeScale, handleNodeClick);
      });
  }, [width, height, nodes, sizeScale]);

  return (
    <div className="app-body content-container">
      <canvas
        ref={canvasRef}
        style={{
          width,
          height,
        }}
        width={width}
        height={height}
      />
    </div>
  );
};

export default CircularPacking;
