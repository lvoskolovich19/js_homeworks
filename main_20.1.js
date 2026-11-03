console.log('#20. JavaScript homework: замовлення в інтернет-магазині')

/*
 * Загальні умови:
 * - кроки виконуються послідовно, один під одним, у цьому самому файлі;
 * - результат кожного кроку виводьте в консоль через console.log.
 */

/*
 * ЗАВДАННЯ. Замовлення в інтернет-магазині
 *
 * Вихідні дані (скопіюйте собі у файл і далі працюйте з ними):
 *
 * const orderObj = {
 *   id: 1024,
 *   customer: { firstName: 'John', lastName: 'Smith', age: 15 },
 *   priceStr: '1099.99 грн',
 *   quantityStr: '3',
 *   deliveryDay: 3,
 *   tempNote: 'службова нотатка, видалити перед відправкою',
 * }
 */

/*
 * Крок 1. Об'єкти
 *
 * Додайте до orderObj властивість city.
 * Виведіть у консоль один рядок у форматі 'John Smith from Київ', де John - orderObj.customer.firstName,
 * Smith - orderObj.customer.lastName.
 */

/*
 * Крок 2. in / delete
 *
 * a) Перевірте через оператор in, чи є в orderObj властивість 'tempNote'.
 * b) Видаліть її через оператор delete і перевірте через in ще раз.
 */

/*
 * Крок 3. Копіювання об'єктів
 *
 * a) Зробіть глибоку копію замовлення - backupOrder.
 *    Змініть у копії backupOrder.customer.firstName на 'Ann' і переконайтесь,
 *    що в оригіналі ім'я не змінилось.
 * b) За допомогою Object.assign() створіть НОВИЙ об'єкт paidOrder - злиття orderObj та { status: 'paid' }.
 *    Переконайтесь, що в orderObj поле status не з'явилось.
 */

/*
 * Крок 4. Перетворення типів
 *
 * a) З рядка orderObj.priceStr отримайте число price.
 * b) З рядка orderObj.quantityStr отримайте число quantity.
 * c) Обчисліть total = price * quantity.
 */

/*
 * Крок 5. Тернарний оператор
 *
 * Обчисліть знижку discount за віком клієнта (orderObj.customer.age):
 * менше 18  - 0.1
 * 18..60    - 0
 * понад 60  - 0.15
 *
 * Дозволений тільки тернарний оператор ?, використання if і switch заборонено.
 * Обчисліть finalTotal - суму зі знижкою.
 */

/*
 * Крок 6. if ... else if ... else
 *
 * За допомогою конструкції if ... else if ... else обчисліть вартість доставки deliveryPrice:
 * finalTotal менше 500   - 100
 * finalTotal 500..1500   - 50
 * finalTotal понад 1500  - 0
 */

/*
 * Крок 7. switch / case / default
 *
 * За номером orderObj.deliveryDay обчисліть змінну deliveryDayName - назву дня тижня
 * (1 - 'Понеділок', ..., 7 - 'Неділя').
 * Якщо в deliveryDay рядок, дробове число або число поза діапазоном 1...7 -
 * deliveryDayName має дорівнювати 'Невідомий день'.
 * Обов'язково використайте switch / case / default.
 *
 * Перевірте роботу коду для значень deliveryDay:
 * 3   → 'Середа'
 * 7   → 'Неділя'
 * 9   → 'Невідомий день'
 * 1.5 → 'Невідомий день'
 * '2' → 'Невідомий день'
 */

/*
 * Крок 8. Цикл for, оператор кома, break / continue
 *
 * Обчисліть bonusSum - бонуси клієнта.
 * У циклі for переберіть числа від 1 до 20 і додавайте кожне з них до bonusSum.
 *
 * Причому:
 * - лічильник i та верхня межа limit оголошуються в одному for через оператор кома,
 * - числа, кратні 3, до суми не додаються (continue),
 * - як тільки bonusSum стає більшою за 50, цикл припиняється (break).
 *
 * Результат: bonusSum → 61
 */

const orderObj = {
  id: 1024,
  customer: { firstName: 'John', lastName: 'Smith', age: 15 },
  priceStr: '1099.99 грн',
  quantityStr: '3',
  deliveryDay: 3,
  tempNote: 'службова нотатка, видалити перед відправкою',
};

orderObj.city = 'Kyiv';
console.log(`${orderObj.customer.firstName} ${orderObj.customer.lastName} from ${orderObj.city}`);

console.log('Does tempNote exist before deletion?:', 'tempNote' in orderObj);
delete orderObj.tempNote;
console.log('Does tempNote exist after deletion?:', 'tempNote' in orderObj);

const backupOrder = JSON.parse(JSON.stringify(orderObj));
backupOrder.customer.firstName = 'Ann';
console.log('Original first name (should be John):', orderObj.customer.firstName);
console.log('Copied first name (should be Ann):', backupOrder.customer.firstName);

const paidOrder = Object.assign({}, orderObj, { status: 'paid' });

console.log('Status in paidOrder:', paidOrder.status);
console.log('Status in orderObj (should be undefined):', orderObj.status);

const price = parseFloat(orderObj.priceStr);
const quantity = parseInt(orderObj.quantityStr, 10);
const total = price * quantity;
console.log(`Total price without discount and delivery: ${total}`);

const age = orderObj.customer.age;
const discount = age < 18 ? 0.1 : (age <= 60 ? 0 : 0.15);

const finalTotalWithoutDelivery = total * (1 - discount);
console.log(`Discount: ${discount * 100}%, Total after discount: ${finalTotalWithoutDelivery}`);

let deliveryPrice;

if (finalTotalWithoutDelivery < 500) {
  deliveryPrice = 100;
  } else if (finalTotalWithoutDelivery >= 500 && finalTotalWithoutDelivery <= 1500) {
  deliveryPrice = 50;
  } else {
  deliveryPrice = 0;
}

const finalTotal = finalTotalWithoutDelivery + deliveryPrice;
console.log(`Delivery price: ${deliveryPrice}`);
console.log(`Final total to pay: ${finalTotal}`);

let deliveryDayName;
const day = orderObj.deliveryDay;

if (Number.isInteger(day) && day >= 1 && day <= 7) {
  switch (day) {
    case 1: deliveryDayName = 'Monday'; break;
    case 2: deliveryDayName = 'Tuesday'; break;
    case 3: deliveryDayName = 'Wednesday'; break;
    case 4: deliveryDayName = 'Thursday'; break;
    case 5: deliveryDayName = 'Friday'; break;
    case 6: deliveryDayName = 'Saturday'; break;
    case 7: deliveryDayName = 'Sunday'; break;
  }
} else {
  deliveryDayName = 'Unknown day';
}

console.log(`Delivery day (${day}): ${deliveryDayName}`);

let bonusSum = 0;

for (let i = 1, limit = 20; i <= limit; i++) {
  if (i % 3 === 0) {
    continue;
  }

  bonusSum += i;

  if (bonusSum > 50) {
    break;
  }
}

console.log(`Result: bonusSum -> ${bonusSum}`);

