import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  CardActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./App.scss";
import * as Images from "./assets/profiles/ProfilePhoto";

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

  return (
    <div className="social-container">
      <Card className="MuiCard-root">
        <div className="social-heading">
          <h2 className="social-title">MarvelMingle</h2>
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
        <CardHeader title={selected} subheader={`Stuff`} />
        <div className="image-container">
          <img src={Images.DEFAULT} alt={`Profile Picture for ${selected}`} />
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            things
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
