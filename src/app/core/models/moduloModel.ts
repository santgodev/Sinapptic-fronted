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
  token: string;
  isAdmin: boolean;
  email: string;
  id: string;
  alias: string;
  expiration: Date;
  fullName: string;
}
export interface Usuario {
  NOMBRE: string;
  APELLIDO: boolean;
  CORREO: string;
  IMG_URL: string;
  DESCRIPCION: string;
}

export interface responseToken {
  mesagge: string;
  token: string;
  data: {
    Nombre: string;
    Id: string;
    Apellido: string;
    Correo: string;
    Img:string,
    Descripcion:string
  };
}

