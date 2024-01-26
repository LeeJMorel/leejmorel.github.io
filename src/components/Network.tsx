/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "../App.scss";
import Resume from "../data/resumeNetwork.json";
import "@react-sigma/core/lib/react-sigma.min.css";
import { SigmaGraphViewer } from "./SigmaGraphViewer";
import Sidebar from "./Sidebar";
import OnHoverTitle from "./OnHoverTitle";
import DetailSidebar from "./DetailSidebar";

const Network = () => {
  const [showDetailSidebar, setDetailSidebar] = useState(false);
  const [detailSidebarData, setDetailSidebarData] = useState<string | null>(
    null
  );
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const graphData = Resume;

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
      setHoveredNode(label);
    }
  };

  return (
    <div className="app-body content-container">
      {!showDetailSidebar && <Sidebar />}

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
