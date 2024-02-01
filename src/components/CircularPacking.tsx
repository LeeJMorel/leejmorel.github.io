import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { makeCircles } from "./makeCircles";
import { scaleSqrt, extent } from "d3";
import { Node as NodeType } from "../types";
import ContentGrid from "./ContentGrid";

const BUBBLE_MIN_SIZE = 15;
const BUBBLE_MAX_SIZE = 50;

type CircularPackingProps = {
  width: number;
  height: number;
  data: NodeType[];
};

const CircularPacking = ({ width, height, data }: CircularPackingProps) => {
  const margin = 70;
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

  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null);

  const handleNodeClick = (node: NodeType) => {
    console.log("Node clicked:", node.label);
    setSelectedNode(node);
  };

  const handleClose = () => {
    setSelectedNode(null);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) {
      return;
    }

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "collide",
        d3.forceCollide().radius((node) => sizeScale(node.size) + 1)
      )
      .force("charge", d3.forceManyBody().strength(40))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("charge", d3.forceY(0).strength(0.01))
      .on("tick", () => {
        makeCircles(context, width, height, nodes, sizeScale, handleNodeClick);
      });

    return () => {
      simulation.stop();
    };
  }, [width, height, nodes, sizeScale]);

  return (
    <div className="app-body content-container">
      {!selectedNode && (
        <canvas
          ref={canvasRef}
          style={{
            width,
            height,
          }}
          width={width}
          height={height}
        />
      )}
      {selectedNode && (
        <ContentGrid nodeLabel={selectedNode.label} onClose={handleClose} />
      )}
    </div>
  );
};

export default CircularPacking;
