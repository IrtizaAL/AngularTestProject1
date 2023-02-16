import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customers-management',
  templateUrl: './customers-management.component.html',
  styleUrls: ['./customers-management.component.scss'],
})
export class CustomersManagementComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'l_name', 'email', 'm_number', 'address', 'badge', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  l_name: string;
  position: number;
  email: string;
  m_number: number;
  address: string;
  badge: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 2,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 3,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 4,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 5,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 6,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 7,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 8,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 9,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 10,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 11,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 12,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 13,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 14,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 15,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 16,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 17,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 18,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 19,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
  {
    position: 20,
    name: 'Hydrogen',
    l_name: 'abc',
    email: 'irtiza@gmail.com',
    m_number: 8947345687,
    address: 'abv street 50D',
    badge: 'a1',
    action: '',
  },
];
