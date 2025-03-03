import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatTableModule,
    MatAutocompleteModule,
    MatCheckboxModule,
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatTableModule,
    MatAutocompleteModule,
    MatCheckboxModule,
  ],
})
export class AngularMaterialModule { }
