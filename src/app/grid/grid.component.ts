import { Component, OnInit } from '@angular/core';
import { IGridColumnDefs, IGridoption } from '../interface/igridoption';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'
import { UserService } from './grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [UserService]
})
export class GridComponent implements OnInit {
  cols: any[];
  employee: any;
  gridOptions: IGridoption;
  rowGroupMetadata: any;
  constructor(public http: HttpClient, public UserService: UserService) {
    // https://reqres.in/api/users
  }

  ngOnInit() {


    this.UserService.getUsers().subscribe((comment: any) => {
      this.employee = comment;
      this.updateRowGroupMetaData();
      console.log(this.employee.length);
      if (this.employee.length > 0) {

        this.gridOptions = <IGridoption>{}
        this.gridOptions.exporterMenuPdf = true;
        this.gridOptions.columnDefs = [];
        Object.keys(this.employee[0]).map((key, index) => {
          let gridColumnDefs = <IGridColumnDefs>{}
          gridColumnDefs.field = key;
          gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='{{COL_FIELD}}'><a>{{COL_FIELD CUSTOM_FILTERS}}</a></div>"
          this.gridOptions.columnDefs.push(gridColumnDefs);
        });
        let gridColumnDefs = <IGridColumnDefs>{}

        gridColumnDefs.field = 'edit';
        gridColumnDefs.enableSorting = false;
        gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='edit'><a href='JavaScript:Void(0);' ng-click='grid.appScope.editEmployee(row.entity);'>edit</a></div>"
        this.gridOptions.columnDefs.push(gridColumnDefs);
         var columnNames = Object.keys(JSON.parse('{"id":131143,"ComponentId":2397256,"Title":"FIRE HOSES 3 MONTHLY ROUTINES","ComponentName":"Fire Hoses (Weather Deck / Upper Deck)","ComponentCode":"FFAC2(4)","ComponentType":"FFA- Fire Hoses","ComponentCounterName":"Fire Hoses (Weather Deck / Upper Deck)"}'));


         this.cols = [{field:"id",header:"id"},{field:"ComponentId",header:"ComponentId"},{field:"Title",header:"Title"},{field:"ComponentName",header:"ComponentName"},{field:"ComponentCode",header:"ComponentCode"},{field:"ComponentType",header:"ComponentType"},{field:"ComponentCounterName",header:"ComponentCounterName"}];
        // columnNames.map(function (name) {
        //   this.cols.push({ field: name, header: name });
        // })
        // console.log(cols);
      }
    });

 //   var columnNames = Object.keys(JSON.parse('{"id":131143,"ComponentId":2397256,"Title":"FIRE HOSES 3 MONTHLY ROUTINES","ComponentName":"Fire Hoses (Weather Deck / Upper Deck)","ComponentCode":"FFAC2(4)","ComponentType":"FFA- Fire Hoses","ComponentCounterName":"Fire Hoses (Weather Deck / Upper Deck)"}'));
    
    
   // this.cols = [{field:"id",header:"id"},{field:"ComponentId",header:"ComponentId"},{field:"Title",header:"Title"},{field:"ComponentName",header:"ComponentName"},{field:"ComponentCode",header:"ComponentCode"},{field:"ComponentType",header:"ComponentType"},{field:"ComponentCounterName",header:"ComponentCounterName"}];
         //   columnNames.map(function (name) {
           //   cols.push({ field: name, header: name });
        //    })
            //console.log(cols);
          //   this.cols = [
          //     { field: 'vin', header: 'Vin' }
          // ];
  }
  onSort() {
    this.updateRowGroupMetaData();
}

updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.employee) {
        for (let i = 0; i < this.employee.length; i++) {
            let rowData = this.employee[i];
            let brand = rowData.ComponentType;
            if (i == 0) {
                this.rowGroupMetadata[brand] = { index: 0, size: 1 };
            }
            else {
                let previousRowData = this.employee[i - 1];
                let previousRowGroup = previousRowData.brand;
                if (brand === previousRowGroup)
                    this.rowGroupMetadata[brand].size++;
                else
                    this.rowGroupMetadata[brand] = { index: i, size: 1 };
            }
        }
    }
}
  onEditFunction = ($event) => {
    console.log($event);
    alert($event.ComponentName);
  }

}





