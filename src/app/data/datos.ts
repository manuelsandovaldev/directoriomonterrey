import { cardInterface } from '../interfaces/card.interface';
import { CategoriasEnum } from '../enums/categorias.enum';

export const negocios: cardInterface[] = [
  // --- Gimnasio Animal X ---
  {
    id: 'gimnasio-animal-x',
    title: 'Gimnasio Animal X',
    categoria: CategoriasEnum.SERVICIOS,
    description: 'Centro de acondicionamiento y preparación física...',
    servicios: [
      'Acondicionamiento físico',
      'Fisioterapia',
      'Nutrición',
      'Valoración médica deportiva'
    ],
    ubicacion: 'Torre deportiva, local 301',
    piso: 4,
    phone: 3137013715,
    horarios: [
      { dias: 'Lunes a Viernes', apertura: 5, cierre: 21 },
      { dias: 'Sábados', apertura: 7, cierre: 13 },
      { dias: 'Domingos y festivos', apertura: 8, cierre: 13 }
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit-crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop'
    ],
  },

  // --- Crepes & Waffles ---
  {
    id: 'crepes-waffles-250',
    title: 'Crepes & Waffles',
    categoria: CategoriasEnum.COMIDAS,
    description: 'Un clásico querido por todos...',
    servicios: [
      'Restaurante',
      'Heladería',
      'Postres',
      'Comida para llevar'
    ],
    ubicacion: 'Plazoleta de comidas, local 250',
    piso: 2,
    phone: 3447474,
    horarios: [
      { dias: 'Lunes a Jueves', apertura: 11, cierre: 21 },
      { dias: 'Viernes y Sábados', apertura: 11, cierre: 22 },
      { dias: 'Domingos y festivos', apertura: 12, cierre: 20 }
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=1981&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563805042-76-24222f6e48f2?q=80&w=1935&auto=format&fit=crop'
    ],
  }
];