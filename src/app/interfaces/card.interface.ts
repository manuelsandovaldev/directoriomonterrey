import { CategoriasEnum } from '../enums/categorias.enum';

export interface cardInterface {
  id: string;
  title: string;
  categoria: CategoriasEnum;
  description: string;
  servicios: string[];
  ubicacion: string;
  piso: number;
  phone: number;
  horarios: {
    dias: string;     
    apertura: number;
    cierre: number;
  }[];
  imagenes: string[];

  precio?: number;
  stock?: number;
  detallesEnvio?: string;
  variaciones?: {
    nombre: string;
    opciones: {
      valor: string;
      ajustePrecio: number;
    }[];
  }[];

  caracteristicas?: {
    nombre: string;
    items: string[];
  }[];

  especificaciones?: {
    nombre: string;
    valor: string;
  }[];
}
