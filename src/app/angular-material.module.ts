import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatInputModule],
  exports: [MatCardModule, MatFormFieldModule, MatInputModule],
})
export class AngularMaterialModule { }
