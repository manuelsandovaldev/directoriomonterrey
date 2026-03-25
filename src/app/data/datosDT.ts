import { cardDT } from '../interfaces/productoDT.interface';
import { CategoriasEnum } from '../enums/categorias.enum';
import { TagsEnum } from '../enums/tags.enum';

// -----------------------------------------------------------------------------
// LISTA COMPLETA CON TODOS LOS DETALLES DE CADA NEGOCIO
// Estos datos están "aplanados" para coincidir con la interfaz `cardDT`
// -----------------------------------------------------------------------------
export const negociosDetalle: cardDT[] = [
  // --- Gimnasio Animal X (Detalle) ---
  {
    id: 'gimnasio-animal-x',
    title: 'Gimnasio Animal X',
    categoria: CategoriasEnum.SERVICIOS,
    description: 'Centro de acondicionamiento y preparación física con un enfoque integral en la salud y el rendimiento. Ofrecemos equipos de última generación y un equipo de profesionales dedicados a ayudarte a alcanzar tus metas.',
    servicios: {
      servicio: "Servicios Incluidos",
      items: ['Acondicionamiento físico', 'Fisioterapia', 'Nutrición', 'Valoración médica deportiva']
    },
    caracteristicas: [{
      nombre: "Instalaciones",
      items: ["Zona de peso libre olímpico", "Máquinas de cardio Technogym", "Área de entrenamiento funcional", "Sauna y Baño Turco"]
    }],
    ubicacion: 'Torre deportiva, local 301',
    piso: 4,
    phone: 3137013715,
    horarios: [
      { dias: 'Lunes a Viernes', apertura: 5, cierre: 21 },
      { dias: 'Sábados', apertura: 7, cierre: 13 },
      { dias: 'Domingos y festivos', apertura: 8, cierre: 13 }
    ],
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit-crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit-crop'
    ],
    metodosDePago: ['Efectivo', 'Tarjeta de Crédito', 'PSE', 'Nequi'],
    marca: 'Animal X',
    tags: TagsEnum.DEPORTE, // La interfaz solo permite un tag, se elige el principal
    estrellas: 4.8,
    estadoActivo: true
  },

  // --- Crepes & Waffles (Detalle) ---
  {
    id: 'crepes-waffles-250',
    title: 'Crepes & Waffles',
    categoria: CategoriasEnum.COMIDAS,
    description: 'Un clásico querido por todos, donde el arte y el sabor se encuentran en cada plato. Famosos por nuestros crepes, waffles y helados artesanales servidos con amor.',
    servicios: {
        servicio: "Servicios",
        items: ['Restaurante', 'Heladería', 'Postres', 'Comida para llevar']
    },
    caracteristicas: [{
        nombre: "Ambiente",
        items: ["Familiar", "Terraza", "Pet-Friendly (solo en terraza)"]
    }],
    ubicacion: 'Plazoleta de comidas, local 250',
    piso: 2,
    phone: 3447474,
    horarios: [
      { dias: 'Lunes a Jueves', apertura: 11, cierre: 21 },
      { dias: 'Viernes y Sábados', apertura: 11, cierre: 22 },
      { dias: 'Domingos y festivos', apertura: 12, cierre: 20 }
    ],
    img: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=1981&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=1981&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit-crop',
      'https://images.unsplash.com/photo-1563805042-76-24222f6e48f2?q=80&w=1935&auto=format&fit-crop'
    ],
    precio: 15900,
    precioAnterior: 22900,
    metodosDePago: ['Efectivo', 'Tarjeta de Crédito', 'PSE', 'Nequi', 'Daviplata'],
    marca: 'Crepes & Waffles',
    tags: TagsEnum.RESTAURANTE, // La interfaz solo permite un tag, se elige el principal
    estrellas: 4.6,
    estadoActivo: true
  }
];
