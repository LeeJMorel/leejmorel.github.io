import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  CardActions,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./App.scss";
import defaultImage from "./assets/default.png";
import { sidebarBodyMap } from "./types";

interface DetailSidebarPropsWithCallback {
  selected?: string;
  onClose: () => void;
}

const DetailSidebar: React.FC<DetailSidebarPropsWithCallback> = ({
  selected,
  onClose,
}) => {
  const handleCloseClick = () => {
    onClose();
  };

  const selectedItem = sidebarBodyMap[selected || ""];

  return (
    <div className="social-container">
      <Card className="MuiCard-root">
        <div className="social-heading">
          <h2 className="social-title">Resume Feature</h2>
          <div className="icon">
            <IconButton
              aria-label="Close"
              className="close-icon"
              onClick={handleCloseClick}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <CardHeader
          title={selected}
          subheader={
            selectedItem.link && (
              <Typography variant="body2" color="text.primary">
                <Link href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                  More info
                </Link>
              </Typography>
            )
          }
        />
        <div className="image-container">
          <img src={defaultImage} alt={`Profile Picture for ${selected}`} />
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {selectedItem.description}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="actions"></div>
        </CardActions>
      </Card>
    </div>
  );
};

export default DetailSidebar;
