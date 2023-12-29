import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { SidebarItem, sidebarBodyMap, Category } from './types'; // Adjust the path

interface ContentGridProps {
  type: Category;
}

const ContentGrid: React.FC<ContentGridProps> = ({ type }) => {
  const itemsOfType: SidebarItem[] = Object.values(sidebarBodyMap).filter((item) => {
    return 'type' in item && item.type === type;
  });

  return (
    <div className="app-body content-container">
    <Grid container spacing={2}>
      {itemsOfType.map((item) => (
        <Grid item xs={12} md={6} lg={4} key={item.description}>
          <Paper>
            {/* You can customize the content based on your needs */}
            <Typography variant="h6">{item.description}</Typography>
            {item.link && <a href={item.link}>Learn more</a>}
          </Paper>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default ContentGrid;