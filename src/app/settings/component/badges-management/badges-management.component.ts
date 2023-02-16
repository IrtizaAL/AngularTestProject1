import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-badges-management',
  templateUrl: './badges-management.component.html',
  styleUrls: ['./badges-management.component.scss'],
})
export class BadgesManagementComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'badges', 'badges_icon', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  position: number;
  badges: string;
  badges_icon: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    badges: 'Beginer',
    badges_icon: '<img>',
    action: '',
  },
  {
    position: 2,
    badges: 'Intermediate',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 3,
    badges: 'Expert',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 4,
    badges: 'Expert',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 5,
    badges: 'Intermediate',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 6,
    badges: 'Expert',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 7,
    badges: 'Beginner',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 8,
    badges: 'Beginner',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 9,
    badges: 'Beginner',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 10,
    badges: 'Beginner',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 11,
    badges: 'Beginner',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 12,
    badges: 'Beginner',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 13,
    badges: 'Beginner',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 14,
    badges: 'Beginner',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 15,
    badges: 'Beginner',
    badges_icon: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
];
