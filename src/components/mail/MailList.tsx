import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import type { MailMessage } from "@/data/mock";

type MailListProps = {
  folderName: string;
  messages: MailMessage[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export default function MailList({ folderName, messages, selectedId, onSelect }: MailListProps) {
  return (
    <Box
      component="section"
      aria-labelledby="mail-title"
      sx={{
        flex: "2 1 420px",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        borderRight: 1,
        borderColor: "divider",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, px: 3, pt: 2, pb: 1 }}
      >
        <Typography variant="overline" component="h2" id="mail-title" color="text.secondary">
          Mail · {folderName}
        </Typography>
        <Button variant="outlined" size="small">
          New message
        </Button>
      </Box>

      <List disablePadding>
        {messages.map((message) => (
          <ListItem key={message.id} disablePadding divider>
            <ListItemButton
              selected={message.id === selectedId}
              onClick={() => onSelect(message.id)}
              sx={{ px: 3, py: 1.5, alignItems: "flex-start", gap: 2 }}
            >
              <ListItemText primary={message.from} secondary={message.subject} sx={{ m: 0 }} />
              <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: "nowrap", pt: 0.5 }}>
                {message.time}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
