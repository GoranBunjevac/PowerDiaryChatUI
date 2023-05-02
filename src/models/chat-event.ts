import { ChatEventType } from './chat-event-type';

export interface ChatEvent {
  timestamp: Date;
  member: string;
  type: ChatEventType;
  message: string;
}
