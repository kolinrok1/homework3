import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export const Cad = ({ titel, text }) => {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {titel}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
