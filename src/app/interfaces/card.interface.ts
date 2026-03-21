import { CategoriasEnum } from '../enums/categorias.enum';
import { TagsEnum } from '../enums/tags.enum';

export interface cardInterface {
  id: string;
  title: string;
  categoria: CategoriasEnum;
  description: string;
  servicios: string[];
  ubicacion: string;
  coordenadas?    : { lat: number; lng: number; };
  estadoActivo?    : boolean;
  piso: number;
  phone: number;
  horarios: {
    dias: string;     
    apertura: number;
    cierre: number;
  }[];
  imagenes: string[];

  precio?: number;
  precioAnterior?: number;
  stock?: number;
  detallesEnvio?: string;
  detallesPago?: string;
  metodosDePago?: string[];
  marca?: string;
  tags?: TagsEnum;
  estrellas?: number;
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
