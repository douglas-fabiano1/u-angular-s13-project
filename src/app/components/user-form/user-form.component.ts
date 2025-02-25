import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {
  // precisa receber a lista de gênero, lista de estados e usuário selecionado à partir do componente pai que implementa o app-user-form, no caso, o app.component.html
  passwordStrengthValue = 0;

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnInit() {
    console.log('ngOnInit');
    // console.log('genresList', this.genresList);
    // console.log('statesList', this.statesList);
    // console.log('userSelected', this.userSelected);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log('changes', changes);
    // console.log('genresList', this.genresList);
    // console.log('statesList', this.statesList);
    // console.log('userSelected', this.userSelected);
  }

  onPasswordChange(password: string){
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }
}
