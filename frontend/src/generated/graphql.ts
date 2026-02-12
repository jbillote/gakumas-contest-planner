/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum Cost {
  High = 'HIGH',
  Low = 'LOW'
}

export type PCard = {
  __typename?: 'PCard';
  cost: Cost;
  customCharacter: Scalars['Boolean']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  plan: Plan;
  rarity: Rarity;
  support: Scalars['Boolean']['output'];
  type: Type;
};

export enum Plan {
  Anomaly = 'ANOMALY',
  Free = 'FREE',
  Logic = 'LOGIC',
  Sense = 'SENSE'
}

export type Query = {
  __typename?: 'Query';
  pCards: Array<PCard>;
};


export type QueryPCardsArgs = {
  includeFree?: InputMaybe<Scalars['Boolean']['input']>;
  plan?: InputMaybe<Plan>;
};

export enum Rarity {
  R = 'R',
  Sr = 'SR',
  Ssr = 'SSR',
  T = 'T'
}

export enum Type {
  Active = 'ACTIVE',
  Mental = 'MENTAL',
  Trouble = 'TROUBLE'
}

export type PCardsQueryVariables = Exact<{
  plan?: InputMaybe<Plan>;
}>;


export type PCardsQuery = { __typename?: 'Query', pCards: Array<{ __typename?: 'PCard', id: number, filename: string, name: string, type: Type, plan: Plan, rarity: Rarity, support: boolean, cost: Cost, customCharacter: boolean }> };


export const PCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PCards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"plan"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Plan"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"plan"},"value":{"kind":"Variable","name":{"kind":"Name","value":"plan"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"plan"}},{"kind":"Field","name":{"kind":"Name","value":"rarity"}},{"kind":"Field","name":{"kind":"Name","value":"support"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"customCharacter"}}]}}]}}]} as unknown as DocumentNode<PCardsQuery, PCardsQueryVariables>;