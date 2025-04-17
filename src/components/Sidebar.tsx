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
          subheader="Learn more details by clicking on what interests you."
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
              "As a Full Stack Software Engineer at Delfina, I'm deeply passionate about leveraging technology to improve healthcare, particularly in maternal and child health. With a B.S. in Computer Science from the University of Washington, I’ve built a diverse skill set through personal projects, coursework, and professional experiences, all while maintaining a strong commitment to service. My undergraduate journey was defined not only by academic excellence but also by my dedication to contributing to the community. I’m particularly proud of my published research focusing on bias discrepancies in mental health for large language models, aiming to improve fairness in medical AI. I’m excited to continue making a positive impact in the med tech field, where I can combine my technical expertise with my passion for social good."
            }
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
