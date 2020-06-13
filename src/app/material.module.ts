import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
const materialModule = [
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSelectModule,
  MatMenuModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModule
  ],
  exports: [
    ...materialModule
  ]
})
export class MaterialModule { }
