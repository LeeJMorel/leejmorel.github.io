import React from "react";
import { Node as NodeType } from "../types";

interface NodeGraphProps {
  nodes: NodeType[];
}

const NodeGraph: React.FC<NodeGraphProps> = ({ nodes }) => {
  const colorGroups: Record<string, NodeType[]> = {};
  nodes.forEach((node) => {
    if (!colorGroups[node.color]) {
      colorGroups[node.color] = [];
    }
    colorGroups[node.color].push(node);
  });

  const margin = 10;

  const hasOverlap = (node, nodesToCheck) => {
    for (const otherNode of nodesToCheck) {
      const distance = Math.sqrt(
        Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
      );
      const minDistance = node.size + otherNode.size + margin;

      if (distance < minDistance) {
        return true;
      }
    }

    return false;
  };

  const getRandomPosition = (size) => {
    const leftPercentageMin = (30 / window.innerWidth) * 100; // 30px to the left
    const leftPercentageMax = 100 - (size / window.innerWidth) * 100; // Adjust for node size
    const topPercentageMin = 0;
    const topPercentageMax = 100 - (size / window.innerHeight) * 100; // Adjust for node size

    return {
      left: `${
        leftPercentageMin +
        Math.random() * (leftPercentageMax - leftPercentageMin)
      }%`,
      top: `${
        topPercentageMin + Math.random() * (topPercentageMax - topPercentageMin)
      }%`,
    };
  };

  const handleNodeClick = (nodeId: string) => {
    // Handle the click event
    console.log(`Node clicked: ${nodeId}`);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "calc(100% - 30px)",
        height: "100vh",
        zIndex: 1000,
      }}
    >
      {Object.values(colorGroups).map((colorGroup) => {
        return colorGroup.map((node, nodeIndex) => {
          let leftPercentage, topPercentage;

          do {
            const position = getRandomPosition(node.size);
            leftPercentage = parseFloat(position.left);
            topPercentage = parseFloat(position.top);
          } while (
            hasOverlap(
              {
                x: (leftPercentage / 100) * window.innerWidth,
                y: (topPercentage / 100) * window.innerHeight,
                size: node.size,
              },
              colorGroup.slice(0, nodeIndex)
            )
          );

          return (
            <div
              key={node.id}
              style={{
                position: "absolute",
                left: `${leftPercentage}%`,
                top: `${topPercentage}%`,
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
              onClick={() => handleNodeClick(node.id)}
            >
              <div
                style={{
                  position: "relative",
                  width: `${node.size}px`,
                  height: `${node.size}px`,
                  borderRadius: "50%",
                  background: node.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "14px",
                  textAlign: "center",
                  padding: "5px",
                }}
              >
                <span style={{ fontWeight: "normal" }}>{node.label}</span>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
};

export default NodeGraph;
