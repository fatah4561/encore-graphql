import { api, APIError } from "encore.dev/api";
import { Book } from "../graphql/__generated__/resolvers-types";
import { SQLDatabase } from "encore.dev/storage/sqldb";
import knex from "knex";

const BookDB = new SQLDatabase("book", {
  migrations: "./migrations",
});

const orm = knex({
  client: "pg",
  connection: BookDB.connectionString,
});

const Books = () => orm<Book>("books");

export const list = api(
  { method: "GET", path: "/books" },
  async (): Promise<{ books: Book[] }> => {
    const books = await Books().select();
    return { books };
  }
);

// omit the "id", "__typename" field from the request
type AddRequest = Omit<Required<Book>, "id" | "__typename">;

export const add = api(
  { method: "POST", path: "/book" },
  async (newBook: AddRequest): Promise<{ book: Book }> => {
    const bookExists = await Books().where("title", newBook.title).first();

    if (bookExists) {
      throw APIError.alreadyExists(
        `Book "${newBook.title}" is already in database`
      );
    }

    const book = (await Books().insert(newBook, "*"))[0];
    return { book };
  }
);
