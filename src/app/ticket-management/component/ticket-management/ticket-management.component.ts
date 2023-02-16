import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss'],
})
export class TicketManagementComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'title', 'description', 'file', 'status', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  title: string;
  position: number;
  description: string;
  file: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 2,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 3,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 4,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 5,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 6,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 7,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 8,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 9,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 10,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 11,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 12,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 13,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 14,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 15,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 16,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 17,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 18,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 19,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
  {
    position: 20,
    title: 'Request a payment',
    description: 'Please verify my account',
    file: 'File.png',
    status: '',
    action: '',
  },
];
