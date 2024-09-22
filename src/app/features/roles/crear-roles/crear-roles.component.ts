import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { rolModel } from 'src/app/core/models/rolModel';
import { RolService } from 'src/app/core/services/rol.service';

@Component({
  selector: 'app-crear-roles',
  templateUrl: './crear-roles.component.html',
  styleUrls: ['./crear-roles.component.css']
})
export class CrearRolesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<CrearRolesComponent>,
    private matDialog: MatDialog,
    private rolService: RolService
  ) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  /* La documentacion usada para realizar el formulario de este componente fue sacada de la siguiente pagina: 
  https://netbasal.com/typed-reactive-forms-in-angular-no-longer-a-type-dream-bf6982b0af28
  */
  // Formulario en TypeScript
  formRol = this.formBuilder.group<ControlsOf<rolModel>>({
    NOMBRE_ROL: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ],
    }),
    DESCRIPCION: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10), // Ajusta según tus necesidades
        Validators.maxLength(200)
      ],
    }),
  });


  crearRol(rol: rolModel) {
    this.rolService.crearRol(rol).subscribe()
  }

  closeFormModal() {
    this.matDialog.closeAll()
  }
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};