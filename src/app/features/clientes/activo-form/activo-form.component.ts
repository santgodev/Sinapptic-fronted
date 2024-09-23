import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Activo } from 'src/app/core/models/activoModel';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; 
import { activoService } from 'src/app/core/services/clientes/activo.service';
import { ClientesService } from 'src/app/core/services/clientes/clientes.service';
import { Cliente } from 'src/app/core/models/clienteModel';

@Component({
  selector: 'app-activo-form',
  templateUrl: './activo-form.component.html',
  styleUrls: ['./activo-form.component.css']
})
export class ActivoFormComponent implements OnInit {

  activos: Activo[] = [];
  clientes: Cliente[] = [];
  
  formActivo = this.formBuilder.group<ControlsOf<Activo>>({
    ID_CLIENTE: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    NOMBRE_ACTIVO: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
    }),
    CATEGORIA: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    SERIAL: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(4), Validators.maxLength(15)]
    }),
    ACCESORIOS: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(15)]
    }),
    INFORMACION: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)]
    }),
  });

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<ActivoFormComponent>,
    private matDialog: MatDialog,
    private activoService: activoService, // Corregido el nombre del servicio
    private clienteService: ClientesService,
  ) {}

  ngOnInit(): void {
    this.clienteService.listarCliente().subscribe((clientes) => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }

  closeUserFormModal() {
    this.matDialog.closeAll();
  }

  crearActivo(Activo: Activo) {
    this.activoService.crearActivo(Activo).subscribe();
  }
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};
