// Static sample data for the app shell. No backend yet.

export type Folder = { id: string; name: string; unread: number };

export type MailMessage = { id: string; from: string; subject: string; time: string };

export type ChatMessage = { id: string; role: "user" | "assistant"; text: string };

export const folders: Folder[] = [
  { id: "inbox", name: "Inbox", unread: 12 },
  { id: "drafts", name: "Drafts", unread: 2 },
  { id: "sent", name: "Sent", unread: 0 },
  { id: "archive", name: "Archive", unread: 0 },
  { id: "spam", name: "Spam", unread: 3 },
  { id: "trash", name: "Trash", unread: 0 },
];

export const messages: MailMessage[] = [
  { id: "m1", from: "Alice Martin", subject: "Quarterly budget review", time: "09:12" },
  { id: "m2", from: "Bob Leroy", subject: "Re: thesis committee", time: "08:47" },
  { id: "m3", from: "IT Support", subject: "Scheduled maintenance tonight", time: "Yesterday" },
  { id: "m4", from: "Claire Dubois", subject: "Seminar room booking", time: "Yesterday" },
  { id: "m5", from: "Library", subject: "Your loan is due soon", time: "Mon" },
  { id: "m6", from: "David Nguyen", subject: "Slides for Thursday", time: "Mon" },
];

export const chatMessages: ChatMessage[] = [
  { id: "c1", role: "user", text: "Summarise what Alice is asking for." },
  {
    id: "c2",
    role: "assistant",
    text: "Alice needs your quarterly figures by Friday and proposes a call on Monday at 10:00.",
  },
  { id: "c3", role: "user", text: "Draft a reply accepting the call." },
];
