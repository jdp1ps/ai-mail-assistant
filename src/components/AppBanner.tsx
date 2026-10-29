import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function AppBanner() {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="h1" sx={{ fontWeight: 600 }}>
          AI Mail Assistant
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
