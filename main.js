console.log('#21. JavaScript homework: читацький клуб')

/*
 * Загальні умови:
 * - завдання виконуються послідовно, одне під одним, у цьому самому файлі;
 * - результат кожного завдання виводьте в консоль через console.log;
 * - цикли пишуться тільки всередині функцій.
 */

/*
 * Вихідні дані (скопіюйте собі у файл і далі працюйте з ними):
 *
 * const memberObj = {
 *   name: 'Olena',
 *   yearOfBirth: 1998,
 *   city: 'Львів',
 *   booksPerMonth: 3,
 *   favoriteGenre: 'фентезі',
 * }
 */

/*
 * Завдання 1. Функція, параметри за замовчуванням, перевірка на undefined
 *
 * Напишіть функцію memberCard(name, yearOfBirth, favoriteGenre, city), де параметр city
 * має значення за замовчуванням 'Київ'. Функція ПОВЕРТАЄ рядок, зібраний за такими правилами:
 * - name не передано          - частина про ім'я у рядок не потрапляє,
 *                               інакше 'My name is Olena.'
 * - yearOfBirth не передано   - частина про вік у рядок не потрапляє, інакше вік рахується
 *                               від поточного року через new Date().getFullYear() -
 *                               'I am 28 years old.'
 * - favoriteGenre не передано - частина про жанр у рядок не потрапляє,
 *                               інакше 'I read фентезі.'
 * - місто у рядку є завжди    - 'I live in Київ.'
 *
 * Перевірка на відсутній аргумент робиться через typeof, console.log усередині функції
 * не використовується.
 *
 * Перевірте роботу функції на трьох викликах: з усіма чотирма аргументами; без міста;
 * без жанру, але з містом (undefined на місці жанру).
 */

/*
 * Завдання 2. Функція і цикл for ... in
 *
 * Напишіть функцію describeMember(memberObj), яка приймає об'єкт, перебирає його
 * через for ... in і ПОВЕРТАЄ один рядок у форматі
 * 'name: Olena; yearOfBirth: 1998; city: Львів; booksPerMonth: 3; favoriteGenre: фентезі;'
 *
 * Викличте функцію для memberObj і виведіть результат.
 * Вкладені об'єкти в цьому завданні не розглядаються.
 */

const memberObj = {
  name: 'Olena',
  yearOfBirth: 1998,
  city: 'Львів',
  booksPerMonth: 3,
  favoriteGenre: 'фентезі',
}

function memberCard(name = null, yearOfBirth = null, favoriteGenre = null, city = 'Київ') {
  let result = '';


if (name) {
  result += `My name is ${name}. `;
}

if (yearOfBirth) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearOfBirth;
  result += `I am ${age} years old. `;
}

if (favoriteGenre) {
  result += `I read ${favoriteGenre}. `;
}

result += `I live in ${city}.`;

return result.trim();

}

console.log('--- Завдання 1 ---');

console.log(memberCard('Olena', 1998, 'фентезі', 'Львів'));

console.log(memberCard('Olena', 1998, 'фентезі'));

console.log(memberCard('Olena', 1998, null, 'Харків'));

function describeMember(obj) {
  let result = '';

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += `${key}: ${obj[key]}; `;
    }
  }

  return result.trim();
}

console.log('\n--- Завдання 2 ---');
console.log(describeMember(memberObj));