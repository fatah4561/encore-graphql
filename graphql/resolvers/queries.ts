import { book } from "~encore/clients";
import { QueryResolvers } from "../__generated__/resolvers-types";

const queries: QueryResolvers = {
    books: async () => {
        const { books } = await book.list();
        return books;
    },
    book: async (_, { id }: {id: string}) => {
        const { books } = await book.list();
        return books.find((b) => b.id === id) || null; // Find a book by its ID
    },
};

export default queries