import { book } from "~encore/clients";
import { MutationResolvers } from "../__generated__/resolvers-types";
import { APIError } from "encore.dev/api";

const mutations: MutationResolvers = {
    addBook: async (__dirname, {title, author}) => {
        try {
            const resp = await book.add({
                title, author,
            });
            return {
                book: resp.book,
                success: true,
                code: "ok",
                message: "New book added",
            }
        } catch (err) {
            const apiError = err as APIError;

            return {
                book: null,
                success: false,
                code: apiError.code,
                message: apiError.message
            }
        }
    }
}

export default mutations