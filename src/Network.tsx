/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo } from "react";
import "./App.scss";
import { FilterOption } from "./types";
import FF from "../src/data/fantastic4.json";
import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaGraphViewer } from "./SigmaGraphViewer";
import FilterDetail from "./FilterDetail";
import OnHoverTitle from "./OnHoverTitle";
import DetailSidebar from "./DetailSidebar";

const graphDataMap = {
  "Fantastic Four": FF,
};
interface NetworkProps {
  filter: FilterOption;
}

const Network: React.FC<NetworkProps> = ({ filter }) => {
  const [showDetailSidebar, setDetailSidebar] = useState(false);
  const [detailSidebarData, setDetailSidebarData] = useState<string | null>(
    null
  );
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const graphData = useMemo(() => graphDataMap[filter.label], [filter.label]);

  const handleNodeClick = (label: string): void => {
    if (label !== null && (!detailSidebarData || detailSidebarData !== label)) {
      setDetailSidebar(true);
      setDetailSidebarData(label);
    }
  };

  const handleCloseDetailSidebar = (): void => {
    setDetailSidebar(false);
    setDetailSidebarData(null);
  };

  const handleHoverNode = (label: string | null): void => {
    if (label !== null && hoveredNode !== label) {
      console.log("hovered node: " + hoveredNode);
      console.log("label: " + label);
      setHoveredNode(label);
    }
  };

  return (
    <div className="app-body network-container">
      {!showDetailSidebar && <FilterDetail filter={filter} />}

      {showDetailSidebar && detailSidebarData && (
        <DetailSidebar
          selected={detailSidebarData}
          onClose={handleCloseDetailSidebar}
        />
      )}

      <div className="network-graph-container">
        <OnHoverTitle label={hoveredNode} />
        <SigmaGraphViewer
          data={graphData}
          onNodeClick={handleNodeClick}
          hovered={handleHoverNode}
        />
      </div>
    </div>
  );
};

export default Network;
