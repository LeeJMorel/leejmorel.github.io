import { FC, useEffect, useState } from "react";
import {
  ControlsContainer,
  FullScreenControl,
  SearchControl,
  SigmaContainer,
  ZoomControl,
  useLoadGraph,
  useRegisterEvents,
  useSetSettings,
  useSigma,
} from "@react-sigma/core";
import {
  AiOutlineZoomIn,
  AiOutlineZoomOut,
  AiOutlineFullscreenExit,
  AiOutlineFullscreen,
} from "react-icons/ai";
import { MdFilterCenterFocus } from "react-icons/md";
import { MultiDirectedGraph } from "graphology";
import "../App.scss";
import { Attributes } from "graphology-types";
import { GraphData } from "../types";
import DragNdrop from "./DragNdrop";

interface SigmaGraphViewerProps {
  data: GraphData;
  onNodeClick: (label: string) => void;
  hovered: (label: string | null) => void;
}

function customDrawLabel(context, data, settings) {
  const fontSize = settings.labelSize || 12;
  context.font = `${fontSize}px Lato, sans-serif`;

  if (data.highlighted === false) {
    context.fillStyle = "rgba(0, 0, 0, 0.75)";
    const padding = 4;
    const textWidth = context.measureText(data.label).width;
    const backgroundWidth = textWidth + padding * 2;
    const backgroundHeight = fontSize + padding * 2;
    context.fillRect(
      data.x - backgroundWidth / 2,
      data.y - fontSize / 2 - padding,
      backgroundWidth,
      backgroundHeight
    );

    context.fillStyle = "white";
    context.fillText(data.label, data.x - textWidth / 2, data.y + fontSize / 2);
  }
}

const MyGraph: FC<
  SigmaGraphViewerProps & {
    isDragging: boolean;
    setIsDragging: (isDragging: boolean) => void;
  }
> = ({ data, onNodeClick, hovered, isDragging }) => {
  const loadGraph = useLoadGraph();
  const sigma = useSigma();
  const registerEvents = useRegisterEvents();
  const setSettings = useSetSettings();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  useEffect(() => {
    // Create the graph
    const graph = new MultiDirectedGraph();

    data.nodes.forEach((node) => {
      graph.addNode(node.id, { ...node });
    });

    data.edges.forEach((edge) => {
      graph.addEdgeWithKey(edge.id, edge.source, edge.target, {
        color: edge.color,
      });
    });

    loadGraph(graph);

    registerEvents({
      enterNode: (event) => {
        if (!isDragging) {
          setHoveredNode(event.node);
        }
      },
      leaveNode: () => {
        if (!isDragging) {
          setHoveredNode(null);
        }
      },
      clickNode: (event) => {
        if (!isDragging) {
          const clickedNode = sigma
            .getGraph()
            .getNodeAttributes(event.node).label;
          onNodeClick(clickedNode);
        }
      },
    });
  }, [data, loadGraph, registerEvents, onNodeClick, sigma, isDragging]);

  useEffect(() => {
    const graph = sigma.getGraph();
    setSettings({
      labelRenderer: customDrawLabel,
      nodeReducer: (node, data) => {
        const newData: Attributes = {
          ...data,
          highlighted: data.highlighted || false,
        };

        if (hoveredNode) {
          if (node === hoveredNode) {
            hovered(data.label);
            newData.highlighted = true;
          } else if (graph.neighbors(hoveredNode).includes(node)) {
            newData.highlighted = true;
          } else {
            newData.color = "#E2E2E2";
            newData.highlighted = false;
          }
        } else {
          hovered(null);
        }
        return newData;
      },
      edgeReducer: (edge, data) => {
        const newData = { ...data, hidden: false };

        if (hoveredNode && !graph.extremities(edge).includes(hoveredNode)) {
          newData.hidden = true;
        }
        return newData;
      },
    });
  }, [hoveredNode, setSettings, sigma, hovered]);

  return null;
};

export const SigmaGraphViewer: FC<SigmaGraphViewerProps> = ({
  data,
  onNodeClick,
  hovered,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <>
      <SigmaContainer
        graph={MultiDirectedGraph}
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
          overflow: "hidden",
          background: "transparent",
        }}
        settings={{
          labelFont: "Lato, sans-serif",
          zIndex: true,
          defaultEdgeType: "arrow",
        }}
      >
        <ControlsContainer position="top-left">
          <ZoomControl>
            <AiOutlineZoomIn color="black" />
            <AiOutlineZoomOut color="black" />
            <MdFilterCenterFocus color="black" />
          </ZoomControl>
          <FullScreenControl>
            <AiOutlineFullscreen color="black" />
            <AiOutlineFullscreenExit color="black" />
          </FullScreenControl>
        </ControlsContainer>
        <ControlsContainer position={"top-right"}>
          <SearchControl style={{ width: "200px" }} />
        </ControlsContainer>
        <MyGraph
          data={data}
          onNodeClick={onNodeClick}
          hovered={hovered}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
        />
        <DragNdrop setIsDragging={setIsDragging} />
      </SigmaContainer>
    </>
  );
};
