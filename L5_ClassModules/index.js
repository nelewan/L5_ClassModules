//2 экземпляра класса 
const textbooks = [
    new Textbook('Ходячий замок', 'Диана Уинн Джонс', 1986, 'HarperCollins', 'Фэнтези'),
    new Textbook('Повелитель тайн', 'Ai Qianshui', 2018, 'Qidian', 'Фэнтези')
];

//show для обоих
console.log('работа Textbook');
textbooks.forEach((textbook, index) => {
    console.log(`\nКнига ${index + 1}:`);
    textbook.show();
});

//
console.log('еще немного работы');

//гетеры и сетеры
console.log('\n Изменение жанра первой книги:');
console.log('Старый жанр:', textbooks[0].subject);
textbooks[0].subject = 'Детское фэнтези';
console.log('Новый жанр:', textbooks[0].subject);

console.log('\nкопирование:');
const copiedTextbook = textbooks[1].copy();
console.log('Оригинал и копия "Повелителя тайн":');
textbooks[1].show();
copiedTextbook.show();

console.log('\n статичный метод clone:');
const clonedTextbook = Textbook.clone(textbooks[0]);
console.log('Оригинал и клон "Ходячего замка":');
textbooks[0].show();
clonedTextbook.show();

// Проверка, что разные объекты
console.log('\n Проверка на идентичность (===):', textbooks[0] === clonedTextbook);

console.log('\n работа с приватными методами ');
console.log('Вызов публичного метода, который использует приватный:');
textbooks[0].publicMethodToUsePrivate();
textbooks[0].show();

console.log('\n дополнительная информация');
console.log('"Ходячий замок" - классика фэнтези, вдохновившая знаменитый аниме-фильм Хаяо Миядзаки');
console.log('"Повелитель тайн" - вышло крутое аниме');