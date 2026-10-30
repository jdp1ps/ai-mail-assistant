// Design-system kit barrel. Bundled by `pnpm build:ds` into
// dist/ds/bundle.js (window.SmartMailAssistant), bundle.css and index.d.ts.

// Theme
export { default as theme, fontFamily } from "../theme";
export { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
export { default as CssBaseline } from "@mui/material/CssBaseline";

// Kit components
export { default as AppBanner } from "../components/AppBanner";
export { default as NavBar } from "../components/NavBar";

// MUI primitives used by the screens
export { default as AppBar } from "@mui/material/AppBar";
export { default as Toolbar } from "@mui/material/Toolbar";
export { default as Tabs } from "@mui/material/Tabs";
export { default as Tab } from "@mui/material/Tab";
export { default as Box } from "@mui/material/Box";
export { default as Container } from "@mui/material/Container";
export { default as Stack } from "@mui/material/Stack";
export { default as Paper } from "@mui/material/Paper";
export { default as Typography } from "@mui/material/Typography";
export { default as Button } from "@mui/material/Button";
export { default as IconButton } from "@mui/material/IconButton";
export { default as TextField } from "@mui/material/TextField";
export { default as Divider } from "@mui/material/Divider";
export { default as List } from "@mui/material/List";
export { default as ListItem } from "@mui/material/ListItem";
export { default as ListItemButton } from "@mui/material/ListItemButton";
export { default as ListItemText } from "@mui/material/ListItemText";
export { default as Card } from "@mui/material/Card";
export { default as CardContent } from "@mui/material/CardContent";
export { default as Chip } from "@mui/material/Chip";
export { default as Alert } from "@mui/material/Alert";
export { default as CircularProgress } from "@mui/material/CircularProgress";
