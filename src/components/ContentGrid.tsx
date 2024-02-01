import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import * as Images from "../assets/resume/DetailPhoto";
import { SidebarItem, sidebarBodyMap, Category } from "../types";

interface ContentGridProps {
  type?: Category;
  singleItem?: SidebarItem;
}

const ContentGrid: React.FC<ContentGridProps> = ({ type, singleItem }) => {
  let itemsToDisplay: SidebarItem[] = [];

  if (singleItem) {
    // If a single item is provided, display only that item
    itemsToDisplay = [singleItem];
  } else {
    // If no single item is provided, filter items by type
    itemsToDisplay = Object.values(sidebarBodyMap).filter((item) => {
      return !type || ("type" in item && item.type === type);
    });
  }

  return (
    <div className="app-body content-container">
      <div className="grid-container">
        <Grid container spacing={2}>
          {itemsToDisplay.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.title}>
              <Paper>
                {/* Display photo if available */}
                {item.photo && (
                  <div className="image-container">
                    <img
                      src={Images[item.photo]}
                      alt={`Photo for ${item.title}`}
                    />
                  </div>
                )}
                <Typography variant="h6">{item.title}</Typography>
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
