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

export interface Usuario {
  ID?:string;
  NOMBRE: string;
  APELLIDO?:string;
  CORREO: string;
  CC?: string;
  TELEFONO?:string;
  CONTRASEÑA?:string;
  ROL?: string;
  IMG_URL: string;
}
export interface insertResponse
{
  messaje:string;
  usuario:Usuario;
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

