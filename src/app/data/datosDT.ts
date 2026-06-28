
import { cardDT } from '../interfaces/productoDT.interface';
import { CategoriasEnum } from '../enums/categorias.enum';
import { TagsEnum } from '../enums/tags.enum';


export const negociosDetalle: cardDT[] = [
  // --- Gimnasio Animal X (Detalle) ---
  {
    id: 'gimnasio-animal-x',
    title: 'Gimnasio Animal X',
    logo: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=200&h=200&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit-crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit-crop',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
    ],
    metodosDePago: ['Efectivo', 'Tarjeta de Crédito', 'PSE', 'Nequi'],
    marca: 'Animal X',
    tags: TagsEnum.DEPORTE,
    estrellas: 4.8,
    estadoActivo: true
  },



  // --- Crepes & Waffles (Detalle) ---
  {
    id: 'crepes-waffles-250',
    title: 'Crepes & Waffles',
    logo: 'https://images.unsplash.com/photo-1563805042-76-24222f6e48f2?q=80&w=200&h=200&auto=format&fit=crop',
    categoria: CategoriasEnum.COMIDAS,
    description: 'Un clásico querido por todos, donde el arte y el sabor se encuentran en cada plato. Famosos por nuestros crepes, waffles y helados artesanales servidos con amor.',
    // LA SECCIÓN 'servicios' HA SIDO ELIMINADA COMO SE PIDIÓ
    catalogo: {
      tituloSeccion: "Nuestro Menú",
      items: [
        {
          id: "crepe-pollo",
          nombre: "Crepe de Pollo y Champiñones",
          descripcion: "Tierna pechuga de pollo desmechada en salsa de champiñones y queso mozzarella.",
          precio: 25900,
          imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1974&auto=format&fit=crop"
        },
        {
          id: "waffle-nutella",
          nombre: "Waffle de Nutella y Banano",
          descripcion: "Clásico waffle crujiente bañado en Nutella, con rodajas de banano fresco y helado de vainilla.",
          precio: 18900,
          imagen: "https://images.unsplash.com/photo-1562376552-0d160a2f8612?q=80&w=1974&auto=format&fit=crop"
        }
      ]
    },
    servicios: {
      servicio: "Ambiente",
      items: ["Familiar", "Terraza", "Pet-Friendly (solo en terraza)"]
    },
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
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563805042-76-24222f6e48f2?q=80&w=1935&auto=format&fit-crop',
      'https://images.unsplash.com/photo-1586985289942-b9af765e4d13?q=80&w=1968&auto=format&fit-crop'
    ],
    metodosDePago: ['Efectivo', 'Tarjeta de Crédito', 'PSE', 'Nequi', 'Daviplata'],
    marca: 'Crepes & Waffles',
    tags: TagsEnum.RESTAURANTE,
    estrellas: 4.6,
    estadoActivo: true
  },



  // --- Tech Solutions (Detalle) ---
  {
    id: 'tech-solutions-101',
    title: 'Tech Solutions',
    logo: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=200&h=200&auto=format&fit=crop',
    categoria: CategoriasEnum.TECNOLOGIA,
    description: 'Tu tienda de confianza para los últimos gadgets y componentes de computador. Asesoría experta y los mejores precios del mercado.',
    servicios: {
      servicio: "Soporte y Garantías",
      items: ['Ensamblaje de PCs', 'Soporte técnico remoto', 'Garantías extendidas', 'Instalación de software']
    },
    catalogo: {
      tituloSeccion: "Componentes Destacados",
      items: [
        {
          id: "monitor-ultrawide",
          nombre: 'Monitor Gamer Ultrawide 34"',
          descripcion: "Monitor curvo de 34 pulgadas, resolución 2K y 144Hz para una inmersión total.",
          precio: 1890000,
          imagen: "https://images.unsplash.com/photo-1614343225286-70973379ce32?q=80&w=2080&auto=format&fit=crop"
        },
        {
          id: "teclado-mecanico",
          nombre: "Teclado Mecánico RGB TKL",
          descripcion: "Switches brown, formato Tenkeyless y retroiluminación RGB personalizable para profesionales.",
          precio: 350000,
          imagen: "https://images.unsplash.com/photo-1618384887924-a7b2de131d99?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    },
    ubicacion: 'Pasadizo tecnológico, local 101',
    piso: 1,
    phone: 3102030405,
    horarios: [
      { dias: 'Lunes a Sábado', apertura: 10, cierre: 20 }
    ],
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit-crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit-crop',
      'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1974&auto=format&fit-crop'
    ],
    metodosDePago: ['Efectivo', 'Tarjeta de Crédito', 'PSE'],
    marca: 'Tech Solutions',
    tags: TagsEnum.TECNOLOGIA,
    estrellas: 4.9,
    estadoActivo: true
  },

  // --- Control Tech Inc ---
  {
    id: 'control-tech-inc',
    title: 'Control Tech Inc',
    logo: 'https://logo.clearbit.com/controltechinc.co',
    categoria: CategoriasEnum.TECNOLOGIA,
    description: 'Expertos en soluciones tecnológicas, redes y venta de equipos de última generación para empresas y hogares.',
    servicios: {
      servicio: "Servicios IT",
      items: ['Venta de Hardware', 'Mantenimiento de Redes', 'Asesoría IT']
    },
    ubicacion: 'Pasadizo tecnológico, local 115',
    piso: 1,
    phone: 3105556677,
    horarios: [
      { dias: 'Lunes a Sábado', apertura: 9, cierre: 19 }
    ],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531297172867-4f405022e016?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
    ],
    metodosDePago: ['Efectivo', 'Tarjeta de Crédito', 'Transferencia'],
    marca: 'Control Tech',
    tags: TagsEnum.TECNOLOGIA,
    estrellas: 4.7,
    estadoActivo: true
  },

  // --- Frisby ---
  {
    id: 'frisby-140',
    title: 'Frisby',
    logo: 'https://frisby.com.co/img/logo-frisby.svg',
    categoria: CategoriasEnum.COMIDAS,
    description: 'Nadie lo hace como Frisby lo hace. Disfruta del pollo apanado más crujiente y delicioso de Colombia.',
    servicios: {
      servicio: "Ambiente",
      items: ['Familiar', 'Zona Infantil', 'Aire Acondicionado']
    },
    catalogo: {
      tituloSeccion: "Combos Destacados",
      items: [
        {
          id: "combo-familiar",
          nombre: "Combo Familiar 8 Presas",
          descripcion: "8 Presas de pollo apanado, ensalada de repollo, papas a la francesa y gaseosa 1.5L.",
          precio: 45900,
          imagen: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    },
    ubicacion: 'Plazoleta de comidas, local 140',
    piso: 2,
    phone: 3001234567,
    horarios: [
      { dias: 'Lunes a Domingo', apertura: 11, cierre: 22 }
    ],
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569058242253-1541fb00c431?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop'
    ],
    metodosDePago: ['Efectivo', 'Tarjeta de Crédito', 'Nequi'],
    marca: 'Frisby',
    tags: TagsEnum.RESTAURANTE,
    estrellas: 4.5,
    estadoActivo: true
  },

  // --- Cineprox ---
  {
    id: 'cineprox-401',
    title: 'Cineprox',
    logo: 'https://logo.clearbit.com/cineprox.com',
    categoria: CategoriasEnum.ENTRETENIMIENTO,
    description: 'Vive la magia del cine con la mejor calidad de imagen, sonido envolvente y sillas reclinables VIP.',
    servicios: {
      servicio: "Beneficios",
      items: ['Salas 3D y 4D', 'Confitería Premium', 'Sillas Reclinables VIP']
    },
    ubicacion: 'Piso de entretenimiento, local 401',
    piso: 4,
    phone: 3209876543,
    horarios: [
      { dias: 'Lunes a Domingo', apertura: 13, cierre: 23 }
    ],
    img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
    imagenes: [
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2070&auto=format&fit=crop'
    ],
    metodosDePago: ['Efectivo', 'Tarjeta de Crédito'],
    marca: 'Cineprox',
    tags: TagsEnum.DEPORTE, // Or custom tag
    estrellas: 4.8,
    estadoActivo: true
  }
];
