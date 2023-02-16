import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'category', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  category: string;
  position: number;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 2,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 3,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 4,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 5,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 6,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 7,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 8,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 9,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 10,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 11,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 12,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 13,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 14,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 15,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 16,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 17,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 18,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 19,
    category: 'Hydrogen',
    action: '',
  },
  {
    position: 20,
    category: 'Hydrogen',
    action: '',
  },
];
