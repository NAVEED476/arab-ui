import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png"
import twitter from "../Assets/twitter.png";
import "./dashboard.css"

export default function ProfileCard() {
  return (
    <Card sx={{ width: 250, height: 280, borderRadius:"8px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSj_1GgYYWaOhkVy-oKo69TvG1z3vgXKhM03qPP8HHDBdDs6qoG"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            style={{ textAlign: "center", fontSize: "16px", fontWeight: 700 }}
          >
            Jhon Doe
          </Typography>
          <Typography
            gutterBottom
            component="div"
            style={{ textAlign: "center", fontSize: "14px", fontWeight: 700 }}
          >
            CEO
          </Typography>
          <div variant="body2" color="text.secondary" className="social-icons">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
