/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.0.2.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as models_delete from "../models/delete";
import type * as models_get from "../models/get";
import type * as models_post from "../models/post";
import type * as users_get from "../users/get";
import type * as users_post from "../users/post";
import type * as users from "../users";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "models/delete": typeof models_delete;
  "models/get": typeof models_get;
  "models/post": typeof models_post;
  "users/get": typeof users_get;
  "users/post": typeof users_post;
  users: typeof users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
