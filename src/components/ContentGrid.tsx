import React from "react";
import { Grid, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as Images from "../assets/resume/DetailPhoto";
import { SidebarItem, sidebarBodyMap, Category } from "../types";

interface ContentGridProps {
  type?: Category;
  nodeLabel?: string; // Update to accept a node label
  onClose?: () => void; // Callback for close button click
}

const ContentGrid: React.FC<ContentGridProps> = ({
  type,
  nodeLabel,
  onClose,
}) => {
  let itemsToDisplay: SidebarItem[] = [];

  if (nodeLabel) {
    // If a node label is provided, find the corresponding item
    const nodeItem = Object.values(sidebarBodyMap).find(
      (item) => item.label === nodeLabel
    );
    if (nodeItem) {
      itemsToDisplay = [nodeItem];
    }
  } else {
    // If no node label is provided, filter items by type
    itemsToDisplay = Object.values(sidebarBodyMap).filter((item) => {
      return !type || ("type" in item && item.type === type);
    });
  }

  const handleCloseClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="app-body content-container">
      <div className="grid-container">
        <Grid container spacing={2}>
          {itemsToDisplay.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.title}>
              <Paper elevation={3}>
                {/* Display photo if available */}
                {item.photo && (
                  <div className="image-container">
                    <img
                      src={Images[item.photo]}
                      alt={`Photo for ${item.title}`}
                    />
                  </div>
                )}
                <div className="grid-heading">
                  <Typography variant="h6">{item.title}</Typography>
                  {nodeLabel && (
                    <div className="icon">
                      <IconButton
                        aria-label="Close"
                        className="close-icon"
                        onClick={handleCloseClick}
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>
                  )}
                </div>
                <Typography>{item.description}</Typography>

                {/* Display link if available */}
                {item.link && <a href={item.link}>Learn more</a>}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ContentGrid;
