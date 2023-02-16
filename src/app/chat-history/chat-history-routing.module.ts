import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatHistoryComponent } from './component/chat-history/chat-history.component';

const routes: Routes = [{ path: '', component: ChatHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatHistoryRoutingModule {}
