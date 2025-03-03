import { Component, Inject } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-before-and-after-dialog',
  templateUrl: './user-before-and-after-dialog.component.html',
  styleUrl: './user-before-and-after-dialog.component.scss'
})
export class UserBeforeAndAfterDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { originalUser: IUser, updatedUser: IUser, }
  ) { }
}
