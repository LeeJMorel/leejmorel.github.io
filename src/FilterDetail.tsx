import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import "./App.scss";
import { FilterOption } from "./types";

interface FilterDetailProps {
  filter: FilterOption;
}

const FilterDetail: React.FC<FilterDetailProps> = ({ filter }) => {
  // Define content for different filter labels
  const contentMap: Record<
    string,
    {
      title: string;
      header: string;
      subheader: string;
      textBody: React.ReactNode;
    }
  > = {
    fantasticfour: {
      title: "Explore Lee's Resume",
      header: "Hello!",
      subheader: "Learn more details by double clicking",
      textBody: (
        <>
          <p>
            As a Senior undergradute expecting to graduate June 2024 I have developed a wide range of skills through my personal projects, classes, and working experiances.  My CV provides a brief explanation of these, or you can learn about what I've done in detail here!
          </p>
        </>
      ),
    },
  };

  // Determine the content based on the filter label or default to welcome
  const filterKey = filter?.label.toLowerCase().replace(/[\s-]/g, "");
  console.log(filterKey);
  const { title, header, subheader, textBody } =
    contentMap[filterKey] || contentMap.showall;

  return (
    <div className="social-container">
      <Card className="MuiCard-root">
        <div className="social-heading">
          <h2 className="social-title">{title}</h2>
        </div>
        <CardHeader title={header} subheader={subheader} />
        <CardContent>
          <div className="social-body">{textBody}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterDetail;
