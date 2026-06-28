import { cardInterface } from '../interfaces/card.interface';
import { CategoriasEnum } from '../enums/categorias.enum';

export const negocios: cardInterface[] = [
  // --- Gimnasio Animal X ---
  {
    id: 'gimnasio-animal-x',
    title: 'Gimnasio Animal X',
    logo: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=200&h=200&auto=format&fit=crop',
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
    logo: 'https://images.unsplash.com/photo-1563805042-76-24222f6e48f2?q=80&w=200&h=200&auto=format&fit=crop',
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
  },

  // --- Control Tech Inc ---
  {
    id: 'control-tech-inc',
    title: 'Control Tech Inc',
    logo: 'https://logo.clearbit.com/controltechinc.co',
    categoria: CategoriasEnum.TECNOLOGIA,
    description: 'Expertos en soluciones tecnológicas, redes y venta de equipos de última generación para empresas y hogares.',
    servicios: ['Venta de Hardware', 'Mantenimiento de Redes', 'Asesoría IT'],
    ubicacion: 'Pasadizo tecnológico, local 115',
    piso: 1,
    phone: 3105556677,
    horarios: [
      { dias: 'Lunes a Sábado', apertura: 9, cierre: 19 }
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531297172867-4f405022e016?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
    ]
  },

  // --- Frisby ---
  {
    id: 'frisby-140',
    title: 'Frisby',
    logo: 'https://frisby.com.co/img/logo-frisby.svg',
    categoria: CategoriasEnum.COMIDAS,
    description: 'Nadie lo hace como Frisby lo hace. Disfruta del pollo apanado más crujiente y delicioso de Colombia.',
    servicios: ['Restaurante', 'Domicilios', 'Zona Infantil'],
    ubicacion: 'Plazoleta de comidas, local 140',
    piso: 2,
    phone: 3001234567,
    horarios: [
      { dias: 'Lunes a Domingo', apertura: 11, cierre: 22 }
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569058242253-1541fb00c431?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop'
    ]
  },

  // --- Cineprox ---
  {
    id: 'cineprox-401',
    title: 'Cineprox',
    logo: 'https://logo.clearbit.com/cineprox.com',
    categoria: CategoriasEnum.ENTRETENIMIENTO,
    description: 'Vive la magia del cine con la mejor calidad de imagen, sonido envolvente y sillas reclinables VIP.',
    servicios: ['Cine 3D', 'Confitería', 'Sillas VIP'],
    ubicacion: 'Piso de entretenimiento, local 401',
    piso: 4,
    phone: 3209876543,
    horarios: [
      { dias: 'Lunes a Domingo', apertura: 13, cierre: 23 }
    ],
    imagenes: [
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2070&auto=format&fit=crop'
    ]
  }
];