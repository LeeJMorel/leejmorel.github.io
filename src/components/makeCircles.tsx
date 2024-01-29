import { ScalePower } from "d3";
import { Node as NodeType } from "../types";

export const makeCircles = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: NodeType[],
  sizeScale: ScalePower<number, number, never>,
  handleNodeClick: (node: NodeType) => void
) => {
  // Clear the canvas
  context.clearRect(0, 0, width, height);

  // Draw the nodes
  nodes.forEach((node) => {
    if (!node.x || !node.y) {
      return;
    }

    context.beginPath();
    context.moveTo(node.x + 12, node.y);
    context.arc(node.x, node.y, sizeScale(node.size), 0, 2 * Math.PI);
    context.fillStyle = node.color;
    context.fill();

    // Add click event
    context.canvas.addEventListener("click", (event) => {
      const rect = context.canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (
        mouseX >= node.x - sizeScale(node.size) &&
        mouseX <= node.x + sizeScale(node.size) &&
        mouseY >= node.y - sizeScale(node.size) &&
        mouseY <= node.y + sizeScale(node.size)
      ) {
        handleNodeClick(node);
      }
    });

    // Draw the label
    context.font = "13px sans-serif";
    context.fillStyle = "#000"; // Black color for text
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(node.label, node.x, node.y);
  });
};
