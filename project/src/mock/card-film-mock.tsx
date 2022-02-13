const movies =[
  {
    img: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    img: 'img/bohemian-rhapsody.jpg',
    title: 'Bohemian Rhapsody',
  },
  {
    img: 'img/macbeth.jpg',
    title: 'Macbeth',
  },
  {
    img: 'img/aviator.jpg',
    title: 'Aviator',
  },
  {
    img: 'img/we-need-to-talk-about-kevin.jpg',
    title: 'We need to talk about Kevin',
  },
  {
    img: 'img/what-we-do-in-the-shadows.jpg',
    title: 'What We Do in the Shadows',
  },
  {
    img: 'img/revenant.jpg',
    title: 'Revenant',
  },
  {
    img: 'img/johnny-english.jpg',
    title: 'Johnny english',
  },
  {
    img: 'img/shutter-island.jpg',
    title: 'Shuttter Island',
  },
  {
    img: 'img/pulp-fiction.jpg',
    title: 'Pulp Fiction',
  },
  {
    img: 'img/no-country-for-old-men.jpg',
    title: 'No Country for Old Men',
  },
  {
    img: 'img/snatch.jpg',
    title: 'Snatch',
  },
  {
    img: 'img/moonrise-kingdom.jpg',
    title: 'Moonrise Kingdoom',
  },
  {
    img: 'img/seven-years-in-tibet.jpg',
    title: 'Seven Years in Tibet',
  },
  {
    img: 'img/midnight-special.jpg',
    title: 'Midnight Special',
  },
  {
    img: 'img/war-of-the-worlds.jpg',
    title: 'War of the Worlds',
  },
  {
    img: 'img/dardjeeling-limited.jpg',
    title: 'Dardjeeling Limited',
  },
  {
    img: 'img/orlando.jpg',
    title: 'Orlando',
  },
  {
    img: 'img/mindhunter.jpg',
    title: 'Midhunter',
  },
  {
    img: 'img/midnight-special.jpg',
    title: 'Midnight Special',
  },
].map((it, i) => ({id: i, ...it}));


const promo = {
  name: 'Vasya',
  genre: 'comedy',
  date:2015,
};


export {movies, promo};
