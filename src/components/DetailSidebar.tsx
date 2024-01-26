import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Link,
  CardMedia,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../App.scss";
import * as Images from "../assets/resume/DetailPhoto";
import { sidebarBodyMap } from "../types";

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
                <Link
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More info
                </Link>
              </Typography>
            )
          }
        />
        {selectedItem.photo && (
          <CardMedia
            component="img"
            height="190"
            image={Images[selectedItem.photo]}
            alt={`Profile Picture for ${selected}`}
          />
        )}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {selectedItem.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailSidebar;
