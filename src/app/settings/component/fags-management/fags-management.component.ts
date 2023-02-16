import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-fags-management',
  templateUrl: './fags-management.component.html',
  styleUrls: ['./fags-management.component.scss'],
})
export class FagsManagementComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'question', 'answer', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  position: number;
  question: string;
  answer: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 2,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 3,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 4,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 5,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 6,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 7,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 8,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 9,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 10,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 11,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 12,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 13,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 14,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
  {
    position: 15,
    question: 'How Do I Close My Account?',
    answer: 'We Hate To See You Go, But If You Insist, See How To Close Your Account.',
    action: '',
  },
];
