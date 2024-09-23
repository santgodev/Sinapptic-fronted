import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'; // Cambiado a MatDialogRef
import { rolModel } from 'src/app/core/models/rolModel';
import { RolService } from 'src/app/core/services/rol.service';

@Component({
  selector: 'app-crear-roles',
  templateUrl: './crear-roles.component.html',
  styleUrls: ['./crear-roles.component.css']
})
export class CrearRolesComponent implements OnInit {

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

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<CrearRolesComponent>, // Usar MatDialogRef
    private rolService: RolService
  ) {}

  ngOnInit(): void {
    // Inicializa cualquier dato necesario aquí
  }

  crearRol(rol: rolModel) {
    this.rolService.crearRol(rol).subscribe({
      next: () => this.closeFormModal(),
      error: (err) => console.error('Error al crear rol:', err)
    });
  }

  closeFormModal() {
    this.matDialogRef.close(); // Cierra el diálogo específico
  }
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};
