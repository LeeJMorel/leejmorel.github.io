import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { Category } from './types';

interface CategoryToggleProps {
  categories: Category[];
  onCategorySelect: (selectedCategory: Category) => void;
  isMobile: boolean;
}

const CategoryToggle: React.FC<CategoryToggleProps> = ({ categories, onCategorySelect, isMobile }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <ButtonGroup
      orientation={isMobile ? 'vertical' : 'horizontal'}
      sx={{
        borderRadius: 8,
        overflow: 'hidden',
        borderColor: 'primary.main',
      }}
    >
      {categories.map((category, index) => (
        <Button
          key={category}
          onClick={() => handleCategoryChange(category)}
          variant={selectedCategory === category ? 'contained' : 'outlined'}
          sx={{
            '&:first-of-type': {
              borderTopRightRadius: isMobile ? 8 : 0,
              borderBottomRightRadius: isMobile ? 8 : 0,
              borderBottomLeftRadius: !isMobile && index === categories.length - 1 ? 0 : null,
            },
            '&:last-of-type': {
              borderTopLeftRadius: isMobile ? 8 : 0,
              borderBottomLeftRadius: isMobile ? 8 : 0,
              borderTopRightRadius: !isMobile && index === 0 ? 0 : null,
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
