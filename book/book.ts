import { api, APIError} from "encore.dev/api";
import { Book } from "../graphql/__generated__/resolvers-types";

const db: Book[] = [
    {
        id: "1",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
    },
    {
        id: "2",
        title: "1984",
        author: "George Orwell",
    },
    {
        id: "3",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    },
    {
        id: "4",
        title: "Moby-dick",
        author: "Herman Melville",
    },
    {
        id: "5",
        title: "Pride And Prejudice",
        author: "Jane Austen",
    },
];

export const list = api(
    { expose: true, method: "GET", path: "/books"},
    async (): Promise<{ books: Book[]}> => {
        return { books: db };
    }
)

// omit the "__typename" field from the request
type AddRequest = Omit<Required<Book>, "__typename">;

export const add = api(
    { expose: true, method: "POST", path: "/book"},
    async (book: AddRequest): Promise<{book: Book}> => {
        if (db.some((b)=> b.title === book.title)) {
            throw APIError.alreadyExists(
                `Book "${book.title}" is already in database`,
            )
        }
        db.push(book);
        return{ book };
    }
)