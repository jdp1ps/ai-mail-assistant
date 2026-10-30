import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import type { Folder } from "@/data/mock";

type FolderListProps = {
  folders: Folder[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function FolderList({ folders, selectedId, onSelect }: FolderListProps) {
  return (
    <Box
      component="section"
      aria-labelledby="folders-title"
      sx={{ flex: "0 1 260px", minWidth: 220, display: "flex", flexDirection: "column" }}
    >
      <Box sx={{ px: 3, pt: 2, pb: 1 }}>
        <Typography variant="overline" component="h2" id="folders-title" color="text.secondary">
          Folders
        </Typography>
      </Box>

      <List disablePadding sx={{ px: 1 }}>
        {folders.map((folder) => {
          const selected = folder.id === selectedId;
          return (
            <ListItem key={folder.id} disablePadding>
              <ListItemButton
                selected={selected}
                onClick={() => onSelect(folder.id)}
                sx={{ borderRadius: 1, gap: 1.5 }}
              >
                <ListItemText primary={folder.name} sx={{ m: 0 }} />
                {folder.unread > 0 && (
                  <Chip
                    label={folder.unread}
                    size="small"
                    color={selected ? "primary" : "default"}
                    aria-label={`${folder.unread} unread`}
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
