export interface componentModel {
  NOMBRE_COMPONENTE: string;
  ICONO_COMPONENTE: string;
  RUTA: string;
  ID_MODULO: number;
}
export interface moduloModel {
  TITULO: string;
  ICONO: string;
  ID_MODULO: number;
  value: value;

}

export class value {
  constructor() {
    this.value = false;
  }
  value!: boolean;
  cambiarValor() {
    this.value = !this.value
  }

}
export interface usuario {
  NOMBRE: string,
  APELLIDO: string,
  CORREO: string,
  IMG_URL: string,
  DESCRIPCION:string
}