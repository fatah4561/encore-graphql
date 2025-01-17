import { authentication, book } from "~encore/clients";
import { AllBookResponse, QueryResolvers } from "../__generated__/resolvers-types";
import log from "encore.dev/log";
import { Context } from "../graphql";
import { APIError } from "encore.dev/api";

const queries: QueryResolvers<Context> = {

    books: async (_, __, context: Context): Promise<AllBookResponse> => {
        let user;
        try {
            user = await authentication.verify({token: context.token ?? ""});
        } catch (err) {
            return {error: "unauthorized"};
        }
        if (!user) {
            return {error: "unauthorized"};
        }
        const { books } = await book.list();
        return {data: books};
    },
    book: async (_, { id }: {id: string}) => {
        const { books } = await book.list();
        return books.find((b) => b.id === id) || null; // Find a book by its ID
    },
};

export default queries