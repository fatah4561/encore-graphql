INSERT INTO books (id, title, author) 
VALUES ('To Kill a Mockingbird', 'Harper Lee')
ON CONFLICT(id) DO NOTHING;

INSERT INTO books (id, title, author)
VALUES ('1984', 'George Orwell')
ON CONFLICT(id) DO NOTHING;

INSERT INTO books (id, title, author)
VALUES ('The Great Gatsby', 'F. Scott Fitzgerald')
ON CONFLICT(id) DO NOTHING;

INSERT INTO books (id, title, author)
VALUES ('Moby-dick', 'Herman Melville')
ON CONFLICT(id) DO NOTHING;

INSERT INTO books (id, title, author)
VALUES ('Pride And Prejudice', 'Jane Austen')
ON CONFLICT(id) DO NOTHING;