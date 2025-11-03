class Textbook extends Book {
    constructor(title, author, year, publisher, subject) {
        super(title, author, year, publisher);
        this._subject = subject;
    }

    // новое поле с гетером и сетером
    get subject() {
        return this._subject;
    }

    set subject(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._subject = value;
        } else {
            console.error('Предмет должен быть непустой строкой');
        }
    }

    // Переопределение
    show() {
        console.log('Информация об учебнике:');
        console.log(`Название: ${this._title}`);
        console.log(`Автор: ${this._author}`);
        console.log(`Год издания: ${this._year}`);
        console.log(`Издатель: ${this.publisher}`);
        console.log(`Предмет: ${this._subject}`);
    }

    delete() {
        console.log(`Учебник "${this._title}" по предмету "${this._subject}" удален`);
        this._title = null;
        this._author = null;
        this._year = null;
        this._subject = null;
    }

    copy() {
        return new Textbook(this._title, this._author, this._year, this.publisher, this._subject);
    }

    // Статичный метод переопределен
    static clone(textbook) {
        return new Textbook(textbook._title, textbook._author, textbook._year, textbook.publisher, textbook._subject);
    }
}