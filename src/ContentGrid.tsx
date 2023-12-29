import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { SidebarItem, sidebarBodyMap, Category } from './types';
import * as Images from "./assets/resume/DetailPhoto";

interface ContentGridProps {
  type: Category;
}

const ContentGrid: React.FC<ContentGridProps> = ({ type }) => {
  const itemsOfType: SidebarItem[] = Object.values(sidebarBodyMap).filter((item) => {
    return 'type' in item && item.type === type;
  });

  return (
    <div className="app-body content-container">
      <div className="grid-container">
        <Grid container spacing={2}>
          {itemsOfType.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.title}>
              <Paper>
                {/* Display photo if available */}
                {item.photo && (
                  <div className="image-container">
                    <img src={Images[item.photo]} alt={`Photo for ${item.title}`} />
                  </div>
                )}

                {/* Display title */}
                <Typography variant="h6">{item.title}</Typography>

                {/* Display description */}
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