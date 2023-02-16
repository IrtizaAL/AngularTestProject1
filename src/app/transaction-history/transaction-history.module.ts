import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';

import { TransactionHistoryRoutingModule } from './transaction-history-routing.module';
import { TransactionHistoryComponent } from './component/transaction-history/transaction-history.component';

@NgModule({
  declarations: [TransactionHistoryComponent],
  imports: [CommonModule, MatTableModule, MaterialModule, TransactionHistoryRoutingModule],
})
export class TransactionHistoryModule {}
