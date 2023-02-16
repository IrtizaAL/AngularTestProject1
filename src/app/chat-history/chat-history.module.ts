import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatHistoryRoutingModule } from './chat-history-routing.module';
import { ChatHistoryComponent } from './component/chat-history/chat-history.component';

@NgModule({
  declarations: [ChatHistoryComponent],
  imports: [CommonModule, ChatHistoryRoutingModule],
})
export class ChatHistoryModule {}
