import { CategoriasEnum } from '../enums/categorias.enum';
import { TagsEnum } from '../enums/tags.enum';

export interface cardDT {
  id: string;
  title: string;
  categoria: CategoriasEnum;
  description: string;
  servicios?: {
    servicio: string; 
    items: string[]; 
  };
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
  img: string;
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

  catalogo?: {
    tituloSeccion: string; // Ej: "Nuestro Menú", "Planes Disponibles"
    items: {
      id: string;
      nombre: string;
      descripcion: string;
      precio: number;
      imagen?: string;
    }[]; // Una lista de objetos de producto, definidos aquí mismo.
  };

  caracteristicas?: {
    nombre: string;
    items: string[];
  }[];

  especificaciones?: {
    nombre: string;
    valor: string;
  }[];
}
