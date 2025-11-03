class Book {
    #publisher;

    constructor(title, author, year, publisher) {
        this._title = title;
        this._author = author;
        this._year = year;
        this.#publisher = publisher;
    }

    // гет сет
    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._title = value;
        } else {
            console.error('Название должно быть непустой строкой');
        }
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._author = value;
        } else {
            console.error('Автор должен быть непустой строкой');
        }
    }

    get year() {
        return this._year;
    }
    set year(value) {
        if (typeof value === 'number' && value > 0 && value <= new Date().getFullYear()) {
            this._year = value;
        } else {
            console.error('Год должен быть положительным числом не больше текущего года');
        }
    }

    get publisher() {
        return this.#publisher;
    }
    set publisher(value) {
        if (typeof value === 'string' && value.length > 0) {
            this.#publisher = value;
        } else {
            console.error('Издатель должен быть непустой строкой');
        }
    }

    //методы
    show() {
        console.log('   Информация о книге:');
        console.log(`   Название: ${this._title}`);
        console.log(`   Автор: ${this._author}`);
        console.log(`   Год издания: ${this._year}`);
        console.log(`   Издатель: ${this.#publisher}`);
    }

    delete() {
        console.log(`Книга "${this._title}" удалена`);
        this._title = null;
        this._author = null;
        this._year = null;
        this.#publisher = null;
    }

    copy() {
        return this;
    }

    // Условноприватный метод
    #changeEdition() {
        console.log(`Переиздание книги "${this._title}"`);
        this._year = new Date().getFullYear();
    }

    publicMethodToUsePrivate() {
        this.#changeEdition();
        console.log(`Книга "${this._title}" переиздана в ${this._year} году`);
    }

    // Статичный метод
    static clone(book) {
        return new Book(book._title, book._author, book._year, book.publisher);
    }
}