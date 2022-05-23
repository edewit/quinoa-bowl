export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
}

export const getMessages = async () => await fetch("/api/messages").then(res => res.json()) as Message[];

export const getMessage = async (id: number) => await fetch(`/api/messages/${id}`).then(res => res.json()) as Message;
