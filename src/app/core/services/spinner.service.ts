import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  visibility = new BehaviorSubject(false);
  errors: BehaviorSubject<"exitoso" | "error" | ""> = new BehaviorSubject<"exitoso" | "error" | "">("");
  constructor() {
  }

  show() {
    this.visibility.next(true);
  }

  hide() {
    this.visibility.next(false);
  }
  exitoso(){
    this.errors.next("exitoso");

  }
  error(){
    this.errors.next("error");
  }
  reset(){
    this.errors.next("");
  }
  }
 
 

