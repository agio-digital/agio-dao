import { v4 } from "uuid";

export type MessageType = "info" | "error" | "success" | "warning" | undefined;

export interface Message extends MessagePayload {
  id: string;
  timestamp: number;
  dismissed: boolean;
  archived: boolean;
}

export interface MessagePayload {
  id?: string;
  text?: string;
  title: string;
  action?: [text: string, url: string];
  duration?: number;
  type?: MessageType;
}

export const createMessage = (payload: MessagePayload): Message => {
  return {
    id: payload.id || v4(),
    timestamp: new Date().getTime(),
    dismissed: false,
    archived: false,
    duration: 6000,
    ...payload,
  };
};
