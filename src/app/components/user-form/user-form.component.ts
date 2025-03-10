import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { convertPtBrDateToDateObj } from '../../utils/convert-pt-br-date-to-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToPtBrDate } from '../../utils/convert-date-obj-to-pt-br-date';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {
  passwordStrengthValue = 0;

  dateValue: Date | null = null;
  minDate: Date | null = null;
  maxDate: Date | null = null;

  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];

  filteredGenresList: GenresListResponse = [];

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  @Output('onFormSubmit') onFormSubmitEmitt = new EventEmitter<void>();

  constructor(
    private readonly _el: ElementRef
  ) { }

  /* App life cicle */
  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['userSelected'];

    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
      this.filteredGenresList = this.genresList;
    }
  }

  /* public methods */
  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }

  onDataChange(event: MatDatepickerInputEvent<any, any>) {
    if (!event.value) {
      return;
    }

    this.userSelected.birthDate = convertDateObjToPtBrDate(event.value);
  }

  displayFn(genreId: number) {
    const genreFound = this.genresList.find(genre => genre.id === genreId);

    return genreFound ? genreFound.description : '';
  }

  filterGenres(text: string) {
    if (typeof text === 'number') return;
    const searchTerm = text.toLowerCase();

    this.filteredGenresList = this.genresList.filter(
      genre => genre.description.toLowerCase().includes(searchTerm)
    );
  }

  isAnyCheckboxChecked(): boolean {
    return this.userSelected.musics.some(music => music.isFavorite)
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      this.focusOnInvalidControl(form);

      return;
    }

    console.log('Válido')
    this.onFormSubmitEmitt.emit();
  }

  focusOnInvalidControl(form: NgForm) {
    console.log();
    for (const control of Object.keys(form.controls)) {
      if (form.controls[control].invalid) {
        const invalidControl: HTMLElement = this._el.nativeElement.querySelector(`[name=${control}]`);

        invalidControl.focus();

        break;
      }
    }
  }

  /* private methods */
  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);

    this.maxDate = new Date();
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }
}
