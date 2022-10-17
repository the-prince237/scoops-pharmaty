import { GiTimeBomb, GiRoyalLove, FaChild } from 'react-icons/all'

export const specialities = [
  {
    title: "MST/IST/CHLAMEDIA",
    description: "Nous traitons de nombreux cas de MST tous les jours, de nombreuseux malades n'ayant jamais trouvé de solutions à leurs problèmes repartent entièrement guéries, ou en meilleure forme que jamais!",
    Icon: GiRoyalLove,
    color: 'var(--color-secondary)',
    image: '/images/1.jpeg',
    examples: [
      {
        name: "VIH",
        status: "Meilleure Vie"
      },
      {
        name: "Epathites",
        status: "Guérison Complète"
      },
    ]
  },
  {
    title: "VÉILLISSEMENT",
    description: "Qu'il y a t-il de plus difficile que de veillir. Nous accordons une place de choix aux traitement des personnes agées.",
    Icon: GiTimeBomb,
    color: 'var(--color-main)',
    image: '/images/2.jpeg',
    examples: [
      {
        name: "Arthrose",
        status: "Guérison Complète"
      },
      {
        name: "Rhumatismes",
        status: "Guérison Complète"
      },
    ]
  }, 
  {
    title: "PÉDIATRIE",
    description: "Nous occupons.",
    Icon: FaChild,
    color: 'var(--color-secondary)',
    image: '/images/2.jpeg',
    examples: [
      {
        name: "Arthrose",
        status: "Guérison Complète"
      },
      {
        name: "Rhumatismes",
        status: "Guérison Complète"
      },
    ]
  }
]

export const products = [
  {
    name: "vermifuge",
    types: ["liquide", "écorces"],
    picture: "vermifuge.png",
    toTreat: ["vers intestinaux", "maux d'estomac", "+"],
    composition: ["compo A", "compo B", "..."],
    description: "Les vermifuges sont des médicament fortement demandés pour leur teneur importante en ..."
  }
]