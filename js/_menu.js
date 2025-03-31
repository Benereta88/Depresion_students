import createMenu from './libs/createMenu.js';

createMenu('Depresion_studenter', [
  { name: 'Nytt i version 5', script: 'new-in-v5.js' },
  { name: 'Depression', script: 'Depression.js' },
  { name: 'Jämför man och kvinnor', script: 'Jämför_två_gender.js' },
  { name: 'Hitta trender', script: 'trends.js' }
]);