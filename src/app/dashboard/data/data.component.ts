import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
  ELEMENT_DATA = [
    {
      position: 1,
      name: 'Hydrogen',
      star: 1.0079,
      review: 'Lorem text for the job review and for check',
      status: 'Developer',
      date: '2/3/20',
    },
    {
      position: 2,
      name: 'Helium',
      star: 4.0026,
      review: 'Lorem text for the job review and for check',
      status: 'Frontend',
      date: '2/3/20',
    },
    {
      position: 3,
      name: 'Lithium',
      star: 6.941,
      review: 'Lorem text for the job review and for check',
      status: 'Backend',
      date: '2/3/20',
    },
    {
      position: 4,
      name: 'Beryllium',
      star: 9.0122,
      review: 'Lorem text for the job review and for check',
      status: 'UI/UX design',
      date: '2/3/20',
    },
    {
      position: 5,
      name: 'Boron',
      star: 10.811,
      review: 'Lorem text for the job review and for check',
      status: 'Designer',
      date: '2/3/20',
    },
    {
      position: 6,
      name: 'Carbon',
      star: 12.0107,
      review: 'Lorem text for the job review and for check',
      status: 'developer',
      date: '2/3/20',
    },
    {
      position: 7,
      name: 'Nitrogen',
      star: 14.0067,
      review: 'Lorem text for the job review and for check',
      status: 'Ui developer',
      date: '2/3/20',
    },
    {
      position: 8,
      name: 'Oxygen',
      star: 15.9994,
      review: 'Lorem text for the job review and for check',
      status: 'UX developer',
      date: '2/3/20',
    },
    {
      position: 9,
      name: 'Fluorine',
      star: 18.9984,
      review: 'Lorem text for the job review and for check',
      status: 'Programming',
      date: '2/3/20',
    },
    {
      position: 10,
      name: 'Neon',
      star: 20.1797,
      review: 'Lorem text for the job review and for check',
      status: 'data manage',
      date: '2/3/20',
    },
    {
      position: 11,
      name: 'Sodium',
      star: 22.9897,
      review: 'Lorem text for the job review and for check',
      status: 'status',
      date: '2/3/20',
    },
    {
      position: 12,
      name: 'Magnesium',
      star: 24.305,
      review: 'Lorem text for the job review and for check',
      status: 'biolls one',
      date: '2/3/20',
    },
    {
      position: 13,
      name: 'Aluminum',
      star: 26.9815,
      review: 'Lorem text for the job review and for check',
      status: 'codes one',
      date: '2/3/20',
    },
    {
      position: 14,
      name: 'Silicon',
      star: 28.0855,
      review: 'Lorem text for the job review and for check',
      status: 'bilil bhai',
      date: '2/3/20',
    },
    {
      position: 15,
      name: 'Phosphorus',
      star: 30.9738,
      review: 'Lorem text for the job review and for check',
      status: 'IOS Developer',
      date: '2/3/20',
    },
    {
      position: 16,
      name: 'Sulfur',
      star: 32.065,
      review: 'Lorem text for the job review and for check',
      status: 'Android',
      date: '2/3/20',
    },
    {
      position: 17,
      name: 'Chlorine',
      star: 35.453,
      review: 'Lorem text for the job review and for check',
      status: 'Starter',
      date: '2/3/20',
    },
    {
      position: 18,
      name: 'Argon',
      star: 39.948,
      review: 'Lorem text for the job review and for check',
      status: 'Gamer',
      date: '2/3/20',
    },
    {
      position: 19,
      name: 'Potassium',
      star: 39.0983,
      review: 'Lorem text for the job review and for check',
      status: 'Developer',
      date: '2/3/20',
    },
    {
      position: 20,
      name: 'Calcium',
      star: 40.078,
      review: 'Lorem text for the job review and for check',
      status: 'Designer',
      date: '2/3/20',
    },
  ];

  displayedColumns: string[] = [];
  dataSource: any;
  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'star', 'review', 'status', 'date'];
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  star: number;
  review: string;
  status: string;
  date: string;
}
