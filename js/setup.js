'use strict';

var randomValue = function (min, max) {
  var rand = Math.random() * (max - min) + min;
  return rand.toFixed(0);
};

// Показать попап с выбором персонажа
var popup = document.querySelector('.setup');
popup.classList.remove('hidden');

// Массивы с характеристиками персонажа
var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastNames = ['да Марья', 'Верон Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Нионго'];
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

// Объект, содержащий информацию о четырех персонажах
var wizards = [
  {
    name: wizardFirstNames[randomValue(0, wizardFirstNames.length - 1)] + ' ' + wizardLastNames[randomValue(0, wizardLastNames.length - 1)],
    coatColor: wizardCoatColors[randomValue(0, wizardCoatColors.length - 1)],
    eyesColor: wizardEyesColors[randomValue(0, wizardEyesColors.length - 1)]
  },
  {
    name: wizardFirstNames[randomValue(0, wizardFirstNames.length - 1)] + ' ' + wizardLastNames[randomValue(0, wizardLastNames.length - 1)],
    coatColor: wizardCoatColors[randomValue(0, wizardCoatColors.length - 1)],
    eyesColor: wizardEyesColors[randomValue(0, wizardEyesColors.length - 1)]
  },
  {
    name: wizardFirstNames[randomValue(0, wizardFirstNames.length - 1)] + ' ' + wizardLastNames[randomValue(0, wizardLastNames.length - 1)],
    coatColor: wizardCoatColors[randomValue(0, wizardCoatColors.length - 1)],
    eyesColor: wizardEyesColors[randomValue(0, wizardEyesColors.length - 1)]
  },
  {
    name: wizardFirstNames[randomValue(0, wizardFirstNames.length - 1)] + ' ' + wizardLastNames[randomValue(0, wizardLastNames.length - 1)],
    coatColor: wizardCoatColors[randomValue(0, wizardCoatColors.length - 1)],
    eyesColor: wizardEyesColors[randomValue(0, wizardEyesColors.length - 1)]
  }
];

// Сюда будут вставлены персонажи
var similarWizardElement = document.querySelector('.setup-similar-list');
// Шаблон персонажа
var WizardTemplate = document.querySelector('#similar-wizard-template').content;

var fragment = document.createDocumentFragment();

// Функция для замены характеристик персонажа
var wizardEdit = function (wizard) {
  var wizardElement = WizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Добавляем во фрагмент персонажей из массива
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(wizardEdit(wizards[i]));
}

similarWizardElement.appendChild(fragment);

// Снять hidden с блока с персонажами
document.querySelector('.setup-similar').classList.remove('hidden');
