import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { Category } from './types';

interface CategoryToggleProps {
  categories: Category[];
  onCategorySelect: (selectedCategory: Category) => void;
}

const CategoryToggle: React.FC<CategoryToggleProps> = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <ButtonGroup sx={{ borderRadius: 8, overflow: 'hidden', borderColor: 'primary.main' }}>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => handleCategoryChange(category)}
          variant={selectedCategory === category ? 'contained' : 'outlined'}
          sx={{
            '&:first-of-type': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            '&:last-of-type': {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          }}
        >
          {category}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default CategoryToggle;
