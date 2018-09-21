import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { UiGridDirective } from './directive/uigrid.directive';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { GridComponent } from './grid/grid.component';
import { treeComponent } from './tree/tree.component';
import { TreeviewModule } from 'ngx-treeview';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
const appRoutes: Routes = [
  { path: "grid", component: GridComponent },
  { path: "tree", component: treeComponent },
  {
    path: '',
    redirectTo: '/tree',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    UiGridDirective,
    GridComponent,
    treeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UpgradeModule,
    TreeviewModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TableModule
  ],
  providers: [],
  exports: [UiGridDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
