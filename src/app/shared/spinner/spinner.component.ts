import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(private spinerService: SpinnerService) { }
  visivility$ = this.spinerService.visibility
  errors$ = this.spinerService.errors
  ngOnInit(): void {
    this.spinerService.reset();
  }
closeModal(){
  this.spinerService.reset();
}

}
