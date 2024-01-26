import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import "../App.scss";
import LeeImage from "../assets/lee.jpg";

const Sidebar = () => {
  return (
    <div className="social-container">
      <Card className="MuiCard-root">
        <div className="social-heading">
          <h2 className="social-title">{"Explore Lee's Resume"}</h2>
        </div>
        <CardHeader
          title="Hello!"
          subheader="Learn more details by double clicking."
        />
        <CardMedia
          component="img"
          height="190"
          image={LeeImage}
          alt="Lee wearing a beanie."
        />
        <CardContent>
          <div className="social-body">
            {
              "As a Senior undergraduate anticipating graduation in June 2024, I have cultivated a diverse skill set through personal projects, coursework, and professional experiences. My CV offers a concise overview of these skills, or you can delve into the details of my accomplishments here!"
            }
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
