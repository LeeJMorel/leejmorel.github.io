import React, { useState } from "react";
import * as d3 from "d3";
import { Node as NodeType } from "../types";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

type CircularPackingProps = {
  width: number;
  height: number;
  data: NodeType[];
};

export const CircularPacking = ({
  width,
  height,
  data,
}: CircularPackingProps) => {
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null);

  // Transform your graphData to D3's hierarchy structure
  const hierarchy = d3
    .hierarchy({ children: data })
    .sum((d) => d.size)
    .sort((a, b) => b.value! - a.value!);

  const packGenerator = d3.pack<NodeType>().size([width, height]).padding(4);
  const root = packGenerator(hierarchy);

  const handleNodeClick = (node: NodeType) => {
    setSelectedNode(node);
  };

  const handleCloseModal = () => {
    setSelectedNode(null);
  };

  return (
    <div className="app-body content-container">
      <svg width={width} height={height} style={{ display: "inline-block" }}>
        {root
          .descendants()
          .slice(1)
          .map((node) => (
            <circle
              key={node.data.id}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.data.color}
              onClick={() => handleNodeClick(node.data)}
              style={{ cursor: "pointer" }}
            />
          ))}
        {root
          .descendants()
          .slice(1)
          .map((node) => (
            <text
              key={node.data.id}
              x={node.x}
              y={node.y}
              fontSize={13}
              fontWeight={400}
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {node.data.label}
            </text>
          ))}
      </svg>

      {selectedNode !== null && (
        <div
          className="node-info-modal"
          style={{ backgroundColor: selectedNode.color }}
        >
          <div className="icon">
            <IconButton
              aria-label="Close"
              className="close-icon"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <h2>{selectedNode.label}</h2>
        </div>
      )}
    </div>
  );
};
