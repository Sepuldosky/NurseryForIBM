// Catalog of plants grouped by category.
// `image` is prefixed with Vite's BASE_URL so paths work both in dev
// (BASE_URL = '/') and in production on GitHub Pages
// (BASE_URL = '/NurseryForIBM/').

const B = import.meta.env.BASE_URL;

const plants = [
  {
    category: 'Para Polinizadores',
    items: [
      {
        name: 'Lavanda',
        cost: 2.69,
        image: `${B}images/plants/Lavander_2_69_USD.jpg`,
        description: 'Aromática, atrae abejas y repele mosquitos.',
      },
      {
        name: 'Cosmos',
        cost: 3.50,
        image: `${B}images/plants/Cosmos_3_50_USD.jpg`,
        description: 'Floración abundante durante todo el verano.',
      },
      {
        name: 'Girasol Real',
        cost: 4.00,
        image: `${B}images/plants/Royal_Sunflower_4_00_USD.jpg`,
        description: 'Alta y vistosa, ideal para atraer polinizadores.',
      },
    ],
  },
  {
    category: 'Para Cortar y Ramos',
    items: [
      {
        name: 'Boca de Dragón',
        cost: 3.00,
        image: `${B}images/plants/Magic_Snapdragon_3_00_USD.jpg`,
        description: 'Espigas coloridas, perfectas para arreglos florales.',
      },
      {
        name: 'Zinnia Benary',
        cost: 3.00,
        image: `${B}images/plants/Zinnia_Benary_3_00_USD.jpg`,
        description: 'Flores grandes y duraderas, ideales para corte.',
      },
      {
        name: 'Zinnia',
        cost: 2.69,
        image: `${B}images/plants/Zinnie_2_69_USD.jpg`,
        description: 'Colorida y resistente, florece hasta el otoño.',
      },
    ],
  },
  {
    category: 'Para Borduras y Macetas',
    items: [
      {
        name: 'Aliso de Mar',
        cost: 2.69,
        image: `${B}images/plants/Sweet_Alyssum_2_69_USD.jpg`,
        description: 'Tapizante de aroma dulce, ideal para bordes.',
      },
      {
        name: 'Capuchina',
        cost: 2.69,
        image: `${B}images/plants/Nasturtium_2_69_USD.jpg`,
        description: 'Comestible y decorativa, fácil de cultivar.',
      },
      {
        name: 'Damasquina',
        cost: 3.00,
        image: `${B}images/plants/French_Marigold_3_00_USD.jpg`,
        description: 'Repelente natural de plagas en huertos.',
      },
    ],
  },
];

export default plants;
