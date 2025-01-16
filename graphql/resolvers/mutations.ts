import { book } from "~encore/clients";
import { MutationResolvers } from "../__generated__/resolvers-types";
import { APIError } from "encore.dev/api";

const mutations: MutationResolvers = {
  addBook: async (__dirname, { title, author }) => {
    try {
      const resp = await book.add({
        title,
        author,
      });
      return {
        book: resp.book,
        success: true,
        code: "ok",
        message: "New book added",
      };
    } catch (err) {
      const apiError = err as APIError;

      return {
        book: null,
        success: false,
        code: apiError.code,
        message: apiError.message,
      };
    }
  },

  updateBook: async (__dirname: any, { id, title, author }: any) => {
    try {
      const resp = await book.edit({
        id,
        bookReq: { title, author },
      });
      return {
        book: resp.book,
        success: true,
        code: "ok",
        message: "Book updated",
      };
    } catch (err) {
      const apiError = err as APIError;

      return {
        book: null,
        success: false,
        code: apiError.code,
        message: apiError.message,
      };
    }
  },

  deleteBook: async (__dirname: any, { id }: any) => {
    try {
      const resp = await book.destroy({
        id,
      });
      return {
        id: resp.id,
        success: true,
        code: "ok",
        message: "Book deleted",
      };
    } catch (err) {
      const apiError = err as APIError;

      return {
        book: null,
        success: false,
        code: apiError.code,
        message: apiError.message,
      };
    }
  },
};

export default mutations;
