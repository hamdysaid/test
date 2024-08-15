import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PopupService<T> {
  modelId:number = 0;
  private _data:T;
  private _form:FormGroup;
  setForm(formGroup: FormGroup){
    this._form = formGroup;
  }
  getForm(){
    return this._form;
  }
  click(id:number){
    this.modelId = id;
  }

  setData(data: T)
  {
    this._data = data;
  }

  getData(){
    return this._data;
  }

  resetForm(){
    this._form.reset();
  }

}
