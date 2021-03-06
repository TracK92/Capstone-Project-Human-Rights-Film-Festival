const featuredFilmmakers = [
  {
    id: 1,
    name: 'Khensani Zulu',
    title: 'Human rights activist from South Africa',
    description: 'Khensani is an award-winning filmmaker who has made over twenty films to enlighten society on gender and sexual based violence in Africa.',
    featured_image: './assets/images/feature-1.jpg',
    alt_message: 'Khensani Zulu - Filmmaker One',
  },
  {
    id: 2,
    name: 'Sam Morley',
    title: 'Human rights activist and filmmaker from Australia',
    description: 'Sam uses his talent as a filmmaker to advocate for a better quality of life within indigenous communities in Australia.',
    featured_image: './assets/images/feature-2.jpg',
    alt_message: 'Sam Morley - Filmmaker Two',
  },

  {
    id: 3,
    name: 'Miguel Rodriguez',
    title: 'Human Rights Activist from Mexico',
    description: 'Miguel has made several incredible films that address injustice in Mexico. He campaigns for men, women and children equally.',
    featured_image: './assets/images/feature-3.jpg',
    alt_message: 'Miguel Rodriguez - Filmmaker Three',
  },
  {
    id: 4,
    class: 'hide',
    name: 'Elizabeth Brown',
    title: "Children's rights advocate from USA",
    description: "Elizabeth's passion for the safety and wellbeing of children emanates through her films. Her work covers wide-ranging issues that impact the lives of children.",
    featured_image: './assets/images/feature-4.jpg',
    alt_message: 'Elizabeth Brown- Filmmaker Four',
  },
  {
    id: 5,
    class: 'hide',
    name: 'Shaban Mohammed',
    title: 'Equality rights activist from Britain',
    description: 'As a muslim refugee living in Britain, Shaban makes films whose themes focus on educating society on religious and racial discrimination, particularly against refugees.',
    featured_image: './assets/images/feature-5.jpg',
    alt_message: 'Shaban Mohammed- Filmmaker Five',
  },
  {
    id: 6,
    class: 'hide',
    name: 'Alexa Martin',
    title: 'Reproductive rights activist from Turkey',
    description: 'Alexa creates documentaries of real women and girls worldwide that have been denied their reproductive rights and the consequences to their lives.',
    featured_image: './assets/images/feature-6.jpg',
    alt_message: 'Alexa Martin- Filmmaker Six',
  },
];

const featuredSect = document.querySelector('#featured-section');
featuredSect.classList.add('featured-sect');

const headingTwo = document.createElement('h2');
headingTwo.classList.add('featured-heading');
headingTwo.innerHTML = 'Featured Filmmakers';
featuredSect.appendChild(headingTwo);

const horizontalLine = document.createElement('hr');
horizontalLine.classList.add('under-line');
featuredSect.appendChild(horizontalLine);

const speakerSect = document.createElement('div');
speakerSect.classList.add('speakers-sect');
featuredSect.appendChild(speakerSect);

featuredFilmmakers.forEach((featuredFilmmaker) => {
  const speakerSegment = document.createElement('div');
  speakerSegment.classList.add('speaker-segment', `${featuredFilmmaker.class}`);
  speakerSect.appendChild(speakerSegment);

  const speakerImage = document.createElement('div');
  speakerImage.classList.add('speaker-image');
  speakerImage.innerHTML = `<img src="${featuredFilmmaker.featured_image}" alt="${featuredFilmmaker.alt_message}">`;
  speakerSegment.appendChild(speakerImage);

  const speakerProfile = document.createElement('div');
  speakerProfile.classList.add('speaker-profile');
  speakerSegment.appendChild(speakerProfile);

  const headingFour = document.createElement('h4');
  headingFour.innerHTML = `${featuredFilmmaker.name}`;
  speakerProfile.appendChild(headingFour);

  const paraOne = document.createElement('p');
  paraOne.classList.add('title');
  paraOne.innerHTML = `${featuredFilmmaker.title}`;
  speakerProfile.appendChild(paraOne);

  const horitontalLine2 = document.createElement('hr');
  horitontalLine2.classList.add('feature-line');
  speakerProfile.appendChild(horitontalLine2);

  const paraTwo = document.createElement('p');
  paraTwo.innerHTML = `${featuredFilmmaker.description}`;
  speakerProfile.appendChild(paraTwo);
});

const moreSect = document.createElement('div');
featuredSect.appendChild(moreSect);

const paraThree = document.createElement('p');
paraThree.classList.add('more');
paraThree.innerHTML = 'MORE <i class="fas fa-chevron-down fa-lg more-down"></i>';
moreSect.appendChild(paraThree);

// MENU BAR ON MOBILE
const menuBarOverlay = document.querySelector('#menu-bar-overlay');
const closeMenu = document.querySelector('#close-menu-item');
const openMenu = document.querySelector('#hamburger-menu');
const menuOptions = document.querySelectorAll('.menu-options');
// view menu list

const viewMenuItems = () => {
  openMenu.addEventListener('click', () => {
    menuBarOverlay.style.display = 'block';
  });
};
viewMenuItems();

// close menu list

const closeMenuItems = () => {
  closeMenu.addEventListener('click', () => {
    menuBarOverlay.style.display = 'none';
  });
};
closeMenuItems();

// Select menu options
const openMenuOption = () => {
  menuOptions.forEach((menuOption) => {
    menuOption.addEventListener('click', () => {
      menuBarOverlay.style.display = 'none';
    });
  });
};
openMenuOption();

// 'MORE' Mobile Option
const moreSegment = document.querySelector('.more');
const moreButton = document.querySelector('.more-down');
const moreOptions = document.querySelectorAll('.hide');

const moreFilmmakerOptions = () => {
  moreButton.addEventListener('click', () => {
    moreOptions.forEach((moreOption) => {
      moreOption.style.display = 'grid';
    });
    moreSegment.style.display = 'none';
  });
};
moreFilmmakerOptions();
