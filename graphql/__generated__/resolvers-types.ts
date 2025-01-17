import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AllBookResponse = {
  __typename?: 'AllBookResponse';
  data?: Maybe<Array<Maybe<Book>>>;
  error?: Maybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  created_at?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['String']>;
};

export type BookMutationResponse = {
  __typename?: 'BookMutationResponse';
  book?: Maybe<Book>;
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type DeleteBookMutationResponse = {
  __typename?: 'DeleteBookMutationResponse';
  code: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook?: Maybe<BookMutationResponse>;
  deleteBook?: Maybe<DeleteBookMutationResponse>;
  updateBook?: Maybe<BookMutationResponse>;
};


export type MutationAddBookArgs = {
  author: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateBookArgs = {
  author: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books?: Maybe<AllBookResponse>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AllBookResponse: ResolverTypeWrapper<AllBookResponse>;
  Book: ResolverTypeWrapper<Book>;
  BookMutationResponse: ResolverTypeWrapper<BookMutationResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DeleteBookMutationResponse: ResolverTypeWrapper<DeleteBookMutationResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AllBookResponse: AllBookResponse;
  Book: Book;
  BookMutationResponse: BookMutationResponse;
  Boolean: Scalars['Boolean'];
  DeleteBookMutationResponse: DeleteBookMutationResponse;
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
}>;

export type AllBookResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllBookResponse'] = ResolversParentTypes['AllBookResponse']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookMutationResponse'] = ResolversParentTypes['BookMutationResponse']> = ResolversObject<{
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteBookMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteBookMutationResponse'] = ResolversParentTypes['DeleteBookMutationResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addBook?: Resolver<Maybe<ResolversTypes['BookMutationResponse']>, ParentType, ContextType, RequireFields<MutationAddBookArgs, 'author' | 'title'>>;
  deleteBook?: Resolver<Maybe<ResolversTypes['DeleteBookMutationResponse']>, ParentType, ContextType, RequireFields<MutationDeleteBookArgs, 'id'>>;
  updateBook?: Resolver<Maybe<ResolversTypes['BookMutationResponse']>, ParentType, ContextType, RequireFields<MutationUpdateBookArgs, 'author' | 'id' | 'title'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryBookArgs, 'id'>>;
  books?: Resolver<Maybe<ResolversTypes['AllBookResponse']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AllBookResponse?: AllBookResponseResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  BookMutationResponse?: BookMutationResponseResolvers<ContextType>;
  DeleteBookMutationResponse?: DeleteBookMutationResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

