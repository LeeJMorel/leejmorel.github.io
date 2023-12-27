import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { FilterOption, defaultFilter } from "./types";

interface FiltersProps {
  filterOptions: FilterOption[];
  onFilterChange: (filter: FilterOption) => void;
  isMobile: boolean; // Pass isMobile from the parent component
}

const Filters: React.FC<FiltersProps> = ({
  filterOptions,
  onFilterChange,
  isMobile,
}) => {
  const [selectedFilter, setSelectedFilter] =
    useState<FilterOption>(defaultFilter);

  const handleFilterClick = (filter: FilterOption) => {
    if (selectedFilter.label === filter.label) {
      // Deselect the filter
      setSelectedFilter(defaultFilter);
      onFilterChange(defaultFilter);
    } else {
      // Select the filter
      setSelectedFilter(filter);
      onFilterChange(filter);
    }
  };

  return (
    <div>
      <ButtonGroup
        variant="contained"
        color="primary"
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        {filterOptions.map((option) => (
          <Button
            key={option.label}
            onClick={() => handleFilterClick(option)}
            style={{
              backgroundColor:
                selectedFilter.label === option.label
                  ? option.color
                  : "transparent",
            }}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Filters;
