import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
})
export class TransactionHistoryComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'id', 'amount', 'from', 'to', 'date', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  position: number;
  id: string;
  amount: string;
  from: number;
  to: number;
  status: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 2,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Complete',
    action: '',
  },
  {
    position: 3,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 4,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 5,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 6,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 7,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 8,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 9,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 10,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 11,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 12,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 13,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 14,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 15,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 16,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 17,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 18,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 19,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
  {
    position: 20,
    id: '#5657',
    amount: '$565',
    from: 12 / 4 / 2022,
    to: 18 / 4 / 2022,
    status: 'Refund',
    action: '',
  },
];
