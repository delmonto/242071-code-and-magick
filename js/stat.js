'use strict';

// Поиск максимального элемент в массиве и его индекс
var arrayMax = function (array) {
  var maxValue = array[0];
  for (var i = 1; i <= array.length - 1; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxValue;
};

// Генерация случайного числа в пределах min - max
var randomTransparency = function (min, max) {
  var rand = Math.random() * (max - min) + min;
  return rand.toFixed(2);
};

window.renderStatistics = function (ctx, names, times) {
  // Тень от облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // Облако
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  // Настройки шрифта
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';

  // Текст с поздравлением, первая строка
  ctx.fillText('Ура вы победили!', 120, 40);

  // Текст с поздравлением, вторая строка
  ctx.fillText('Список результатов:', 120, 60);

  // Параметры гистрограммы
  var histogramHeight = 150;
  var histogramWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 95;

  // Шаг гистограммы
  var step = histogramHeight / arrayMax(times);

  for (var j = 0; j <= names.length - 1; j++) {
    // Колонка победителя красная, остальные - синие со случайной прозрачностью
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 136, ' + randomTransparency(0.3, 1) + ')';
    }
    // Гистограмма
    ctx.fillRect(initialX + (indent + histogramWidth) * j, initialY + (histogramHeight - times[j] * step), histogramWidth, times[j] * step);
    // Результат
    ctx.fillText(times[j].toFixed(0), 120 + (indent + histogramWidth) * j, 85 + (histogramHeight - times[j] * step));
    // Имена
    ctx.fillText(names[j], 120 + (indent + histogramWidth) * j, 265);
  }
};
