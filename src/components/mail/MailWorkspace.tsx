"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import ChatPanel from "./ChatPanel";
import FolderList from "./FolderList";
import MailList from "./MailList";
import { chatMessages, folders, messages } from "@/data/mock";

/** Holds the folder and message selection shared by the three mail columns. */
export default function MailWorkspace() {
  const [folderId, setFolderId] = useState(folders[0].id);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(messages[0]?.id ?? null);

  const folder = folders.find((f) => f.id === folderId) ?? folders[0];

  const selectFolder = (id: string) => {
    setFolderId(id);
    setSelectedMessageId(messages[0]?.id ?? null);
  };

  return (
    <Box
      component="main"
      sx={{ flex: "1 1 auto", display: "flex", flexWrap: "wrap", alignItems: "stretch", minHeight: 0 }}
    >
      <ChatPanel messages={chatMessages} drafting />
      <MailList
        folderName={folder.name}
        messages={messages}
        selectedId={selectedMessageId}
        onSelect={setSelectedMessageId}
      />
      <FolderList folders={folders} selectedId={folderId} onSelect={selectFolder} />
    </Box>
  );
}
