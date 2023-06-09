import images from './images';

const wines = [
  {
    title: 'Cholaburi',
    price: '₾200',
    tags: 'AU | Bottle',
  },
  {
    title: 'Afrasioni',
    price: '₾500',
    tags: 'AU | Bottle',
  },
  {
    title: 'Burdgia',
    price: '₾350',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Qtarvelo',
    price: '₾245',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Rqatsiteli',
    price: '₾85',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Chalatkhe',
    price: '₾20',
    tags: 'Cha cha | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Andrias tsikvini",
    price: '₾15',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Datikos riskhva',
    price: '₾15',
    tags: 'Rum | Citrus juice | Ginger',
  },
  {
    title: 'Valeris guli',
    price: '₾30',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Raphi',
    price: '₾26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Best wiwila makhvalshi humanity has ever known.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'sweet and sour.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'softest flavour of georgian hospitality.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'golden hands of Ramaz Merkviladze.',
  },
];

export default { wines, cocktails, awards };
