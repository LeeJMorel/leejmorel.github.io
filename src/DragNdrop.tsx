import React, { useEffect, useState } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { useRegisterEvents, useSigma } from "@react-sigma/core";

const DragNdrop: React.FC<{
  setIsDragging: (isDragging: boolean) => void;
}> = ({ setIsDragging }) => {
  const registerEvents = useRegisterEvents();
  const sigma = useSigma();
  const [draggedNode, setDraggedNode] = useState<string | null>(null);

  useEffect(() => {
    // Register the events
    registerEvents({
      downNode: (e) => {
        setDraggedNode(e.node);
        sigma.getGraph().setNodeAttribute(e.node, "highlighted", true);
        setIsDragging(true);
      },
      mouseup: () => {
        if (draggedNode) {
          sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
          setDraggedNode(null);
          setIsDragging(false);
        }
      },
      mousedown: () => {
        // Disable the autoscale at the first down interaction
        setIsDragging(false);
        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
      },
      mousemove: (e) => {
        if (draggedNode) {
          // Get new position of node
          const pos = sigma.viewportToGraph(e);
          sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
          sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);
          // Prevent sigma to move camera:
          e.preventSigmaDefault();
          e.original.preventDefault();
          e.original.stopPropagation();
        }
      },
      touchup: () => {
        if (draggedNode) {
          sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
          setDraggedNode(null);
        }
      },
      touchdown: () => {
        // Disable the autoscale at the first down interaction
        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
      },
      touchmove: (e) => {
        if (draggedNode) {
          // Get new position of node
          const touch = e.original.touches[0];
          const pos = sigma.viewportToGraph({
            x: touch.clientX,
            y: touch.clientY,
          });
          sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
          sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

          // Prevent sigma to move camera:
          e.original.preventDefault();
          e.original.stopPropagation();
        }
      },
    });
  }, [registerEvents, sigma, draggedNode, setIsDragging]);

  return null;
};

export default DragNdrop;
