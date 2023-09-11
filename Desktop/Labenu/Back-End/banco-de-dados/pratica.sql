-- Active: 1688994538217@@127.0.0.1@3306

CREATE TABLE books (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NO NULL,
    author TEXT NO NULL,
    page_count INTEGER,
    price REAL NOT NULL
);

SELECT * FROM books;

PRAGMA table_info("books");

DROP TABLE books;

INSERT INTO books (id, name, author, page_count, price)
VALUES ("8503012928", "O Quinze", "Rachel de Queiroz", 208, 24.95);

INSERT INTO books (id, name, author, price) 
VALUES ("8503012927", "Dom Casmurro", "Machado de Assis", 26.78); 

UPDATE books
SET page_count = 463
WHERE id = "8503012927";

DELETE FROM books WHERE id = "8503012927";

SELECT author as Autor, name as Name FROM books;
