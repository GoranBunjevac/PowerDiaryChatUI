import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChatEvent } from 'src/models/chat-event';
import { HourlyChatEvent } from 'src/models/hourly-chat-event';
import { ChatService } from 'src/services/chat.service';

@Component({
  selector: 'app-power-diary-chat',
  templateUrl: './power-diary-chat.component.html',
  styleUrls: ['./power-diary-chat.component.scss'],
})
export class PowerDiaryChatComponent implements OnInit {
  chatHistory: ChatEvent[] | undefined;
  hourlyChatHistory: HourlyChatEvent[] | undefined;
  byMinute: boolean = true;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.getChatData();
  }

  getChatData() {
    this.chatService.getChat().subscribe((data) => {
      this.chatHistory = data;
      this.byMinute = true;
      console.log(this.chatHistory);
    });
  }

  public sortByMinute() {
    this.getChatData();
  }

  public sortHourly() {
    this.chatService.getChatHourlyAggregated().subscribe((data) => {
      this.hourlyChatHistory = data;
      this.byMinute = false;
      console.log(data);
    });
  }
}
