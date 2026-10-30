import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { ChatMessage } from "@/data/mock";

type ChatPanelProps = {
  messages: ChatMessage[];
  /** True while the assistant is composing a reply. */
  drafting?: boolean;
};

export default function ChatPanel({ messages, drafting = false }: ChatPanelProps) {
  return (
    <Box
      component="section"
      aria-labelledby="chat-title"
      sx={{
        flex: "1 1 320px",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        borderRight: 1,
        borderColor: "divider",
      }}
    >
      <Box sx={{ px: 3, pt: 2, pb: 1 }}>
        <Typography variant="overline" component="h2" id="chat-title" color="text.secondary">
          Chat
        </Typography>
      </Box>

      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          px: 3,
          py: 1,
          overflowY: "auto",
          minHeight: 240,
        }}
      >
        {messages.map((message) => {
          const isUser = message.role === "user";
          return (
            <Box
              key={message.id}
              sx={{
                alignSelf: isUser ? "flex-end" : "flex-start",
                maxWidth: "85%",
                px: 1.5,
                py: 1,
                borderRadius: 1,
                bgcolor: isUser ? "primary.main" : "action.hover",
                color: isUser ? "primary.contrastText" : "text.primary",
              }}
            >
              <Typography variant="body2">{message.text}</Typography>
            </Box>
          );
        })}
        {drafting && (
          <Box
            role="status"
            sx={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 1.5, px: 1.5, py: 1 }}
          >
            <CircularProgress size={20} aria-label="Drafting" />
            <Typography variant="caption" color="text.secondary">
              Drafting reply…
            </Typography>
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end", px: 3, pt: 2, pb: 3 }}>
        <TextField
          label="Ask the assistant"
          placeholder="e.g. Summarise unread mail from today"
          multiline
          minRows={1}
          size="small"
          sx={{ flex: "1 1 auto" }}
        />
        <Button variant="contained">Send</Button>
      </Box>
    </Box>
  );
}
