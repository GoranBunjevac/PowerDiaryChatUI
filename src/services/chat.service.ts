import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatEvent } from 'src/models/chat-event';
import { HourlyChatEvent } from 'src/models/hourly-chat-event';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private httpClient: HttpClient) {}

  public getChat(): Observable<ChatEvent[]> {
    const url = `https://localhost:7093/api/Chat/chat`;
    return this.httpClient.get<ChatEvent[]>(url);
  }

  public getChatHourlyAggregated(): Observable<HourlyChatEvent[]> {
    const url = `https://localhost:7093/api/Chat/hourly`;
    return this.httpClient.get<HourlyChatEvent[]>(url);
  }
}
