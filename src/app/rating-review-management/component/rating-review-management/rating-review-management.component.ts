import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rating-review-management',
  templateUrl: './rating-review-management.component.html',
  styleUrls: ['./rating-review-management.component.scss'],
})
export class RatingReviewManagementComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
  ELEMENT_DATA = [
    {
      position: 1,
      job_id: 325,
      job_title: 'Hydrogen',
      customer: 'Alex',
      service: 'Eamma',
      customer_rating: '',
      service_rating: '',
    },
    {
      position: 2,
      job_id: 325,
      job_title: 'Hydrogen',
      customer: 'Alex',
      service: 'Eamma',
      customer_rating: '',
      service_rating: '',
    },
    {
      position: 3,
      job_id: 325,
      job_title: 'Hydrogen',
      customer: 'Alex',
      service: 'Eamma',
      customer_rating: '',
      service_rating: '',
    },
    {
      position: 4,
      job_id: 325,
      job_title: 'Hydrogen',
      customer: 'Alex',
      service: 'Eamma',
      customer_rating: '',
      service_rating: '',
    },
    {
      position: 5,
      job_id: 325,
      job_title: 'Hydrogen',
      customer: 'Alex',
      service: 'Eamma',
      customer_rating: '',
      service_rating: '',
    },
    {
      position: 6,
      job_id: 325,
      job_title: 'Hydrogen',
      customer: 'Alex',
      service: 'Eamma',
      customer_rating: '',
      service_rating: '',
    },
    {
      position: 7,
      job_id: 325,
      job_title: 'Hydrogen',
      customer: 'Alex',
      service: 'Eamma',
      customer_rating: '',
      service_rating: '',
    },
    {
      position: 8,
      job_id: 325,
      job_title: 'Hydrogen',
      customer: 'Alex',
      service: 'Eamma',
      customer_rating: '',
      service_rating: '',
    },
    {
      position: 9,
      job_id: 325,
      job_title: 'Hydrogen',
      customer: 'Alex',
      service: 'Eamma',
      customer_rating: '',
      service_rating: '',
    },
    {
      position: 10,
      job_id: 325,
      job_title: 'Hydrogen',
      customer: 'Alex',
      service: 'Eamma',
      customer_rating: '',
      service_rating: '',
    },
  ];

  displayedColumns: string[] = [];
  dataSource: any;
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = [
      'position',
      'job_id',
      'job_title',
      'customer',
      'service',
      'customer_rating',
      'service_rating',
    ];
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  position: number;
  job_id: number;
  job_title: string;
  customer: string;
  service: string;
  customer_rating: string;
  service_rating: string;
}
