BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS userbooks CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (username, password) VALUES
('m4v15', 'hello123'),
('jem', 'abuhalwa'),
('lubes', 'dumb'),
('ghassan', 'sah');

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE
);

INSERT INTO books (name) VALUES
('Wind Up Bird'),
('M Train'),
('The Notebooks of don rigaberto'),
('A Hard rain'),
('Kafka on the shore'),
('Slaughterhouse 5'),
('100 years of solitude'),
('The Road');

CREATE TABLE userbooks (
    user_id INTEGER REFERENCES users(id),
    book_id INTEGER REFERENCES books(id)
);

INSERT INTO userbooks (user_id, book_id) VALUES
(1,1),
(1,2),
(1,4),
(1,5),
(1,6),
(1,7),
(2,1),
(2,4),
(2,5),
(3,1),
(3,6),
(4,1),
(4,6),
(4,7);

COMMIT;
