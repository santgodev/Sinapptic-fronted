import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Actualizado
import { Cliente } from 'src/app/core/models/clienteModel';
import { ClientesService } from 'src/app/core/services/clientes/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<ClienteFormComponent>, // Actualizado
    private matDialog: MatDialog, // Actualizado
    private clienteService: ClientesService
  ) {}

  ngOnInit(): void {}

  formCliente = this.formBuilder.group<ControlsOf<Cliente>>({
    NOMBRE_CLIENTE: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ],
    }),
    NIT: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ],
    }),
    TELEFONO: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ],
    }),
    DIRECCION: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ],
    }),
    INFORMACION: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ],
    }),
  });

  crearcliente(cliente: Cliente) {
    this.clienteService.crearCliente(cliente).subscribe();
  }

  closeFormModal() {
    this.matDialog.closeAll(); // Actualizado
  }
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};
