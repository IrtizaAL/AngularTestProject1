import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss'],
})
export class TaskManagementComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
  ELEMENT_DATA = [];

  displayedColumns: string[] = [];
  dataSource: any;
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = [];
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {}
