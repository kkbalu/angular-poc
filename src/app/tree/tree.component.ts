import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { BookService } from './tree.service';
@Component({
  selector: 'app-tree-component',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [BookService]
})

export class treeComponent implements OnInit {
  dropdownEnabled = true;
  items: TreeviewItem[];
  treeresult: any;
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 600
  });

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  constructor(
    private service: BookService,
  ) { }

  ngOnInit() {
    // this.treeresult = this.service.getTree();

    this.service.getTree().then(
      data => {
        this.treeresult = data;
        const childlist = [];
        for (let i = 0; i < this.treeresult.data.length; i++) {
          const childrenCategory = new TreeviewItem(this.treeresult.data[i]);
          childlist.push(childrenCategory);

        }
        this.items = childlist;
        console.log(this.items);

      }
    );
  }

  onFilterChange(value: string) {
    console.log('filter:', value);
  }
}