import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { Usuario } from 'src/app/core/models/moduloModel';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-form-user-create',
  templateUrl: './form-user-create.component.html',
  styleUrls: ['./form-user-create.component.css']
})
export class FormUserCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
     private matDialogRef:MatDialogRef<FormUserCreateComponent>,
      private matDialog:MatDialog,
      private UserService:UserService,
    ) {
  }
  /* La documentacion usada para realizar el formulario de este componente fue sacada de la siguiente pagina: 
  https://netbasal.com/typed-reactive-forms-in-angular-no-longer-a-type-dream-bf6982b0af28
  */
  formUser  = this.formBuilder.group<ControlsOf<Usuario>>({
    NOMBRE: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
    }),
    APELLIDO: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
    }),
    CORREO: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    CC: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(8), Validators.maxLength(15)]
    }),
    TELEFONO: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(15)]
    }),
    CONTRASEÑA: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)]
    }),
    IMG_URL: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('https?://.+')]
    }),
    ROL: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });
  
 


  ngOnInit(): void {
  }
  closeUserFormModal(){
    this.matDialog.closeAll()
  }
  crearUsuario(Usuario:Usuario){
    this.UserService.crearUsuario(Usuario).subscribe({next:((Usuario)=>{this.UserService.agregarUsuario(Usuario.usuario)})})
  }
}


export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};