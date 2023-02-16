import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'category', 'sub_category'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  category: string;
  position: number;
  sub_category: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 2,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 3,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 4,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 5,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 6,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 7,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 8,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 9,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 10,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 11,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 12,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 13,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 14,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 15,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 16,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 17,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 18,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 19,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
  {
    position: 20,
    category: 'Designer',
    sub_category: 'UI/UX Designer',
  },
];
