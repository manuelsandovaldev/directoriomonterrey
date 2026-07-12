export interface BannerEvent {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

export interface DiscountItem {
  id: number;
  storeName: string;
  productName: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  image: string;
}

export const homeBanners: BannerEvent[] = [
  {
    id: 1,
    title: 'Gran Concierto de Verano',
    subtitle: 'Música en vivo en la plaza central este viernes a las 7:00 PM',
    image: 'https://images.unsplash.com/photo-1540039155732-68473678c482?auto=format&fit=crop&w=1200&q=80',
    tag: 'Eventos'
  },
  {
    id: 2,
    title: 'Locales Destacados',
    subtitle: 'Descubre los locales más conocidos y visitados del momento',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    tag: 'Locales'
  },
  {
    id: 3,
    title: 'Actividades Familiares',
    subtitle: 'Ven con los más pequeños este domingo. ¡Habrá sorpresas!',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=1200&q=80',
    tag: 'Eventos'
  }
];

export const homeDiscounts: DiscountItem[] = [
  {
    id: 1,
    storeName: 'TecnoStore',
    productName: 'Audífonos Bluetooth Pro',
    originalPrice: 120000,
    discountedPrice: 84000,
    discountPercentage: 30,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    storeName: 'Fashion Monterrey',
    productName: 'Chaqueta de Invierno',
    originalPrice: 200000,
    discountedPrice: 100000,
    discountPercentage: 50,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    storeName: 'Gourmet Express',
    productName: 'Combo Familiar 4 Personas',
    originalPrice: 85000,
    discountedPrice: 68000,
    discountPercentage: 20,
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    storeName: 'SportLife',
    productName: 'Zapatillas Running 2026',
    originalPrice: 350000,
    discountedPrice: 210000,
    discountPercentage: 40,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80'
  }
];
