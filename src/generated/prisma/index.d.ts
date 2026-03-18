
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model University
 * 
 */
export type University = $Result.DefaultSelection<Prisma.$UniversityPayload>
/**
 * Model Festival
 * 
 */
export type Festival = $Result.DefaultSelection<Prisma.$FestivalPayload>
/**
 * Model FestivalHighlight
 * 
 */
export type FestivalHighlight = $Result.DefaultSelection<Prisma.$FestivalHighlightPayload>
/**
 * Model Chairperson
 * 
 */
export type Chairperson = $Result.DefaultSelection<Prisma.$ChairpersonPayload>
/**
 * Model Theme
 * 
 */
export type Theme = $Result.DefaultSelection<Prisma.$ThemePayload>
/**
 * Model SponsorPlan
 * 
 */
export type SponsorPlan = $Result.DefaultSelection<Prisma.$SponsorPlanPayload>
/**
 * Model CommitteeMember
 * 
 */
export type CommitteeMember = $Result.DefaultSelection<Prisma.$CommitteeMemberPayload>
/**
 * Model UniversityRole
 * 
 */
export type UniversityRole = $Result.DefaultSelection<Prisma.$UniversityRolePayload>
/**
 * Model GakusaiInterviewOffer
 * 
 */
export type GakusaiInterviewOffer = $Result.DefaultSelection<Prisma.$GakusaiInterviewOfferPayload>
/**
 * Model GakusaiArticle
 * 
 */
export type GakusaiArticle = $Result.DefaultSelection<Prisma.$GakusaiArticlePayload>
/**
 * Model GakusaiArticleSection
 * 
 */
export type GakusaiArticleSection = $Result.DefaultSelection<Prisma.$GakusaiArticleSectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  VIEWER: 'VIEWER',
  MEMBER: 'MEMBER',
  EXECUTIVE: 'EXECUTIVE',
  CHAIRPERSON: 'CHAIRPERSON',
  SYSTEM_ADMIN: 'SYSTEM_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.university`: Exposes CRUD operations for the **University** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Universities
    * const universities = await prisma.university.findMany()
    * ```
    */
  get university(): Prisma.UniversityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.festival`: Exposes CRUD operations for the **Festival** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Festivals
    * const festivals = await prisma.festival.findMany()
    * ```
    */
  get festival(): Prisma.FestivalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.festivalHighlight`: Exposes CRUD operations for the **FestivalHighlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FestivalHighlights
    * const festivalHighlights = await prisma.festivalHighlight.findMany()
    * ```
    */
  get festivalHighlight(): Prisma.FestivalHighlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chairperson`: Exposes CRUD operations for the **Chairperson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chairpeople
    * const chairpeople = await prisma.chairperson.findMany()
    * ```
    */
  get chairperson(): Prisma.ChairpersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sponsorPlan`: Exposes CRUD operations for the **SponsorPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SponsorPlans
    * const sponsorPlans = await prisma.sponsorPlan.findMany()
    * ```
    */
  get sponsorPlan(): Prisma.SponsorPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.committeeMember`: Exposes CRUD operations for the **CommitteeMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommitteeMembers
    * const committeeMembers = await prisma.committeeMember.findMany()
    * ```
    */
  get committeeMember(): Prisma.CommitteeMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.universityRole`: Exposes CRUD operations for the **UniversityRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UniversityRoles
    * const universityRoles = await prisma.universityRole.findMany()
    * ```
    */
  get universityRole(): Prisma.UniversityRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gakusaiInterviewOffer`: Exposes CRUD operations for the **GakusaiInterviewOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GakusaiInterviewOffers
    * const gakusaiInterviewOffers = await prisma.gakusaiInterviewOffer.findMany()
    * ```
    */
  get gakusaiInterviewOffer(): Prisma.GakusaiInterviewOfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gakusaiArticle`: Exposes CRUD operations for the **GakusaiArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GakusaiArticles
    * const gakusaiArticles = await prisma.gakusaiArticle.findMany()
    * ```
    */
  get gakusaiArticle(): Prisma.GakusaiArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gakusaiArticleSection`: Exposes CRUD operations for the **GakusaiArticleSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GakusaiArticleSections
    * const gakusaiArticleSections = await prisma.gakusaiArticleSection.findMany()
    * ```
    */
  get gakusaiArticleSection(): Prisma.GakusaiArticleSectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    University: 'University',
    Festival: 'Festival',
    FestivalHighlight: 'FestivalHighlight',
    Chairperson: 'Chairperson',
    Theme: 'Theme',
    SponsorPlan: 'SponsorPlan',
    CommitteeMember: 'CommitteeMember',
    UniversityRole: 'UniversityRole',
    GakusaiInterviewOffer: 'GakusaiInterviewOffer',
    GakusaiArticle: 'GakusaiArticle',
    GakusaiArticleSection: 'GakusaiArticleSection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "university" | "festival" | "festivalHighlight" | "chairperson" | "theme" | "sponsorPlan" | "committeeMember" | "universityRole" | "gakusaiInterviewOffer" | "gakusaiArticle" | "gakusaiArticleSection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      University: {
        payload: Prisma.$UniversityPayload<ExtArgs>
        fields: Prisma.UniversityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniversityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniversityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          findFirst: {
            args: Prisma.UniversityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniversityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          findMany: {
            args: Prisma.UniversityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          create: {
            args: Prisma.UniversityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          createMany: {
            args: Prisma.UniversityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UniversityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          delete: {
            args: Prisma.UniversityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          update: {
            args: Prisma.UniversityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          deleteMany: {
            args: Prisma.UniversityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniversityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UniversityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          upsert: {
            args: Prisma.UniversityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          aggregate: {
            args: Prisma.UniversityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversity>
          }
          groupBy: {
            args: Prisma.UniversityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniversityCountArgs<ExtArgs>
            result: $Utils.Optional<UniversityCountAggregateOutputType> | number
          }
        }
      }
      Festival: {
        payload: Prisma.$FestivalPayload<ExtArgs>
        fields: Prisma.FestivalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FestivalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FestivalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          findFirst: {
            args: Prisma.FestivalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FestivalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          findMany: {
            args: Prisma.FestivalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>[]
          }
          create: {
            args: Prisma.FestivalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          createMany: {
            args: Prisma.FestivalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FestivalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>[]
          }
          delete: {
            args: Prisma.FestivalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          update: {
            args: Prisma.FestivalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          deleteMany: {
            args: Prisma.FestivalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FestivalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FestivalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>[]
          }
          upsert: {
            args: Prisma.FestivalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalPayload>
          }
          aggregate: {
            args: Prisma.FestivalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFestival>
          }
          groupBy: {
            args: Prisma.FestivalGroupByArgs<ExtArgs>
            result: $Utils.Optional<FestivalGroupByOutputType>[]
          }
          count: {
            args: Prisma.FestivalCountArgs<ExtArgs>
            result: $Utils.Optional<FestivalCountAggregateOutputType> | number
          }
        }
      }
      FestivalHighlight: {
        payload: Prisma.$FestivalHighlightPayload<ExtArgs>
        fields: Prisma.FestivalHighlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FestivalHighlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FestivalHighlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload>
          }
          findFirst: {
            args: Prisma.FestivalHighlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FestivalHighlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload>
          }
          findMany: {
            args: Prisma.FestivalHighlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload>[]
          }
          create: {
            args: Prisma.FestivalHighlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload>
          }
          createMany: {
            args: Prisma.FestivalHighlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FestivalHighlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload>[]
          }
          delete: {
            args: Prisma.FestivalHighlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload>
          }
          update: {
            args: Prisma.FestivalHighlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload>
          }
          deleteMany: {
            args: Prisma.FestivalHighlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FestivalHighlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FestivalHighlightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload>[]
          }
          upsert: {
            args: Prisma.FestivalHighlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FestivalHighlightPayload>
          }
          aggregate: {
            args: Prisma.FestivalHighlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFestivalHighlight>
          }
          groupBy: {
            args: Prisma.FestivalHighlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<FestivalHighlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.FestivalHighlightCountArgs<ExtArgs>
            result: $Utils.Optional<FestivalHighlightCountAggregateOutputType> | number
          }
        }
      }
      Chairperson: {
        payload: Prisma.$ChairpersonPayload<ExtArgs>
        fields: Prisma.ChairpersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChairpersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChairpersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload>
          }
          findFirst: {
            args: Prisma.ChairpersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChairpersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload>
          }
          findMany: {
            args: Prisma.ChairpersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload>[]
          }
          create: {
            args: Prisma.ChairpersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload>
          }
          createMany: {
            args: Prisma.ChairpersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChairpersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload>[]
          }
          delete: {
            args: Prisma.ChairpersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload>
          }
          update: {
            args: Prisma.ChairpersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload>
          }
          deleteMany: {
            args: Prisma.ChairpersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChairpersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChairpersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload>[]
          }
          upsert: {
            args: Prisma.ChairpersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChairpersonPayload>
          }
          aggregate: {
            args: Prisma.ChairpersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChairperson>
          }
          groupBy: {
            args: Prisma.ChairpersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChairpersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChairpersonCountArgs<ExtArgs>
            result: $Utils.Optional<ChairpersonCountAggregateOutputType> | number
          }
        }
      }
      Theme: {
        payload: Prisma.$ThemePayload<ExtArgs>
        fields: Prisma.ThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findFirst: {
            args: Prisma.ThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findMany: {
            args: Prisma.ThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          create: {
            args: Prisma.ThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          createMany: {
            args: Prisma.ThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          delete: {
            args: Prisma.ThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          update: {
            args: Prisma.ThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          deleteMany: {
            args: Prisma.ThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          upsert: {
            args: Prisma.ThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.ThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThemeCountArgs<ExtArgs>
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
      SponsorPlan: {
        payload: Prisma.$SponsorPlanPayload<ExtArgs>
        fields: Prisma.SponsorPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SponsorPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SponsorPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload>
          }
          findFirst: {
            args: Prisma.SponsorPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SponsorPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload>
          }
          findMany: {
            args: Prisma.SponsorPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload>[]
          }
          create: {
            args: Prisma.SponsorPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload>
          }
          createMany: {
            args: Prisma.SponsorPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SponsorPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload>[]
          }
          delete: {
            args: Prisma.SponsorPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload>
          }
          update: {
            args: Prisma.SponsorPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload>
          }
          deleteMany: {
            args: Prisma.SponsorPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SponsorPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SponsorPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload>[]
          }
          upsert: {
            args: Prisma.SponsorPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPlanPayload>
          }
          aggregate: {
            args: Prisma.SponsorPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSponsorPlan>
          }
          groupBy: {
            args: Prisma.SponsorPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SponsorPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SponsorPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SponsorPlanCountAggregateOutputType> | number
          }
        }
      }
      CommitteeMember: {
        payload: Prisma.$CommitteeMemberPayload<ExtArgs>
        fields: Prisma.CommitteeMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommitteeMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommitteeMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          findFirst: {
            args: Prisma.CommitteeMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommitteeMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          findMany: {
            args: Prisma.CommitteeMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>[]
          }
          create: {
            args: Prisma.CommitteeMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          createMany: {
            args: Prisma.CommitteeMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommitteeMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>[]
          }
          delete: {
            args: Prisma.CommitteeMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          update: {
            args: Prisma.CommitteeMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          deleteMany: {
            args: Prisma.CommitteeMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommitteeMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommitteeMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>[]
          }
          upsert: {
            args: Prisma.CommitteeMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitteeMemberPayload>
          }
          aggregate: {
            args: Prisma.CommitteeMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommitteeMember>
          }
          groupBy: {
            args: Prisma.CommitteeMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommitteeMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommitteeMemberCountArgs<ExtArgs>
            result: $Utils.Optional<CommitteeMemberCountAggregateOutputType> | number
          }
        }
      }
      UniversityRole: {
        payload: Prisma.$UniversityRolePayload<ExtArgs>
        fields: Prisma.UniversityRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniversityRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniversityRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload>
          }
          findFirst: {
            args: Prisma.UniversityRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniversityRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload>
          }
          findMany: {
            args: Prisma.UniversityRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload>[]
          }
          create: {
            args: Prisma.UniversityRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload>
          }
          createMany: {
            args: Prisma.UniversityRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UniversityRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload>[]
          }
          delete: {
            args: Prisma.UniversityRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload>
          }
          update: {
            args: Prisma.UniversityRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload>
          }
          deleteMany: {
            args: Prisma.UniversityRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniversityRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UniversityRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload>[]
          }
          upsert: {
            args: Prisma.UniversityRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityRolePayload>
          }
          aggregate: {
            args: Prisma.UniversityRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversityRole>
          }
          groupBy: {
            args: Prisma.UniversityRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversityRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniversityRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UniversityRoleCountAggregateOutputType> | number
          }
        }
      }
      GakusaiInterviewOffer: {
        payload: Prisma.$GakusaiInterviewOfferPayload<ExtArgs>
        fields: Prisma.GakusaiInterviewOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GakusaiInterviewOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GakusaiInterviewOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload>
          }
          findFirst: {
            args: Prisma.GakusaiInterviewOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GakusaiInterviewOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload>
          }
          findMany: {
            args: Prisma.GakusaiInterviewOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload>[]
          }
          create: {
            args: Prisma.GakusaiInterviewOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload>
          }
          createMany: {
            args: Prisma.GakusaiInterviewOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GakusaiInterviewOfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload>[]
          }
          delete: {
            args: Prisma.GakusaiInterviewOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload>
          }
          update: {
            args: Prisma.GakusaiInterviewOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload>
          }
          deleteMany: {
            args: Prisma.GakusaiInterviewOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GakusaiInterviewOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GakusaiInterviewOfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload>[]
          }
          upsert: {
            args: Prisma.GakusaiInterviewOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiInterviewOfferPayload>
          }
          aggregate: {
            args: Prisma.GakusaiInterviewOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGakusaiInterviewOffer>
          }
          groupBy: {
            args: Prisma.GakusaiInterviewOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<GakusaiInterviewOfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.GakusaiInterviewOfferCountArgs<ExtArgs>
            result: $Utils.Optional<GakusaiInterviewOfferCountAggregateOutputType> | number
          }
        }
      }
      GakusaiArticle: {
        payload: Prisma.$GakusaiArticlePayload<ExtArgs>
        fields: Prisma.GakusaiArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GakusaiArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GakusaiArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload>
          }
          findFirst: {
            args: Prisma.GakusaiArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GakusaiArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload>
          }
          findMany: {
            args: Prisma.GakusaiArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload>[]
          }
          create: {
            args: Prisma.GakusaiArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload>
          }
          createMany: {
            args: Prisma.GakusaiArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GakusaiArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload>[]
          }
          delete: {
            args: Prisma.GakusaiArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload>
          }
          update: {
            args: Prisma.GakusaiArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload>
          }
          deleteMany: {
            args: Prisma.GakusaiArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GakusaiArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GakusaiArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload>[]
          }
          upsert: {
            args: Prisma.GakusaiArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticlePayload>
          }
          aggregate: {
            args: Prisma.GakusaiArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGakusaiArticle>
          }
          groupBy: {
            args: Prisma.GakusaiArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<GakusaiArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.GakusaiArticleCountArgs<ExtArgs>
            result: $Utils.Optional<GakusaiArticleCountAggregateOutputType> | number
          }
        }
      }
      GakusaiArticleSection: {
        payload: Prisma.$GakusaiArticleSectionPayload<ExtArgs>
        fields: Prisma.GakusaiArticleSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GakusaiArticleSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GakusaiArticleSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload>
          }
          findFirst: {
            args: Prisma.GakusaiArticleSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GakusaiArticleSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload>
          }
          findMany: {
            args: Prisma.GakusaiArticleSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload>[]
          }
          create: {
            args: Prisma.GakusaiArticleSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload>
          }
          createMany: {
            args: Prisma.GakusaiArticleSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GakusaiArticleSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload>[]
          }
          delete: {
            args: Prisma.GakusaiArticleSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload>
          }
          update: {
            args: Prisma.GakusaiArticleSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload>
          }
          deleteMany: {
            args: Prisma.GakusaiArticleSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GakusaiArticleSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GakusaiArticleSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload>[]
          }
          upsert: {
            args: Prisma.GakusaiArticleSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GakusaiArticleSectionPayload>
          }
          aggregate: {
            args: Prisma.GakusaiArticleSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGakusaiArticleSection>
          }
          groupBy: {
            args: Prisma.GakusaiArticleSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GakusaiArticleSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GakusaiArticleSectionCountArgs<ExtArgs>
            result: $Utils.Optional<GakusaiArticleSectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    university?: UniversityOmit
    festival?: FestivalOmit
    festivalHighlight?: FestivalHighlightOmit
    chairperson?: ChairpersonOmit
    theme?: ThemeOmit
    sponsorPlan?: SponsorPlanOmit
    committeeMember?: CommitteeMemberOmit
    universityRole?: UniversityRoleOmit
    gakusaiInterviewOffer?: GakusaiInterviewOfferOmit
    gakusaiArticle?: GakusaiArticleOmit
    gakusaiArticleSection?: GakusaiArticleSectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chairpersons: number
    committeeMembers: number
    universityRoles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chairpersons?: boolean | UserCountOutputTypeCountChairpersonsArgs
    committeeMembers?: boolean | UserCountOutputTypeCountCommitteeMembersArgs
    universityRoles?: boolean | UserCountOutputTypeCountUniversityRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChairpersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChairpersonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommitteeMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitteeMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUniversityRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversityRoleWhereInput
  }


  /**
   * Count Type UniversityCountOutputType
   */

  export type UniversityCountOutputType = {
    festivals: number
    universityRoles: number
    committeeMembers: number
  }

  export type UniversityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festivals?: boolean | UniversityCountOutputTypeCountFestivalsArgs
    universityRoles?: boolean | UniversityCountOutputTypeCountUniversityRolesArgs
    committeeMembers?: boolean | UniversityCountOutputTypeCountCommitteeMembersArgs
  }

  // Custom InputTypes
  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityCountOutputType
     */
    select?: UniversityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeCountFestivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FestivalWhereInput
  }

  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeCountUniversityRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversityRoleWhereInput
  }

  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeCountCommitteeMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitteeMemberWhereInput
  }


  /**
   * Count Type FestivalCountOutputType
   */

  export type FestivalCountOutputType = {
    sponsorPlans: number
    festivalHighlights: number
  }

  export type FestivalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sponsorPlans?: boolean | FestivalCountOutputTypeCountSponsorPlansArgs
    festivalHighlights?: boolean | FestivalCountOutputTypeCountFestivalHighlightsArgs
  }

  // Custom InputTypes
  /**
   * FestivalCountOutputType without action
   */
  export type FestivalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalCountOutputType
     */
    select?: FestivalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FestivalCountOutputType without action
   */
  export type FestivalCountOutputTypeCountSponsorPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SponsorPlanWhereInput
  }

  /**
   * FestivalCountOutputType without action
   */
  export type FestivalCountOutputTypeCountFestivalHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FestivalHighlightWhereInput
  }


  /**
   * Count Type ChairpersonCountOutputType
   */

  export type ChairpersonCountOutputType = {
    successors: number
  }

  export type ChairpersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    successors?: boolean | ChairpersonCountOutputTypeCountSuccessorsArgs
  }

  // Custom InputTypes
  /**
   * ChairpersonCountOutputType without action
   */
  export type ChairpersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChairpersonCountOutputType
     */
    select?: ChairpersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChairpersonCountOutputType without action
   */
  export type ChairpersonCountOutputTypeCountSuccessorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChairpersonWhereInput
  }


  /**
   * Count Type GakusaiArticleCountOutputType
   */

  export type GakusaiArticleCountOutputType = {
    sections: number
  }

  export type GakusaiArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | GakusaiArticleCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * GakusaiArticleCountOutputType without action
   */
  export type GakusaiArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleCountOutputType
     */
    select?: GakusaiArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GakusaiArticleCountOutputType without action
   */
  export type GakusaiArticleCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GakusaiArticleSectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    profileImage: string | null
    bio: string | null
    department: string | null
    snsLinks: string | null
    contactPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    profileImage: string | null
    bio: string | null
    department: string | null
    snsLinks: string | null
    contactPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    profileImage: number
    bio: number
    department: number
    snsLinks: number
    contactPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    profileImage?: true
    bio?: true
    department?: true
    snsLinks?: true
    contactPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    profileImage?: true
    bio?: true
    department?: true
    snsLinks?: true
    contactPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    profileImage?: true
    bio?: true
    department?: true
    snsLinks?: true
    contactPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    name: string | null
    role: $Enums.Role
    profileImage: string | null
    bio: string | null
    department: string | null
    snsLinks: string | null
    contactPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    profileImage?: boolean
    bio?: boolean
    department?: boolean
    snsLinks?: boolean
    contactPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chairpersons?: boolean | User$chairpersonsArgs<ExtArgs>
    committeeMembers?: boolean | User$committeeMembersArgs<ExtArgs>
    universityRoles?: boolean | User$universityRolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    profileImage?: boolean
    bio?: boolean
    department?: boolean
    snsLinks?: boolean
    contactPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    profileImage?: boolean
    bio?: boolean
    department?: boolean
    snsLinks?: boolean
    contactPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    profileImage?: boolean
    bio?: boolean
    department?: boolean
    snsLinks?: boolean
    contactPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "profileImage" | "bio" | "department" | "snsLinks" | "contactPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chairpersons?: boolean | User$chairpersonsArgs<ExtArgs>
    committeeMembers?: boolean | User$committeeMembersArgs<ExtArgs>
    universityRoles?: boolean | User$universityRolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chairpersons: Prisma.$ChairpersonPayload<ExtArgs>[]
      committeeMembers: Prisma.$CommitteeMemberPayload<ExtArgs>[]
      universityRoles: Prisma.$UniversityRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      name: string | null
      role: $Enums.Role
      profileImage: string | null
      bio: string | null
      department: string | null
      snsLinks: string | null
      contactPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chairpersons<T extends User$chairpersonsArgs<ExtArgs> = {}>(args?: Subset<T, User$chairpersonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    committeeMembers<T extends User$committeeMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$committeeMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    universityRoles<T extends User$universityRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$universityRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly snsLinks: FieldRef<"User", 'String'>
    readonly contactPublic: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.chairpersons
   */
  export type User$chairpersonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    where?: ChairpersonWhereInput
    orderBy?: ChairpersonOrderByWithRelationInput | ChairpersonOrderByWithRelationInput[]
    cursor?: ChairpersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChairpersonScalarFieldEnum | ChairpersonScalarFieldEnum[]
  }

  /**
   * User.committeeMembers
   */
  export type User$committeeMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    where?: CommitteeMemberWhereInput
    orderBy?: CommitteeMemberOrderByWithRelationInput | CommitteeMemberOrderByWithRelationInput[]
    cursor?: CommitteeMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommitteeMemberScalarFieldEnum | CommitteeMemberScalarFieldEnum[]
  }

  /**
   * User.universityRoles
   */
  export type User$universityRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    where?: UniversityRoleWhereInput
    orderBy?: UniversityRoleOrderByWithRelationInput | UniversityRoleOrderByWithRelationInput[]
    cursor?: UniversityRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UniversityRoleScalarFieldEnum | UniversityRoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model University
   */

  export type AggregateUniversity = {
    _count: UniversityCountAggregateOutputType | null
    _min: UniversityMinAggregateOutputType | null
    _max: UniversityMaxAggregateOutputType | null
  }

  export type UniversityMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    logoUrl: string | null
    coverImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UniversityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    logoUrl: string | null
    coverImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UniversityCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    logoUrl: number
    coverImageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UniversityMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    logoUrl?: true
    coverImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UniversityMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    logoUrl?: true
    coverImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UniversityCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    logoUrl?: true
    coverImageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UniversityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which University to aggregate.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Universities
    **/
    _count?: true | UniversityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversityMaxAggregateInputType
  }

  export type GetUniversityAggregateType<T extends UniversityAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversity[P]>
      : GetScalarType<T[P], AggregateUniversity[P]>
  }




  export type UniversityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversityWhereInput
    orderBy?: UniversityOrderByWithAggregationInput | UniversityOrderByWithAggregationInput[]
    by: UniversityScalarFieldEnum[] | UniversityScalarFieldEnum
    having?: UniversityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversityCountAggregateInputType | true
    _min?: UniversityMinAggregateInputType
    _max?: UniversityMaxAggregateInputType
  }

  export type UniversityGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    logoUrl: string | null
    coverImageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UniversityCountAggregateOutputType | null
    _min: UniversityMinAggregateOutputType | null
    _max: UniversityMaxAggregateOutputType | null
  }

  type GetUniversityGroupByPayload<T extends UniversityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversityGroupByOutputType[P]>
            : GetScalarType<T[P], UniversityGroupByOutputType[P]>
        }
      >
    >


  export type UniversitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logoUrl?: boolean
    coverImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festivals?: boolean | University$festivalsArgs<ExtArgs>
    universityRoles?: boolean | University$universityRolesArgs<ExtArgs>
    committeeMembers?: boolean | University$committeeMembersArgs<ExtArgs>
    _count?: boolean | UniversityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["university"]>

  export type UniversitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logoUrl?: boolean
    coverImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["university"]>

  export type UniversitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logoUrl?: boolean
    coverImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["university"]>

  export type UniversitySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logoUrl?: boolean
    coverImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UniversityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "logoUrl" | "coverImageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["university"]>
  export type UniversityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festivals?: boolean | University$festivalsArgs<ExtArgs>
    universityRoles?: boolean | University$universityRolesArgs<ExtArgs>
    committeeMembers?: boolean | University$committeeMembersArgs<ExtArgs>
    _count?: boolean | UniversityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UniversityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UniversityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UniversityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "University"
    objects: {
      festivals: Prisma.$FestivalPayload<ExtArgs>[]
      universityRoles: Prisma.$UniversityRolePayload<ExtArgs>[]
      committeeMembers: Prisma.$CommitteeMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      logoUrl: string | null
      coverImageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["university"]>
    composites: {}
  }

  type UniversityGetPayload<S extends boolean | null | undefined | UniversityDefaultArgs> = $Result.GetResult<Prisma.$UniversityPayload, S>

  type UniversityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniversityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversityCountAggregateInputType | true
    }

  export interface UniversityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['University'], meta: { name: 'University' } }
    /**
     * Find zero or one University that matches the filter.
     * @param {UniversityFindUniqueArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniversityFindUniqueArgs>(args: SelectSubset<T, UniversityFindUniqueArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one University that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniversityFindUniqueOrThrowArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniversityFindUniqueOrThrowArgs>(args: SelectSubset<T, UniversityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first University that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindFirstArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniversityFindFirstArgs>(args?: SelectSubset<T, UniversityFindFirstArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first University that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindFirstOrThrowArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniversityFindFirstOrThrowArgs>(args?: SelectSubset<T, UniversityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Universities
     * const universities = await prisma.university.findMany()
     * 
     * // Get first 10 Universities
     * const universities = await prisma.university.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universityWithIdOnly = await prisma.university.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniversityFindManyArgs>(args?: SelectSubset<T, UniversityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a University.
     * @param {UniversityCreateArgs} args - Arguments to create a University.
     * @example
     * // Create one University
     * const University = await prisma.university.create({
     *   data: {
     *     // ... data to create a University
     *   }
     * })
     * 
     */
    create<T extends UniversityCreateArgs>(args: SelectSubset<T, UniversityCreateArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Universities.
     * @param {UniversityCreateManyArgs} args - Arguments to create many Universities.
     * @example
     * // Create many Universities
     * const university = await prisma.university.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniversityCreateManyArgs>(args?: SelectSubset<T, UniversityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Universities and returns the data saved in the database.
     * @param {UniversityCreateManyAndReturnArgs} args - Arguments to create many Universities.
     * @example
     * // Create many Universities
     * const university = await prisma.university.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Universities and only return the `id`
     * const universityWithIdOnly = await prisma.university.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UniversityCreateManyAndReturnArgs>(args?: SelectSubset<T, UniversityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a University.
     * @param {UniversityDeleteArgs} args - Arguments to delete one University.
     * @example
     * // Delete one University
     * const University = await prisma.university.delete({
     *   where: {
     *     // ... filter to delete one University
     *   }
     * })
     * 
     */
    delete<T extends UniversityDeleteArgs>(args: SelectSubset<T, UniversityDeleteArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one University.
     * @param {UniversityUpdateArgs} args - Arguments to update one University.
     * @example
     * // Update one University
     * const university = await prisma.university.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniversityUpdateArgs>(args: SelectSubset<T, UniversityUpdateArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Universities.
     * @param {UniversityDeleteManyArgs} args - Arguments to filter Universities to delete.
     * @example
     * // Delete a few Universities
     * const { count } = await prisma.university.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniversityDeleteManyArgs>(args?: SelectSubset<T, UniversityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Universities
     * const university = await prisma.university.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniversityUpdateManyArgs>(args: SelectSubset<T, UniversityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universities and returns the data updated in the database.
     * @param {UniversityUpdateManyAndReturnArgs} args - Arguments to update many Universities.
     * @example
     * // Update many Universities
     * const university = await prisma.university.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Universities and only return the `id`
     * const universityWithIdOnly = await prisma.university.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UniversityUpdateManyAndReturnArgs>(args: SelectSubset<T, UniversityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one University.
     * @param {UniversityUpsertArgs} args - Arguments to update or create a University.
     * @example
     * // Update or create a University
     * const university = await prisma.university.upsert({
     *   create: {
     *     // ... data to create a University
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the University we want to update
     *   }
     * })
     */
    upsert<T extends UniversityUpsertArgs>(args: SelectSubset<T, UniversityUpsertArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityCountArgs} args - Arguments to filter Universities to count.
     * @example
     * // Count the number of Universities
     * const count = await prisma.university.count({
     *   where: {
     *     // ... the filter for the Universities we want to count
     *   }
     * })
    **/
    count<T extends UniversityCountArgs>(
      args?: Subset<T, UniversityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a University.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UniversityAggregateArgs>(args: Subset<T, UniversityAggregateArgs>): Prisma.PrismaPromise<GetUniversityAggregateType<T>>

    /**
     * Group by University.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UniversityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniversityGroupByArgs['orderBy'] }
        : { orderBy?: UniversityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UniversityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the University model
   */
  readonly fields: UniversityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for University.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniversityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festivals<T extends University$festivalsArgs<ExtArgs> = {}>(args?: Subset<T, University$festivalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    universityRoles<T extends University$universityRolesArgs<ExtArgs> = {}>(args?: Subset<T, University$universityRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    committeeMembers<T extends University$committeeMembersArgs<ExtArgs> = {}>(args?: Subset<T, University$committeeMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the University model
   */
  interface UniversityFieldRefs {
    readonly id: FieldRef<"University", 'String'>
    readonly name: FieldRef<"University", 'String'>
    readonly slug: FieldRef<"University", 'String'>
    readonly description: FieldRef<"University", 'String'>
    readonly logoUrl: FieldRef<"University", 'String'>
    readonly coverImageUrl: FieldRef<"University", 'String'>
    readonly createdAt: FieldRef<"University", 'DateTime'>
    readonly updatedAt: FieldRef<"University", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * University findUnique
   */
  export type UniversityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University findUniqueOrThrow
   */
  export type UniversityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University findFirst
   */
  export type UniversityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University findFirstOrThrow
   */
  export type UniversityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University findMany
   */
  export type UniversityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which Universities to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University create
   */
  export type UniversityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The data needed to create a University.
     */
    data: XOR<UniversityCreateInput, UniversityUncheckedCreateInput>
  }

  /**
   * University createMany
   */
  export type UniversityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Universities.
     */
    data: UniversityCreateManyInput | UniversityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * University createManyAndReturn
   */
  export type UniversityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * The data used to create many Universities.
     */
    data: UniversityCreateManyInput | UniversityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * University update
   */
  export type UniversityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The data needed to update a University.
     */
    data: XOR<UniversityUpdateInput, UniversityUncheckedUpdateInput>
    /**
     * Choose, which University to update.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University updateMany
   */
  export type UniversityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Universities.
     */
    data: XOR<UniversityUpdateManyMutationInput, UniversityUncheckedUpdateManyInput>
    /**
     * Filter which Universities to update
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to update.
     */
    limit?: number
  }

  /**
   * University updateManyAndReturn
   */
  export type UniversityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * The data used to update Universities.
     */
    data: XOR<UniversityUpdateManyMutationInput, UniversityUncheckedUpdateManyInput>
    /**
     * Filter which Universities to update
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to update.
     */
    limit?: number
  }

  /**
   * University upsert
   */
  export type UniversityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The filter to search for the University to update in case it exists.
     */
    where: UniversityWhereUniqueInput
    /**
     * In case the University found by the `where` argument doesn't exist, create a new University with this data.
     */
    create: XOR<UniversityCreateInput, UniversityUncheckedCreateInput>
    /**
     * In case the University was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniversityUpdateInput, UniversityUncheckedUpdateInput>
  }

  /**
   * University delete
   */
  export type UniversityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter which University to delete.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University deleteMany
   */
  export type UniversityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Universities to delete
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to delete.
     */
    limit?: number
  }

  /**
   * University.festivals
   */
  export type University$festivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    where?: FestivalWhereInput
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    cursor?: FestivalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * University.universityRoles
   */
  export type University$universityRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    where?: UniversityRoleWhereInput
    orderBy?: UniversityRoleOrderByWithRelationInput | UniversityRoleOrderByWithRelationInput[]
    cursor?: UniversityRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UniversityRoleScalarFieldEnum | UniversityRoleScalarFieldEnum[]
  }

  /**
   * University.committeeMembers
   */
  export type University$committeeMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    where?: CommitteeMemberWhereInput
    orderBy?: CommitteeMemberOrderByWithRelationInput | CommitteeMemberOrderByWithRelationInput[]
    cursor?: CommitteeMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommitteeMemberScalarFieldEnum | CommitteeMemberScalarFieldEnum[]
  }

  /**
   * University without action
   */
  export type UniversityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
  }


  /**
   * Model Festival
   */

  export type AggregateFestival = {
    _count: FestivalCountAggregateOutputType | null
    _avg: FestivalAvgAggregateOutputType | null
    _sum: FestivalSumAggregateOutputType | null
    _min: FestivalMinAggregateOutputType | null
    _max: FestivalMaxAggregateOutputType | null
  }

  export type FestivalAvgAggregateOutputType = {
    year: number | null
  }

  export type FestivalSumAggregateOutputType = {
    year: number | null
  }

  export type FestivalMinAggregateOutputType = {
    id: string | null
    universityId: string | null
    year: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FestivalMaxAggregateOutputType = {
    id: string | null
    universityId: string | null
    year: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FestivalCountAggregateOutputType = {
    id: number
    universityId: number
    year: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FestivalAvgAggregateInputType = {
    year?: true
  }

  export type FestivalSumAggregateInputType = {
    year?: true
  }

  export type FestivalMinAggregateInputType = {
    id?: true
    universityId?: true
    year?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FestivalMaxAggregateInputType = {
    id?: true
    universityId?: true
    year?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FestivalCountAggregateInputType = {
    id?: true
    universityId?: true
    year?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FestivalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Festival to aggregate.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Festivals
    **/
    _count?: true | FestivalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FestivalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FestivalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FestivalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FestivalMaxAggregateInputType
  }

  export type GetFestivalAggregateType<T extends FestivalAggregateArgs> = {
        [P in keyof T & keyof AggregateFestival]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFestival[P]>
      : GetScalarType<T[P], AggregateFestival[P]>
  }




  export type FestivalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FestivalWhereInput
    orderBy?: FestivalOrderByWithAggregationInput | FestivalOrderByWithAggregationInput[]
    by: FestivalScalarFieldEnum[] | FestivalScalarFieldEnum
    having?: FestivalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FestivalCountAggregateInputType | true
    _avg?: FestivalAvgAggregateInputType
    _sum?: FestivalSumAggregateInputType
    _min?: FestivalMinAggregateInputType
    _max?: FestivalMaxAggregateInputType
  }

  export type FestivalGroupByOutputType = {
    id: string
    universityId: string
    year: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: FestivalCountAggregateOutputType | null
    _avg: FestivalAvgAggregateOutputType | null
    _sum: FestivalSumAggregateOutputType | null
    _min: FestivalMinAggregateOutputType | null
    _max: FestivalMaxAggregateOutputType | null
  }

  type GetFestivalGroupByPayload<T extends FestivalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FestivalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FestivalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FestivalGroupByOutputType[P]>
            : GetScalarType<T[P], FestivalGroupByOutputType[P]>
        }
      >
    >


  export type FestivalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universityId?: boolean
    year?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    chairperson?: boolean | Festival$chairpersonArgs<ExtArgs>
    theme?: boolean | Festival$themeArgs<ExtArgs>
    sponsorPlans?: boolean | Festival$sponsorPlansArgs<ExtArgs>
    festivalHighlights?: boolean | Festival$festivalHighlightsArgs<ExtArgs>
    _count?: boolean | FestivalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festival"]>

  export type FestivalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universityId?: boolean
    year?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festival"]>

  export type FestivalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universityId?: boolean
    year?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festival"]>

  export type FestivalSelectScalar = {
    id?: boolean
    universityId?: boolean
    year?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FestivalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "universityId" | "year" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["festival"]>
  export type FestivalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    chairperson?: boolean | Festival$chairpersonArgs<ExtArgs>
    theme?: boolean | Festival$themeArgs<ExtArgs>
    sponsorPlans?: boolean | Festival$sponsorPlansArgs<ExtArgs>
    festivalHighlights?: boolean | Festival$festivalHighlightsArgs<ExtArgs>
    _count?: boolean | FestivalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FestivalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }
  export type FestivalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }

  export type $FestivalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Festival"
    objects: {
      university: Prisma.$UniversityPayload<ExtArgs>
      chairperson: Prisma.$ChairpersonPayload<ExtArgs> | null
      theme: Prisma.$ThemePayload<ExtArgs> | null
      sponsorPlans: Prisma.$SponsorPlanPayload<ExtArgs>[]
      festivalHighlights: Prisma.$FestivalHighlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      universityId: string
      year: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["festival"]>
    composites: {}
  }

  type FestivalGetPayload<S extends boolean | null | undefined | FestivalDefaultArgs> = $Result.GetResult<Prisma.$FestivalPayload, S>

  type FestivalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FestivalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FestivalCountAggregateInputType | true
    }

  export interface FestivalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Festival'], meta: { name: 'Festival' } }
    /**
     * Find zero or one Festival that matches the filter.
     * @param {FestivalFindUniqueArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FestivalFindUniqueArgs>(args: SelectSubset<T, FestivalFindUniqueArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Festival that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FestivalFindUniqueOrThrowArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FestivalFindUniqueOrThrowArgs>(args: SelectSubset<T, FestivalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Festival that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalFindFirstArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FestivalFindFirstArgs>(args?: SelectSubset<T, FestivalFindFirstArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Festival that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalFindFirstOrThrowArgs} args - Arguments to find a Festival
     * @example
     * // Get one Festival
     * const festival = await prisma.festival.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FestivalFindFirstOrThrowArgs>(args?: SelectSubset<T, FestivalFindFirstOrThrowArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Festivals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Festivals
     * const festivals = await prisma.festival.findMany()
     * 
     * // Get first 10 Festivals
     * const festivals = await prisma.festival.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const festivalWithIdOnly = await prisma.festival.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FestivalFindManyArgs>(args?: SelectSubset<T, FestivalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Festival.
     * @param {FestivalCreateArgs} args - Arguments to create a Festival.
     * @example
     * // Create one Festival
     * const Festival = await prisma.festival.create({
     *   data: {
     *     // ... data to create a Festival
     *   }
     * })
     * 
     */
    create<T extends FestivalCreateArgs>(args: SelectSubset<T, FestivalCreateArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Festivals.
     * @param {FestivalCreateManyArgs} args - Arguments to create many Festivals.
     * @example
     * // Create many Festivals
     * const festival = await prisma.festival.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FestivalCreateManyArgs>(args?: SelectSubset<T, FestivalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Festivals and returns the data saved in the database.
     * @param {FestivalCreateManyAndReturnArgs} args - Arguments to create many Festivals.
     * @example
     * // Create many Festivals
     * const festival = await prisma.festival.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Festivals and only return the `id`
     * const festivalWithIdOnly = await prisma.festival.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FestivalCreateManyAndReturnArgs>(args?: SelectSubset<T, FestivalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Festival.
     * @param {FestivalDeleteArgs} args - Arguments to delete one Festival.
     * @example
     * // Delete one Festival
     * const Festival = await prisma.festival.delete({
     *   where: {
     *     // ... filter to delete one Festival
     *   }
     * })
     * 
     */
    delete<T extends FestivalDeleteArgs>(args: SelectSubset<T, FestivalDeleteArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Festival.
     * @param {FestivalUpdateArgs} args - Arguments to update one Festival.
     * @example
     * // Update one Festival
     * const festival = await prisma.festival.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FestivalUpdateArgs>(args: SelectSubset<T, FestivalUpdateArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Festivals.
     * @param {FestivalDeleteManyArgs} args - Arguments to filter Festivals to delete.
     * @example
     * // Delete a few Festivals
     * const { count } = await prisma.festival.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FestivalDeleteManyArgs>(args?: SelectSubset<T, FestivalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Festivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Festivals
     * const festival = await prisma.festival.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FestivalUpdateManyArgs>(args: SelectSubset<T, FestivalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Festivals and returns the data updated in the database.
     * @param {FestivalUpdateManyAndReturnArgs} args - Arguments to update many Festivals.
     * @example
     * // Update many Festivals
     * const festival = await prisma.festival.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Festivals and only return the `id`
     * const festivalWithIdOnly = await prisma.festival.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FestivalUpdateManyAndReturnArgs>(args: SelectSubset<T, FestivalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Festival.
     * @param {FestivalUpsertArgs} args - Arguments to update or create a Festival.
     * @example
     * // Update or create a Festival
     * const festival = await prisma.festival.upsert({
     *   create: {
     *     // ... data to create a Festival
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Festival we want to update
     *   }
     * })
     */
    upsert<T extends FestivalUpsertArgs>(args: SelectSubset<T, FestivalUpsertArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Festivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalCountArgs} args - Arguments to filter Festivals to count.
     * @example
     * // Count the number of Festivals
     * const count = await prisma.festival.count({
     *   where: {
     *     // ... the filter for the Festivals we want to count
     *   }
     * })
    **/
    count<T extends FestivalCountArgs>(
      args?: Subset<T, FestivalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FestivalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Festival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FestivalAggregateArgs>(args: Subset<T, FestivalAggregateArgs>): Prisma.PrismaPromise<GetFestivalAggregateType<T>>

    /**
     * Group by Festival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FestivalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FestivalGroupByArgs['orderBy'] }
        : { orderBy?: FestivalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FestivalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFestivalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Festival model
   */
  readonly fields: FestivalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Festival.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FestivalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    university<T extends UniversityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversityDefaultArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chairperson<T extends Festival$chairpersonArgs<ExtArgs> = {}>(args?: Subset<T, Festival$chairpersonArgs<ExtArgs>>): Prisma__ChairpersonClient<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    theme<T extends Festival$themeArgs<ExtArgs> = {}>(args?: Subset<T, Festival$themeArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sponsorPlans<T extends Festival$sponsorPlansArgs<ExtArgs> = {}>(args?: Subset<T, Festival$sponsorPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    festivalHighlights<T extends Festival$festivalHighlightsArgs<ExtArgs> = {}>(args?: Subset<T, Festival$festivalHighlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Festival model
   */
  interface FestivalFieldRefs {
    readonly id: FieldRef<"Festival", 'String'>
    readonly universityId: FieldRef<"Festival", 'String'>
    readonly year: FieldRef<"Festival", 'Int'>
    readonly status: FieldRef<"Festival", 'String'>
    readonly createdAt: FieldRef<"Festival", 'DateTime'>
    readonly updatedAt: FieldRef<"Festival", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Festival findUnique
   */
  export type FestivalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival findUniqueOrThrow
   */
  export type FestivalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival findFirst
   */
  export type FestivalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Festivals.
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Festivals.
     */
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * Festival findFirstOrThrow
   */
  export type FestivalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festival to fetch.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Festivals.
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Festivals.
     */
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * Festival findMany
   */
  export type FestivalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter, which Festivals to fetch.
     */
    where?: FestivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Festivals to fetch.
     */
    orderBy?: FestivalOrderByWithRelationInput | FestivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Festivals.
     */
    cursor?: FestivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Festivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Festivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Festivals.
     */
    distinct?: FestivalScalarFieldEnum | FestivalScalarFieldEnum[]
  }

  /**
   * Festival create
   */
  export type FestivalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * The data needed to create a Festival.
     */
    data: XOR<FestivalCreateInput, FestivalUncheckedCreateInput>
  }

  /**
   * Festival createMany
   */
  export type FestivalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Festivals.
     */
    data: FestivalCreateManyInput | FestivalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Festival createManyAndReturn
   */
  export type FestivalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * The data used to create many Festivals.
     */
    data: FestivalCreateManyInput | FestivalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Festival update
   */
  export type FestivalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * The data needed to update a Festival.
     */
    data: XOR<FestivalUpdateInput, FestivalUncheckedUpdateInput>
    /**
     * Choose, which Festival to update.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival updateMany
   */
  export type FestivalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Festivals.
     */
    data: XOR<FestivalUpdateManyMutationInput, FestivalUncheckedUpdateManyInput>
    /**
     * Filter which Festivals to update
     */
    where?: FestivalWhereInput
    /**
     * Limit how many Festivals to update.
     */
    limit?: number
  }

  /**
   * Festival updateManyAndReturn
   */
  export type FestivalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * The data used to update Festivals.
     */
    data: XOR<FestivalUpdateManyMutationInput, FestivalUncheckedUpdateManyInput>
    /**
     * Filter which Festivals to update
     */
    where?: FestivalWhereInput
    /**
     * Limit how many Festivals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Festival upsert
   */
  export type FestivalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * The filter to search for the Festival to update in case it exists.
     */
    where: FestivalWhereUniqueInput
    /**
     * In case the Festival found by the `where` argument doesn't exist, create a new Festival with this data.
     */
    create: XOR<FestivalCreateInput, FestivalUncheckedCreateInput>
    /**
     * In case the Festival was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FestivalUpdateInput, FestivalUncheckedUpdateInput>
  }

  /**
   * Festival delete
   */
  export type FestivalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
    /**
     * Filter which Festival to delete.
     */
    where: FestivalWhereUniqueInput
  }

  /**
   * Festival deleteMany
   */
  export type FestivalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Festivals to delete
     */
    where?: FestivalWhereInput
    /**
     * Limit how many Festivals to delete.
     */
    limit?: number
  }

  /**
   * Festival.chairperson
   */
  export type Festival$chairpersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    where?: ChairpersonWhereInput
  }

  /**
   * Festival.theme
   */
  export type Festival$themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    where?: ThemeWhereInput
  }

  /**
   * Festival.sponsorPlans
   */
  export type Festival$sponsorPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
    where?: SponsorPlanWhereInput
    orderBy?: SponsorPlanOrderByWithRelationInput | SponsorPlanOrderByWithRelationInput[]
    cursor?: SponsorPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SponsorPlanScalarFieldEnum | SponsorPlanScalarFieldEnum[]
  }

  /**
   * Festival.festivalHighlights
   */
  export type Festival$festivalHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
    where?: FestivalHighlightWhereInput
    orderBy?: FestivalHighlightOrderByWithRelationInput | FestivalHighlightOrderByWithRelationInput[]
    cursor?: FestivalHighlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FestivalHighlightScalarFieldEnum | FestivalHighlightScalarFieldEnum[]
  }

  /**
   * Festival without action
   */
  export type FestivalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Festival
     */
    select?: FestivalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Festival
     */
    omit?: FestivalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalInclude<ExtArgs> | null
  }


  /**
   * Model FestivalHighlight
   */

  export type AggregateFestivalHighlight = {
    _count: FestivalHighlightCountAggregateOutputType | null
    _avg: FestivalHighlightAvgAggregateOutputType | null
    _sum: FestivalHighlightSumAggregateOutputType | null
    _min: FestivalHighlightMinAggregateOutputType | null
    _max: FestivalHighlightMaxAggregateOutputType | null
  }

  export type FestivalHighlightAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type FestivalHighlightSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type FestivalHighlightMinAggregateOutputType = {
    id: string | null
    festivalId: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FestivalHighlightMaxAggregateOutputType = {
    id: string | null
    festivalId: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FestivalHighlightCountAggregateOutputType = {
    id: number
    festivalId: number
    title: number
    description: number
    imageUrl: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FestivalHighlightAvgAggregateInputType = {
    displayOrder?: true
  }

  export type FestivalHighlightSumAggregateInputType = {
    displayOrder?: true
  }

  export type FestivalHighlightMinAggregateInputType = {
    id?: true
    festivalId?: true
    title?: true
    description?: true
    imageUrl?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FestivalHighlightMaxAggregateInputType = {
    id?: true
    festivalId?: true
    title?: true
    description?: true
    imageUrl?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FestivalHighlightCountAggregateInputType = {
    id?: true
    festivalId?: true
    title?: true
    description?: true
    imageUrl?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FestivalHighlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FestivalHighlight to aggregate.
     */
    where?: FestivalHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FestivalHighlights to fetch.
     */
    orderBy?: FestivalHighlightOrderByWithRelationInput | FestivalHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FestivalHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FestivalHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FestivalHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FestivalHighlights
    **/
    _count?: true | FestivalHighlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FestivalHighlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FestivalHighlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FestivalHighlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FestivalHighlightMaxAggregateInputType
  }

  export type GetFestivalHighlightAggregateType<T extends FestivalHighlightAggregateArgs> = {
        [P in keyof T & keyof AggregateFestivalHighlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFestivalHighlight[P]>
      : GetScalarType<T[P], AggregateFestivalHighlight[P]>
  }




  export type FestivalHighlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FestivalHighlightWhereInput
    orderBy?: FestivalHighlightOrderByWithAggregationInput | FestivalHighlightOrderByWithAggregationInput[]
    by: FestivalHighlightScalarFieldEnum[] | FestivalHighlightScalarFieldEnum
    having?: FestivalHighlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FestivalHighlightCountAggregateInputType | true
    _avg?: FestivalHighlightAvgAggregateInputType
    _sum?: FestivalHighlightSumAggregateInputType
    _min?: FestivalHighlightMinAggregateInputType
    _max?: FestivalHighlightMaxAggregateInputType
  }

  export type FestivalHighlightGroupByOutputType = {
    id: string
    festivalId: string
    title: string
    description: string | null
    imageUrl: string | null
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    _count: FestivalHighlightCountAggregateOutputType | null
    _avg: FestivalHighlightAvgAggregateOutputType | null
    _sum: FestivalHighlightSumAggregateOutputType | null
    _min: FestivalHighlightMinAggregateOutputType | null
    _max: FestivalHighlightMaxAggregateOutputType | null
  }

  type GetFestivalHighlightGroupByPayload<T extends FestivalHighlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FestivalHighlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FestivalHighlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FestivalHighlightGroupByOutputType[P]>
            : GetScalarType<T[P], FestivalHighlightGroupByOutputType[P]>
        }
      >
    >


  export type FestivalHighlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festivalHighlight"]>

  export type FestivalHighlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festivalHighlight"]>

  export type FestivalHighlightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["festivalHighlight"]>

  export type FestivalHighlightSelectScalar = {
    id?: boolean
    festivalId?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FestivalHighlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "festivalId" | "title" | "description" | "imageUrl" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["festivalHighlight"]>
  export type FestivalHighlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }
  export type FestivalHighlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }
  export type FestivalHighlightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }

  export type $FestivalHighlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FestivalHighlight"
    objects: {
      festival: Prisma.$FestivalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      festivalId: string
      title: string
      description: string | null
      imageUrl: string | null
      displayOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["festivalHighlight"]>
    composites: {}
  }

  type FestivalHighlightGetPayload<S extends boolean | null | undefined | FestivalHighlightDefaultArgs> = $Result.GetResult<Prisma.$FestivalHighlightPayload, S>

  type FestivalHighlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FestivalHighlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FestivalHighlightCountAggregateInputType | true
    }

  export interface FestivalHighlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FestivalHighlight'], meta: { name: 'FestivalHighlight' } }
    /**
     * Find zero or one FestivalHighlight that matches the filter.
     * @param {FestivalHighlightFindUniqueArgs} args - Arguments to find a FestivalHighlight
     * @example
     * // Get one FestivalHighlight
     * const festivalHighlight = await prisma.festivalHighlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FestivalHighlightFindUniqueArgs>(args: SelectSubset<T, FestivalHighlightFindUniqueArgs<ExtArgs>>): Prisma__FestivalHighlightClient<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FestivalHighlight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FestivalHighlightFindUniqueOrThrowArgs} args - Arguments to find a FestivalHighlight
     * @example
     * // Get one FestivalHighlight
     * const festivalHighlight = await prisma.festivalHighlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FestivalHighlightFindUniqueOrThrowArgs>(args: SelectSubset<T, FestivalHighlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FestivalHighlightClient<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FestivalHighlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalHighlightFindFirstArgs} args - Arguments to find a FestivalHighlight
     * @example
     * // Get one FestivalHighlight
     * const festivalHighlight = await prisma.festivalHighlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FestivalHighlightFindFirstArgs>(args?: SelectSubset<T, FestivalHighlightFindFirstArgs<ExtArgs>>): Prisma__FestivalHighlightClient<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FestivalHighlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalHighlightFindFirstOrThrowArgs} args - Arguments to find a FestivalHighlight
     * @example
     * // Get one FestivalHighlight
     * const festivalHighlight = await prisma.festivalHighlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FestivalHighlightFindFirstOrThrowArgs>(args?: SelectSubset<T, FestivalHighlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__FestivalHighlightClient<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FestivalHighlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalHighlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FestivalHighlights
     * const festivalHighlights = await prisma.festivalHighlight.findMany()
     * 
     * // Get first 10 FestivalHighlights
     * const festivalHighlights = await prisma.festivalHighlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const festivalHighlightWithIdOnly = await prisma.festivalHighlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FestivalHighlightFindManyArgs>(args?: SelectSubset<T, FestivalHighlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FestivalHighlight.
     * @param {FestivalHighlightCreateArgs} args - Arguments to create a FestivalHighlight.
     * @example
     * // Create one FestivalHighlight
     * const FestivalHighlight = await prisma.festivalHighlight.create({
     *   data: {
     *     // ... data to create a FestivalHighlight
     *   }
     * })
     * 
     */
    create<T extends FestivalHighlightCreateArgs>(args: SelectSubset<T, FestivalHighlightCreateArgs<ExtArgs>>): Prisma__FestivalHighlightClient<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FestivalHighlights.
     * @param {FestivalHighlightCreateManyArgs} args - Arguments to create many FestivalHighlights.
     * @example
     * // Create many FestivalHighlights
     * const festivalHighlight = await prisma.festivalHighlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FestivalHighlightCreateManyArgs>(args?: SelectSubset<T, FestivalHighlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FestivalHighlights and returns the data saved in the database.
     * @param {FestivalHighlightCreateManyAndReturnArgs} args - Arguments to create many FestivalHighlights.
     * @example
     * // Create many FestivalHighlights
     * const festivalHighlight = await prisma.festivalHighlight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FestivalHighlights and only return the `id`
     * const festivalHighlightWithIdOnly = await prisma.festivalHighlight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FestivalHighlightCreateManyAndReturnArgs>(args?: SelectSubset<T, FestivalHighlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FestivalHighlight.
     * @param {FestivalHighlightDeleteArgs} args - Arguments to delete one FestivalHighlight.
     * @example
     * // Delete one FestivalHighlight
     * const FestivalHighlight = await prisma.festivalHighlight.delete({
     *   where: {
     *     // ... filter to delete one FestivalHighlight
     *   }
     * })
     * 
     */
    delete<T extends FestivalHighlightDeleteArgs>(args: SelectSubset<T, FestivalHighlightDeleteArgs<ExtArgs>>): Prisma__FestivalHighlightClient<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FestivalHighlight.
     * @param {FestivalHighlightUpdateArgs} args - Arguments to update one FestivalHighlight.
     * @example
     * // Update one FestivalHighlight
     * const festivalHighlight = await prisma.festivalHighlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FestivalHighlightUpdateArgs>(args: SelectSubset<T, FestivalHighlightUpdateArgs<ExtArgs>>): Prisma__FestivalHighlightClient<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FestivalHighlights.
     * @param {FestivalHighlightDeleteManyArgs} args - Arguments to filter FestivalHighlights to delete.
     * @example
     * // Delete a few FestivalHighlights
     * const { count } = await prisma.festivalHighlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FestivalHighlightDeleteManyArgs>(args?: SelectSubset<T, FestivalHighlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FestivalHighlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalHighlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FestivalHighlights
     * const festivalHighlight = await prisma.festivalHighlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FestivalHighlightUpdateManyArgs>(args: SelectSubset<T, FestivalHighlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FestivalHighlights and returns the data updated in the database.
     * @param {FestivalHighlightUpdateManyAndReturnArgs} args - Arguments to update many FestivalHighlights.
     * @example
     * // Update many FestivalHighlights
     * const festivalHighlight = await prisma.festivalHighlight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FestivalHighlights and only return the `id`
     * const festivalHighlightWithIdOnly = await prisma.festivalHighlight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FestivalHighlightUpdateManyAndReturnArgs>(args: SelectSubset<T, FestivalHighlightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FestivalHighlight.
     * @param {FestivalHighlightUpsertArgs} args - Arguments to update or create a FestivalHighlight.
     * @example
     * // Update or create a FestivalHighlight
     * const festivalHighlight = await prisma.festivalHighlight.upsert({
     *   create: {
     *     // ... data to create a FestivalHighlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FestivalHighlight we want to update
     *   }
     * })
     */
    upsert<T extends FestivalHighlightUpsertArgs>(args: SelectSubset<T, FestivalHighlightUpsertArgs<ExtArgs>>): Prisma__FestivalHighlightClient<$Result.GetResult<Prisma.$FestivalHighlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FestivalHighlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalHighlightCountArgs} args - Arguments to filter FestivalHighlights to count.
     * @example
     * // Count the number of FestivalHighlights
     * const count = await prisma.festivalHighlight.count({
     *   where: {
     *     // ... the filter for the FestivalHighlights we want to count
     *   }
     * })
    **/
    count<T extends FestivalHighlightCountArgs>(
      args?: Subset<T, FestivalHighlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FestivalHighlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FestivalHighlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalHighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FestivalHighlightAggregateArgs>(args: Subset<T, FestivalHighlightAggregateArgs>): Prisma.PrismaPromise<GetFestivalHighlightAggregateType<T>>

    /**
     * Group by FestivalHighlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FestivalHighlightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FestivalHighlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FestivalHighlightGroupByArgs['orderBy'] }
        : { orderBy?: FestivalHighlightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FestivalHighlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFestivalHighlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FestivalHighlight model
   */
  readonly fields: FestivalHighlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FestivalHighlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FestivalHighlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festival<T extends FestivalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalDefaultArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FestivalHighlight model
   */
  interface FestivalHighlightFieldRefs {
    readonly id: FieldRef<"FestivalHighlight", 'String'>
    readonly festivalId: FieldRef<"FestivalHighlight", 'String'>
    readonly title: FieldRef<"FestivalHighlight", 'String'>
    readonly description: FieldRef<"FestivalHighlight", 'String'>
    readonly imageUrl: FieldRef<"FestivalHighlight", 'String'>
    readonly displayOrder: FieldRef<"FestivalHighlight", 'Int'>
    readonly createdAt: FieldRef<"FestivalHighlight", 'DateTime'>
    readonly updatedAt: FieldRef<"FestivalHighlight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FestivalHighlight findUnique
   */
  export type FestivalHighlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
    /**
     * Filter, which FestivalHighlight to fetch.
     */
    where: FestivalHighlightWhereUniqueInput
  }

  /**
   * FestivalHighlight findUniqueOrThrow
   */
  export type FestivalHighlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
    /**
     * Filter, which FestivalHighlight to fetch.
     */
    where: FestivalHighlightWhereUniqueInput
  }

  /**
   * FestivalHighlight findFirst
   */
  export type FestivalHighlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
    /**
     * Filter, which FestivalHighlight to fetch.
     */
    where?: FestivalHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FestivalHighlights to fetch.
     */
    orderBy?: FestivalHighlightOrderByWithRelationInput | FestivalHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FestivalHighlights.
     */
    cursor?: FestivalHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FestivalHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FestivalHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FestivalHighlights.
     */
    distinct?: FestivalHighlightScalarFieldEnum | FestivalHighlightScalarFieldEnum[]
  }

  /**
   * FestivalHighlight findFirstOrThrow
   */
  export type FestivalHighlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
    /**
     * Filter, which FestivalHighlight to fetch.
     */
    where?: FestivalHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FestivalHighlights to fetch.
     */
    orderBy?: FestivalHighlightOrderByWithRelationInput | FestivalHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FestivalHighlights.
     */
    cursor?: FestivalHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FestivalHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FestivalHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FestivalHighlights.
     */
    distinct?: FestivalHighlightScalarFieldEnum | FestivalHighlightScalarFieldEnum[]
  }

  /**
   * FestivalHighlight findMany
   */
  export type FestivalHighlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
    /**
     * Filter, which FestivalHighlights to fetch.
     */
    where?: FestivalHighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FestivalHighlights to fetch.
     */
    orderBy?: FestivalHighlightOrderByWithRelationInput | FestivalHighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FestivalHighlights.
     */
    cursor?: FestivalHighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FestivalHighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FestivalHighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FestivalHighlights.
     */
    distinct?: FestivalHighlightScalarFieldEnum | FestivalHighlightScalarFieldEnum[]
  }

  /**
   * FestivalHighlight create
   */
  export type FestivalHighlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
    /**
     * The data needed to create a FestivalHighlight.
     */
    data: XOR<FestivalHighlightCreateInput, FestivalHighlightUncheckedCreateInput>
  }

  /**
   * FestivalHighlight createMany
   */
  export type FestivalHighlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FestivalHighlights.
     */
    data: FestivalHighlightCreateManyInput | FestivalHighlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FestivalHighlight createManyAndReturn
   */
  export type FestivalHighlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * The data used to create many FestivalHighlights.
     */
    data: FestivalHighlightCreateManyInput | FestivalHighlightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FestivalHighlight update
   */
  export type FestivalHighlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
    /**
     * The data needed to update a FestivalHighlight.
     */
    data: XOR<FestivalHighlightUpdateInput, FestivalHighlightUncheckedUpdateInput>
    /**
     * Choose, which FestivalHighlight to update.
     */
    where: FestivalHighlightWhereUniqueInput
  }

  /**
   * FestivalHighlight updateMany
   */
  export type FestivalHighlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FestivalHighlights.
     */
    data: XOR<FestivalHighlightUpdateManyMutationInput, FestivalHighlightUncheckedUpdateManyInput>
    /**
     * Filter which FestivalHighlights to update
     */
    where?: FestivalHighlightWhereInput
    /**
     * Limit how many FestivalHighlights to update.
     */
    limit?: number
  }

  /**
   * FestivalHighlight updateManyAndReturn
   */
  export type FestivalHighlightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * The data used to update FestivalHighlights.
     */
    data: XOR<FestivalHighlightUpdateManyMutationInput, FestivalHighlightUncheckedUpdateManyInput>
    /**
     * Filter which FestivalHighlights to update
     */
    where?: FestivalHighlightWhereInput
    /**
     * Limit how many FestivalHighlights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FestivalHighlight upsert
   */
  export type FestivalHighlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
    /**
     * The filter to search for the FestivalHighlight to update in case it exists.
     */
    where: FestivalHighlightWhereUniqueInput
    /**
     * In case the FestivalHighlight found by the `where` argument doesn't exist, create a new FestivalHighlight with this data.
     */
    create: XOR<FestivalHighlightCreateInput, FestivalHighlightUncheckedCreateInput>
    /**
     * In case the FestivalHighlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FestivalHighlightUpdateInput, FestivalHighlightUncheckedUpdateInput>
  }

  /**
   * FestivalHighlight delete
   */
  export type FestivalHighlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
    /**
     * Filter which FestivalHighlight to delete.
     */
    where: FestivalHighlightWhereUniqueInput
  }

  /**
   * FestivalHighlight deleteMany
   */
  export type FestivalHighlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FestivalHighlights to delete
     */
    where?: FestivalHighlightWhereInput
    /**
     * Limit how many FestivalHighlights to delete.
     */
    limit?: number
  }

  /**
   * FestivalHighlight without action
   */
  export type FestivalHighlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FestivalHighlight
     */
    select?: FestivalHighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FestivalHighlight
     */
    omit?: FestivalHighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FestivalHighlightInclude<ExtArgs> | null
  }


  /**
   * Model Chairperson
   */

  export type AggregateChairperson = {
    _count: ChairpersonCountAggregateOutputType | null
    _avg: ChairpersonAvgAggregateOutputType | null
    _sum: ChairpersonSumAggregateOutputType | null
    _min: ChairpersonMinAggregateOutputType | null
    _max: ChairpersonMaxAggregateOutputType | null
  }

  export type ChairpersonAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type ChairpersonSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type ChairpersonMinAggregateOutputType = {
    id: string | null
    festivalId: string | null
    userId: string | null
    predecessorId: string | null
    handoverDate: Date | null
    handoverComment: string | null
    message: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChairpersonMaxAggregateOutputType = {
    id: string | null
    festivalId: string | null
    userId: string | null
    predecessorId: string | null
    handoverDate: Date | null
    handoverComment: string | null
    message: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChairpersonCountAggregateOutputType = {
    id: number
    festivalId: number
    userId: number
    predecessorId: number
    handoverDate: number
    handoverComment: number
    message: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChairpersonAvgAggregateInputType = {
    displayOrder?: true
  }

  export type ChairpersonSumAggregateInputType = {
    displayOrder?: true
  }

  export type ChairpersonMinAggregateInputType = {
    id?: true
    festivalId?: true
    userId?: true
    predecessorId?: true
    handoverDate?: true
    handoverComment?: true
    message?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChairpersonMaxAggregateInputType = {
    id?: true
    festivalId?: true
    userId?: true
    predecessorId?: true
    handoverDate?: true
    handoverComment?: true
    message?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChairpersonCountAggregateInputType = {
    id?: true
    festivalId?: true
    userId?: true
    predecessorId?: true
    handoverDate?: true
    handoverComment?: true
    message?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChairpersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chairperson to aggregate.
     */
    where?: ChairpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairpeople to fetch.
     */
    orderBy?: ChairpersonOrderByWithRelationInput | ChairpersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChairpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairpeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chairpeople
    **/
    _count?: true | ChairpersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChairpersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChairpersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChairpersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChairpersonMaxAggregateInputType
  }

  export type GetChairpersonAggregateType<T extends ChairpersonAggregateArgs> = {
        [P in keyof T & keyof AggregateChairperson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChairperson[P]>
      : GetScalarType<T[P], AggregateChairperson[P]>
  }




  export type ChairpersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChairpersonWhereInput
    orderBy?: ChairpersonOrderByWithAggregationInput | ChairpersonOrderByWithAggregationInput[]
    by: ChairpersonScalarFieldEnum[] | ChairpersonScalarFieldEnum
    having?: ChairpersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChairpersonCountAggregateInputType | true
    _avg?: ChairpersonAvgAggregateInputType
    _sum?: ChairpersonSumAggregateInputType
    _min?: ChairpersonMinAggregateInputType
    _max?: ChairpersonMaxAggregateInputType
  }

  export type ChairpersonGroupByOutputType = {
    id: string
    festivalId: string
    userId: string
    predecessorId: string | null
    handoverDate: Date | null
    handoverComment: string | null
    message: string | null
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ChairpersonCountAggregateOutputType | null
    _avg: ChairpersonAvgAggregateOutputType | null
    _sum: ChairpersonSumAggregateOutputType | null
    _min: ChairpersonMinAggregateOutputType | null
    _max: ChairpersonMaxAggregateOutputType | null
  }

  type GetChairpersonGroupByPayload<T extends ChairpersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChairpersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChairpersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChairpersonGroupByOutputType[P]>
            : GetScalarType<T[P], ChairpersonGroupByOutputType[P]>
        }
      >
    >


  export type ChairpersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    userId?: boolean
    predecessorId?: boolean
    handoverDate?: boolean
    handoverComment?: boolean
    message?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    predecessor?: boolean | Chairperson$predecessorArgs<ExtArgs>
    successors?: boolean | Chairperson$successorsArgs<ExtArgs>
    _count?: boolean | ChairpersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chairperson"]>

  export type ChairpersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    userId?: boolean
    predecessorId?: boolean
    handoverDate?: boolean
    handoverComment?: boolean
    message?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    predecessor?: boolean | Chairperson$predecessorArgs<ExtArgs>
  }, ExtArgs["result"]["chairperson"]>

  export type ChairpersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    userId?: boolean
    predecessorId?: boolean
    handoverDate?: boolean
    handoverComment?: boolean
    message?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    predecessor?: boolean | Chairperson$predecessorArgs<ExtArgs>
  }, ExtArgs["result"]["chairperson"]>

  export type ChairpersonSelectScalar = {
    id?: boolean
    festivalId?: boolean
    userId?: boolean
    predecessorId?: boolean
    handoverDate?: boolean
    handoverComment?: boolean
    message?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChairpersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "festivalId" | "userId" | "predecessorId" | "handoverDate" | "handoverComment" | "message" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["chairperson"]>
  export type ChairpersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    predecessor?: boolean | Chairperson$predecessorArgs<ExtArgs>
    successors?: boolean | Chairperson$successorsArgs<ExtArgs>
    _count?: boolean | ChairpersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChairpersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    predecessor?: boolean | Chairperson$predecessorArgs<ExtArgs>
  }
  export type ChairpersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    predecessor?: boolean | Chairperson$predecessorArgs<ExtArgs>
  }

  export type $ChairpersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chairperson"
    objects: {
      festival: Prisma.$FestivalPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      predecessor: Prisma.$ChairpersonPayload<ExtArgs> | null
      successors: Prisma.$ChairpersonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      festivalId: string
      userId: string
      predecessorId: string | null
      handoverDate: Date | null
      handoverComment: string | null
      message: string | null
      displayOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chairperson"]>
    composites: {}
  }

  type ChairpersonGetPayload<S extends boolean | null | undefined | ChairpersonDefaultArgs> = $Result.GetResult<Prisma.$ChairpersonPayload, S>

  type ChairpersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChairpersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChairpersonCountAggregateInputType | true
    }

  export interface ChairpersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chairperson'], meta: { name: 'Chairperson' } }
    /**
     * Find zero or one Chairperson that matches the filter.
     * @param {ChairpersonFindUniqueArgs} args - Arguments to find a Chairperson
     * @example
     * // Get one Chairperson
     * const chairperson = await prisma.chairperson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChairpersonFindUniqueArgs>(args: SelectSubset<T, ChairpersonFindUniqueArgs<ExtArgs>>): Prisma__ChairpersonClient<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chairperson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChairpersonFindUniqueOrThrowArgs} args - Arguments to find a Chairperson
     * @example
     * // Get one Chairperson
     * const chairperson = await prisma.chairperson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChairpersonFindUniqueOrThrowArgs>(args: SelectSubset<T, ChairpersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChairpersonClient<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chairperson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairpersonFindFirstArgs} args - Arguments to find a Chairperson
     * @example
     * // Get one Chairperson
     * const chairperson = await prisma.chairperson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChairpersonFindFirstArgs>(args?: SelectSubset<T, ChairpersonFindFirstArgs<ExtArgs>>): Prisma__ChairpersonClient<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chairperson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairpersonFindFirstOrThrowArgs} args - Arguments to find a Chairperson
     * @example
     * // Get one Chairperson
     * const chairperson = await prisma.chairperson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChairpersonFindFirstOrThrowArgs>(args?: SelectSubset<T, ChairpersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChairpersonClient<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chairpeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairpersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chairpeople
     * const chairpeople = await prisma.chairperson.findMany()
     * 
     * // Get first 10 Chairpeople
     * const chairpeople = await prisma.chairperson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chairpersonWithIdOnly = await prisma.chairperson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChairpersonFindManyArgs>(args?: SelectSubset<T, ChairpersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chairperson.
     * @param {ChairpersonCreateArgs} args - Arguments to create a Chairperson.
     * @example
     * // Create one Chairperson
     * const Chairperson = await prisma.chairperson.create({
     *   data: {
     *     // ... data to create a Chairperson
     *   }
     * })
     * 
     */
    create<T extends ChairpersonCreateArgs>(args: SelectSubset<T, ChairpersonCreateArgs<ExtArgs>>): Prisma__ChairpersonClient<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chairpeople.
     * @param {ChairpersonCreateManyArgs} args - Arguments to create many Chairpeople.
     * @example
     * // Create many Chairpeople
     * const chairperson = await prisma.chairperson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChairpersonCreateManyArgs>(args?: SelectSubset<T, ChairpersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chairpeople and returns the data saved in the database.
     * @param {ChairpersonCreateManyAndReturnArgs} args - Arguments to create many Chairpeople.
     * @example
     * // Create many Chairpeople
     * const chairperson = await prisma.chairperson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chairpeople and only return the `id`
     * const chairpersonWithIdOnly = await prisma.chairperson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChairpersonCreateManyAndReturnArgs>(args?: SelectSubset<T, ChairpersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chairperson.
     * @param {ChairpersonDeleteArgs} args - Arguments to delete one Chairperson.
     * @example
     * // Delete one Chairperson
     * const Chairperson = await prisma.chairperson.delete({
     *   where: {
     *     // ... filter to delete one Chairperson
     *   }
     * })
     * 
     */
    delete<T extends ChairpersonDeleteArgs>(args: SelectSubset<T, ChairpersonDeleteArgs<ExtArgs>>): Prisma__ChairpersonClient<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chairperson.
     * @param {ChairpersonUpdateArgs} args - Arguments to update one Chairperson.
     * @example
     * // Update one Chairperson
     * const chairperson = await prisma.chairperson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChairpersonUpdateArgs>(args: SelectSubset<T, ChairpersonUpdateArgs<ExtArgs>>): Prisma__ChairpersonClient<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chairpeople.
     * @param {ChairpersonDeleteManyArgs} args - Arguments to filter Chairpeople to delete.
     * @example
     * // Delete a few Chairpeople
     * const { count } = await prisma.chairperson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChairpersonDeleteManyArgs>(args?: SelectSubset<T, ChairpersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chairpeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairpersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chairpeople
     * const chairperson = await prisma.chairperson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChairpersonUpdateManyArgs>(args: SelectSubset<T, ChairpersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chairpeople and returns the data updated in the database.
     * @param {ChairpersonUpdateManyAndReturnArgs} args - Arguments to update many Chairpeople.
     * @example
     * // Update many Chairpeople
     * const chairperson = await prisma.chairperson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chairpeople and only return the `id`
     * const chairpersonWithIdOnly = await prisma.chairperson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChairpersonUpdateManyAndReturnArgs>(args: SelectSubset<T, ChairpersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chairperson.
     * @param {ChairpersonUpsertArgs} args - Arguments to update or create a Chairperson.
     * @example
     * // Update or create a Chairperson
     * const chairperson = await prisma.chairperson.upsert({
     *   create: {
     *     // ... data to create a Chairperson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chairperson we want to update
     *   }
     * })
     */
    upsert<T extends ChairpersonUpsertArgs>(args: SelectSubset<T, ChairpersonUpsertArgs<ExtArgs>>): Prisma__ChairpersonClient<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chairpeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairpersonCountArgs} args - Arguments to filter Chairpeople to count.
     * @example
     * // Count the number of Chairpeople
     * const count = await prisma.chairperson.count({
     *   where: {
     *     // ... the filter for the Chairpeople we want to count
     *   }
     * })
    **/
    count<T extends ChairpersonCountArgs>(
      args?: Subset<T, ChairpersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChairpersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chairperson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairpersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChairpersonAggregateArgs>(args: Subset<T, ChairpersonAggregateArgs>): Prisma.PrismaPromise<GetChairpersonAggregateType<T>>

    /**
     * Group by Chairperson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChairpersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChairpersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChairpersonGroupByArgs['orderBy'] }
        : { orderBy?: ChairpersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChairpersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChairpersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chairperson model
   */
  readonly fields: ChairpersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chairperson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChairpersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festival<T extends FestivalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalDefaultArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    predecessor<T extends Chairperson$predecessorArgs<ExtArgs> = {}>(args?: Subset<T, Chairperson$predecessorArgs<ExtArgs>>): Prisma__ChairpersonClient<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    successors<T extends Chairperson$successorsArgs<ExtArgs> = {}>(args?: Subset<T, Chairperson$successorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChairpersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chairperson model
   */
  interface ChairpersonFieldRefs {
    readonly id: FieldRef<"Chairperson", 'String'>
    readonly festivalId: FieldRef<"Chairperson", 'String'>
    readonly userId: FieldRef<"Chairperson", 'String'>
    readonly predecessorId: FieldRef<"Chairperson", 'String'>
    readonly handoverDate: FieldRef<"Chairperson", 'DateTime'>
    readonly handoverComment: FieldRef<"Chairperson", 'String'>
    readonly message: FieldRef<"Chairperson", 'String'>
    readonly displayOrder: FieldRef<"Chairperson", 'Int'>
    readonly createdAt: FieldRef<"Chairperson", 'DateTime'>
    readonly updatedAt: FieldRef<"Chairperson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chairperson findUnique
   */
  export type ChairpersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    /**
     * Filter, which Chairperson to fetch.
     */
    where: ChairpersonWhereUniqueInput
  }

  /**
   * Chairperson findUniqueOrThrow
   */
  export type ChairpersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    /**
     * Filter, which Chairperson to fetch.
     */
    where: ChairpersonWhereUniqueInput
  }

  /**
   * Chairperson findFirst
   */
  export type ChairpersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    /**
     * Filter, which Chairperson to fetch.
     */
    where?: ChairpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairpeople to fetch.
     */
    orderBy?: ChairpersonOrderByWithRelationInput | ChairpersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chairpeople.
     */
    cursor?: ChairpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairpeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chairpeople.
     */
    distinct?: ChairpersonScalarFieldEnum | ChairpersonScalarFieldEnum[]
  }

  /**
   * Chairperson findFirstOrThrow
   */
  export type ChairpersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    /**
     * Filter, which Chairperson to fetch.
     */
    where?: ChairpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairpeople to fetch.
     */
    orderBy?: ChairpersonOrderByWithRelationInput | ChairpersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chairpeople.
     */
    cursor?: ChairpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairpeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chairpeople.
     */
    distinct?: ChairpersonScalarFieldEnum | ChairpersonScalarFieldEnum[]
  }

  /**
   * Chairperson findMany
   */
  export type ChairpersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    /**
     * Filter, which Chairpeople to fetch.
     */
    where?: ChairpersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chairpeople to fetch.
     */
    orderBy?: ChairpersonOrderByWithRelationInput | ChairpersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chairpeople.
     */
    cursor?: ChairpersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chairpeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chairpeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chairpeople.
     */
    distinct?: ChairpersonScalarFieldEnum | ChairpersonScalarFieldEnum[]
  }

  /**
   * Chairperson create
   */
  export type ChairpersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Chairperson.
     */
    data: XOR<ChairpersonCreateInput, ChairpersonUncheckedCreateInput>
  }

  /**
   * Chairperson createMany
   */
  export type ChairpersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chairpeople.
     */
    data: ChairpersonCreateManyInput | ChairpersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chairperson createManyAndReturn
   */
  export type ChairpersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * The data used to create many Chairpeople.
     */
    data: ChairpersonCreateManyInput | ChairpersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chairperson update
   */
  export type ChairpersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Chairperson.
     */
    data: XOR<ChairpersonUpdateInput, ChairpersonUncheckedUpdateInput>
    /**
     * Choose, which Chairperson to update.
     */
    where: ChairpersonWhereUniqueInput
  }

  /**
   * Chairperson updateMany
   */
  export type ChairpersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chairpeople.
     */
    data: XOR<ChairpersonUpdateManyMutationInput, ChairpersonUncheckedUpdateManyInput>
    /**
     * Filter which Chairpeople to update
     */
    where?: ChairpersonWhereInput
    /**
     * Limit how many Chairpeople to update.
     */
    limit?: number
  }

  /**
   * Chairperson updateManyAndReturn
   */
  export type ChairpersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * The data used to update Chairpeople.
     */
    data: XOR<ChairpersonUpdateManyMutationInput, ChairpersonUncheckedUpdateManyInput>
    /**
     * Filter which Chairpeople to update
     */
    where?: ChairpersonWhereInput
    /**
     * Limit how many Chairpeople to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chairperson upsert
   */
  export type ChairpersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Chairperson to update in case it exists.
     */
    where: ChairpersonWhereUniqueInput
    /**
     * In case the Chairperson found by the `where` argument doesn't exist, create a new Chairperson with this data.
     */
    create: XOR<ChairpersonCreateInput, ChairpersonUncheckedCreateInput>
    /**
     * In case the Chairperson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChairpersonUpdateInput, ChairpersonUncheckedUpdateInput>
  }

  /**
   * Chairperson delete
   */
  export type ChairpersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    /**
     * Filter which Chairperson to delete.
     */
    where: ChairpersonWhereUniqueInput
  }

  /**
   * Chairperson deleteMany
   */
  export type ChairpersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chairpeople to delete
     */
    where?: ChairpersonWhereInput
    /**
     * Limit how many Chairpeople to delete.
     */
    limit?: number
  }

  /**
   * Chairperson.predecessor
   */
  export type Chairperson$predecessorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    where?: ChairpersonWhereInput
  }

  /**
   * Chairperson.successors
   */
  export type Chairperson$successorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
    where?: ChairpersonWhereInput
    orderBy?: ChairpersonOrderByWithRelationInput | ChairpersonOrderByWithRelationInput[]
    cursor?: ChairpersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChairpersonScalarFieldEnum | ChairpersonScalarFieldEnum[]
  }

  /**
   * Chairperson without action
   */
  export type ChairpersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chairperson
     */
    select?: ChairpersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chairperson
     */
    omit?: ChairpersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChairpersonInclude<ExtArgs> | null
  }


  /**
   * Model Theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeMinAggregateOutputType = {
    id: string | null
    festivalId: string | null
    themeName: string | null
    eventDate: Date | null
    eventEndDate: Date | null
    venue: string | null
    schedule: string | null
    details: string | null
    accessInfo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: string | null
    festivalId: string | null
    themeName: string | null
    eventDate: Date | null
    eventEndDate: Date | null
    venue: string | null
    schedule: string | null
    details: string | null
    accessInfo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    festivalId: number
    themeName: number
    eventDate: number
    eventEndDate: number
    venue: number
    schedule: number
    details: number
    accessInfo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ThemeMinAggregateInputType = {
    id?: true
    festivalId?: true
    themeName?: true
    eventDate?: true
    eventEndDate?: true
    venue?: true
    schedule?: true
    details?: true
    accessInfo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    festivalId?: true
    themeName?: true
    eventDate?: true
    eventEndDate?: true
    venue?: true
    schedule?: true
    details?: true
    accessInfo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    festivalId?: true
    themeName?: true
    eventDate?: true
    eventEndDate?: true
    venue?: true
    schedule?: true
    details?: true
    accessInfo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theme to aggregate.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithAggregationInput | ThemeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: string
    festivalId: string
    themeName: string
    eventDate: Date | null
    eventEndDate: Date | null
    venue: string | null
    schedule: string | null
    details: string | null
    accessInfo: string | null
    createdAt: Date
    updatedAt: Date
    _count: ThemeCountAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    themeName?: boolean
    eventDate?: boolean
    eventEndDate?: boolean
    venue?: boolean
    schedule?: boolean
    details?: boolean
    accessInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    themeName?: boolean
    eventDate?: boolean
    eventEndDate?: boolean
    venue?: boolean
    schedule?: boolean
    details?: boolean
    accessInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    themeName?: boolean
    eventDate?: boolean
    eventEndDate?: boolean
    venue?: boolean
    schedule?: boolean
    details?: boolean
    accessInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectScalar = {
    id?: boolean
    festivalId?: boolean
    themeName?: boolean
    eventDate?: boolean
    eventEndDate?: boolean
    venue?: boolean
    schedule?: boolean
    details?: boolean
    accessInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "festivalId" | "themeName" | "eventDate" | "eventEndDate" | "venue" | "schedule" | "details" | "accessInfo" | "createdAt" | "updatedAt", ExtArgs["result"]["theme"]>
  export type ThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }
  export type ThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }
  export type ThemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }

  export type $ThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theme"
    objects: {
      festival: Prisma.$FestivalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      festivalId: string
      themeName: string
      eventDate: Date | null
      eventEndDate: Date | null
      venue: string | null
      schedule: string | null
      details: string | null
      accessInfo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }

  type ThemeGetPayload<S extends boolean | null | undefined | ThemeDefaultArgs> = $Result.GetResult<Prisma.$ThemePayload, S>

  type ThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface ThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theme'], meta: { name: 'Theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThemeFindUniqueArgs>(args: SelectSubset<T, ThemeFindUniqueArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, ThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThemeFindFirstArgs>(args?: SelectSubset<T, ThemeFindFirstArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, ThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThemeFindManyArgs>(args?: SelectSubset<T, ThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
     */
    create<T extends ThemeCreateArgs>(args: SelectSubset<T, ThemeCreateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Themes.
     * @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThemeCreateManyArgs>(args?: SelectSubset<T, ThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Themes and returns the data saved in the database.
     * @param {ThemeCreateManyAndReturnArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, ThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
     */
    delete<T extends ThemeDeleteArgs>(args: SelectSubset<T, ThemeDeleteArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThemeUpdateArgs>(args: SelectSubset<T, ThemeUpdateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThemeDeleteManyArgs>(args?: SelectSubset<T, ThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThemeUpdateManyArgs>(args: SelectSubset<T, ThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes and returns the data updated in the database.
     * @param {ThemeUpdateManyAndReturnArgs} args - Arguments to update many Themes.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThemeUpdateManyAndReturnArgs>(args: SelectSubset<T, ThemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
     */
    upsert<T extends ThemeUpsertArgs>(args: SelectSubset<T, ThemeUpsertArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theme model
   */
  readonly fields: ThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festival<T extends FestivalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalDefaultArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Theme model
   */
  interface ThemeFieldRefs {
    readonly id: FieldRef<"Theme", 'String'>
    readonly festivalId: FieldRef<"Theme", 'String'>
    readonly themeName: FieldRef<"Theme", 'String'>
    readonly eventDate: FieldRef<"Theme", 'DateTime'>
    readonly eventEndDate: FieldRef<"Theme", 'DateTime'>
    readonly venue: FieldRef<"Theme", 'String'>
    readonly schedule: FieldRef<"Theme", 'String'>
    readonly details: FieldRef<"Theme", 'String'>
    readonly accessInfo: FieldRef<"Theme", 'String'>
    readonly createdAt: FieldRef<"Theme", 'DateTime'>
    readonly updatedAt: FieldRef<"Theme", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Theme findUnique
   */
  export type ThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findFirst
   */
  export type ThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Themes to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme create
   */
  export type ThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Theme.
     */
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }

  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme createManyAndReturn
   */
  export type ThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Theme update
   */
  export type ThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Theme.
     */
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
  }

  /**
   * Theme updateManyAndReturn
   */
  export type ThemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Theme to update in case it exists.
     */
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     */
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }

  /**
   * Theme delete
   */
  export type ThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter which Theme to delete.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Themes to delete
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to delete.
     */
    limit?: number
  }

  /**
   * Theme without action
   */
  export type ThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
  }


  /**
   * Model SponsorPlan
   */

  export type AggregateSponsorPlan = {
    _count: SponsorPlanCountAggregateOutputType | null
    _avg: SponsorPlanAvgAggregateOutputType | null
    _sum: SponsorPlanSumAggregateOutputType | null
    _min: SponsorPlanMinAggregateOutputType | null
    _max: SponsorPlanMaxAggregateOutputType | null
  }

  export type SponsorPlanAvgAggregateOutputType = {
    amount: number | null
    displayOrder: number | null
  }

  export type SponsorPlanSumAggregateOutputType = {
    amount: number | null
    displayOrder: number | null
  }

  export type SponsorPlanMinAggregateOutputType = {
    id: string | null
    festivalId: string | null
    planName: string | null
    amount: number | null
    benefits: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SponsorPlanMaxAggregateOutputType = {
    id: string | null
    festivalId: string | null
    planName: string | null
    amount: number | null
    benefits: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SponsorPlanCountAggregateOutputType = {
    id: number
    festivalId: number
    planName: number
    amount: number
    benefits: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SponsorPlanAvgAggregateInputType = {
    amount?: true
    displayOrder?: true
  }

  export type SponsorPlanSumAggregateInputType = {
    amount?: true
    displayOrder?: true
  }

  export type SponsorPlanMinAggregateInputType = {
    id?: true
    festivalId?: true
    planName?: true
    amount?: true
    benefits?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SponsorPlanMaxAggregateInputType = {
    id?: true
    festivalId?: true
    planName?: true
    amount?: true
    benefits?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SponsorPlanCountAggregateInputType = {
    id?: true
    festivalId?: true
    planName?: true
    amount?: true
    benefits?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SponsorPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SponsorPlan to aggregate.
     */
    where?: SponsorPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SponsorPlans to fetch.
     */
    orderBy?: SponsorPlanOrderByWithRelationInput | SponsorPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SponsorPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SponsorPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SponsorPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SponsorPlans
    **/
    _count?: true | SponsorPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SponsorPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SponsorPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SponsorPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SponsorPlanMaxAggregateInputType
  }

  export type GetSponsorPlanAggregateType<T extends SponsorPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSponsorPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSponsorPlan[P]>
      : GetScalarType<T[P], AggregateSponsorPlan[P]>
  }




  export type SponsorPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SponsorPlanWhereInput
    orderBy?: SponsorPlanOrderByWithAggregationInput | SponsorPlanOrderByWithAggregationInput[]
    by: SponsorPlanScalarFieldEnum[] | SponsorPlanScalarFieldEnum
    having?: SponsorPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SponsorPlanCountAggregateInputType | true
    _avg?: SponsorPlanAvgAggregateInputType
    _sum?: SponsorPlanSumAggregateInputType
    _min?: SponsorPlanMinAggregateInputType
    _max?: SponsorPlanMaxAggregateInputType
  }

  export type SponsorPlanGroupByOutputType = {
    id: string
    festivalId: string
    planName: string
    amount: number
    benefits: string | null
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    _count: SponsorPlanCountAggregateOutputType | null
    _avg: SponsorPlanAvgAggregateOutputType | null
    _sum: SponsorPlanSumAggregateOutputType | null
    _min: SponsorPlanMinAggregateOutputType | null
    _max: SponsorPlanMaxAggregateOutputType | null
  }

  type GetSponsorPlanGroupByPayload<T extends SponsorPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SponsorPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SponsorPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SponsorPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SponsorPlanGroupByOutputType[P]>
        }
      >
    >


  export type SponsorPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    planName?: boolean
    amount?: boolean
    benefits?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sponsorPlan"]>

  export type SponsorPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    planName?: boolean
    amount?: boolean
    benefits?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sponsorPlan"]>

  export type SponsorPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    festivalId?: boolean
    planName?: boolean
    amount?: boolean
    benefits?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sponsorPlan"]>

  export type SponsorPlanSelectScalar = {
    id?: boolean
    festivalId?: boolean
    planName?: boolean
    amount?: boolean
    benefits?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SponsorPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "festivalId" | "planName" | "amount" | "benefits" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["sponsorPlan"]>
  export type SponsorPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }
  export type SponsorPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }
  export type SponsorPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    festival?: boolean | FestivalDefaultArgs<ExtArgs>
  }

  export type $SponsorPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SponsorPlan"
    objects: {
      festival: Prisma.$FestivalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      festivalId: string
      planName: string
      amount: number
      benefits: string | null
      displayOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sponsorPlan"]>
    composites: {}
  }

  type SponsorPlanGetPayload<S extends boolean | null | undefined | SponsorPlanDefaultArgs> = $Result.GetResult<Prisma.$SponsorPlanPayload, S>

  type SponsorPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SponsorPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SponsorPlanCountAggregateInputType | true
    }

  export interface SponsorPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SponsorPlan'], meta: { name: 'SponsorPlan' } }
    /**
     * Find zero or one SponsorPlan that matches the filter.
     * @param {SponsorPlanFindUniqueArgs} args - Arguments to find a SponsorPlan
     * @example
     * // Get one SponsorPlan
     * const sponsorPlan = await prisma.sponsorPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SponsorPlanFindUniqueArgs>(args: SelectSubset<T, SponsorPlanFindUniqueArgs<ExtArgs>>): Prisma__SponsorPlanClient<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SponsorPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SponsorPlanFindUniqueOrThrowArgs} args - Arguments to find a SponsorPlan
     * @example
     * // Get one SponsorPlan
     * const sponsorPlan = await prisma.sponsorPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SponsorPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SponsorPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SponsorPlanClient<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SponsorPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorPlanFindFirstArgs} args - Arguments to find a SponsorPlan
     * @example
     * // Get one SponsorPlan
     * const sponsorPlan = await prisma.sponsorPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SponsorPlanFindFirstArgs>(args?: SelectSubset<T, SponsorPlanFindFirstArgs<ExtArgs>>): Prisma__SponsorPlanClient<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SponsorPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorPlanFindFirstOrThrowArgs} args - Arguments to find a SponsorPlan
     * @example
     * // Get one SponsorPlan
     * const sponsorPlan = await prisma.sponsorPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SponsorPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SponsorPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SponsorPlanClient<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SponsorPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SponsorPlans
     * const sponsorPlans = await prisma.sponsorPlan.findMany()
     * 
     * // Get first 10 SponsorPlans
     * const sponsorPlans = await prisma.sponsorPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sponsorPlanWithIdOnly = await prisma.sponsorPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SponsorPlanFindManyArgs>(args?: SelectSubset<T, SponsorPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SponsorPlan.
     * @param {SponsorPlanCreateArgs} args - Arguments to create a SponsorPlan.
     * @example
     * // Create one SponsorPlan
     * const SponsorPlan = await prisma.sponsorPlan.create({
     *   data: {
     *     // ... data to create a SponsorPlan
     *   }
     * })
     * 
     */
    create<T extends SponsorPlanCreateArgs>(args: SelectSubset<T, SponsorPlanCreateArgs<ExtArgs>>): Prisma__SponsorPlanClient<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SponsorPlans.
     * @param {SponsorPlanCreateManyArgs} args - Arguments to create many SponsorPlans.
     * @example
     * // Create many SponsorPlans
     * const sponsorPlan = await prisma.sponsorPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SponsorPlanCreateManyArgs>(args?: SelectSubset<T, SponsorPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SponsorPlans and returns the data saved in the database.
     * @param {SponsorPlanCreateManyAndReturnArgs} args - Arguments to create many SponsorPlans.
     * @example
     * // Create many SponsorPlans
     * const sponsorPlan = await prisma.sponsorPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SponsorPlans and only return the `id`
     * const sponsorPlanWithIdOnly = await prisma.sponsorPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SponsorPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, SponsorPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SponsorPlan.
     * @param {SponsorPlanDeleteArgs} args - Arguments to delete one SponsorPlan.
     * @example
     * // Delete one SponsorPlan
     * const SponsorPlan = await prisma.sponsorPlan.delete({
     *   where: {
     *     // ... filter to delete one SponsorPlan
     *   }
     * })
     * 
     */
    delete<T extends SponsorPlanDeleteArgs>(args: SelectSubset<T, SponsorPlanDeleteArgs<ExtArgs>>): Prisma__SponsorPlanClient<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SponsorPlan.
     * @param {SponsorPlanUpdateArgs} args - Arguments to update one SponsorPlan.
     * @example
     * // Update one SponsorPlan
     * const sponsorPlan = await prisma.sponsorPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SponsorPlanUpdateArgs>(args: SelectSubset<T, SponsorPlanUpdateArgs<ExtArgs>>): Prisma__SponsorPlanClient<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SponsorPlans.
     * @param {SponsorPlanDeleteManyArgs} args - Arguments to filter SponsorPlans to delete.
     * @example
     * // Delete a few SponsorPlans
     * const { count } = await prisma.sponsorPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SponsorPlanDeleteManyArgs>(args?: SelectSubset<T, SponsorPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SponsorPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SponsorPlans
     * const sponsorPlan = await prisma.sponsorPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SponsorPlanUpdateManyArgs>(args: SelectSubset<T, SponsorPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SponsorPlans and returns the data updated in the database.
     * @param {SponsorPlanUpdateManyAndReturnArgs} args - Arguments to update many SponsorPlans.
     * @example
     * // Update many SponsorPlans
     * const sponsorPlan = await prisma.sponsorPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SponsorPlans and only return the `id`
     * const sponsorPlanWithIdOnly = await prisma.sponsorPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SponsorPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, SponsorPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SponsorPlan.
     * @param {SponsorPlanUpsertArgs} args - Arguments to update or create a SponsorPlan.
     * @example
     * // Update or create a SponsorPlan
     * const sponsorPlan = await prisma.sponsorPlan.upsert({
     *   create: {
     *     // ... data to create a SponsorPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SponsorPlan we want to update
     *   }
     * })
     */
    upsert<T extends SponsorPlanUpsertArgs>(args: SelectSubset<T, SponsorPlanUpsertArgs<ExtArgs>>): Prisma__SponsorPlanClient<$Result.GetResult<Prisma.$SponsorPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SponsorPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorPlanCountArgs} args - Arguments to filter SponsorPlans to count.
     * @example
     * // Count the number of SponsorPlans
     * const count = await prisma.sponsorPlan.count({
     *   where: {
     *     // ... the filter for the SponsorPlans we want to count
     *   }
     * })
    **/
    count<T extends SponsorPlanCountArgs>(
      args?: Subset<T, SponsorPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SponsorPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SponsorPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SponsorPlanAggregateArgs>(args: Subset<T, SponsorPlanAggregateArgs>): Prisma.PrismaPromise<GetSponsorPlanAggregateType<T>>

    /**
     * Group by SponsorPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SponsorPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SponsorPlanGroupByArgs['orderBy'] }
        : { orderBy?: SponsorPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SponsorPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSponsorPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SponsorPlan model
   */
  readonly fields: SponsorPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SponsorPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SponsorPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    festival<T extends FestivalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FestivalDefaultArgs<ExtArgs>>): Prisma__FestivalClient<$Result.GetResult<Prisma.$FestivalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SponsorPlan model
   */
  interface SponsorPlanFieldRefs {
    readonly id: FieldRef<"SponsorPlan", 'String'>
    readonly festivalId: FieldRef<"SponsorPlan", 'String'>
    readonly planName: FieldRef<"SponsorPlan", 'String'>
    readonly amount: FieldRef<"SponsorPlan", 'Int'>
    readonly benefits: FieldRef<"SponsorPlan", 'String'>
    readonly displayOrder: FieldRef<"SponsorPlan", 'Int'>
    readonly createdAt: FieldRef<"SponsorPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"SponsorPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SponsorPlan findUnique
   */
  export type SponsorPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
    /**
     * Filter, which SponsorPlan to fetch.
     */
    where: SponsorPlanWhereUniqueInput
  }

  /**
   * SponsorPlan findUniqueOrThrow
   */
  export type SponsorPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
    /**
     * Filter, which SponsorPlan to fetch.
     */
    where: SponsorPlanWhereUniqueInput
  }

  /**
   * SponsorPlan findFirst
   */
  export type SponsorPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
    /**
     * Filter, which SponsorPlan to fetch.
     */
    where?: SponsorPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SponsorPlans to fetch.
     */
    orderBy?: SponsorPlanOrderByWithRelationInput | SponsorPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SponsorPlans.
     */
    cursor?: SponsorPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SponsorPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SponsorPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SponsorPlans.
     */
    distinct?: SponsorPlanScalarFieldEnum | SponsorPlanScalarFieldEnum[]
  }

  /**
   * SponsorPlan findFirstOrThrow
   */
  export type SponsorPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
    /**
     * Filter, which SponsorPlan to fetch.
     */
    where?: SponsorPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SponsorPlans to fetch.
     */
    orderBy?: SponsorPlanOrderByWithRelationInput | SponsorPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SponsorPlans.
     */
    cursor?: SponsorPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SponsorPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SponsorPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SponsorPlans.
     */
    distinct?: SponsorPlanScalarFieldEnum | SponsorPlanScalarFieldEnum[]
  }

  /**
   * SponsorPlan findMany
   */
  export type SponsorPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
    /**
     * Filter, which SponsorPlans to fetch.
     */
    where?: SponsorPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SponsorPlans to fetch.
     */
    orderBy?: SponsorPlanOrderByWithRelationInput | SponsorPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SponsorPlans.
     */
    cursor?: SponsorPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SponsorPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SponsorPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SponsorPlans.
     */
    distinct?: SponsorPlanScalarFieldEnum | SponsorPlanScalarFieldEnum[]
  }

  /**
   * SponsorPlan create
   */
  export type SponsorPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SponsorPlan.
     */
    data: XOR<SponsorPlanCreateInput, SponsorPlanUncheckedCreateInput>
  }

  /**
   * SponsorPlan createMany
   */
  export type SponsorPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SponsorPlans.
     */
    data: SponsorPlanCreateManyInput | SponsorPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SponsorPlan createManyAndReturn
   */
  export type SponsorPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * The data used to create many SponsorPlans.
     */
    data: SponsorPlanCreateManyInput | SponsorPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SponsorPlan update
   */
  export type SponsorPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SponsorPlan.
     */
    data: XOR<SponsorPlanUpdateInput, SponsorPlanUncheckedUpdateInput>
    /**
     * Choose, which SponsorPlan to update.
     */
    where: SponsorPlanWhereUniqueInput
  }

  /**
   * SponsorPlan updateMany
   */
  export type SponsorPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SponsorPlans.
     */
    data: XOR<SponsorPlanUpdateManyMutationInput, SponsorPlanUncheckedUpdateManyInput>
    /**
     * Filter which SponsorPlans to update
     */
    where?: SponsorPlanWhereInput
    /**
     * Limit how many SponsorPlans to update.
     */
    limit?: number
  }

  /**
   * SponsorPlan updateManyAndReturn
   */
  export type SponsorPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * The data used to update SponsorPlans.
     */
    data: XOR<SponsorPlanUpdateManyMutationInput, SponsorPlanUncheckedUpdateManyInput>
    /**
     * Filter which SponsorPlans to update
     */
    where?: SponsorPlanWhereInput
    /**
     * Limit how many SponsorPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SponsorPlan upsert
   */
  export type SponsorPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SponsorPlan to update in case it exists.
     */
    where: SponsorPlanWhereUniqueInput
    /**
     * In case the SponsorPlan found by the `where` argument doesn't exist, create a new SponsorPlan with this data.
     */
    create: XOR<SponsorPlanCreateInput, SponsorPlanUncheckedCreateInput>
    /**
     * In case the SponsorPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SponsorPlanUpdateInput, SponsorPlanUncheckedUpdateInput>
  }

  /**
   * SponsorPlan delete
   */
  export type SponsorPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
    /**
     * Filter which SponsorPlan to delete.
     */
    where: SponsorPlanWhereUniqueInput
  }

  /**
   * SponsorPlan deleteMany
   */
  export type SponsorPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SponsorPlans to delete
     */
    where?: SponsorPlanWhereInput
    /**
     * Limit how many SponsorPlans to delete.
     */
    limit?: number
  }

  /**
   * SponsorPlan without action
   */
  export type SponsorPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorPlan
     */
    select?: SponsorPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorPlan
     */
    omit?: SponsorPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorPlanInclude<ExtArgs> | null
  }


  /**
   * Model CommitteeMember
   */

  export type AggregateCommitteeMember = {
    _count: CommitteeMemberCountAggregateOutputType | null
    _min: CommitteeMemberMinAggregateOutputType | null
    _max: CommitteeMemberMaxAggregateOutputType | null
  }

  export type CommitteeMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    universityId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommitteeMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    universityId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommitteeMemberCountAggregateOutputType = {
    id: number
    userId: number
    universityId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommitteeMemberMinAggregateInputType = {
    id?: true
    userId?: true
    universityId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommitteeMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    universityId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommitteeMemberCountAggregateInputType = {
    id?: true
    userId?: true
    universityId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommitteeMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommitteeMember to aggregate.
     */
    where?: CommitteeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeMembers to fetch.
     */
    orderBy?: CommitteeMemberOrderByWithRelationInput | CommitteeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommitteeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommitteeMembers
    **/
    _count?: true | CommitteeMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommitteeMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommitteeMemberMaxAggregateInputType
  }

  export type GetCommitteeMemberAggregateType<T extends CommitteeMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCommitteeMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommitteeMember[P]>
      : GetScalarType<T[P], AggregateCommitteeMember[P]>
  }




  export type CommitteeMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitteeMemberWhereInput
    orderBy?: CommitteeMemberOrderByWithAggregationInput | CommitteeMemberOrderByWithAggregationInput[]
    by: CommitteeMemberScalarFieldEnum[] | CommitteeMemberScalarFieldEnum
    having?: CommitteeMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommitteeMemberCountAggregateInputType | true
    _min?: CommitteeMemberMinAggregateInputType
    _max?: CommitteeMemberMaxAggregateInputType
  }

  export type CommitteeMemberGroupByOutputType = {
    id: string
    userId: string
    universityId: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: CommitteeMemberCountAggregateOutputType | null
    _min: CommitteeMemberMinAggregateOutputType | null
    _max: CommitteeMemberMaxAggregateOutputType | null
  }

  type GetCommitteeMemberGroupByPayload<T extends CommitteeMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommitteeMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommitteeMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommitteeMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CommitteeMemberGroupByOutputType[P]>
        }
      >
    >


  export type CommitteeMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["committeeMember"]>

  export type CommitteeMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["committeeMember"]>

  export type CommitteeMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["committeeMember"]>

  export type CommitteeMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommitteeMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "universityId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["committeeMember"]>
  export type CommitteeMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }
  export type CommitteeMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }
  export type CommitteeMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }

  export type $CommitteeMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommitteeMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      university: Prisma.$UniversityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      universityId: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["committeeMember"]>
    composites: {}
  }

  type CommitteeMemberGetPayload<S extends boolean | null | undefined | CommitteeMemberDefaultArgs> = $Result.GetResult<Prisma.$CommitteeMemberPayload, S>

  type CommitteeMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommitteeMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommitteeMemberCountAggregateInputType | true
    }

  export interface CommitteeMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommitteeMember'], meta: { name: 'CommitteeMember' } }
    /**
     * Find zero or one CommitteeMember that matches the filter.
     * @param {CommitteeMemberFindUniqueArgs} args - Arguments to find a CommitteeMember
     * @example
     * // Get one CommitteeMember
     * const committeeMember = await prisma.committeeMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommitteeMemberFindUniqueArgs>(args: SelectSubset<T, CommitteeMemberFindUniqueArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommitteeMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommitteeMemberFindUniqueOrThrowArgs} args - Arguments to find a CommitteeMember
     * @example
     * // Get one CommitteeMember
     * const committeeMember = await prisma.committeeMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommitteeMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, CommitteeMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommitteeMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberFindFirstArgs} args - Arguments to find a CommitteeMember
     * @example
     * // Get one CommitteeMember
     * const committeeMember = await prisma.committeeMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommitteeMemberFindFirstArgs>(args?: SelectSubset<T, CommitteeMemberFindFirstArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommitteeMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberFindFirstOrThrowArgs} args - Arguments to find a CommitteeMember
     * @example
     * // Get one CommitteeMember
     * const committeeMember = await prisma.committeeMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommitteeMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, CommitteeMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommitteeMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommitteeMembers
     * const committeeMembers = await prisma.committeeMember.findMany()
     * 
     * // Get first 10 CommitteeMembers
     * const committeeMembers = await prisma.committeeMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const committeeMemberWithIdOnly = await prisma.committeeMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommitteeMemberFindManyArgs>(args?: SelectSubset<T, CommitteeMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommitteeMember.
     * @param {CommitteeMemberCreateArgs} args - Arguments to create a CommitteeMember.
     * @example
     * // Create one CommitteeMember
     * const CommitteeMember = await prisma.committeeMember.create({
     *   data: {
     *     // ... data to create a CommitteeMember
     *   }
     * })
     * 
     */
    create<T extends CommitteeMemberCreateArgs>(args: SelectSubset<T, CommitteeMemberCreateArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommitteeMembers.
     * @param {CommitteeMemberCreateManyArgs} args - Arguments to create many CommitteeMembers.
     * @example
     * // Create many CommitteeMembers
     * const committeeMember = await prisma.committeeMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommitteeMemberCreateManyArgs>(args?: SelectSubset<T, CommitteeMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommitteeMembers and returns the data saved in the database.
     * @param {CommitteeMemberCreateManyAndReturnArgs} args - Arguments to create many CommitteeMembers.
     * @example
     * // Create many CommitteeMembers
     * const committeeMember = await prisma.committeeMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommitteeMembers and only return the `id`
     * const committeeMemberWithIdOnly = await prisma.committeeMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommitteeMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, CommitteeMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommitteeMember.
     * @param {CommitteeMemberDeleteArgs} args - Arguments to delete one CommitteeMember.
     * @example
     * // Delete one CommitteeMember
     * const CommitteeMember = await prisma.committeeMember.delete({
     *   where: {
     *     // ... filter to delete one CommitteeMember
     *   }
     * })
     * 
     */
    delete<T extends CommitteeMemberDeleteArgs>(args: SelectSubset<T, CommitteeMemberDeleteArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommitteeMember.
     * @param {CommitteeMemberUpdateArgs} args - Arguments to update one CommitteeMember.
     * @example
     * // Update one CommitteeMember
     * const committeeMember = await prisma.committeeMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommitteeMemberUpdateArgs>(args: SelectSubset<T, CommitteeMemberUpdateArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommitteeMembers.
     * @param {CommitteeMemberDeleteManyArgs} args - Arguments to filter CommitteeMembers to delete.
     * @example
     * // Delete a few CommitteeMembers
     * const { count } = await prisma.committeeMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommitteeMemberDeleteManyArgs>(args?: SelectSubset<T, CommitteeMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommitteeMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommitteeMembers
     * const committeeMember = await prisma.committeeMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommitteeMemberUpdateManyArgs>(args: SelectSubset<T, CommitteeMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommitteeMembers and returns the data updated in the database.
     * @param {CommitteeMemberUpdateManyAndReturnArgs} args - Arguments to update many CommitteeMembers.
     * @example
     * // Update many CommitteeMembers
     * const committeeMember = await prisma.committeeMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommitteeMembers and only return the `id`
     * const committeeMemberWithIdOnly = await prisma.committeeMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommitteeMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, CommitteeMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommitteeMember.
     * @param {CommitteeMemberUpsertArgs} args - Arguments to update or create a CommitteeMember.
     * @example
     * // Update or create a CommitteeMember
     * const committeeMember = await prisma.committeeMember.upsert({
     *   create: {
     *     // ... data to create a CommitteeMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommitteeMember we want to update
     *   }
     * })
     */
    upsert<T extends CommitteeMemberUpsertArgs>(args: SelectSubset<T, CommitteeMemberUpsertArgs<ExtArgs>>): Prisma__CommitteeMemberClient<$Result.GetResult<Prisma.$CommitteeMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommitteeMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberCountArgs} args - Arguments to filter CommitteeMembers to count.
     * @example
     * // Count the number of CommitteeMembers
     * const count = await prisma.committeeMember.count({
     *   where: {
     *     // ... the filter for the CommitteeMembers we want to count
     *   }
     * })
    **/
    count<T extends CommitteeMemberCountArgs>(
      args?: Subset<T, CommitteeMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommitteeMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommitteeMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommitteeMemberAggregateArgs>(args: Subset<T, CommitteeMemberAggregateArgs>): Prisma.PrismaPromise<GetCommitteeMemberAggregateType<T>>

    /**
     * Group by CommitteeMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitteeMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommitteeMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommitteeMemberGroupByArgs['orderBy'] }
        : { orderBy?: CommitteeMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommitteeMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommitteeMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommitteeMember model
   */
  readonly fields: CommitteeMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommitteeMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommitteeMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    university<T extends UniversityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversityDefaultArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommitteeMember model
   */
  interface CommitteeMemberFieldRefs {
    readonly id: FieldRef<"CommitteeMember", 'String'>
    readonly userId: FieldRef<"CommitteeMember", 'String'>
    readonly universityId: FieldRef<"CommitteeMember", 'String'>
    readonly role: FieldRef<"CommitteeMember", 'Role'>
    readonly createdAt: FieldRef<"CommitteeMember", 'DateTime'>
    readonly updatedAt: FieldRef<"CommitteeMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommitteeMember findUnique
   */
  export type CommitteeMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommitteeMember to fetch.
     */
    where: CommitteeMemberWhereUniqueInput
  }

  /**
   * CommitteeMember findUniqueOrThrow
   */
  export type CommitteeMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommitteeMember to fetch.
     */
    where: CommitteeMemberWhereUniqueInput
  }

  /**
   * CommitteeMember findFirst
   */
  export type CommitteeMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommitteeMember to fetch.
     */
    where?: CommitteeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeMembers to fetch.
     */
    orderBy?: CommitteeMemberOrderByWithRelationInput | CommitteeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommitteeMembers.
     */
    cursor?: CommitteeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommitteeMembers.
     */
    distinct?: CommitteeMemberScalarFieldEnum | CommitteeMemberScalarFieldEnum[]
  }

  /**
   * CommitteeMember findFirstOrThrow
   */
  export type CommitteeMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommitteeMember to fetch.
     */
    where?: CommitteeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeMembers to fetch.
     */
    orderBy?: CommitteeMemberOrderByWithRelationInput | CommitteeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommitteeMembers.
     */
    cursor?: CommitteeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommitteeMembers.
     */
    distinct?: CommitteeMemberScalarFieldEnum | CommitteeMemberScalarFieldEnum[]
  }

  /**
   * CommitteeMember findMany
   */
  export type CommitteeMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommitteeMembers to fetch.
     */
    where?: CommitteeMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitteeMembers to fetch.
     */
    orderBy?: CommitteeMemberOrderByWithRelationInput | CommitteeMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommitteeMembers.
     */
    cursor?: CommitteeMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitteeMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitteeMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommitteeMembers.
     */
    distinct?: CommitteeMemberScalarFieldEnum | CommitteeMemberScalarFieldEnum[]
  }

  /**
   * CommitteeMember create
   */
  export type CommitteeMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a CommitteeMember.
     */
    data: XOR<CommitteeMemberCreateInput, CommitteeMemberUncheckedCreateInput>
  }

  /**
   * CommitteeMember createMany
   */
  export type CommitteeMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommitteeMembers.
     */
    data: CommitteeMemberCreateManyInput | CommitteeMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommitteeMember createManyAndReturn
   */
  export type CommitteeMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * The data used to create many CommitteeMembers.
     */
    data: CommitteeMemberCreateManyInput | CommitteeMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommitteeMember update
   */
  export type CommitteeMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a CommitteeMember.
     */
    data: XOR<CommitteeMemberUpdateInput, CommitteeMemberUncheckedUpdateInput>
    /**
     * Choose, which CommitteeMember to update.
     */
    where: CommitteeMemberWhereUniqueInput
  }

  /**
   * CommitteeMember updateMany
   */
  export type CommitteeMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommitteeMembers.
     */
    data: XOR<CommitteeMemberUpdateManyMutationInput, CommitteeMemberUncheckedUpdateManyInput>
    /**
     * Filter which CommitteeMembers to update
     */
    where?: CommitteeMemberWhereInput
    /**
     * Limit how many CommitteeMembers to update.
     */
    limit?: number
  }

  /**
   * CommitteeMember updateManyAndReturn
   */
  export type CommitteeMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * The data used to update CommitteeMembers.
     */
    data: XOR<CommitteeMemberUpdateManyMutationInput, CommitteeMemberUncheckedUpdateManyInput>
    /**
     * Filter which CommitteeMembers to update
     */
    where?: CommitteeMemberWhereInput
    /**
     * Limit how many CommitteeMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommitteeMember upsert
   */
  export type CommitteeMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the CommitteeMember to update in case it exists.
     */
    where: CommitteeMemberWhereUniqueInput
    /**
     * In case the CommitteeMember found by the `where` argument doesn't exist, create a new CommitteeMember with this data.
     */
    create: XOR<CommitteeMemberCreateInput, CommitteeMemberUncheckedCreateInput>
    /**
     * In case the CommitteeMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommitteeMemberUpdateInput, CommitteeMemberUncheckedUpdateInput>
  }

  /**
   * CommitteeMember delete
   */
  export type CommitteeMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
    /**
     * Filter which CommitteeMember to delete.
     */
    where: CommitteeMemberWhereUniqueInput
  }

  /**
   * CommitteeMember deleteMany
   */
  export type CommitteeMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommitteeMembers to delete
     */
    where?: CommitteeMemberWhereInput
    /**
     * Limit how many CommitteeMembers to delete.
     */
    limit?: number
  }

  /**
   * CommitteeMember without action
   */
  export type CommitteeMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitteeMember
     */
    select?: CommitteeMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitteeMember
     */
    omit?: CommitteeMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitteeMemberInclude<ExtArgs> | null
  }


  /**
   * Model UniversityRole
   */

  export type AggregateUniversityRole = {
    _count: UniversityRoleCountAggregateOutputType | null
    _min: UniversityRoleMinAggregateOutputType | null
    _max: UniversityRoleMaxAggregateOutputType | null
  }

  export type UniversityRoleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    universityId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UniversityRoleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    universityId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UniversityRoleCountAggregateOutputType = {
    id: number
    userId: number
    universityId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UniversityRoleMinAggregateInputType = {
    id?: true
    userId?: true
    universityId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UniversityRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    universityId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UniversityRoleCountAggregateInputType = {
    id?: true
    userId?: true
    universityId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UniversityRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniversityRole to aggregate.
     */
    where?: UniversityRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityRoles to fetch.
     */
    orderBy?: UniversityRoleOrderByWithRelationInput | UniversityRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniversityRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UniversityRoles
    **/
    _count?: true | UniversityRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversityRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversityRoleMaxAggregateInputType
  }

  export type GetUniversityRoleAggregateType<T extends UniversityRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversityRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversityRole[P]>
      : GetScalarType<T[P], AggregateUniversityRole[P]>
  }




  export type UniversityRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversityRoleWhereInput
    orderBy?: UniversityRoleOrderByWithAggregationInput | UniversityRoleOrderByWithAggregationInput[]
    by: UniversityRoleScalarFieldEnum[] | UniversityRoleScalarFieldEnum
    having?: UniversityRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversityRoleCountAggregateInputType | true
    _min?: UniversityRoleMinAggregateInputType
    _max?: UniversityRoleMaxAggregateInputType
  }

  export type UniversityRoleGroupByOutputType = {
    id: string
    userId: string
    universityId: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UniversityRoleCountAggregateOutputType | null
    _min: UniversityRoleMinAggregateOutputType | null
    _max: UniversityRoleMaxAggregateOutputType | null
  }

  type GetUniversityRoleGroupByPayload<T extends UniversityRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversityRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversityRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversityRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UniversityRoleGroupByOutputType[P]>
        }
      >
    >


  export type UniversityRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universityRole"]>

  export type UniversityRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universityRole"]>

  export type UniversityRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universityRole"]>

  export type UniversityRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    universityId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UniversityRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "universityId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["universityRole"]>
  export type UniversityRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }
  export type UniversityRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }
  export type UniversityRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    university?: boolean | UniversityDefaultArgs<ExtArgs>
  }

  export type $UniversityRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UniversityRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      university: Prisma.$UniversityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      universityId: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["universityRole"]>
    composites: {}
  }

  type UniversityRoleGetPayload<S extends boolean | null | undefined | UniversityRoleDefaultArgs> = $Result.GetResult<Prisma.$UniversityRolePayload, S>

  type UniversityRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniversityRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversityRoleCountAggregateInputType | true
    }

  export interface UniversityRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UniversityRole'], meta: { name: 'UniversityRole' } }
    /**
     * Find zero or one UniversityRole that matches the filter.
     * @param {UniversityRoleFindUniqueArgs} args - Arguments to find a UniversityRole
     * @example
     * // Get one UniversityRole
     * const universityRole = await prisma.universityRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniversityRoleFindUniqueArgs>(args: SelectSubset<T, UniversityRoleFindUniqueArgs<ExtArgs>>): Prisma__UniversityRoleClient<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UniversityRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniversityRoleFindUniqueOrThrowArgs} args - Arguments to find a UniversityRole
     * @example
     * // Get one UniversityRole
     * const universityRole = await prisma.universityRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniversityRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UniversityRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniversityRoleClient<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UniversityRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityRoleFindFirstArgs} args - Arguments to find a UniversityRole
     * @example
     * // Get one UniversityRole
     * const universityRole = await prisma.universityRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniversityRoleFindFirstArgs>(args?: SelectSubset<T, UniversityRoleFindFirstArgs<ExtArgs>>): Prisma__UniversityRoleClient<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UniversityRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityRoleFindFirstOrThrowArgs} args - Arguments to find a UniversityRole
     * @example
     * // Get one UniversityRole
     * const universityRole = await prisma.universityRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniversityRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UniversityRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniversityRoleClient<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UniversityRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UniversityRoles
     * const universityRoles = await prisma.universityRole.findMany()
     * 
     * // Get first 10 UniversityRoles
     * const universityRoles = await prisma.universityRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universityRoleWithIdOnly = await prisma.universityRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniversityRoleFindManyArgs>(args?: SelectSubset<T, UniversityRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UniversityRole.
     * @param {UniversityRoleCreateArgs} args - Arguments to create a UniversityRole.
     * @example
     * // Create one UniversityRole
     * const UniversityRole = await prisma.universityRole.create({
     *   data: {
     *     // ... data to create a UniversityRole
     *   }
     * })
     * 
     */
    create<T extends UniversityRoleCreateArgs>(args: SelectSubset<T, UniversityRoleCreateArgs<ExtArgs>>): Prisma__UniversityRoleClient<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UniversityRoles.
     * @param {UniversityRoleCreateManyArgs} args - Arguments to create many UniversityRoles.
     * @example
     * // Create many UniversityRoles
     * const universityRole = await prisma.universityRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniversityRoleCreateManyArgs>(args?: SelectSubset<T, UniversityRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UniversityRoles and returns the data saved in the database.
     * @param {UniversityRoleCreateManyAndReturnArgs} args - Arguments to create many UniversityRoles.
     * @example
     * // Create many UniversityRoles
     * const universityRole = await prisma.universityRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UniversityRoles and only return the `id`
     * const universityRoleWithIdOnly = await prisma.universityRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UniversityRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UniversityRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UniversityRole.
     * @param {UniversityRoleDeleteArgs} args - Arguments to delete one UniversityRole.
     * @example
     * // Delete one UniversityRole
     * const UniversityRole = await prisma.universityRole.delete({
     *   where: {
     *     // ... filter to delete one UniversityRole
     *   }
     * })
     * 
     */
    delete<T extends UniversityRoleDeleteArgs>(args: SelectSubset<T, UniversityRoleDeleteArgs<ExtArgs>>): Prisma__UniversityRoleClient<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UniversityRole.
     * @param {UniversityRoleUpdateArgs} args - Arguments to update one UniversityRole.
     * @example
     * // Update one UniversityRole
     * const universityRole = await prisma.universityRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniversityRoleUpdateArgs>(args: SelectSubset<T, UniversityRoleUpdateArgs<ExtArgs>>): Prisma__UniversityRoleClient<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UniversityRoles.
     * @param {UniversityRoleDeleteManyArgs} args - Arguments to filter UniversityRoles to delete.
     * @example
     * // Delete a few UniversityRoles
     * const { count } = await prisma.universityRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniversityRoleDeleteManyArgs>(args?: SelectSubset<T, UniversityRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UniversityRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UniversityRoles
     * const universityRole = await prisma.universityRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniversityRoleUpdateManyArgs>(args: SelectSubset<T, UniversityRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UniversityRoles and returns the data updated in the database.
     * @param {UniversityRoleUpdateManyAndReturnArgs} args - Arguments to update many UniversityRoles.
     * @example
     * // Update many UniversityRoles
     * const universityRole = await prisma.universityRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UniversityRoles and only return the `id`
     * const universityRoleWithIdOnly = await prisma.universityRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UniversityRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UniversityRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UniversityRole.
     * @param {UniversityRoleUpsertArgs} args - Arguments to update or create a UniversityRole.
     * @example
     * // Update or create a UniversityRole
     * const universityRole = await prisma.universityRole.upsert({
     *   create: {
     *     // ... data to create a UniversityRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UniversityRole we want to update
     *   }
     * })
     */
    upsert<T extends UniversityRoleUpsertArgs>(args: SelectSubset<T, UniversityRoleUpsertArgs<ExtArgs>>): Prisma__UniversityRoleClient<$Result.GetResult<Prisma.$UniversityRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UniversityRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityRoleCountArgs} args - Arguments to filter UniversityRoles to count.
     * @example
     * // Count the number of UniversityRoles
     * const count = await prisma.universityRole.count({
     *   where: {
     *     // ... the filter for the UniversityRoles we want to count
     *   }
     * })
    **/
    count<T extends UniversityRoleCountArgs>(
      args?: Subset<T, UniversityRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversityRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UniversityRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UniversityRoleAggregateArgs>(args: Subset<T, UniversityRoleAggregateArgs>): Prisma.PrismaPromise<GetUniversityRoleAggregateType<T>>

    /**
     * Group by UniversityRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UniversityRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniversityRoleGroupByArgs['orderBy'] }
        : { orderBy?: UniversityRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UniversityRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversityRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UniversityRole model
   */
  readonly fields: UniversityRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UniversityRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniversityRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    university<T extends UniversityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversityDefaultArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UniversityRole model
   */
  interface UniversityRoleFieldRefs {
    readonly id: FieldRef<"UniversityRole", 'String'>
    readonly userId: FieldRef<"UniversityRole", 'String'>
    readonly universityId: FieldRef<"UniversityRole", 'String'>
    readonly role: FieldRef<"UniversityRole", 'Role'>
    readonly createdAt: FieldRef<"UniversityRole", 'DateTime'>
    readonly updatedAt: FieldRef<"UniversityRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UniversityRole findUnique
   */
  export type UniversityRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    /**
     * Filter, which UniversityRole to fetch.
     */
    where: UniversityRoleWhereUniqueInput
  }

  /**
   * UniversityRole findUniqueOrThrow
   */
  export type UniversityRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    /**
     * Filter, which UniversityRole to fetch.
     */
    where: UniversityRoleWhereUniqueInput
  }

  /**
   * UniversityRole findFirst
   */
  export type UniversityRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    /**
     * Filter, which UniversityRole to fetch.
     */
    where?: UniversityRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityRoles to fetch.
     */
    orderBy?: UniversityRoleOrderByWithRelationInput | UniversityRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniversityRoles.
     */
    cursor?: UniversityRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniversityRoles.
     */
    distinct?: UniversityRoleScalarFieldEnum | UniversityRoleScalarFieldEnum[]
  }

  /**
   * UniversityRole findFirstOrThrow
   */
  export type UniversityRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    /**
     * Filter, which UniversityRole to fetch.
     */
    where?: UniversityRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityRoles to fetch.
     */
    orderBy?: UniversityRoleOrderByWithRelationInput | UniversityRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniversityRoles.
     */
    cursor?: UniversityRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniversityRoles.
     */
    distinct?: UniversityRoleScalarFieldEnum | UniversityRoleScalarFieldEnum[]
  }

  /**
   * UniversityRole findMany
   */
  export type UniversityRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    /**
     * Filter, which UniversityRoles to fetch.
     */
    where?: UniversityRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityRoles to fetch.
     */
    orderBy?: UniversityRoleOrderByWithRelationInput | UniversityRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UniversityRoles.
     */
    cursor?: UniversityRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniversityRoles.
     */
    distinct?: UniversityRoleScalarFieldEnum | UniversityRoleScalarFieldEnum[]
  }

  /**
   * UniversityRole create
   */
  export type UniversityRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UniversityRole.
     */
    data: XOR<UniversityRoleCreateInput, UniversityRoleUncheckedCreateInput>
  }

  /**
   * UniversityRole createMany
   */
  export type UniversityRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UniversityRoles.
     */
    data: UniversityRoleCreateManyInput | UniversityRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UniversityRole createManyAndReturn
   */
  export type UniversityRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UniversityRoles.
     */
    data: UniversityRoleCreateManyInput | UniversityRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UniversityRole update
   */
  export type UniversityRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UniversityRole.
     */
    data: XOR<UniversityRoleUpdateInput, UniversityRoleUncheckedUpdateInput>
    /**
     * Choose, which UniversityRole to update.
     */
    where: UniversityRoleWhereUniqueInput
  }

  /**
   * UniversityRole updateMany
   */
  export type UniversityRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UniversityRoles.
     */
    data: XOR<UniversityRoleUpdateManyMutationInput, UniversityRoleUncheckedUpdateManyInput>
    /**
     * Filter which UniversityRoles to update
     */
    where?: UniversityRoleWhereInput
    /**
     * Limit how many UniversityRoles to update.
     */
    limit?: number
  }

  /**
   * UniversityRole updateManyAndReturn
   */
  export type UniversityRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * The data used to update UniversityRoles.
     */
    data: XOR<UniversityRoleUpdateManyMutationInput, UniversityRoleUncheckedUpdateManyInput>
    /**
     * Filter which UniversityRoles to update
     */
    where?: UniversityRoleWhereInput
    /**
     * Limit how many UniversityRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UniversityRole upsert
   */
  export type UniversityRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UniversityRole to update in case it exists.
     */
    where: UniversityRoleWhereUniqueInput
    /**
     * In case the UniversityRole found by the `where` argument doesn't exist, create a new UniversityRole with this data.
     */
    create: XOR<UniversityRoleCreateInput, UniversityRoleUncheckedCreateInput>
    /**
     * In case the UniversityRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniversityRoleUpdateInput, UniversityRoleUncheckedUpdateInput>
  }

  /**
   * UniversityRole delete
   */
  export type UniversityRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
    /**
     * Filter which UniversityRole to delete.
     */
    where: UniversityRoleWhereUniqueInput
  }

  /**
   * UniversityRole deleteMany
   */
  export type UniversityRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniversityRoles to delete
     */
    where?: UniversityRoleWhereInput
    /**
     * Limit how many UniversityRoles to delete.
     */
    limit?: number
  }

  /**
   * UniversityRole without action
   */
  export type UniversityRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityRole
     */
    select?: UniversityRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityRole
     */
    omit?: UniversityRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityRoleInclude<ExtArgs> | null
  }


  /**
   * Model GakusaiInterviewOffer
   */

  export type AggregateGakusaiInterviewOffer = {
    _count: GakusaiInterviewOfferCountAggregateOutputType | null
    _avg: GakusaiInterviewOfferAvgAggregateOutputType | null
    _sum: GakusaiInterviewOfferSumAggregateOutputType | null
    _min: GakusaiInterviewOfferMinAggregateOutputType | null
    _max: GakusaiInterviewOfferMaxAggregateOutputType | null
  }

  export type GakusaiInterviewOfferAvgAggregateOutputType = {
    year: number | null
  }

  export type GakusaiInterviewOfferSumAggregateOutputType = {
    year: number | null
  }

  export type GakusaiInterviewOfferMinAggregateOutputType = {
    id: string | null
    inviteToken: string | null
    chairpersonName: string | null
    university: string | null
    year: number | null
    status: string | null
    conversation: string | null
    articleId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GakusaiInterviewOfferMaxAggregateOutputType = {
    id: string | null
    inviteToken: string | null
    chairpersonName: string | null
    university: string | null
    year: number | null
    status: string | null
    conversation: string | null
    articleId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GakusaiInterviewOfferCountAggregateOutputType = {
    id: number
    inviteToken: number
    chairpersonName: number
    university: number
    year: number
    status: number
    conversation: number
    articleId: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GakusaiInterviewOfferAvgAggregateInputType = {
    year?: true
  }

  export type GakusaiInterviewOfferSumAggregateInputType = {
    year?: true
  }

  export type GakusaiInterviewOfferMinAggregateInputType = {
    id?: true
    inviteToken?: true
    chairpersonName?: true
    university?: true
    year?: true
    status?: true
    conversation?: true
    articleId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GakusaiInterviewOfferMaxAggregateInputType = {
    id?: true
    inviteToken?: true
    chairpersonName?: true
    university?: true
    year?: true
    status?: true
    conversation?: true
    articleId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GakusaiInterviewOfferCountAggregateInputType = {
    id?: true
    inviteToken?: true
    chairpersonName?: true
    university?: true
    year?: true
    status?: true
    conversation?: true
    articleId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GakusaiInterviewOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GakusaiInterviewOffer to aggregate.
     */
    where?: GakusaiInterviewOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiInterviewOffers to fetch.
     */
    orderBy?: GakusaiInterviewOfferOrderByWithRelationInput | GakusaiInterviewOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GakusaiInterviewOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiInterviewOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiInterviewOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GakusaiInterviewOffers
    **/
    _count?: true | GakusaiInterviewOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GakusaiInterviewOfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GakusaiInterviewOfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GakusaiInterviewOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GakusaiInterviewOfferMaxAggregateInputType
  }

  export type GetGakusaiInterviewOfferAggregateType<T extends GakusaiInterviewOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateGakusaiInterviewOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGakusaiInterviewOffer[P]>
      : GetScalarType<T[P], AggregateGakusaiInterviewOffer[P]>
  }




  export type GakusaiInterviewOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GakusaiInterviewOfferWhereInput
    orderBy?: GakusaiInterviewOfferOrderByWithAggregationInput | GakusaiInterviewOfferOrderByWithAggregationInput[]
    by: GakusaiInterviewOfferScalarFieldEnum[] | GakusaiInterviewOfferScalarFieldEnum
    having?: GakusaiInterviewOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GakusaiInterviewOfferCountAggregateInputType | true
    _avg?: GakusaiInterviewOfferAvgAggregateInputType
    _sum?: GakusaiInterviewOfferSumAggregateInputType
    _min?: GakusaiInterviewOfferMinAggregateInputType
    _max?: GakusaiInterviewOfferMaxAggregateInputType
  }

  export type GakusaiInterviewOfferGroupByOutputType = {
    id: string
    inviteToken: string
    chairpersonName: string
    university: string
    year: number
    status: string
    conversation: string | null
    articleId: string | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GakusaiInterviewOfferCountAggregateOutputType | null
    _avg: GakusaiInterviewOfferAvgAggregateOutputType | null
    _sum: GakusaiInterviewOfferSumAggregateOutputType | null
    _min: GakusaiInterviewOfferMinAggregateOutputType | null
    _max: GakusaiInterviewOfferMaxAggregateOutputType | null
  }

  type GetGakusaiInterviewOfferGroupByPayload<T extends GakusaiInterviewOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GakusaiInterviewOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GakusaiInterviewOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GakusaiInterviewOfferGroupByOutputType[P]>
            : GetScalarType<T[P], GakusaiInterviewOfferGroupByOutputType[P]>
        }
      >
    >


  export type GakusaiInterviewOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviteToken?: boolean
    chairpersonName?: boolean
    university?: boolean
    year?: boolean
    status?: boolean
    conversation?: boolean
    articleId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gakusaiInterviewOffer"]>

  export type GakusaiInterviewOfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviteToken?: boolean
    chairpersonName?: boolean
    university?: boolean
    year?: boolean
    status?: boolean
    conversation?: boolean
    articleId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gakusaiInterviewOffer"]>

  export type GakusaiInterviewOfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviteToken?: boolean
    chairpersonName?: boolean
    university?: boolean
    year?: boolean
    status?: boolean
    conversation?: boolean
    articleId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gakusaiInterviewOffer"]>

  export type GakusaiInterviewOfferSelectScalar = {
    id?: boolean
    inviteToken?: boolean
    chairpersonName?: boolean
    university?: boolean
    year?: boolean
    status?: boolean
    conversation?: boolean
    articleId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GakusaiInterviewOfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inviteToken" | "chairpersonName" | "university" | "year" | "status" | "conversation" | "articleId" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["gakusaiInterviewOffer"]>

  export type $GakusaiInterviewOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GakusaiInterviewOffer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inviteToken: string
      chairpersonName: string
      university: string
      year: number
      status: string
      conversation: string | null
      articleId: string | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gakusaiInterviewOffer"]>
    composites: {}
  }

  type GakusaiInterviewOfferGetPayload<S extends boolean | null | undefined | GakusaiInterviewOfferDefaultArgs> = $Result.GetResult<Prisma.$GakusaiInterviewOfferPayload, S>

  type GakusaiInterviewOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GakusaiInterviewOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GakusaiInterviewOfferCountAggregateInputType | true
    }

  export interface GakusaiInterviewOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GakusaiInterviewOffer'], meta: { name: 'GakusaiInterviewOffer' } }
    /**
     * Find zero or one GakusaiInterviewOffer that matches the filter.
     * @param {GakusaiInterviewOfferFindUniqueArgs} args - Arguments to find a GakusaiInterviewOffer
     * @example
     * // Get one GakusaiInterviewOffer
     * const gakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GakusaiInterviewOfferFindUniqueArgs>(args: SelectSubset<T, GakusaiInterviewOfferFindUniqueArgs<ExtArgs>>): Prisma__GakusaiInterviewOfferClient<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GakusaiInterviewOffer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GakusaiInterviewOfferFindUniqueOrThrowArgs} args - Arguments to find a GakusaiInterviewOffer
     * @example
     * // Get one GakusaiInterviewOffer
     * const gakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GakusaiInterviewOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, GakusaiInterviewOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GakusaiInterviewOfferClient<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GakusaiInterviewOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiInterviewOfferFindFirstArgs} args - Arguments to find a GakusaiInterviewOffer
     * @example
     * // Get one GakusaiInterviewOffer
     * const gakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GakusaiInterviewOfferFindFirstArgs>(args?: SelectSubset<T, GakusaiInterviewOfferFindFirstArgs<ExtArgs>>): Prisma__GakusaiInterviewOfferClient<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GakusaiInterviewOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiInterviewOfferFindFirstOrThrowArgs} args - Arguments to find a GakusaiInterviewOffer
     * @example
     * // Get one GakusaiInterviewOffer
     * const gakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GakusaiInterviewOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, GakusaiInterviewOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__GakusaiInterviewOfferClient<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GakusaiInterviewOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiInterviewOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GakusaiInterviewOffers
     * const gakusaiInterviewOffers = await prisma.gakusaiInterviewOffer.findMany()
     * 
     * // Get first 10 GakusaiInterviewOffers
     * const gakusaiInterviewOffers = await prisma.gakusaiInterviewOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gakusaiInterviewOfferWithIdOnly = await prisma.gakusaiInterviewOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GakusaiInterviewOfferFindManyArgs>(args?: SelectSubset<T, GakusaiInterviewOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GakusaiInterviewOffer.
     * @param {GakusaiInterviewOfferCreateArgs} args - Arguments to create a GakusaiInterviewOffer.
     * @example
     * // Create one GakusaiInterviewOffer
     * const GakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.create({
     *   data: {
     *     // ... data to create a GakusaiInterviewOffer
     *   }
     * })
     * 
     */
    create<T extends GakusaiInterviewOfferCreateArgs>(args: SelectSubset<T, GakusaiInterviewOfferCreateArgs<ExtArgs>>): Prisma__GakusaiInterviewOfferClient<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GakusaiInterviewOffers.
     * @param {GakusaiInterviewOfferCreateManyArgs} args - Arguments to create many GakusaiInterviewOffers.
     * @example
     * // Create many GakusaiInterviewOffers
     * const gakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GakusaiInterviewOfferCreateManyArgs>(args?: SelectSubset<T, GakusaiInterviewOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GakusaiInterviewOffers and returns the data saved in the database.
     * @param {GakusaiInterviewOfferCreateManyAndReturnArgs} args - Arguments to create many GakusaiInterviewOffers.
     * @example
     * // Create many GakusaiInterviewOffers
     * const gakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GakusaiInterviewOffers and only return the `id`
     * const gakusaiInterviewOfferWithIdOnly = await prisma.gakusaiInterviewOffer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GakusaiInterviewOfferCreateManyAndReturnArgs>(args?: SelectSubset<T, GakusaiInterviewOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GakusaiInterviewOffer.
     * @param {GakusaiInterviewOfferDeleteArgs} args - Arguments to delete one GakusaiInterviewOffer.
     * @example
     * // Delete one GakusaiInterviewOffer
     * const GakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.delete({
     *   where: {
     *     // ... filter to delete one GakusaiInterviewOffer
     *   }
     * })
     * 
     */
    delete<T extends GakusaiInterviewOfferDeleteArgs>(args: SelectSubset<T, GakusaiInterviewOfferDeleteArgs<ExtArgs>>): Prisma__GakusaiInterviewOfferClient<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GakusaiInterviewOffer.
     * @param {GakusaiInterviewOfferUpdateArgs} args - Arguments to update one GakusaiInterviewOffer.
     * @example
     * // Update one GakusaiInterviewOffer
     * const gakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GakusaiInterviewOfferUpdateArgs>(args: SelectSubset<T, GakusaiInterviewOfferUpdateArgs<ExtArgs>>): Prisma__GakusaiInterviewOfferClient<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GakusaiInterviewOffers.
     * @param {GakusaiInterviewOfferDeleteManyArgs} args - Arguments to filter GakusaiInterviewOffers to delete.
     * @example
     * // Delete a few GakusaiInterviewOffers
     * const { count } = await prisma.gakusaiInterviewOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GakusaiInterviewOfferDeleteManyArgs>(args?: SelectSubset<T, GakusaiInterviewOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GakusaiInterviewOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiInterviewOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GakusaiInterviewOffers
     * const gakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GakusaiInterviewOfferUpdateManyArgs>(args: SelectSubset<T, GakusaiInterviewOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GakusaiInterviewOffers and returns the data updated in the database.
     * @param {GakusaiInterviewOfferUpdateManyAndReturnArgs} args - Arguments to update many GakusaiInterviewOffers.
     * @example
     * // Update many GakusaiInterviewOffers
     * const gakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GakusaiInterviewOffers and only return the `id`
     * const gakusaiInterviewOfferWithIdOnly = await prisma.gakusaiInterviewOffer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GakusaiInterviewOfferUpdateManyAndReturnArgs>(args: SelectSubset<T, GakusaiInterviewOfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GakusaiInterviewOffer.
     * @param {GakusaiInterviewOfferUpsertArgs} args - Arguments to update or create a GakusaiInterviewOffer.
     * @example
     * // Update or create a GakusaiInterviewOffer
     * const gakusaiInterviewOffer = await prisma.gakusaiInterviewOffer.upsert({
     *   create: {
     *     // ... data to create a GakusaiInterviewOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GakusaiInterviewOffer we want to update
     *   }
     * })
     */
    upsert<T extends GakusaiInterviewOfferUpsertArgs>(args: SelectSubset<T, GakusaiInterviewOfferUpsertArgs<ExtArgs>>): Prisma__GakusaiInterviewOfferClient<$Result.GetResult<Prisma.$GakusaiInterviewOfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GakusaiInterviewOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiInterviewOfferCountArgs} args - Arguments to filter GakusaiInterviewOffers to count.
     * @example
     * // Count the number of GakusaiInterviewOffers
     * const count = await prisma.gakusaiInterviewOffer.count({
     *   where: {
     *     // ... the filter for the GakusaiInterviewOffers we want to count
     *   }
     * })
    **/
    count<T extends GakusaiInterviewOfferCountArgs>(
      args?: Subset<T, GakusaiInterviewOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GakusaiInterviewOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GakusaiInterviewOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiInterviewOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GakusaiInterviewOfferAggregateArgs>(args: Subset<T, GakusaiInterviewOfferAggregateArgs>): Prisma.PrismaPromise<GetGakusaiInterviewOfferAggregateType<T>>

    /**
     * Group by GakusaiInterviewOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiInterviewOfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GakusaiInterviewOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GakusaiInterviewOfferGroupByArgs['orderBy'] }
        : { orderBy?: GakusaiInterviewOfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GakusaiInterviewOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGakusaiInterviewOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GakusaiInterviewOffer model
   */
  readonly fields: GakusaiInterviewOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GakusaiInterviewOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GakusaiInterviewOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GakusaiInterviewOffer model
   */
  interface GakusaiInterviewOfferFieldRefs {
    readonly id: FieldRef<"GakusaiInterviewOffer", 'String'>
    readonly inviteToken: FieldRef<"GakusaiInterviewOffer", 'String'>
    readonly chairpersonName: FieldRef<"GakusaiInterviewOffer", 'String'>
    readonly university: FieldRef<"GakusaiInterviewOffer", 'String'>
    readonly year: FieldRef<"GakusaiInterviewOffer", 'Int'>
    readonly status: FieldRef<"GakusaiInterviewOffer", 'String'>
    readonly conversation: FieldRef<"GakusaiInterviewOffer", 'String'>
    readonly articleId: FieldRef<"GakusaiInterviewOffer", 'String'>
    readonly expiresAt: FieldRef<"GakusaiInterviewOffer", 'DateTime'>
    readonly createdAt: FieldRef<"GakusaiInterviewOffer", 'DateTime'>
    readonly updatedAt: FieldRef<"GakusaiInterviewOffer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GakusaiInterviewOffer findUnique
   */
  export type GakusaiInterviewOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * Filter, which GakusaiInterviewOffer to fetch.
     */
    where: GakusaiInterviewOfferWhereUniqueInput
  }

  /**
   * GakusaiInterviewOffer findUniqueOrThrow
   */
  export type GakusaiInterviewOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * Filter, which GakusaiInterviewOffer to fetch.
     */
    where: GakusaiInterviewOfferWhereUniqueInput
  }

  /**
   * GakusaiInterviewOffer findFirst
   */
  export type GakusaiInterviewOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * Filter, which GakusaiInterviewOffer to fetch.
     */
    where?: GakusaiInterviewOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiInterviewOffers to fetch.
     */
    orderBy?: GakusaiInterviewOfferOrderByWithRelationInput | GakusaiInterviewOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GakusaiInterviewOffers.
     */
    cursor?: GakusaiInterviewOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiInterviewOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiInterviewOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GakusaiInterviewOffers.
     */
    distinct?: GakusaiInterviewOfferScalarFieldEnum | GakusaiInterviewOfferScalarFieldEnum[]
  }

  /**
   * GakusaiInterviewOffer findFirstOrThrow
   */
  export type GakusaiInterviewOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * Filter, which GakusaiInterviewOffer to fetch.
     */
    where?: GakusaiInterviewOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiInterviewOffers to fetch.
     */
    orderBy?: GakusaiInterviewOfferOrderByWithRelationInput | GakusaiInterviewOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GakusaiInterviewOffers.
     */
    cursor?: GakusaiInterviewOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiInterviewOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiInterviewOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GakusaiInterviewOffers.
     */
    distinct?: GakusaiInterviewOfferScalarFieldEnum | GakusaiInterviewOfferScalarFieldEnum[]
  }

  /**
   * GakusaiInterviewOffer findMany
   */
  export type GakusaiInterviewOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * Filter, which GakusaiInterviewOffers to fetch.
     */
    where?: GakusaiInterviewOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiInterviewOffers to fetch.
     */
    orderBy?: GakusaiInterviewOfferOrderByWithRelationInput | GakusaiInterviewOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GakusaiInterviewOffers.
     */
    cursor?: GakusaiInterviewOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiInterviewOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiInterviewOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GakusaiInterviewOffers.
     */
    distinct?: GakusaiInterviewOfferScalarFieldEnum | GakusaiInterviewOfferScalarFieldEnum[]
  }

  /**
   * GakusaiInterviewOffer create
   */
  export type GakusaiInterviewOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * The data needed to create a GakusaiInterviewOffer.
     */
    data: XOR<GakusaiInterviewOfferCreateInput, GakusaiInterviewOfferUncheckedCreateInput>
  }

  /**
   * GakusaiInterviewOffer createMany
   */
  export type GakusaiInterviewOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GakusaiInterviewOffers.
     */
    data: GakusaiInterviewOfferCreateManyInput | GakusaiInterviewOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GakusaiInterviewOffer createManyAndReturn
   */
  export type GakusaiInterviewOfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * The data used to create many GakusaiInterviewOffers.
     */
    data: GakusaiInterviewOfferCreateManyInput | GakusaiInterviewOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GakusaiInterviewOffer update
   */
  export type GakusaiInterviewOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * The data needed to update a GakusaiInterviewOffer.
     */
    data: XOR<GakusaiInterviewOfferUpdateInput, GakusaiInterviewOfferUncheckedUpdateInput>
    /**
     * Choose, which GakusaiInterviewOffer to update.
     */
    where: GakusaiInterviewOfferWhereUniqueInput
  }

  /**
   * GakusaiInterviewOffer updateMany
   */
  export type GakusaiInterviewOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GakusaiInterviewOffers.
     */
    data: XOR<GakusaiInterviewOfferUpdateManyMutationInput, GakusaiInterviewOfferUncheckedUpdateManyInput>
    /**
     * Filter which GakusaiInterviewOffers to update
     */
    where?: GakusaiInterviewOfferWhereInput
    /**
     * Limit how many GakusaiInterviewOffers to update.
     */
    limit?: number
  }

  /**
   * GakusaiInterviewOffer updateManyAndReturn
   */
  export type GakusaiInterviewOfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * The data used to update GakusaiInterviewOffers.
     */
    data: XOR<GakusaiInterviewOfferUpdateManyMutationInput, GakusaiInterviewOfferUncheckedUpdateManyInput>
    /**
     * Filter which GakusaiInterviewOffers to update
     */
    where?: GakusaiInterviewOfferWhereInput
    /**
     * Limit how many GakusaiInterviewOffers to update.
     */
    limit?: number
  }

  /**
   * GakusaiInterviewOffer upsert
   */
  export type GakusaiInterviewOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * The filter to search for the GakusaiInterviewOffer to update in case it exists.
     */
    where: GakusaiInterviewOfferWhereUniqueInput
    /**
     * In case the GakusaiInterviewOffer found by the `where` argument doesn't exist, create a new GakusaiInterviewOffer with this data.
     */
    create: XOR<GakusaiInterviewOfferCreateInput, GakusaiInterviewOfferUncheckedCreateInput>
    /**
     * In case the GakusaiInterviewOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GakusaiInterviewOfferUpdateInput, GakusaiInterviewOfferUncheckedUpdateInput>
  }

  /**
   * GakusaiInterviewOffer delete
   */
  export type GakusaiInterviewOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
    /**
     * Filter which GakusaiInterviewOffer to delete.
     */
    where: GakusaiInterviewOfferWhereUniqueInput
  }

  /**
   * GakusaiInterviewOffer deleteMany
   */
  export type GakusaiInterviewOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GakusaiInterviewOffers to delete
     */
    where?: GakusaiInterviewOfferWhereInput
    /**
     * Limit how many GakusaiInterviewOffers to delete.
     */
    limit?: number
  }

  /**
   * GakusaiInterviewOffer without action
   */
  export type GakusaiInterviewOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiInterviewOffer
     */
    select?: GakusaiInterviewOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiInterviewOffer
     */
    omit?: GakusaiInterviewOfferOmit<ExtArgs> | null
  }


  /**
   * Model GakusaiArticle
   */

  export type AggregateGakusaiArticle = {
    _count: GakusaiArticleCountAggregateOutputType | null
    _avg: GakusaiArticleAvgAggregateOutputType | null
    _sum: GakusaiArticleSumAggregateOutputType | null
    _min: GakusaiArticleMinAggregateOutputType | null
    _max: GakusaiArticleMaxAggregateOutputType | null
  }

  export type GakusaiArticleAvgAggregateOutputType = {
    year: number | null
  }

  export type GakusaiArticleSumAggregateOutputType = {
    year: number | null
  }

  export type GakusaiArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    excerpt: string | null
    chairpersonName: string | null
    university: string | null
    year: number | null
    thumbnailUrl: string | null
    status: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GakusaiArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    excerpt: string | null
    chairpersonName: string | null
    university: string | null
    year: number | null
    thumbnailUrl: string | null
    status: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GakusaiArticleCountAggregateOutputType = {
    id: number
    title: number
    excerpt: number
    chairpersonName: number
    university: number
    year: number
    thumbnailUrl: number
    status: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GakusaiArticleAvgAggregateInputType = {
    year?: true
  }

  export type GakusaiArticleSumAggregateInputType = {
    year?: true
  }

  export type GakusaiArticleMinAggregateInputType = {
    id?: true
    title?: true
    excerpt?: true
    chairpersonName?: true
    university?: true
    year?: true
    thumbnailUrl?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GakusaiArticleMaxAggregateInputType = {
    id?: true
    title?: true
    excerpt?: true
    chairpersonName?: true
    university?: true
    year?: true
    thumbnailUrl?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GakusaiArticleCountAggregateInputType = {
    id?: true
    title?: true
    excerpt?: true
    chairpersonName?: true
    university?: true
    year?: true
    thumbnailUrl?: true
    status?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GakusaiArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GakusaiArticle to aggregate.
     */
    where?: GakusaiArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiArticles to fetch.
     */
    orderBy?: GakusaiArticleOrderByWithRelationInput | GakusaiArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GakusaiArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GakusaiArticles
    **/
    _count?: true | GakusaiArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GakusaiArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GakusaiArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GakusaiArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GakusaiArticleMaxAggregateInputType
  }

  export type GetGakusaiArticleAggregateType<T extends GakusaiArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateGakusaiArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGakusaiArticle[P]>
      : GetScalarType<T[P], AggregateGakusaiArticle[P]>
  }




  export type GakusaiArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GakusaiArticleWhereInput
    orderBy?: GakusaiArticleOrderByWithAggregationInput | GakusaiArticleOrderByWithAggregationInput[]
    by: GakusaiArticleScalarFieldEnum[] | GakusaiArticleScalarFieldEnum
    having?: GakusaiArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GakusaiArticleCountAggregateInputType | true
    _avg?: GakusaiArticleAvgAggregateInputType
    _sum?: GakusaiArticleSumAggregateInputType
    _min?: GakusaiArticleMinAggregateInputType
    _max?: GakusaiArticleMaxAggregateInputType
  }

  export type GakusaiArticleGroupByOutputType = {
    id: string
    title: string
    excerpt: string
    chairpersonName: string
    university: string
    year: number
    thumbnailUrl: string
    status: string
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GakusaiArticleCountAggregateOutputType | null
    _avg: GakusaiArticleAvgAggregateOutputType | null
    _sum: GakusaiArticleSumAggregateOutputType | null
    _min: GakusaiArticleMinAggregateOutputType | null
    _max: GakusaiArticleMaxAggregateOutputType | null
  }

  type GetGakusaiArticleGroupByPayload<T extends GakusaiArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GakusaiArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GakusaiArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GakusaiArticleGroupByOutputType[P]>
            : GetScalarType<T[P], GakusaiArticleGroupByOutputType[P]>
        }
      >
    >


  export type GakusaiArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    excerpt?: boolean
    chairpersonName?: boolean
    university?: boolean
    year?: boolean
    thumbnailUrl?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sections?: boolean | GakusaiArticle$sectionsArgs<ExtArgs>
    _count?: boolean | GakusaiArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gakusaiArticle"]>

  export type GakusaiArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    excerpt?: boolean
    chairpersonName?: boolean
    university?: boolean
    year?: boolean
    thumbnailUrl?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gakusaiArticle"]>

  export type GakusaiArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    excerpt?: boolean
    chairpersonName?: boolean
    university?: boolean
    year?: boolean
    thumbnailUrl?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gakusaiArticle"]>

  export type GakusaiArticleSelectScalar = {
    id?: boolean
    title?: boolean
    excerpt?: boolean
    chairpersonName?: boolean
    university?: boolean
    year?: boolean
    thumbnailUrl?: boolean
    status?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GakusaiArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "excerpt" | "chairpersonName" | "university" | "year" | "thumbnailUrl" | "status" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["gakusaiArticle"]>
  export type GakusaiArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | GakusaiArticle$sectionsArgs<ExtArgs>
    _count?: boolean | GakusaiArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GakusaiArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GakusaiArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GakusaiArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GakusaiArticle"
    objects: {
      sections: Prisma.$GakusaiArticleSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      excerpt: string
      chairpersonName: string
      university: string
      year: number
      thumbnailUrl: string
      status: string
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gakusaiArticle"]>
    composites: {}
  }

  type GakusaiArticleGetPayload<S extends boolean | null | undefined | GakusaiArticleDefaultArgs> = $Result.GetResult<Prisma.$GakusaiArticlePayload, S>

  type GakusaiArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GakusaiArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GakusaiArticleCountAggregateInputType | true
    }

  export interface GakusaiArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GakusaiArticle'], meta: { name: 'GakusaiArticle' } }
    /**
     * Find zero or one GakusaiArticle that matches the filter.
     * @param {GakusaiArticleFindUniqueArgs} args - Arguments to find a GakusaiArticle
     * @example
     * // Get one GakusaiArticle
     * const gakusaiArticle = await prisma.gakusaiArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GakusaiArticleFindUniqueArgs>(args: SelectSubset<T, GakusaiArticleFindUniqueArgs<ExtArgs>>): Prisma__GakusaiArticleClient<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GakusaiArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GakusaiArticleFindUniqueOrThrowArgs} args - Arguments to find a GakusaiArticle
     * @example
     * // Get one GakusaiArticle
     * const gakusaiArticle = await prisma.gakusaiArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GakusaiArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, GakusaiArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GakusaiArticleClient<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GakusaiArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleFindFirstArgs} args - Arguments to find a GakusaiArticle
     * @example
     * // Get one GakusaiArticle
     * const gakusaiArticle = await prisma.gakusaiArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GakusaiArticleFindFirstArgs>(args?: SelectSubset<T, GakusaiArticleFindFirstArgs<ExtArgs>>): Prisma__GakusaiArticleClient<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GakusaiArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleFindFirstOrThrowArgs} args - Arguments to find a GakusaiArticle
     * @example
     * // Get one GakusaiArticle
     * const gakusaiArticle = await prisma.gakusaiArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GakusaiArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, GakusaiArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__GakusaiArticleClient<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GakusaiArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GakusaiArticles
     * const gakusaiArticles = await prisma.gakusaiArticle.findMany()
     * 
     * // Get first 10 GakusaiArticles
     * const gakusaiArticles = await prisma.gakusaiArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gakusaiArticleWithIdOnly = await prisma.gakusaiArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GakusaiArticleFindManyArgs>(args?: SelectSubset<T, GakusaiArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GakusaiArticle.
     * @param {GakusaiArticleCreateArgs} args - Arguments to create a GakusaiArticle.
     * @example
     * // Create one GakusaiArticle
     * const GakusaiArticle = await prisma.gakusaiArticle.create({
     *   data: {
     *     // ... data to create a GakusaiArticle
     *   }
     * })
     * 
     */
    create<T extends GakusaiArticleCreateArgs>(args: SelectSubset<T, GakusaiArticleCreateArgs<ExtArgs>>): Prisma__GakusaiArticleClient<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GakusaiArticles.
     * @param {GakusaiArticleCreateManyArgs} args - Arguments to create many GakusaiArticles.
     * @example
     * // Create many GakusaiArticles
     * const gakusaiArticle = await prisma.gakusaiArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GakusaiArticleCreateManyArgs>(args?: SelectSubset<T, GakusaiArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GakusaiArticles and returns the data saved in the database.
     * @param {GakusaiArticleCreateManyAndReturnArgs} args - Arguments to create many GakusaiArticles.
     * @example
     * // Create many GakusaiArticles
     * const gakusaiArticle = await prisma.gakusaiArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GakusaiArticles and only return the `id`
     * const gakusaiArticleWithIdOnly = await prisma.gakusaiArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GakusaiArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, GakusaiArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GakusaiArticle.
     * @param {GakusaiArticleDeleteArgs} args - Arguments to delete one GakusaiArticle.
     * @example
     * // Delete one GakusaiArticle
     * const GakusaiArticle = await prisma.gakusaiArticle.delete({
     *   where: {
     *     // ... filter to delete one GakusaiArticle
     *   }
     * })
     * 
     */
    delete<T extends GakusaiArticleDeleteArgs>(args: SelectSubset<T, GakusaiArticleDeleteArgs<ExtArgs>>): Prisma__GakusaiArticleClient<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GakusaiArticle.
     * @param {GakusaiArticleUpdateArgs} args - Arguments to update one GakusaiArticle.
     * @example
     * // Update one GakusaiArticle
     * const gakusaiArticle = await prisma.gakusaiArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GakusaiArticleUpdateArgs>(args: SelectSubset<T, GakusaiArticleUpdateArgs<ExtArgs>>): Prisma__GakusaiArticleClient<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GakusaiArticles.
     * @param {GakusaiArticleDeleteManyArgs} args - Arguments to filter GakusaiArticles to delete.
     * @example
     * // Delete a few GakusaiArticles
     * const { count } = await prisma.gakusaiArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GakusaiArticleDeleteManyArgs>(args?: SelectSubset<T, GakusaiArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GakusaiArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GakusaiArticles
     * const gakusaiArticle = await prisma.gakusaiArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GakusaiArticleUpdateManyArgs>(args: SelectSubset<T, GakusaiArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GakusaiArticles and returns the data updated in the database.
     * @param {GakusaiArticleUpdateManyAndReturnArgs} args - Arguments to update many GakusaiArticles.
     * @example
     * // Update many GakusaiArticles
     * const gakusaiArticle = await prisma.gakusaiArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GakusaiArticles and only return the `id`
     * const gakusaiArticleWithIdOnly = await prisma.gakusaiArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GakusaiArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, GakusaiArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GakusaiArticle.
     * @param {GakusaiArticleUpsertArgs} args - Arguments to update or create a GakusaiArticle.
     * @example
     * // Update or create a GakusaiArticle
     * const gakusaiArticle = await prisma.gakusaiArticle.upsert({
     *   create: {
     *     // ... data to create a GakusaiArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GakusaiArticle we want to update
     *   }
     * })
     */
    upsert<T extends GakusaiArticleUpsertArgs>(args: SelectSubset<T, GakusaiArticleUpsertArgs<ExtArgs>>): Prisma__GakusaiArticleClient<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GakusaiArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleCountArgs} args - Arguments to filter GakusaiArticles to count.
     * @example
     * // Count the number of GakusaiArticles
     * const count = await prisma.gakusaiArticle.count({
     *   where: {
     *     // ... the filter for the GakusaiArticles we want to count
     *   }
     * })
    **/
    count<T extends GakusaiArticleCountArgs>(
      args?: Subset<T, GakusaiArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GakusaiArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GakusaiArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GakusaiArticleAggregateArgs>(args: Subset<T, GakusaiArticleAggregateArgs>): Prisma.PrismaPromise<GetGakusaiArticleAggregateType<T>>

    /**
     * Group by GakusaiArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GakusaiArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GakusaiArticleGroupByArgs['orderBy'] }
        : { orderBy?: GakusaiArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GakusaiArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGakusaiArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GakusaiArticle model
   */
  readonly fields: GakusaiArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GakusaiArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GakusaiArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends GakusaiArticle$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, GakusaiArticle$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GakusaiArticle model
   */
  interface GakusaiArticleFieldRefs {
    readonly id: FieldRef<"GakusaiArticle", 'String'>
    readonly title: FieldRef<"GakusaiArticle", 'String'>
    readonly excerpt: FieldRef<"GakusaiArticle", 'String'>
    readonly chairpersonName: FieldRef<"GakusaiArticle", 'String'>
    readonly university: FieldRef<"GakusaiArticle", 'String'>
    readonly year: FieldRef<"GakusaiArticle", 'Int'>
    readonly thumbnailUrl: FieldRef<"GakusaiArticle", 'String'>
    readonly status: FieldRef<"GakusaiArticle", 'String'>
    readonly publishedAt: FieldRef<"GakusaiArticle", 'DateTime'>
    readonly createdAt: FieldRef<"GakusaiArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"GakusaiArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GakusaiArticle findUnique
   */
  export type GakusaiArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleInclude<ExtArgs> | null
    /**
     * Filter, which GakusaiArticle to fetch.
     */
    where: GakusaiArticleWhereUniqueInput
  }

  /**
   * GakusaiArticle findUniqueOrThrow
   */
  export type GakusaiArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleInclude<ExtArgs> | null
    /**
     * Filter, which GakusaiArticle to fetch.
     */
    where: GakusaiArticleWhereUniqueInput
  }

  /**
   * GakusaiArticle findFirst
   */
  export type GakusaiArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleInclude<ExtArgs> | null
    /**
     * Filter, which GakusaiArticle to fetch.
     */
    where?: GakusaiArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiArticles to fetch.
     */
    orderBy?: GakusaiArticleOrderByWithRelationInput | GakusaiArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GakusaiArticles.
     */
    cursor?: GakusaiArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GakusaiArticles.
     */
    distinct?: GakusaiArticleScalarFieldEnum | GakusaiArticleScalarFieldEnum[]
  }

  /**
   * GakusaiArticle findFirstOrThrow
   */
  export type GakusaiArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleInclude<ExtArgs> | null
    /**
     * Filter, which GakusaiArticle to fetch.
     */
    where?: GakusaiArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiArticles to fetch.
     */
    orderBy?: GakusaiArticleOrderByWithRelationInput | GakusaiArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GakusaiArticles.
     */
    cursor?: GakusaiArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GakusaiArticles.
     */
    distinct?: GakusaiArticleScalarFieldEnum | GakusaiArticleScalarFieldEnum[]
  }

  /**
   * GakusaiArticle findMany
   */
  export type GakusaiArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleInclude<ExtArgs> | null
    /**
     * Filter, which GakusaiArticles to fetch.
     */
    where?: GakusaiArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiArticles to fetch.
     */
    orderBy?: GakusaiArticleOrderByWithRelationInput | GakusaiArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GakusaiArticles.
     */
    cursor?: GakusaiArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GakusaiArticles.
     */
    distinct?: GakusaiArticleScalarFieldEnum | GakusaiArticleScalarFieldEnum[]
  }

  /**
   * GakusaiArticle create
   */
  export type GakusaiArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a GakusaiArticle.
     */
    data: XOR<GakusaiArticleCreateInput, GakusaiArticleUncheckedCreateInput>
  }

  /**
   * GakusaiArticle createMany
   */
  export type GakusaiArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GakusaiArticles.
     */
    data: GakusaiArticleCreateManyInput | GakusaiArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GakusaiArticle createManyAndReturn
   */
  export type GakusaiArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * The data used to create many GakusaiArticles.
     */
    data: GakusaiArticleCreateManyInput | GakusaiArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GakusaiArticle update
   */
  export type GakusaiArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a GakusaiArticle.
     */
    data: XOR<GakusaiArticleUpdateInput, GakusaiArticleUncheckedUpdateInput>
    /**
     * Choose, which GakusaiArticle to update.
     */
    where: GakusaiArticleWhereUniqueInput
  }

  /**
   * GakusaiArticle updateMany
   */
  export type GakusaiArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GakusaiArticles.
     */
    data: XOR<GakusaiArticleUpdateManyMutationInput, GakusaiArticleUncheckedUpdateManyInput>
    /**
     * Filter which GakusaiArticles to update
     */
    where?: GakusaiArticleWhereInput
    /**
     * Limit how many GakusaiArticles to update.
     */
    limit?: number
  }

  /**
   * GakusaiArticle updateManyAndReturn
   */
  export type GakusaiArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * The data used to update GakusaiArticles.
     */
    data: XOR<GakusaiArticleUpdateManyMutationInput, GakusaiArticleUncheckedUpdateManyInput>
    /**
     * Filter which GakusaiArticles to update
     */
    where?: GakusaiArticleWhereInput
    /**
     * Limit how many GakusaiArticles to update.
     */
    limit?: number
  }

  /**
   * GakusaiArticle upsert
   */
  export type GakusaiArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the GakusaiArticle to update in case it exists.
     */
    where: GakusaiArticleWhereUniqueInput
    /**
     * In case the GakusaiArticle found by the `where` argument doesn't exist, create a new GakusaiArticle with this data.
     */
    create: XOR<GakusaiArticleCreateInput, GakusaiArticleUncheckedCreateInput>
    /**
     * In case the GakusaiArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GakusaiArticleUpdateInput, GakusaiArticleUncheckedUpdateInput>
  }

  /**
   * GakusaiArticle delete
   */
  export type GakusaiArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleInclude<ExtArgs> | null
    /**
     * Filter which GakusaiArticle to delete.
     */
    where: GakusaiArticleWhereUniqueInput
  }

  /**
   * GakusaiArticle deleteMany
   */
  export type GakusaiArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GakusaiArticles to delete
     */
    where?: GakusaiArticleWhereInput
    /**
     * Limit how many GakusaiArticles to delete.
     */
    limit?: number
  }

  /**
   * GakusaiArticle.sections
   */
  export type GakusaiArticle$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
    where?: GakusaiArticleSectionWhereInput
    orderBy?: GakusaiArticleSectionOrderByWithRelationInput | GakusaiArticleSectionOrderByWithRelationInput[]
    cursor?: GakusaiArticleSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GakusaiArticleSectionScalarFieldEnum | GakusaiArticleSectionScalarFieldEnum[]
  }

  /**
   * GakusaiArticle without action
   */
  export type GakusaiArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticle
     */
    select?: GakusaiArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticle
     */
    omit?: GakusaiArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleInclude<ExtArgs> | null
  }


  /**
   * Model GakusaiArticleSection
   */

  export type AggregateGakusaiArticleSection = {
    _count: GakusaiArticleSectionCountAggregateOutputType | null
    _avg: GakusaiArticleSectionAvgAggregateOutputType | null
    _sum: GakusaiArticleSectionSumAggregateOutputType | null
    _min: GakusaiArticleSectionMinAggregateOutputType | null
    _max: GakusaiArticleSectionMaxAggregateOutputType | null
  }

  export type GakusaiArticleSectionAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type GakusaiArticleSectionSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type GakusaiArticleSectionMinAggregateOutputType = {
    id: string | null
    articleId: string | null
    heading: string | null
    content: string | null
    imageUrl: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GakusaiArticleSectionMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    heading: string | null
    content: string | null
    imageUrl: string | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GakusaiArticleSectionCountAggregateOutputType = {
    id: number
    articleId: number
    heading: number
    content: number
    imageUrl: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GakusaiArticleSectionAvgAggregateInputType = {
    displayOrder?: true
  }

  export type GakusaiArticleSectionSumAggregateInputType = {
    displayOrder?: true
  }

  export type GakusaiArticleSectionMinAggregateInputType = {
    id?: true
    articleId?: true
    heading?: true
    content?: true
    imageUrl?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GakusaiArticleSectionMaxAggregateInputType = {
    id?: true
    articleId?: true
    heading?: true
    content?: true
    imageUrl?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GakusaiArticleSectionCountAggregateInputType = {
    id?: true
    articleId?: true
    heading?: true
    content?: true
    imageUrl?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GakusaiArticleSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GakusaiArticleSection to aggregate.
     */
    where?: GakusaiArticleSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiArticleSections to fetch.
     */
    orderBy?: GakusaiArticleSectionOrderByWithRelationInput | GakusaiArticleSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GakusaiArticleSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiArticleSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiArticleSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GakusaiArticleSections
    **/
    _count?: true | GakusaiArticleSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GakusaiArticleSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GakusaiArticleSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GakusaiArticleSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GakusaiArticleSectionMaxAggregateInputType
  }

  export type GetGakusaiArticleSectionAggregateType<T extends GakusaiArticleSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateGakusaiArticleSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGakusaiArticleSection[P]>
      : GetScalarType<T[P], AggregateGakusaiArticleSection[P]>
  }




  export type GakusaiArticleSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GakusaiArticleSectionWhereInput
    orderBy?: GakusaiArticleSectionOrderByWithAggregationInput | GakusaiArticleSectionOrderByWithAggregationInput[]
    by: GakusaiArticleSectionScalarFieldEnum[] | GakusaiArticleSectionScalarFieldEnum
    having?: GakusaiArticleSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GakusaiArticleSectionCountAggregateInputType | true
    _avg?: GakusaiArticleSectionAvgAggregateInputType
    _sum?: GakusaiArticleSectionSumAggregateInputType
    _min?: GakusaiArticleSectionMinAggregateInputType
    _max?: GakusaiArticleSectionMaxAggregateInputType
  }

  export type GakusaiArticleSectionGroupByOutputType = {
    id: string
    articleId: string
    heading: string
    content: string
    imageUrl: string | null
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    _count: GakusaiArticleSectionCountAggregateOutputType | null
    _avg: GakusaiArticleSectionAvgAggregateOutputType | null
    _sum: GakusaiArticleSectionSumAggregateOutputType | null
    _min: GakusaiArticleSectionMinAggregateOutputType | null
    _max: GakusaiArticleSectionMaxAggregateOutputType | null
  }

  type GetGakusaiArticleSectionGroupByPayload<T extends GakusaiArticleSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GakusaiArticleSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GakusaiArticleSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GakusaiArticleSectionGroupByOutputType[P]>
            : GetScalarType<T[P], GakusaiArticleSectionGroupByOutputType[P]>
        }
      >
    >


  export type GakusaiArticleSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    heading?: boolean
    content?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | GakusaiArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gakusaiArticleSection"]>

  export type GakusaiArticleSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    heading?: boolean
    content?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | GakusaiArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gakusaiArticleSection"]>

  export type GakusaiArticleSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    heading?: boolean
    content?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | GakusaiArticleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gakusaiArticleSection"]>

  export type GakusaiArticleSectionSelectScalar = {
    id?: boolean
    articleId?: boolean
    heading?: boolean
    content?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GakusaiArticleSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "heading" | "content" | "imageUrl" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["gakusaiArticleSection"]>
  export type GakusaiArticleSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | GakusaiArticleDefaultArgs<ExtArgs>
  }
  export type GakusaiArticleSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | GakusaiArticleDefaultArgs<ExtArgs>
  }
  export type GakusaiArticleSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | GakusaiArticleDefaultArgs<ExtArgs>
  }

  export type $GakusaiArticleSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GakusaiArticleSection"
    objects: {
      article: Prisma.$GakusaiArticlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string
      heading: string
      content: string
      imageUrl: string | null
      displayOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gakusaiArticleSection"]>
    composites: {}
  }

  type GakusaiArticleSectionGetPayload<S extends boolean | null | undefined | GakusaiArticleSectionDefaultArgs> = $Result.GetResult<Prisma.$GakusaiArticleSectionPayload, S>

  type GakusaiArticleSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GakusaiArticleSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GakusaiArticleSectionCountAggregateInputType | true
    }

  export interface GakusaiArticleSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GakusaiArticleSection'], meta: { name: 'GakusaiArticleSection' } }
    /**
     * Find zero or one GakusaiArticleSection that matches the filter.
     * @param {GakusaiArticleSectionFindUniqueArgs} args - Arguments to find a GakusaiArticleSection
     * @example
     * // Get one GakusaiArticleSection
     * const gakusaiArticleSection = await prisma.gakusaiArticleSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GakusaiArticleSectionFindUniqueArgs>(args: SelectSubset<T, GakusaiArticleSectionFindUniqueArgs<ExtArgs>>): Prisma__GakusaiArticleSectionClient<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GakusaiArticleSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GakusaiArticleSectionFindUniqueOrThrowArgs} args - Arguments to find a GakusaiArticleSection
     * @example
     * // Get one GakusaiArticleSection
     * const gakusaiArticleSection = await prisma.gakusaiArticleSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GakusaiArticleSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, GakusaiArticleSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GakusaiArticleSectionClient<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GakusaiArticleSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleSectionFindFirstArgs} args - Arguments to find a GakusaiArticleSection
     * @example
     * // Get one GakusaiArticleSection
     * const gakusaiArticleSection = await prisma.gakusaiArticleSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GakusaiArticleSectionFindFirstArgs>(args?: SelectSubset<T, GakusaiArticleSectionFindFirstArgs<ExtArgs>>): Prisma__GakusaiArticleSectionClient<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GakusaiArticleSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleSectionFindFirstOrThrowArgs} args - Arguments to find a GakusaiArticleSection
     * @example
     * // Get one GakusaiArticleSection
     * const gakusaiArticleSection = await prisma.gakusaiArticleSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GakusaiArticleSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, GakusaiArticleSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GakusaiArticleSectionClient<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GakusaiArticleSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GakusaiArticleSections
     * const gakusaiArticleSections = await prisma.gakusaiArticleSection.findMany()
     * 
     * // Get first 10 GakusaiArticleSections
     * const gakusaiArticleSections = await prisma.gakusaiArticleSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gakusaiArticleSectionWithIdOnly = await prisma.gakusaiArticleSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GakusaiArticleSectionFindManyArgs>(args?: SelectSubset<T, GakusaiArticleSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GakusaiArticleSection.
     * @param {GakusaiArticleSectionCreateArgs} args - Arguments to create a GakusaiArticleSection.
     * @example
     * // Create one GakusaiArticleSection
     * const GakusaiArticleSection = await prisma.gakusaiArticleSection.create({
     *   data: {
     *     // ... data to create a GakusaiArticleSection
     *   }
     * })
     * 
     */
    create<T extends GakusaiArticleSectionCreateArgs>(args: SelectSubset<T, GakusaiArticleSectionCreateArgs<ExtArgs>>): Prisma__GakusaiArticleSectionClient<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GakusaiArticleSections.
     * @param {GakusaiArticleSectionCreateManyArgs} args - Arguments to create many GakusaiArticleSections.
     * @example
     * // Create many GakusaiArticleSections
     * const gakusaiArticleSection = await prisma.gakusaiArticleSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GakusaiArticleSectionCreateManyArgs>(args?: SelectSubset<T, GakusaiArticleSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GakusaiArticleSections and returns the data saved in the database.
     * @param {GakusaiArticleSectionCreateManyAndReturnArgs} args - Arguments to create many GakusaiArticleSections.
     * @example
     * // Create many GakusaiArticleSections
     * const gakusaiArticleSection = await prisma.gakusaiArticleSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GakusaiArticleSections and only return the `id`
     * const gakusaiArticleSectionWithIdOnly = await prisma.gakusaiArticleSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GakusaiArticleSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, GakusaiArticleSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GakusaiArticleSection.
     * @param {GakusaiArticleSectionDeleteArgs} args - Arguments to delete one GakusaiArticleSection.
     * @example
     * // Delete one GakusaiArticleSection
     * const GakusaiArticleSection = await prisma.gakusaiArticleSection.delete({
     *   where: {
     *     // ... filter to delete one GakusaiArticleSection
     *   }
     * })
     * 
     */
    delete<T extends GakusaiArticleSectionDeleteArgs>(args: SelectSubset<T, GakusaiArticleSectionDeleteArgs<ExtArgs>>): Prisma__GakusaiArticleSectionClient<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GakusaiArticleSection.
     * @param {GakusaiArticleSectionUpdateArgs} args - Arguments to update one GakusaiArticleSection.
     * @example
     * // Update one GakusaiArticleSection
     * const gakusaiArticleSection = await prisma.gakusaiArticleSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GakusaiArticleSectionUpdateArgs>(args: SelectSubset<T, GakusaiArticleSectionUpdateArgs<ExtArgs>>): Prisma__GakusaiArticleSectionClient<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GakusaiArticleSections.
     * @param {GakusaiArticleSectionDeleteManyArgs} args - Arguments to filter GakusaiArticleSections to delete.
     * @example
     * // Delete a few GakusaiArticleSections
     * const { count } = await prisma.gakusaiArticleSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GakusaiArticleSectionDeleteManyArgs>(args?: SelectSubset<T, GakusaiArticleSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GakusaiArticleSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GakusaiArticleSections
     * const gakusaiArticleSection = await prisma.gakusaiArticleSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GakusaiArticleSectionUpdateManyArgs>(args: SelectSubset<T, GakusaiArticleSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GakusaiArticleSections and returns the data updated in the database.
     * @param {GakusaiArticleSectionUpdateManyAndReturnArgs} args - Arguments to update many GakusaiArticleSections.
     * @example
     * // Update many GakusaiArticleSections
     * const gakusaiArticleSection = await prisma.gakusaiArticleSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GakusaiArticleSections and only return the `id`
     * const gakusaiArticleSectionWithIdOnly = await prisma.gakusaiArticleSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GakusaiArticleSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, GakusaiArticleSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GakusaiArticleSection.
     * @param {GakusaiArticleSectionUpsertArgs} args - Arguments to update or create a GakusaiArticleSection.
     * @example
     * // Update or create a GakusaiArticleSection
     * const gakusaiArticleSection = await prisma.gakusaiArticleSection.upsert({
     *   create: {
     *     // ... data to create a GakusaiArticleSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GakusaiArticleSection we want to update
     *   }
     * })
     */
    upsert<T extends GakusaiArticleSectionUpsertArgs>(args: SelectSubset<T, GakusaiArticleSectionUpsertArgs<ExtArgs>>): Prisma__GakusaiArticleSectionClient<$Result.GetResult<Prisma.$GakusaiArticleSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GakusaiArticleSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleSectionCountArgs} args - Arguments to filter GakusaiArticleSections to count.
     * @example
     * // Count the number of GakusaiArticleSections
     * const count = await prisma.gakusaiArticleSection.count({
     *   where: {
     *     // ... the filter for the GakusaiArticleSections we want to count
     *   }
     * })
    **/
    count<T extends GakusaiArticleSectionCountArgs>(
      args?: Subset<T, GakusaiArticleSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GakusaiArticleSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GakusaiArticleSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GakusaiArticleSectionAggregateArgs>(args: Subset<T, GakusaiArticleSectionAggregateArgs>): Prisma.PrismaPromise<GetGakusaiArticleSectionAggregateType<T>>

    /**
     * Group by GakusaiArticleSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GakusaiArticleSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GakusaiArticleSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GakusaiArticleSectionGroupByArgs['orderBy'] }
        : { orderBy?: GakusaiArticleSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GakusaiArticleSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGakusaiArticleSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GakusaiArticleSection model
   */
  readonly fields: GakusaiArticleSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GakusaiArticleSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GakusaiArticleSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends GakusaiArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GakusaiArticleDefaultArgs<ExtArgs>>): Prisma__GakusaiArticleClient<$Result.GetResult<Prisma.$GakusaiArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GakusaiArticleSection model
   */
  interface GakusaiArticleSectionFieldRefs {
    readonly id: FieldRef<"GakusaiArticleSection", 'String'>
    readonly articleId: FieldRef<"GakusaiArticleSection", 'String'>
    readonly heading: FieldRef<"GakusaiArticleSection", 'String'>
    readonly content: FieldRef<"GakusaiArticleSection", 'String'>
    readonly imageUrl: FieldRef<"GakusaiArticleSection", 'String'>
    readonly displayOrder: FieldRef<"GakusaiArticleSection", 'Int'>
    readonly createdAt: FieldRef<"GakusaiArticleSection", 'DateTime'>
    readonly updatedAt: FieldRef<"GakusaiArticleSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GakusaiArticleSection findUnique
   */
  export type GakusaiArticleSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
    /**
     * Filter, which GakusaiArticleSection to fetch.
     */
    where: GakusaiArticleSectionWhereUniqueInput
  }

  /**
   * GakusaiArticleSection findUniqueOrThrow
   */
  export type GakusaiArticleSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
    /**
     * Filter, which GakusaiArticleSection to fetch.
     */
    where: GakusaiArticleSectionWhereUniqueInput
  }

  /**
   * GakusaiArticleSection findFirst
   */
  export type GakusaiArticleSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
    /**
     * Filter, which GakusaiArticleSection to fetch.
     */
    where?: GakusaiArticleSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiArticleSections to fetch.
     */
    orderBy?: GakusaiArticleSectionOrderByWithRelationInput | GakusaiArticleSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GakusaiArticleSections.
     */
    cursor?: GakusaiArticleSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiArticleSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiArticleSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GakusaiArticleSections.
     */
    distinct?: GakusaiArticleSectionScalarFieldEnum | GakusaiArticleSectionScalarFieldEnum[]
  }

  /**
   * GakusaiArticleSection findFirstOrThrow
   */
  export type GakusaiArticleSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
    /**
     * Filter, which GakusaiArticleSection to fetch.
     */
    where?: GakusaiArticleSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiArticleSections to fetch.
     */
    orderBy?: GakusaiArticleSectionOrderByWithRelationInput | GakusaiArticleSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GakusaiArticleSections.
     */
    cursor?: GakusaiArticleSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiArticleSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiArticleSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GakusaiArticleSections.
     */
    distinct?: GakusaiArticleSectionScalarFieldEnum | GakusaiArticleSectionScalarFieldEnum[]
  }

  /**
   * GakusaiArticleSection findMany
   */
  export type GakusaiArticleSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
    /**
     * Filter, which GakusaiArticleSections to fetch.
     */
    where?: GakusaiArticleSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GakusaiArticleSections to fetch.
     */
    orderBy?: GakusaiArticleSectionOrderByWithRelationInput | GakusaiArticleSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GakusaiArticleSections.
     */
    cursor?: GakusaiArticleSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GakusaiArticleSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GakusaiArticleSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GakusaiArticleSections.
     */
    distinct?: GakusaiArticleSectionScalarFieldEnum | GakusaiArticleSectionScalarFieldEnum[]
  }

  /**
   * GakusaiArticleSection create
   */
  export type GakusaiArticleSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a GakusaiArticleSection.
     */
    data: XOR<GakusaiArticleSectionCreateInput, GakusaiArticleSectionUncheckedCreateInput>
  }

  /**
   * GakusaiArticleSection createMany
   */
  export type GakusaiArticleSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GakusaiArticleSections.
     */
    data: GakusaiArticleSectionCreateManyInput | GakusaiArticleSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GakusaiArticleSection createManyAndReturn
   */
  export type GakusaiArticleSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * The data used to create many GakusaiArticleSections.
     */
    data: GakusaiArticleSectionCreateManyInput | GakusaiArticleSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GakusaiArticleSection update
   */
  export type GakusaiArticleSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a GakusaiArticleSection.
     */
    data: XOR<GakusaiArticleSectionUpdateInput, GakusaiArticleSectionUncheckedUpdateInput>
    /**
     * Choose, which GakusaiArticleSection to update.
     */
    where: GakusaiArticleSectionWhereUniqueInput
  }

  /**
   * GakusaiArticleSection updateMany
   */
  export type GakusaiArticleSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GakusaiArticleSections.
     */
    data: XOR<GakusaiArticleSectionUpdateManyMutationInput, GakusaiArticleSectionUncheckedUpdateManyInput>
    /**
     * Filter which GakusaiArticleSections to update
     */
    where?: GakusaiArticleSectionWhereInput
    /**
     * Limit how many GakusaiArticleSections to update.
     */
    limit?: number
  }

  /**
   * GakusaiArticleSection updateManyAndReturn
   */
  export type GakusaiArticleSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * The data used to update GakusaiArticleSections.
     */
    data: XOR<GakusaiArticleSectionUpdateManyMutationInput, GakusaiArticleSectionUncheckedUpdateManyInput>
    /**
     * Filter which GakusaiArticleSections to update
     */
    where?: GakusaiArticleSectionWhereInput
    /**
     * Limit how many GakusaiArticleSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GakusaiArticleSection upsert
   */
  export type GakusaiArticleSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the GakusaiArticleSection to update in case it exists.
     */
    where: GakusaiArticleSectionWhereUniqueInput
    /**
     * In case the GakusaiArticleSection found by the `where` argument doesn't exist, create a new GakusaiArticleSection with this data.
     */
    create: XOR<GakusaiArticleSectionCreateInput, GakusaiArticleSectionUncheckedCreateInput>
    /**
     * In case the GakusaiArticleSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GakusaiArticleSectionUpdateInput, GakusaiArticleSectionUncheckedUpdateInput>
  }

  /**
   * GakusaiArticleSection delete
   */
  export type GakusaiArticleSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
    /**
     * Filter which GakusaiArticleSection to delete.
     */
    where: GakusaiArticleSectionWhereUniqueInput
  }

  /**
   * GakusaiArticleSection deleteMany
   */
  export type GakusaiArticleSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GakusaiArticleSections to delete
     */
    where?: GakusaiArticleSectionWhereInput
    /**
     * Limit how many GakusaiArticleSections to delete.
     */
    limit?: number
  }

  /**
   * GakusaiArticleSection without action
   */
  export type GakusaiArticleSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GakusaiArticleSection
     */
    select?: GakusaiArticleSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GakusaiArticleSection
     */
    omit?: GakusaiArticleSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GakusaiArticleSectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    profileImage: 'profileImage',
    bio: 'bio',
    department: 'department',
    snsLinks: 'snsLinks',
    contactPublic: 'contactPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UniversityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    logoUrl: 'logoUrl',
    coverImageUrl: 'coverImageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UniversityScalarFieldEnum = (typeof UniversityScalarFieldEnum)[keyof typeof UniversityScalarFieldEnum]


  export const FestivalScalarFieldEnum: {
    id: 'id',
    universityId: 'universityId',
    year: 'year',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FestivalScalarFieldEnum = (typeof FestivalScalarFieldEnum)[keyof typeof FestivalScalarFieldEnum]


  export const FestivalHighlightScalarFieldEnum: {
    id: 'id',
    festivalId: 'festivalId',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FestivalHighlightScalarFieldEnum = (typeof FestivalHighlightScalarFieldEnum)[keyof typeof FestivalHighlightScalarFieldEnum]


  export const ChairpersonScalarFieldEnum: {
    id: 'id',
    festivalId: 'festivalId',
    userId: 'userId',
    predecessorId: 'predecessorId',
    handoverDate: 'handoverDate',
    handoverComment: 'handoverComment',
    message: 'message',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChairpersonScalarFieldEnum = (typeof ChairpersonScalarFieldEnum)[keyof typeof ChairpersonScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    festivalId: 'festivalId',
    themeName: 'themeName',
    eventDate: 'eventDate',
    eventEndDate: 'eventEndDate',
    venue: 'venue',
    schedule: 'schedule',
    details: 'details',
    accessInfo: 'accessInfo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const SponsorPlanScalarFieldEnum: {
    id: 'id',
    festivalId: 'festivalId',
    planName: 'planName',
    amount: 'amount',
    benefits: 'benefits',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SponsorPlanScalarFieldEnum = (typeof SponsorPlanScalarFieldEnum)[keyof typeof SponsorPlanScalarFieldEnum]


  export const CommitteeMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    universityId: 'universityId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommitteeMemberScalarFieldEnum = (typeof CommitteeMemberScalarFieldEnum)[keyof typeof CommitteeMemberScalarFieldEnum]


  export const UniversityRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    universityId: 'universityId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UniversityRoleScalarFieldEnum = (typeof UniversityRoleScalarFieldEnum)[keyof typeof UniversityRoleScalarFieldEnum]


  export const GakusaiInterviewOfferScalarFieldEnum: {
    id: 'id',
    inviteToken: 'inviteToken',
    chairpersonName: 'chairpersonName',
    university: 'university',
    year: 'year',
    status: 'status',
    conversation: 'conversation',
    articleId: 'articleId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GakusaiInterviewOfferScalarFieldEnum = (typeof GakusaiInterviewOfferScalarFieldEnum)[keyof typeof GakusaiInterviewOfferScalarFieldEnum]


  export const GakusaiArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    excerpt: 'excerpt',
    chairpersonName: 'chairpersonName',
    university: 'university',
    year: 'year',
    thumbnailUrl: 'thumbnailUrl',
    status: 'status',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GakusaiArticleScalarFieldEnum = (typeof GakusaiArticleScalarFieldEnum)[keyof typeof GakusaiArticleScalarFieldEnum]


  export const GakusaiArticleSectionScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    heading: 'heading',
    content: 'content',
    imageUrl: 'imageUrl',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GakusaiArticleSectionScalarFieldEnum = (typeof GakusaiArticleSectionScalarFieldEnum)[keyof typeof GakusaiArticleSectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profileImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    snsLinks?: StringNullableFilter<"User"> | string | null
    contactPublic?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    chairpersons?: ChairpersonListRelationFilter
    committeeMembers?: CommitteeMemberListRelationFilter
    universityRoles?: UniversityRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    snsLinks?: SortOrderInput | SortOrder
    contactPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chairpersons?: ChairpersonOrderByRelationAggregateInput
    committeeMembers?: CommitteeMemberOrderByRelationAggregateInput
    universityRoles?: UniversityRoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profileImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    snsLinks?: StringNullableFilter<"User"> | string | null
    contactPublic?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    chairpersons?: ChairpersonListRelationFilter
    committeeMembers?: CommitteeMemberListRelationFilter
    universityRoles?: UniversityRoleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    snsLinks?: SortOrderInput | SortOrder
    contactPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    snsLinks?: StringNullableWithAggregatesFilter<"User"> | string | null
    contactPublic?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UniversityWhereInput = {
    AND?: UniversityWhereInput | UniversityWhereInput[]
    OR?: UniversityWhereInput[]
    NOT?: UniversityWhereInput | UniversityWhereInput[]
    id?: StringFilter<"University"> | string
    name?: StringFilter<"University"> | string
    slug?: StringFilter<"University"> | string
    description?: StringNullableFilter<"University"> | string | null
    logoUrl?: StringNullableFilter<"University"> | string | null
    coverImageUrl?: StringNullableFilter<"University"> | string | null
    createdAt?: DateTimeFilter<"University"> | Date | string
    updatedAt?: DateTimeFilter<"University"> | Date | string
    festivals?: FestivalListRelationFilter
    universityRoles?: UniversityRoleListRelationFilter
    committeeMembers?: CommitteeMemberListRelationFilter
  }

  export type UniversityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festivals?: FestivalOrderByRelationAggregateInput
    universityRoles?: UniversityRoleOrderByRelationAggregateInput
    committeeMembers?: CommitteeMemberOrderByRelationAggregateInput
  }

  export type UniversityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: UniversityWhereInput | UniversityWhereInput[]
    OR?: UniversityWhereInput[]
    NOT?: UniversityWhereInput | UniversityWhereInput[]
    name?: StringFilter<"University"> | string
    description?: StringNullableFilter<"University"> | string | null
    logoUrl?: StringNullableFilter<"University"> | string | null
    coverImageUrl?: StringNullableFilter<"University"> | string | null
    createdAt?: DateTimeFilter<"University"> | Date | string
    updatedAt?: DateTimeFilter<"University"> | Date | string
    festivals?: FestivalListRelationFilter
    universityRoles?: UniversityRoleListRelationFilter
    committeeMembers?: CommitteeMemberListRelationFilter
  }, "id" | "slug">

  export type UniversityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UniversityCountOrderByAggregateInput
    _max?: UniversityMaxOrderByAggregateInput
    _min?: UniversityMinOrderByAggregateInput
  }

  export type UniversityScalarWhereWithAggregatesInput = {
    AND?: UniversityScalarWhereWithAggregatesInput | UniversityScalarWhereWithAggregatesInput[]
    OR?: UniversityScalarWhereWithAggregatesInput[]
    NOT?: UniversityScalarWhereWithAggregatesInput | UniversityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"University"> | string
    name?: StringWithAggregatesFilter<"University"> | string
    slug?: StringWithAggregatesFilter<"University"> | string
    description?: StringNullableWithAggregatesFilter<"University"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"University"> | string | null
    coverImageUrl?: StringNullableWithAggregatesFilter<"University"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"University"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"University"> | Date | string
  }

  export type FestivalWhereInput = {
    AND?: FestivalWhereInput | FestivalWhereInput[]
    OR?: FestivalWhereInput[]
    NOT?: FestivalWhereInput | FestivalWhereInput[]
    id?: StringFilter<"Festival"> | string
    universityId?: StringFilter<"Festival"> | string
    year?: IntFilter<"Festival"> | number
    status?: StringFilter<"Festival"> | string
    createdAt?: DateTimeFilter<"Festival"> | Date | string
    updatedAt?: DateTimeFilter<"Festival"> | Date | string
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    chairperson?: XOR<ChairpersonNullableScalarRelationFilter, ChairpersonWhereInput> | null
    theme?: XOR<ThemeNullableScalarRelationFilter, ThemeWhereInput> | null
    sponsorPlans?: SponsorPlanListRelationFilter
    festivalHighlights?: FestivalHighlightListRelationFilter
  }

  export type FestivalOrderByWithRelationInput = {
    id?: SortOrder
    universityId?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    university?: UniversityOrderByWithRelationInput
    chairperson?: ChairpersonOrderByWithRelationInput
    theme?: ThemeOrderByWithRelationInput
    sponsorPlans?: SponsorPlanOrderByRelationAggregateInput
    festivalHighlights?: FestivalHighlightOrderByRelationAggregateInput
  }

  export type FestivalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FestivalWhereInput | FestivalWhereInput[]
    OR?: FestivalWhereInput[]
    NOT?: FestivalWhereInput | FestivalWhereInput[]
    universityId?: StringFilter<"Festival"> | string
    year?: IntFilter<"Festival"> | number
    status?: StringFilter<"Festival"> | string
    createdAt?: DateTimeFilter<"Festival"> | Date | string
    updatedAt?: DateTimeFilter<"Festival"> | Date | string
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    chairperson?: XOR<ChairpersonNullableScalarRelationFilter, ChairpersonWhereInput> | null
    theme?: XOR<ThemeNullableScalarRelationFilter, ThemeWhereInput> | null
    sponsorPlans?: SponsorPlanListRelationFilter
    festivalHighlights?: FestivalHighlightListRelationFilter
  }, "id">

  export type FestivalOrderByWithAggregationInput = {
    id?: SortOrder
    universityId?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FestivalCountOrderByAggregateInput
    _avg?: FestivalAvgOrderByAggregateInput
    _max?: FestivalMaxOrderByAggregateInput
    _min?: FestivalMinOrderByAggregateInput
    _sum?: FestivalSumOrderByAggregateInput
  }

  export type FestivalScalarWhereWithAggregatesInput = {
    AND?: FestivalScalarWhereWithAggregatesInput | FestivalScalarWhereWithAggregatesInput[]
    OR?: FestivalScalarWhereWithAggregatesInput[]
    NOT?: FestivalScalarWhereWithAggregatesInput | FestivalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Festival"> | string
    universityId?: StringWithAggregatesFilter<"Festival"> | string
    year?: IntWithAggregatesFilter<"Festival"> | number
    status?: StringWithAggregatesFilter<"Festival"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Festival"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Festival"> | Date | string
  }

  export type FestivalHighlightWhereInput = {
    AND?: FestivalHighlightWhereInput | FestivalHighlightWhereInput[]
    OR?: FestivalHighlightWhereInput[]
    NOT?: FestivalHighlightWhereInput | FestivalHighlightWhereInput[]
    id?: StringFilter<"FestivalHighlight"> | string
    festivalId?: StringFilter<"FestivalHighlight"> | string
    title?: StringFilter<"FestivalHighlight"> | string
    description?: StringNullableFilter<"FestivalHighlight"> | string | null
    imageUrl?: StringNullableFilter<"FestivalHighlight"> | string | null
    displayOrder?: IntFilter<"FestivalHighlight"> | number
    createdAt?: DateTimeFilter<"FestivalHighlight"> | Date | string
    updatedAt?: DateTimeFilter<"FestivalHighlight"> | Date | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
  }

  export type FestivalHighlightOrderByWithRelationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festival?: FestivalOrderByWithRelationInput
  }

  export type FestivalHighlightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FestivalHighlightWhereInput | FestivalHighlightWhereInput[]
    OR?: FestivalHighlightWhereInput[]
    NOT?: FestivalHighlightWhereInput | FestivalHighlightWhereInput[]
    festivalId?: StringFilter<"FestivalHighlight"> | string
    title?: StringFilter<"FestivalHighlight"> | string
    description?: StringNullableFilter<"FestivalHighlight"> | string | null
    imageUrl?: StringNullableFilter<"FestivalHighlight"> | string | null
    displayOrder?: IntFilter<"FestivalHighlight"> | number
    createdAt?: DateTimeFilter<"FestivalHighlight"> | Date | string
    updatedAt?: DateTimeFilter<"FestivalHighlight"> | Date | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
  }, "id">

  export type FestivalHighlightOrderByWithAggregationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FestivalHighlightCountOrderByAggregateInput
    _avg?: FestivalHighlightAvgOrderByAggregateInput
    _max?: FestivalHighlightMaxOrderByAggregateInput
    _min?: FestivalHighlightMinOrderByAggregateInput
    _sum?: FestivalHighlightSumOrderByAggregateInput
  }

  export type FestivalHighlightScalarWhereWithAggregatesInput = {
    AND?: FestivalHighlightScalarWhereWithAggregatesInput | FestivalHighlightScalarWhereWithAggregatesInput[]
    OR?: FestivalHighlightScalarWhereWithAggregatesInput[]
    NOT?: FestivalHighlightScalarWhereWithAggregatesInput | FestivalHighlightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FestivalHighlight"> | string
    festivalId?: StringWithAggregatesFilter<"FestivalHighlight"> | string
    title?: StringWithAggregatesFilter<"FestivalHighlight"> | string
    description?: StringNullableWithAggregatesFilter<"FestivalHighlight"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"FestivalHighlight"> | string | null
    displayOrder?: IntWithAggregatesFilter<"FestivalHighlight"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FestivalHighlight"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FestivalHighlight"> | Date | string
  }

  export type ChairpersonWhereInput = {
    AND?: ChairpersonWhereInput | ChairpersonWhereInput[]
    OR?: ChairpersonWhereInput[]
    NOT?: ChairpersonWhereInput | ChairpersonWhereInput[]
    id?: StringFilter<"Chairperson"> | string
    festivalId?: StringFilter<"Chairperson"> | string
    userId?: StringFilter<"Chairperson"> | string
    predecessorId?: StringNullableFilter<"Chairperson"> | string | null
    handoverDate?: DateTimeNullableFilter<"Chairperson"> | Date | string | null
    handoverComment?: StringNullableFilter<"Chairperson"> | string | null
    message?: StringNullableFilter<"Chairperson"> | string | null
    displayOrder?: IntFilter<"Chairperson"> | number
    createdAt?: DateTimeFilter<"Chairperson"> | Date | string
    updatedAt?: DateTimeFilter<"Chairperson"> | Date | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    predecessor?: XOR<ChairpersonNullableScalarRelationFilter, ChairpersonWhereInput> | null
    successors?: ChairpersonListRelationFilter
  }

  export type ChairpersonOrderByWithRelationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    userId?: SortOrder
    predecessorId?: SortOrderInput | SortOrder
    handoverDate?: SortOrderInput | SortOrder
    handoverComment?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festival?: FestivalOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    predecessor?: ChairpersonOrderByWithRelationInput
    successors?: ChairpersonOrderByRelationAggregateInput
  }

  export type ChairpersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    festivalId?: string
    AND?: ChairpersonWhereInput | ChairpersonWhereInput[]
    OR?: ChairpersonWhereInput[]
    NOT?: ChairpersonWhereInput | ChairpersonWhereInput[]
    userId?: StringFilter<"Chairperson"> | string
    predecessorId?: StringNullableFilter<"Chairperson"> | string | null
    handoverDate?: DateTimeNullableFilter<"Chairperson"> | Date | string | null
    handoverComment?: StringNullableFilter<"Chairperson"> | string | null
    message?: StringNullableFilter<"Chairperson"> | string | null
    displayOrder?: IntFilter<"Chairperson"> | number
    createdAt?: DateTimeFilter<"Chairperson"> | Date | string
    updatedAt?: DateTimeFilter<"Chairperson"> | Date | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    predecessor?: XOR<ChairpersonNullableScalarRelationFilter, ChairpersonWhereInput> | null
    successors?: ChairpersonListRelationFilter
  }, "id" | "festivalId">

  export type ChairpersonOrderByWithAggregationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    userId?: SortOrder
    predecessorId?: SortOrderInput | SortOrder
    handoverDate?: SortOrderInput | SortOrder
    handoverComment?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChairpersonCountOrderByAggregateInput
    _avg?: ChairpersonAvgOrderByAggregateInput
    _max?: ChairpersonMaxOrderByAggregateInput
    _min?: ChairpersonMinOrderByAggregateInput
    _sum?: ChairpersonSumOrderByAggregateInput
  }

  export type ChairpersonScalarWhereWithAggregatesInput = {
    AND?: ChairpersonScalarWhereWithAggregatesInput | ChairpersonScalarWhereWithAggregatesInput[]
    OR?: ChairpersonScalarWhereWithAggregatesInput[]
    NOT?: ChairpersonScalarWhereWithAggregatesInput | ChairpersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chairperson"> | string
    festivalId?: StringWithAggregatesFilter<"Chairperson"> | string
    userId?: StringWithAggregatesFilter<"Chairperson"> | string
    predecessorId?: StringNullableWithAggregatesFilter<"Chairperson"> | string | null
    handoverDate?: DateTimeNullableWithAggregatesFilter<"Chairperson"> | Date | string | null
    handoverComment?: StringNullableWithAggregatesFilter<"Chairperson"> | string | null
    message?: StringNullableWithAggregatesFilter<"Chairperson"> | string | null
    displayOrder?: IntWithAggregatesFilter<"Chairperson"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Chairperson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chairperson"> | Date | string
  }

  export type ThemeWhereInput = {
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    id?: StringFilter<"Theme"> | string
    festivalId?: StringFilter<"Theme"> | string
    themeName?: StringFilter<"Theme"> | string
    eventDate?: DateTimeNullableFilter<"Theme"> | Date | string | null
    eventEndDate?: DateTimeNullableFilter<"Theme"> | Date | string | null
    venue?: StringNullableFilter<"Theme"> | string | null
    schedule?: StringNullableFilter<"Theme"> | string | null
    details?: StringNullableFilter<"Theme"> | string | null
    accessInfo?: StringNullableFilter<"Theme"> | string | null
    createdAt?: DateTimeFilter<"Theme"> | Date | string
    updatedAt?: DateTimeFilter<"Theme"> | Date | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
  }

  export type ThemeOrderByWithRelationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    themeName?: SortOrder
    eventDate?: SortOrderInput | SortOrder
    eventEndDate?: SortOrderInput | SortOrder
    venue?: SortOrderInput | SortOrder
    schedule?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    accessInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festival?: FestivalOrderByWithRelationInput
  }

  export type ThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    festivalId?: string
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    themeName?: StringFilter<"Theme"> | string
    eventDate?: DateTimeNullableFilter<"Theme"> | Date | string | null
    eventEndDate?: DateTimeNullableFilter<"Theme"> | Date | string | null
    venue?: StringNullableFilter<"Theme"> | string | null
    schedule?: StringNullableFilter<"Theme"> | string | null
    details?: StringNullableFilter<"Theme"> | string | null
    accessInfo?: StringNullableFilter<"Theme"> | string | null
    createdAt?: DateTimeFilter<"Theme"> | Date | string
    updatedAt?: DateTimeFilter<"Theme"> | Date | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
  }, "id" | "festivalId">

  export type ThemeOrderByWithAggregationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    themeName?: SortOrder
    eventDate?: SortOrderInput | SortOrder
    eventEndDate?: SortOrderInput | SortOrder
    venue?: SortOrderInput | SortOrder
    schedule?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    accessInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    OR?: ThemeScalarWhereWithAggregatesInput[]
    NOT?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Theme"> | string
    festivalId?: StringWithAggregatesFilter<"Theme"> | string
    themeName?: StringWithAggregatesFilter<"Theme"> | string
    eventDate?: DateTimeNullableWithAggregatesFilter<"Theme"> | Date | string | null
    eventEndDate?: DateTimeNullableWithAggregatesFilter<"Theme"> | Date | string | null
    venue?: StringNullableWithAggregatesFilter<"Theme"> | string | null
    schedule?: StringNullableWithAggregatesFilter<"Theme"> | string | null
    details?: StringNullableWithAggregatesFilter<"Theme"> | string | null
    accessInfo?: StringNullableWithAggregatesFilter<"Theme"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Theme"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Theme"> | Date | string
  }

  export type SponsorPlanWhereInput = {
    AND?: SponsorPlanWhereInput | SponsorPlanWhereInput[]
    OR?: SponsorPlanWhereInput[]
    NOT?: SponsorPlanWhereInput | SponsorPlanWhereInput[]
    id?: StringFilter<"SponsorPlan"> | string
    festivalId?: StringFilter<"SponsorPlan"> | string
    planName?: StringFilter<"SponsorPlan"> | string
    amount?: IntFilter<"SponsorPlan"> | number
    benefits?: StringNullableFilter<"SponsorPlan"> | string | null
    displayOrder?: IntFilter<"SponsorPlan"> | number
    createdAt?: DateTimeFilter<"SponsorPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SponsorPlan"> | Date | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
  }

  export type SponsorPlanOrderByWithRelationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    planName?: SortOrder
    amount?: SortOrder
    benefits?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    festival?: FestivalOrderByWithRelationInput
  }

  export type SponsorPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SponsorPlanWhereInput | SponsorPlanWhereInput[]
    OR?: SponsorPlanWhereInput[]
    NOT?: SponsorPlanWhereInput | SponsorPlanWhereInput[]
    festivalId?: StringFilter<"SponsorPlan"> | string
    planName?: StringFilter<"SponsorPlan"> | string
    amount?: IntFilter<"SponsorPlan"> | number
    benefits?: StringNullableFilter<"SponsorPlan"> | string | null
    displayOrder?: IntFilter<"SponsorPlan"> | number
    createdAt?: DateTimeFilter<"SponsorPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SponsorPlan"> | Date | string
    festival?: XOR<FestivalScalarRelationFilter, FestivalWhereInput>
  }, "id">

  export type SponsorPlanOrderByWithAggregationInput = {
    id?: SortOrder
    festivalId?: SortOrder
    planName?: SortOrder
    amount?: SortOrder
    benefits?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SponsorPlanCountOrderByAggregateInput
    _avg?: SponsorPlanAvgOrderByAggregateInput
    _max?: SponsorPlanMaxOrderByAggregateInput
    _min?: SponsorPlanMinOrderByAggregateInput
    _sum?: SponsorPlanSumOrderByAggregateInput
  }

  export type SponsorPlanScalarWhereWithAggregatesInput = {
    AND?: SponsorPlanScalarWhereWithAggregatesInput | SponsorPlanScalarWhereWithAggregatesInput[]
    OR?: SponsorPlanScalarWhereWithAggregatesInput[]
    NOT?: SponsorPlanScalarWhereWithAggregatesInput | SponsorPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SponsorPlan"> | string
    festivalId?: StringWithAggregatesFilter<"SponsorPlan"> | string
    planName?: StringWithAggregatesFilter<"SponsorPlan"> | string
    amount?: IntWithAggregatesFilter<"SponsorPlan"> | number
    benefits?: StringNullableWithAggregatesFilter<"SponsorPlan"> | string | null
    displayOrder?: IntWithAggregatesFilter<"SponsorPlan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SponsorPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SponsorPlan"> | Date | string
  }

  export type CommitteeMemberWhereInput = {
    AND?: CommitteeMemberWhereInput | CommitteeMemberWhereInput[]
    OR?: CommitteeMemberWhereInput[]
    NOT?: CommitteeMemberWhereInput | CommitteeMemberWhereInput[]
    id?: StringFilter<"CommitteeMember"> | string
    userId?: StringFilter<"CommitteeMember"> | string
    universityId?: StringFilter<"CommitteeMember"> | string
    role?: EnumRoleFilter<"CommitteeMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"CommitteeMember"> | Date | string
    updatedAt?: DateTimeFilter<"CommitteeMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
  }

  export type CommitteeMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    university?: UniversityOrderByWithRelationInput
  }

  export type CommitteeMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_universityId?: CommitteeMemberUserIdUniversityIdCompoundUniqueInput
    AND?: CommitteeMemberWhereInput | CommitteeMemberWhereInput[]
    OR?: CommitteeMemberWhereInput[]
    NOT?: CommitteeMemberWhereInput | CommitteeMemberWhereInput[]
    userId?: StringFilter<"CommitteeMember"> | string
    universityId?: StringFilter<"CommitteeMember"> | string
    role?: EnumRoleFilter<"CommitteeMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"CommitteeMember"> | Date | string
    updatedAt?: DateTimeFilter<"CommitteeMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
  }, "id" | "userId_universityId">

  export type CommitteeMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommitteeMemberCountOrderByAggregateInput
    _max?: CommitteeMemberMaxOrderByAggregateInput
    _min?: CommitteeMemberMinOrderByAggregateInput
  }

  export type CommitteeMemberScalarWhereWithAggregatesInput = {
    AND?: CommitteeMemberScalarWhereWithAggregatesInput | CommitteeMemberScalarWhereWithAggregatesInput[]
    OR?: CommitteeMemberScalarWhereWithAggregatesInput[]
    NOT?: CommitteeMemberScalarWhereWithAggregatesInput | CommitteeMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommitteeMember"> | string
    userId?: StringWithAggregatesFilter<"CommitteeMember"> | string
    universityId?: StringWithAggregatesFilter<"CommitteeMember"> | string
    role?: EnumRoleWithAggregatesFilter<"CommitteeMember"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"CommitteeMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommitteeMember"> | Date | string
  }

  export type UniversityRoleWhereInput = {
    AND?: UniversityRoleWhereInput | UniversityRoleWhereInput[]
    OR?: UniversityRoleWhereInput[]
    NOT?: UniversityRoleWhereInput | UniversityRoleWhereInput[]
    id?: StringFilter<"UniversityRole"> | string
    userId?: StringFilter<"UniversityRole"> | string
    universityId?: StringFilter<"UniversityRole"> | string
    role?: EnumRoleFilter<"UniversityRole"> | $Enums.Role
    createdAt?: DateTimeFilter<"UniversityRole"> | Date | string
    updatedAt?: DateTimeFilter<"UniversityRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
  }

  export type UniversityRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    university?: UniversityOrderByWithRelationInput
  }

  export type UniversityRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_universityId?: UniversityRoleUserIdUniversityIdCompoundUniqueInput
    AND?: UniversityRoleWhereInput | UniversityRoleWhereInput[]
    OR?: UniversityRoleWhereInput[]
    NOT?: UniversityRoleWhereInput | UniversityRoleWhereInput[]
    userId?: StringFilter<"UniversityRole"> | string
    universityId?: StringFilter<"UniversityRole"> | string
    role?: EnumRoleFilter<"UniversityRole"> | $Enums.Role
    createdAt?: DateTimeFilter<"UniversityRole"> | Date | string
    updatedAt?: DateTimeFilter<"UniversityRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
  }, "id" | "userId_universityId">

  export type UniversityRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UniversityRoleCountOrderByAggregateInput
    _max?: UniversityRoleMaxOrderByAggregateInput
    _min?: UniversityRoleMinOrderByAggregateInput
  }

  export type UniversityRoleScalarWhereWithAggregatesInput = {
    AND?: UniversityRoleScalarWhereWithAggregatesInput | UniversityRoleScalarWhereWithAggregatesInput[]
    OR?: UniversityRoleScalarWhereWithAggregatesInput[]
    NOT?: UniversityRoleScalarWhereWithAggregatesInput | UniversityRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UniversityRole"> | string
    userId?: StringWithAggregatesFilter<"UniversityRole"> | string
    universityId?: StringWithAggregatesFilter<"UniversityRole"> | string
    role?: EnumRoleWithAggregatesFilter<"UniversityRole"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"UniversityRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UniversityRole"> | Date | string
  }

  export type GakusaiInterviewOfferWhereInput = {
    AND?: GakusaiInterviewOfferWhereInput | GakusaiInterviewOfferWhereInput[]
    OR?: GakusaiInterviewOfferWhereInput[]
    NOT?: GakusaiInterviewOfferWhereInput | GakusaiInterviewOfferWhereInput[]
    id?: StringFilter<"GakusaiInterviewOffer"> | string
    inviteToken?: StringFilter<"GakusaiInterviewOffer"> | string
    chairpersonName?: StringFilter<"GakusaiInterviewOffer"> | string
    university?: StringFilter<"GakusaiInterviewOffer"> | string
    year?: IntFilter<"GakusaiInterviewOffer"> | number
    status?: StringFilter<"GakusaiInterviewOffer"> | string
    conversation?: StringNullableFilter<"GakusaiInterviewOffer"> | string | null
    articleId?: StringNullableFilter<"GakusaiInterviewOffer"> | string | null
    expiresAt?: DateTimeNullableFilter<"GakusaiInterviewOffer"> | Date | string | null
    createdAt?: DateTimeFilter<"GakusaiInterviewOffer"> | Date | string
    updatedAt?: DateTimeFilter<"GakusaiInterviewOffer"> | Date | string
  }

  export type GakusaiInterviewOfferOrderByWithRelationInput = {
    id?: SortOrder
    inviteToken?: SortOrder
    chairpersonName?: SortOrder
    university?: SortOrder
    year?: SortOrder
    status?: SortOrder
    conversation?: SortOrderInput | SortOrder
    articleId?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiInterviewOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inviteToken?: string
    AND?: GakusaiInterviewOfferWhereInput | GakusaiInterviewOfferWhereInput[]
    OR?: GakusaiInterviewOfferWhereInput[]
    NOT?: GakusaiInterviewOfferWhereInput | GakusaiInterviewOfferWhereInput[]
    chairpersonName?: StringFilter<"GakusaiInterviewOffer"> | string
    university?: StringFilter<"GakusaiInterviewOffer"> | string
    year?: IntFilter<"GakusaiInterviewOffer"> | number
    status?: StringFilter<"GakusaiInterviewOffer"> | string
    conversation?: StringNullableFilter<"GakusaiInterviewOffer"> | string | null
    articleId?: StringNullableFilter<"GakusaiInterviewOffer"> | string | null
    expiresAt?: DateTimeNullableFilter<"GakusaiInterviewOffer"> | Date | string | null
    createdAt?: DateTimeFilter<"GakusaiInterviewOffer"> | Date | string
    updatedAt?: DateTimeFilter<"GakusaiInterviewOffer"> | Date | string
  }, "id" | "inviteToken">

  export type GakusaiInterviewOfferOrderByWithAggregationInput = {
    id?: SortOrder
    inviteToken?: SortOrder
    chairpersonName?: SortOrder
    university?: SortOrder
    year?: SortOrder
    status?: SortOrder
    conversation?: SortOrderInput | SortOrder
    articleId?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GakusaiInterviewOfferCountOrderByAggregateInput
    _avg?: GakusaiInterviewOfferAvgOrderByAggregateInput
    _max?: GakusaiInterviewOfferMaxOrderByAggregateInput
    _min?: GakusaiInterviewOfferMinOrderByAggregateInput
    _sum?: GakusaiInterviewOfferSumOrderByAggregateInput
  }

  export type GakusaiInterviewOfferScalarWhereWithAggregatesInput = {
    AND?: GakusaiInterviewOfferScalarWhereWithAggregatesInput | GakusaiInterviewOfferScalarWhereWithAggregatesInput[]
    OR?: GakusaiInterviewOfferScalarWhereWithAggregatesInput[]
    NOT?: GakusaiInterviewOfferScalarWhereWithAggregatesInput | GakusaiInterviewOfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GakusaiInterviewOffer"> | string
    inviteToken?: StringWithAggregatesFilter<"GakusaiInterviewOffer"> | string
    chairpersonName?: StringWithAggregatesFilter<"GakusaiInterviewOffer"> | string
    university?: StringWithAggregatesFilter<"GakusaiInterviewOffer"> | string
    year?: IntWithAggregatesFilter<"GakusaiInterviewOffer"> | number
    status?: StringWithAggregatesFilter<"GakusaiInterviewOffer"> | string
    conversation?: StringNullableWithAggregatesFilter<"GakusaiInterviewOffer"> | string | null
    articleId?: StringNullableWithAggregatesFilter<"GakusaiInterviewOffer"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"GakusaiInterviewOffer"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GakusaiInterviewOffer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GakusaiInterviewOffer"> | Date | string
  }

  export type GakusaiArticleWhereInput = {
    AND?: GakusaiArticleWhereInput | GakusaiArticleWhereInput[]
    OR?: GakusaiArticleWhereInput[]
    NOT?: GakusaiArticleWhereInput | GakusaiArticleWhereInput[]
    id?: StringFilter<"GakusaiArticle"> | string
    title?: StringFilter<"GakusaiArticle"> | string
    excerpt?: StringFilter<"GakusaiArticle"> | string
    chairpersonName?: StringFilter<"GakusaiArticle"> | string
    university?: StringFilter<"GakusaiArticle"> | string
    year?: IntFilter<"GakusaiArticle"> | number
    thumbnailUrl?: StringFilter<"GakusaiArticle"> | string
    status?: StringFilter<"GakusaiArticle"> | string
    publishedAt?: DateTimeNullableFilter<"GakusaiArticle"> | Date | string | null
    createdAt?: DateTimeFilter<"GakusaiArticle"> | Date | string
    updatedAt?: DateTimeFilter<"GakusaiArticle"> | Date | string
    sections?: GakusaiArticleSectionListRelationFilter
  }

  export type GakusaiArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    chairpersonName?: SortOrder
    university?: SortOrder
    year?: SortOrder
    thumbnailUrl?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sections?: GakusaiArticleSectionOrderByRelationAggregateInput
  }

  export type GakusaiArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GakusaiArticleWhereInput | GakusaiArticleWhereInput[]
    OR?: GakusaiArticleWhereInput[]
    NOT?: GakusaiArticleWhereInput | GakusaiArticleWhereInput[]
    title?: StringFilter<"GakusaiArticle"> | string
    excerpt?: StringFilter<"GakusaiArticle"> | string
    chairpersonName?: StringFilter<"GakusaiArticle"> | string
    university?: StringFilter<"GakusaiArticle"> | string
    year?: IntFilter<"GakusaiArticle"> | number
    thumbnailUrl?: StringFilter<"GakusaiArticle"> | string
    status?: StringFilter<"GakusaiArticle"> | string
    publishedAt?: DateTimeNullableFilter<"GakusaiArticle"> | Date | string | null
    createdAt?: DateTimeFilter<"GakusaiArticle"> | Date | string
    updatedAt?: DateTimeFilter<"GakusaiArticle"> | Date | string
    sections?: GakusaiArticleSectionListRelationFilter
  }, "id">

  export type GakusaiArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    chairpersonName?: SortOrder
    university?: SortOrder
    year?: SortOrder
    thumbnailUrl?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GakusaiArticleCountOrderByAggregateInput
    _avg?: GakusaiArticleAvgOrderByAggregateInput
    _max?: GakusaiArticleMaxOrderByAggregateInput
    _min?: GakusaiArticleMinOrderByAggregateInput
    _sum?: GakusaiArticleSumOrderByAggregateInput
  }

  export type GakusaiArticleScalarWhereWithAggregatesInput = {
    AND?: GakusaiArticleScalarWhereWithAggregatesInput | GakusaiArticleScalarWhereWithAggregatesInput[]
    OR?: GakusaiArticleScalarWhereWithAggregatesInput[]
    NOT?: GakusaiArticleScalarWhereWithAggregatesInput | GakusaiArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GakusaiArticle"> | string
    title?: StringWithAggregatesFilter<"GakusaiArticle"> | string
    excerpt?: StringWithAggregatesFilter<"GakusaiArticle"> | string
    chairpersonName?: StringWithAggregatesFilter<"GakusaiArticle"> | string
    university?: StringWithAggregatesFilter<"GakusaiArticle"> | string
    year?: IntWithAggregatesFilter<"GakusaiArticle"> | number
    thumbnailUrl?: StringWithAggregatesFilter<"GakusaiArticle"> | string
    status?: StringWithAggregatesFilter<"GakusaiArticle"> | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"GakusaiArticle"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GakusaiArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GakusaiArticle"> | Date | string
  }

  export type GakusaiArticleSectionWhereInput = {
    AND?: GakusaiArticleSectionWhereInput | GakusaiArticleSectionWhereInput[]
    OR?: GakusaiArticleSectionWhereInput[]
    NOT?: GakusaiArticleSectionWhereInput | GakusaiArticleSectionWhereInput[]
    id?: StringFilter<"GakusaiArticleSection"> | string
    articleId?: StringFilter<"GakusaiArticleSection"> | string
    heading?: StringFilter<"GakusaiArticleSection"> | string
    content?: StringFilter<"GakusaiArticleSection"> | string
    imageUrl?: StringNullableFilter<"GakusaiArticleSection"> | string | null
    displayOrder?: IntFilter<"GakusaiArticleSection"> | number
    createdAt?: DateTimeFilter<"GakusaiArticleSection"> | Date | string
    updatedAt?: DateTimeFilter<"GakusaiArticleSection"> | Date | string
    article?: XOR<GakusaiArticleScalarRelationFilter, GakusaiArticleWhereInput>
  }

  export type GakusaiArticleSectionOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    heading?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: GakusaiArticleOrderByWithRelationInput
  }

  export type GakusaiArticleSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GakusaiArticleSectionWhereInput | GakusaiArticleSectionWhereInput[]
    OR?: GakusaiArticleSectionWhereInput[]
    NOT?: GakusaiArticleSectionWhereInput | GakusaiArticleSectionWhereInput[]
    articleId?: StringFilter<"GakusaiArticleSection"> | string
    heading?: StringFilter<"GakusaiArticleSection"> | string
    content?: StringFilter<"GakusaiArticleSection"> | string
    imageUrl?: StringNullableFilter<"GakusaiArticleSection"> | string | null
    displayOrder?: IntFilter<"GakusaiArticleSection"> | number
    createdAt?: DateTimeFilter<"GakusaiArticleSection"> | Date | string
    updatedAt?: DateTimeFilter<"GakusaiArticleSection"> | Date | string
    article?: XOR<GakusaiArticleScalarRelationFilter, GakusaiArticleWhereInput>
  }, "id">

  export type GakusaiArticleSectionOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    heading?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GakusaiArticleSectionCountOrderByAggregateInput
    _avg?: GakusaiArticleSectionAvgOrderByAggregateInput
    _max?: GakusaiArticleSectionMaxOrderByAggregateInput
    _min?: GakusaiArticleSectionMinOrderByAggregateInput
    _sum?: GakusaiArticleSectionSumOrderByAggregateInput
  }

  export type GakusaiArticleSectionScalarWhereWithAggregatesInput = {
    AND?: GakusaiArticleSectionScalarWhereWithAggregatesInput | GakusaiArticleSectionScalarWhereWithAggregatesInput[]
    OR?: GakusaiArticleSectionScalarWhereWithAggregatesInput[]
    NOT?: GakusaiArticleSectionScalarWhereWithAggregatesInput | GakusaiArticleSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GakusaiArticleSection"> | string
    articleId?: StringWithAggregatesFilter<"GakusaiArticleSection"> | string
    heading?: StringWithAggregatesFilter<"GakusaiArticleSection"> | string
    content?: StringWithAggregatesFilter<"GakusaiArticleSection"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"GakusaiArticleSection"> | string | null
    displayOrder?: IntWithAggregatesFilter<"GakusaiArticleSection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GakusaiArticleSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GakusaiArticleSection"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    role?: $Enums.Role
    profileImage?: string | null
    bio?: string | null
    department?: string | null
    snsLinks?: string | null
    contactPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chairpersons?: ChairpersonCreateNestedManyWithoutUserInput
    committeeMembers?: CommitteeMemberCreateNestedManyWithoutUserInput
    universityRoles?: UniversityRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    role?: $Enums.Role
    profileImage?: string | null
    bio?: string | null
    department?: string | null
    snsLinks?: string | null
    contactPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chairpersons?: ChairpersonUncheckedCreateNestedManyWithoutUserInput
    committeeMembers?: CommitteeMemberUncheckedCreateNestedManyWithoutUserInput
    universityRoles?: UniversityRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    snsLinks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairpersons?: ChairpersonUpdateManyWithoutUserNestedInput
    committeeMembers?: CommitteeMemberUpdateManyWithoutUserNestedInput
    universityRoles?: UniversityRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    snsLinks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairpersons?: ChairpersonUncheckedUpdateManyWithoutUserNestedInput
    committeeMembers?: CommitteeMemberUncheckedUpdateManyWithoutUserNestedInput
    universityRoles?: UniversityRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    role?: $Enums.Role
    profileImage?: string | null
    bio?: string | null
    department?: string | null
    snsLinks?: string | null
    contactPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    snsLinks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    snsLinks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festivals?: FestivalCreateNestedManyWithoutUniversityInput
    universityRoles?: UniversityRoleCreateNestedManyWithoutUniversityInput
    committeeMembers?: CommitteeMemberCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festivals?: FestivalUncheckedCreateNestedManyWithoutUniversityInput
    universityRoles?: UniversityRoleUncheckedCreateNestedManyWithoutUniversityInput
    committeeMembers?: CommitteeMemberUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivals?: FestivalUpdateManyWithoutUniversityNestedInput
    universityRoles?: UniversityRoleUpdateManyWithoutUniversityNestedInput
    committeeMembers?: CommitteeMemberUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivals?: FestivalUncheckedUpdateManyWithoutUniversityNestedInput
    universityRoles?: UniversityRoleUncheckedUpdateManyWithoutUniversityNestedInput
    committeeMembers?: CommitteeMemberUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalCreateInput = {
    id?: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutFestivalsInput
    chairperson?: ChairpersonCreateNestedOneWithoutFestivalInput
    theme?: ThemeCreateNestedOneWithoutFestivalInput
    sponsorPlans?: SponsorPlanCreateNestedManyWithoutFestivalInput
    festivalHighlights?: FestivalHighlightCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateInput = {
    id?: string
    universityId: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chairperson?: ChairpersonUncheckedCreateNestedOneWithoutFestivalInput
    theme?: ThemeUncheckedCreateNestedOneWithoutFestivalInput
    sponsorPlans?: SponsorPlanUncheckedCreateNestedManyWithoutFestivalInput
    festivalHighlights?: FestivalHighlightUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutFestivalsNestedInput
    chairperson?: ChairpersonUpdateOneWithoutFestivalNestedInput
    theme?: ThemeUpdateOneWithoutFestivalNestedInput
    sponsorPlans?: SponsorPlanUpdateManyWithoutFestivalNestedInput
    festivalHighlights?: FestivalHighlightUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairperson?: ChairpersonUncheckedUpdateOneWithoutFestivalNestedInput
    theme?: ThemeUncheckedUpdateOneWithoutFestivalNestedInput
    sponsorPlans?: SponsorPlanUncheckedUpdateManyWithoutFestivalNestedInput
    festivalHighlights?: FestivalHighlightUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalCreateManyInput = {
    id?: string
    universityId: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalHighlightCreateInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutFestivalHighlightsInput
  }

  export type FestivalHighlightUncheckedCreateInput = {
    id?: string
    festivalId: string
    title: string
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalHighlightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutFestivalHighlightsNestedInput
  }

  export type FestivalHighlightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalHighlightCreateManyInput = {
    id?: string
    festivalId: string
    title: string
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalHighlightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalHighlightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChairpersonCreateInput = {
    id?: string
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutChairpersonInput
    user: UserCreateNestedOneWithoutChairpersonsInput
    predecessor?: ChairpersonCreateNestedOneWithoutSuccessorsInput
    successors?: ChairpersonCreateNestedManyWithoutPredecessorInput
  }

  export type ChairpersonUncheckedCreateInput = {
    id?: string
    festivalId: string
    userId: string
    predecessorId?: string | null
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    successors?: ChairpersonUncheckedCreateNestedManyWithoutPredecessorInput
  }

  export type ChairpersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutChairpersonNestedInput
    user?: UserUpdateOneRequiredWithoutChairpersonsNestedInput
    predecessor?: ChairpersonUpdateOneWithoutSuccessorsNestedInput
    successors?: ChairpersonUpdateManyWithoutPredecessorNestedInput
  }

  export type ChairpersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    predecessorId?: NullableStringFieldUpdateOperationsInput | string | null
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successors?: ChairpersonUncheckedUpdateManyWithoutPredecessorNestedInput
  }

  export type ChairpersonCreateManyInput = {
    id?: string
    festivalId: string
    userId: string
    predecessorId?: string | null
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChairpersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChairpersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    predecessorId?: NullableStringFieldUpdateOperationsInput | string | null
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeCreateInput = {
    id?: string
    themeName: string
    eventDate?: Date | string | null
    eventEndDate?: Date | string | null
    venue?: string | null
    schedule?: string | null
    details?: string | null
    accessInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutThemeInput
  }

  export type ThemeUncheckedCreateInput = {
    id?: string
    festivalId: string
    themeName: string
    eventDate?: Date | string | null
    eventEndDate?: Date | string | null
    venue?: string | null
    schedule?: string | null
    details?: string | null
    accessInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThemeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    themeName?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    themeName?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeCreateManyInput = {
    id?: string
    festivalId: string
    themeName: string
    eventDate?: Date | string | null
    eventEndDate?: Date | string | null
    venue?: string | null
    schedule?: string | null
    details?: string | null
    accessInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThemeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    themeName?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    themeName?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorPlanCreateInput = {
    id?: string
    planName: string
    amount: number
    benefits?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutSponsorPlansInput
  }

  export type SponsorPlanUncheckedCreateInput = {
    id?: string
    festivalId: string
    planName: string
    amount: number
    benefits?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutSponsorPlansNestedInput
  }

  export type SponsorPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorPlanCreateManyInput = {
    id?: string
    festivalId: string
    planName: string
    amount: number
    benefits?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeMemberCreateInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommitteeMembersInput
    university: UniversityCreateNestedOneWithoutCommitteeMembersInput
  }

  export type CommitteeMemberUncheckedCreateInput = {
    id?: string
    userId: string
    universityId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitteeMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommitteeMembersNestedInput
    university?: UniversityUpdateOneRequiredWithoutCommitteeMembersNestedInput
  }

  export type CommitteeMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeMemberCreateManyInput = {
    id?: string
    userId: string
    universityId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitteeMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityRoleCreateInput = {
    id?: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUniversityRolesInput
    university: UniversityCreateNestedOneWithoutUniversityRolesInput
  }

  export type UniversityRoleUncheckedCreateInput = {
    id?: string
    userId: string
    universityId: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUniversityRolesNestedInput
    university?: UniversityUpdateOneRequiredWithoutUniversityRolesNestedInput
  }

  export type UniversityRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityRoleCreateManyInput = {
    id?: string
    userId: string
    universityId: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiInterviewOfferCreateInput = {
    id?: string
    inviteToken: string
    chairpersonName: string
    university: string
    year: number
    status?: string
    conversation?: string | null
    articleId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiInterviewOfferUncheckedCreateInput = {
    id?: string
    inviteToken: string
    chairpersonName: string
    university: string
    year: number
    status?: string
    conversation?: string | null
    articleId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiInterviewOfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteToken?: StringFieldUpdateOperationsInput | string
    chairpersonName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    conversation?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiInterviewOfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteToken?: StringFieldUpdateOperationsInput | string
    chairpersonName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    conversation?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiInterviewOfferCreateManyInput = {
    id?: string
    inviteToken: string
    chairpersonName: string
    university: string
    year: number
    status?: string
    conversation?: string | null
    articleId?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiInterviewOfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteToken?: StringFieldUpdateOperationsInput | string
    chairpersonName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    conversation?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiInterviewOfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteToken?: StringFieldUpdateOperationsInput | string
    chairpersonName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    conversation?: NullableStringFieldUpdateOperationsInput | string | null
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiArticleCreateInput = {
    id?: string
    title: string
    excerpt: string
    chairpersonName: string
    university: string
    year: number
    thumbnailUrl: string
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: GakusaiArticleSectionCreateNestedManyWithoutArticleInput
  }

  export type GakusaiArticleUncheckedCreateInput = {
    id?: string
    title: string
    excerpt: string
    chairpersonName: string
    university: string
    year: number
    thumbnailUrl: string
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: GakusaiArticleSectionUncheckedCreateNestedManyWithoutArticleInput
  }

  export type GakusaiArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    chairpersonName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: GakusaiArticleSectionUpdateManyWithoutArticleNestedInput
  }

  export type GakusaiArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    chairpersonName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: GakusaiArticleSectionUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type GakusaiArticleCreateManyInput = {
    id?: string
    title: string
    excerpt: string
    chairpersonName: string
    university: string
    year: number
    thumbnailUrl: string
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    chairpersonName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    chairpersonName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiArticleSectionCreateInput = {
    id?: string
    heading: string
    content: string
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    article: GakusaiArticleCreateNestedOneWithoutSectionsInput
  }

  export type GakusaiArticleSectionUncheckedCreateInput = {
    id?: string
    articleId: string
    heading: string
    content: string
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiArticleSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: GakusaiArticleUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type GakusaiArticleSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiArticleSectionCreateManyInput = {
    id?: string
    articleId: string
    heading: string
    content: string
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiArticleSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiArticleSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChairpersonListRelationFilter = {
    every?: ChairpersonWhereInput
    some?: ChairpersonWhereInput
    none?: ChairpersonWhereInput
  }

  export type CommitteeMemberListRelationFilter = {
    every?: CommitteeMemberWhereInput
    some?: CommitteeMemberWhereInput
    none?: CommitteeMemberWhereInput
  }

  export type UniversityRoleListRelationFilter = {
    every?: UniversityRoleWhereInput
    some?: UniversityRoleWhereInput
    none?: UniversityRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChairpersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommitteeMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UniversityRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    department?: SortOrder
    snsLinks?: SortOrder
    contactPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    department?: SortOrder
    snsLinks?: SortOrder
    contactPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    profileImage?: SortOrder
    bio?: SortOrder
    department?: SortOrder
    snsLinks?: SortOrder
    contactPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FestivalListRelationFilter = {
    every?: FestivalWhereInput
    some?: FestivalWhereInput
    none?: FestivalWhereInput
  }

  export type FestivalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UniversityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    coverImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniversityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    coverImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniversityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    coverImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UniversityScalarRelationFilter = {
    is?: UniversityWhereInput
    isNot?: UniversityWhereInput
  }

  export type ChairpersonNullableScalarRelationFilter = {
    is?: ChairpersonWhereInput | null
    isNot?: ChairpersonWhereInput | null
  }

  export type ThemeNullableScalarRelationFilter = {
    is?: ThemeWhereInput | null
    isNot?: ThemeWhereInput | null
  }

  export type SponsorPlanListRelationFilter = {
    every?: SponsorPlanWhereInput
    some?: SponsorPlanWhereInput
    none?: SponsorPlanWhereInput
  }

  export type FestivalHighlightListRelationFilter = {
    every?: FestivalHighlightWhereInput
    some?: FestivalHighlightWhereInput
    none?: FestivalHighlightWhereInput
  }

  export type SponsorPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FestivalHighlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FestivalCountOrderByAggregateInput = {
    id?: SortOrder
    universityId?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type FestivalMaxOrderByAggregateInput = {
    id?: SortOrder
    universityId?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalMinOrderByAggregateInput = {
    id?: SortOrder
    universityId?: SortOrder
    year?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FestivalScalarRelationFilter = {
    is?: FestivalWhereInput
    isNot?: FestivalWhereInput
  }

  export type FestivalHighlightCountOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalHighlightAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type FestivalHighlightMaxOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalHighlightMinOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FestivalHighlightSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChairpersonCountOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    userId?: SortOrder
    predecessorId?: SortOrder
    handoverDate?: SortOrder
    handoverComment?: SortOrder
    message?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChairpersonAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type ChairpersonMaxOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    userId?: SortOrder
    predecessorId?: SortOrder
    handoverDate?: SortOrder
    handoverComment?: SortOrder
    message?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChairpersonMinOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    userId?: SortOrder
    predecessorId?: SortOrder
    handoverDate?: SortOrder
    handoverComment?: SortOrder
    message?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChairpersonSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ThemeCountOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    themeName?: SortOrder
    eventDate?: SortOrder
    eventEndDate?: SortOrder
    venue?: SortOrder
    schedule?: SortOrder
    details?: SortOrder
    accessInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    themeName?: SortOrder
    eventDate?: SortOrder
    eventEndDate?: SortOrder
    venue?: SortOrder
    schedule?: SortOrder
    details?: SortOrder
    accessInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    themeName?: SortOrder
    eventDate?: SortOrder
    eventEndDate?: SortOrder
    venue?: SortOrder
    schedule?: SortOrder
    details?: SortOrder
    accessInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorPlanCountOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    planName?: SortOrder
    amount?: SortOrder
    benefits?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorPlanAvgOrderByAggregateInput = {
    amount?: SortOrder
    displayOrder?: SortOrder
  }

  export type SponsorPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    planName?: SortOrder
    amount?: SortOrder
    benefits?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorPlanMinOrderByAggregateInput = {
    id?: SortOrder
    festivalId?: SortOrder
    planName?: SortOrder
    amount?: SortOrder
    benefits?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorPlanSumOrderByAggregateInput = {
    amount?: SortOrder
    displayOrder?: SortOrder
  }

  export type CommitteeMemberUserIdUniversityIdCompoundUniqueInput = {
    userId: string
    universityId: string
  }

  export type CommitteeMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommitteeMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommitteeMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniversityRoleUserIdUniversityIdCompoundUniqueInput = {
    userId: string
    universityId: string
  }

  export type UniversityRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniversityRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniversityRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    universityId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiInterviewOfferCountOrderByAggregateInput = {
    id?: SortOrder
    inviteToken?: SortOrder
    chairpersonName?: SortOrder
    university?: SortOrder
    year?: SortOrder
    status?: SortOrder
    conversation?: SortOrder
    articleId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiInterviewOfferAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type GakusaiInterviewOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    inviteToken?: SortOrder
    chairpersonName?: SortOrder
    university?: SortOrder
    year?: SortOrder
    status?: SortOrder
    conversation?: SortOrder
    articleId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiInterviewOfferMinOrderByAggregateInput = {
    id?: SortOrder
    inviteToken?: SortOrder
    chairpersonName?: SortOrder
    university?: SortOrder
    year?: SortOrder
    status?: SortOrder
    conversation?: SortOrder
    articleId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiInterviewOfferSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type GakusaiArticleSectionListRelationFilter = {
    every?: GakusaiArticleSectionWhereInput
    some?: GakusaiArticleSectionWhereInput
    none?: GakusaiArticleSectionWhereInput
  }

  export type GakusaiArticleSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GakusaiArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    chairpersonName?: SortOrder
    university?: SortOrder
    year?: SortOrder
    thumbnailUrl?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiArticleAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type GakusaiArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    chairpersonName?: SortOrder
    university?: SortOrder
    year?: SortOrder
    thumbnailUrl?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    chairpersonName?: SortOrder
    university?: SortOrder
    year?: SortOrder
    thumbnailUrl?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiArticleSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type GakusaiArticleScalarRelationFilter = {
    is?: GakusaiArticleWhereInput
    isNot?: GakusaiArticleWhereInput
  }

  export type GakusaiArticleSectionCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    heading?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiArticleSectionAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type GakusaiArticleSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    heading?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiArticleSectionMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    heading?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GakusaiArticleSectionSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type ChairpersonCreateNestedManyWithoutUserInput = {
    create?: XOR<ChairpersonCreateWithoutUserInput, ChairpersonUncheckedCreateWithoutUserInput> | ChairpersonCreateWithoutUserInput[] | ChairpersonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChairpersonCreateOrConnectWithoutUserInput | ChairpersonCreateOrConnectWithoutUserInput[]
    createMany?: ChairpersonCreateManyUserInputEnvelope
    connect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
  }

  export type CommitteeMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<CommitteeMemberCreateWithoutUserInput, CommitteeMemberUncheckedCreateWithoutUserInput> | CommitteeMemberCreateWithoutUserInput[] | CommitteeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommitteeMemberCreateOrConnectWithoutUserInput | CommitteeMemberCreateOrConnectWithoutUserInput[]
    createMany?: CommitteeMemberCreateManyUserInputEnvelope
    connect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
  }

  export type UniversityRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UniversityRoleCreateWithoutUserInput, UniversityRoleUncheckedCreateWithoutUserInput> | UniversityRoleCreateWithoutUserInput[] | UniversityRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UniversityRoleCreateOrConnectWithoutUserInput | UniversityRoleCreateOrConnectWithoutUserInput[]
    createMany?: UniversityRoleCreateManyUserInputEnvelope
    connect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
  }

  export type ChairpersonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChairpersonCreateWithoutUserInput, ChairpersonUncheckedCreateWithoutUserInput> | ChairpersonCreateWithoutUserInput[] | ChairpersonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChairpersonCreateOrConnectWithoutUserInput | ChairpersonCreateOrConnectWithoutUserInput[]
    createMany?: ChairpersonCreateManyUserInputEnvelope
    connect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
  }

  export type CommitteeMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommitteeMemberCreateWithoutUserInput, CommitteeMemberUncheckedCreateWithoutUserInput> | CommitteeMemberCreateWithoutUserInput[] | CommitteeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommitteeMemberCreateOrConnectWithoutUserInput | CommitteeMemberCreateOrConnectWithoutUserInput[]
    createMany?: CommitteeMemberCreateManyUserInputEnvelope
    connect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
  }

  export type UniversityRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UniversityRoleCreateWithoutUserInput, UniversityRoleUncheckedCreateWithoutUserInput> | UniversityRoleCreateWithoutUserInput[] | UniversityRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UniversityRoleCreateOrConnectWithoutUserInput | UniversityRoleCreateOrConnectWithoutUserInput[]
    createMany?: UniversityRoleCreateManyUserInputEnvelope
    connect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChairpersonUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChairpersonCreateWithoutUserInput, ChairpersonUncheckedCreateWithoutUserInput> | ChairpersonCreateWithoutUserInput[] | ChairpersonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChairpersonCreateOrConnectWithoutUserInput | ChairpersonCreateOrConnectWithoutUserInput[]
    upsert?: ChairpersonUpsertWithWhereUniqueWithoutUserInput | ChairpersonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChairpersonCreateManyUserInputEnvelope
    set?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    disconnect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    delete?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    connect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    update?: ChairpersonUpdateWithWhereUniqueWithoutUserInput | ChairpersonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChairpersonUpdateManyWithWhereWithoutUserInput | ChairpersonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChairpersonScalarWhereInput | ChairpersonScalarWhereInput[]
  }

  export type CommitteeMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommitteeMemberCreateWithoutUserInput, CommitteeMemberUncheckedCreateWithoutUserInput> | CommitteeMemberCreateWithoutUserInput[] | CommitteeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommitteeMemberCreateOrConnectWithoutUserInput | CommitteeMemberCreateOrConnectWithoutUserInput[]
    upsert?: CommitteeMemberUpsertWithWhereUniqueWithoutUserInput | CommitteeMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommitteeMemberCreateManyUserInputEnvelope
    set?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    disconnect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    delete?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    connect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    update?: CommitteeMemberUpdateWithWhereUniqueWithoutUserInput | CommitteeMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommitteeMemberUpdateManyWithWhereWithoutUserInput | CommitteeMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommitteeMemberScalarWhereInput | CommitteeMemberScalarWhereInput[]
  }

  export type UniversityRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UniversityRoleCreateWithoutUserInput, UniversityRoleUncheckedCreateWithoutUserInput> | UniversityRoleCreateWithoutUserInput[] | UniversityRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UniversityRoleCreateOrConnectWithoutUserInput | UniversityRoleCreateOrConnectWithoutUserInput[]
    upsert?: UniversityRoleUpsertWithWhereUniqueWithoutUserInput | UniversityRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UniversityRoleCreateManyUserInputEnvelope
    set?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    disconnect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    delete?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    connect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    update?: UniversityRoleUpdateWithWhereUniqueWithoutUserInput | UniversityRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UniversityRoleUpdateManyWithWhereWithoutUserInput | UniversityRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UniversityRoleScalarWhereInput | UniversityRoleScalarWhereInput[]
  }

  export type ChairpersonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChairpersonCreateWithoutUserInput, ChairpersonUncheckedCreateWithoutUserInput> | ChairpersonCreateWithoutUserInput[] | ChairpersonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChairpersonCreateOrConnectWithoutUserInput | ChairpersonCreateOrConnectWithoutUserInput[]
    upsert?: ChairpersonUpsertWithWhereUniqueWithoutUserInput | ChairpersonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChairpersonCreateManyUserInputEnvelope
    set?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    disconnect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    delete?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    connect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    update?: ChairpersonUpdateWithWhereUniqueWithoutUserInput | ChairpersonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChairpersonUpdateManyWithWhereWithoutUserInput | ChairpersonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChairpersonScalarWhereInput | ChairpersonScalarWhereInput[]
  }

  export type CommitteeMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommitteeMemberCreateWithoutUserInput, CommitteeMemberUncheckedCreateWithoutUserInput> | CommitteeMemberCreateWithoutUserInput[] | CommitteeMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommitteeMemberCreateOrConnectWithoutUserInput | CommitteeMemberCreateOrConnectWithoutUserInput[]
    upsert?: CommitteeMemberUpsertWithWhereUniqueWithoutUserInput | CommitteeMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommitteeMemberCreateManyUserInputEnvelope
    set?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    disconnect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    delete?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    connect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    update?: CommitteeMemberUpdateWithWhereUniqueWithoutUserInput | CommitteeMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommitteeMemberUpdateManyWithWhereWithoutUserInput | CommitteeMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommitteeMemberScalarWhereInput | CommitteeMemberScalarWhereInput[]
  }

  export type UniversityRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UniversityRoleCreateWithoutUserInput, UniversityRoleUncheckedCreateWithoutUserInput> | UniversityRoleCreateWithoutUserInput[] | UniversityRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UniversityRoleCreateOrConnectWithoutUserInput | UniversityRoleCreateOrConnectWithoutUserInput[]
    upsert?: UniversityRoleUpsertWithWhereUniqueWithoutUserInput | UniversityRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UniversityRoleCreateManyUserInputEnvelope
    set?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    disconnect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    delete?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    connect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    update?: UniversityRoleUpdateWithWhereUniqueWithoutUserInput | UniversityRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UniversityRoleUpdateManyWithWhereWithoutUserInput | UniversityRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UniversityRoleScalarWhereInput | UniversityRoleScalarWhereInput[]
  }

  export type FestivalCreateNestedManyWithoutUniversityInput = {
    create?: XOR<FestivalCreateWithoutUniversityInput, FestivalUncheckedCreateWithoutUniversityInput> | FestivalCreateWithoutUniversityInput[] | FestivalUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutUniversityInput | FestivalCreateOrConnectWithoutUniversityInput[]
    createMany?: FestivalCreateManyUniversityInputEnvelope
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
  }

  export type UniversityRoleCreateNestedManyWithoutUniversityInput = {
    create?: XOR<UniversityRoleCreateWithoutUniversityInput, UniversityRoleUncheckedCreateWithoutUniversityInput> | UniversityRoleCreateWithoutUniversityInput[] | UniversityRoleUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: UniversityRoleCreateOrConnectWithoutUniversityInput | UniversityRoleCreateOrConnectWithoutUniversityInput[]
    createMany?: UniversityRoleCreateManyUniversityInputEnvelope
    connect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
  }

  export type CommitteeMemberCreateNestedManyWithoutUniversityInput = {
    create?: XOR<CommitteeMemberCreateWithoutUniversityInput, CommitteeMemberUncheckedCreateWithoutUniversityInput> | CommitteeMemberCreateWithoutUniversityInput[] | CommitteeMemberUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: CommitteeMemberCreateOrConnectWithoutUniversityInput | CommitteeMemberCreateOrConnectWithoutUniversityInput[]
    createMany?: CommitteeMemberCreateManyUniversityInputEnvelope
    connect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
  }

  export type FestivalUncheckedCreateNestedManyWithoutUniversityInput = {
    create?: XOR<FestivalCreateWithoutUniversityInput, FestivalUncheckedCreateWithoutUniversityInput> | FestivalCreateWithoutUniversityInput[] | FestivalUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutUniversityInput | FestivalCreateOrConnectWithoutUniversityInput[]
    createMany?: FestivalCreateManyUniversityInputEnvelope
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
  }

  export type UniversityRoleUncheckedCreateNestedManyWithoutUniversityInput = {
    create?: XOR<UniversityRoleCreateWithoutUniversityInput, UniversityRoleUncheckedCreateWithoutUniversityInput> | UniversityRoleCreateWithoutUniversityInput[] | UniversityRoleUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: UniversityRoleCreateOrConnectWithoutUniversityInput | UniversityRoleCreateOrConnectWithoutUniversityInput[]
    createMany?: UniversityRoleCreateManyUniversityInputEnvelope
    connect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
  }

  export type CommitteeMemberUncheckedCreateNestedManyWithoutUniversityInput = {
    create?: XOR<CommitteeMemberCreateWithoutUniversityInput, CommitteeMemberUncheckedCreateWithoutUniversityInput> | CommitteeMemberCreateWithoutUniversityInput[] | CommitteeMemberUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: CommitteeMemberCreateOrConnectWithoutUniversityInput | CommitteeMemberCreateOrConnectWithoutUniversityInput[]
    createMany?: CommitteeMemberCreateManyUniversityInputEnvelope
    connect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
  }

  export type FestivalUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<FestivalCreateWithoutUniversityInput, FestivalUncheckedCreateWithoutUniversityInput> | FestivalCreateWithoutUniversityInput[] | FestivalUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutUniversityInput | FestivalCreateOrConnectWithoutUniversityInput[]
    upsert?: FestivalUpsertWithWhereUniqueWithoutUniversityInput | FestivalUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: FestivalCreateManyUniversityInputEnvelope
    set?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    disconnect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    delete?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    update?: FestivalUpdateWithWhereUniqueWithoutUniversityInput | FestivalUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: FestivalUpdateManyWithWhereWithoutUniversityInput | FestivalUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: FestivalScalarWhereInput | FestivalScalarWhereInput[]
  }

  export type UniversityRoleUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<UniversityRoleCreateWithoutUniversityInput, UniversityRoleUncheckedCreateWithoutUniversityInput> | UniversityRoleCreateWithoutUniversityInput[] | UniversityRoleUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: UniversityRoleCreateOrConnectWithoutUniversityInput | UniversityRoleCreateOrConnectWithoutUniversityInput[]
    upsert?: UniversityRoleUpsertWithWhereUniqueWithoutUniversityInput | UniversityRoleUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: UniversityRoleCreateManyUniversityInputEnvelope
    set?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    disconnect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    delete?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    connect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    update?: UniversityRoleUpdateWithWhereUniqueWithoutUniversityInput | UniversityRoleUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: UniversityRoleUpdateManyWithWhereWithoutUniversityInput | UniversityRoleUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: UniversityRoleScalarWhereInput | UniversityRoleScalarWhereInput[]
  }

  export type CommitteeMemberUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<CommitteeMemberCreateWithoutUniversityInput, CommitteeMemberUncheckedCreateWithoutUniversityInput> | CommitteeMemberCreateWithoutUniversityInput[] | CommitteeMemberUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: CommitteeMemberCreateOrConnectWithoutUniversityInput | CommitteeMemberCreateOrConnectWithoutUniversityInput[]
    upsert?: CommitteeMemberUpsertWithWhereUniqueWithoutUniversityInput | CommitteeMemberUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: CommitteeMemberCreateManyUniversityInputEnvelope
    set?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    disconnect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    delete?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    connect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    update?: CommitteeMemberUpdateWithWhereUniqueWithoutUniversityInput | CommitteeMemberUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: CommitteeMemberUpdateManyWithWhereWithoutUniversityInput | CommitteeMemberUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: CommitteeMemberScalarWhereInput | CommitteeMemberScalarWhereInput[]
  }

  export type FestivalUncheckedUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<FestivalCreateWithoutUniversityInput, FestivalUncheckedCreateWithoutUniversityInput> | FestivalCreateWithoutUniversityInput[] | FestivalUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: FestivalCreateOrConnectWithoutUniversityInput | FestivalCreateOrConnectWithoutUniversityInput[]
    upsert?: FestivalUpsertWithWhereUniqueWithoutUniversityInput | FestivalUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: FestivalCreateManyUniversityInputEnvelope
    set?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    disconnect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    delete?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    connect?: FestivalWhereUniqueInput | FestivalWhereUniqueInput[]
    update?: FestivalUpdateWithWhereUniqueWithoutUniversityInput | FestivalUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: FestivalUpdateManyWithWhereWithoutUniversityInput | FestivalUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: FestivalScalarWhereInput | FestivalScalarWhereInput[]
  }

  export type UniversityRoleUncheckedUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<UniversityRoleCreateWithoutUniversityInput, UniversityRoleUncheckedCreateWithoutUniversityInput> | UniversityRoleCreateWithoutUniversityInput[] | UniversityRoleUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: UniversityRoleCreateOrConnectWithoutUniversityInput | UniversityRoleCreateOrConnectWithoutUniversityInput[]
    upsert?: UniversityRoleUpsertWithWhereUniqueWithoutUniversityInput | UniversityRoleUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: UniversityRoleCreateManyUniversityInputEnvelope
    set?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    disconnect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    delete?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    connect?: UniversityRoleWhereUniqueInput | UniversityRoleWhereUniqueInput[]
    update?: UniversityRoleUpdateWithWhereUniqueWithoutUniversityInput | UniversityRoleUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: UniversityRoleUpdateManyWithWhereWithoutUniversityInput | UniversityRoleUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: UniversityRoleScalarWhereInput | UniversityRoleScalarWhereInput[]
  }

  export type CommitteeMemberUncheckedUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<CommitteeMemberCreateWithoutUniversityInput, CommitteeMemberUncheckedCreateWithoutUniversityInput> | CommitteeMemberCreateWithoutUniversityInput[] | CommitteeMemberUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: CommitteeMemberCreateOrConnectWithoutUniversityInput | CommitteeMemberCreateOrConnectWithoutUniversityInput[]
    upsert?: CommitteeMemberUpsertWithWhereUniqueWithoutUniversityInput | CommitteeMemberUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: CommitteeMemberCreateManyUniversityInputEnvelope
    set?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    disconnect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    delete?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    connect?: CommitteeMemberWhereUniqueInput | CommitteeMemberWhereUniqueInput[]
    update?: CommitteeMemberUpdateWithWhereUniqueWithoutUniversityInput | CommitteeMemberUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: CommitteeMemberUpdateManyWithWhereWithoutUniversityInput | CommitteeMemberUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: CommitteeMemberScalarWhereInput | CommitteeMemberScalarWhereInput[]
  }

  export type UniversityCreateNestedOneWithoutFestivalsInput = {
    create?: XOR<UniversityCreateWithoutFestivalsInput, UniversityUncheckedCreateWithoutFestivalsInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutFestivalsInput
    connect?: UniversityWhereUniqueInput
  }

  export type ChairpersonCreateNestedOneWithoutFestivalInput = {
    create?: XOR<ChairpersonCreateWithoutFestivalInput, ChairpersonUncheckedCreateWithoutFestivalInput>
    connectOrCreate?: ChairpersonCreateOrConnectWithoutFestivalInput
    connect?: ChairpersonWhereUniqueInput
  }

  export type ThemeCreateNestedOneWithoutFestivalInput = {
    create?: XOR<ThemeCreateWithoutFestivalInput, ThemeUncheckedCreateWithoutFestivalInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutFestivalInput
    connect?: ThemeWhereUniqueInput
  }

  export type SponsorPlanCreateNestedManyWithoutFestivalInput = {
    create?: XOR<SponsorPlanCreateWithoutFestivalInput, SponsorPlanUncheckedCreateWithoutFestivalInput> | SponsorPlanCreateWithoutFestivalInput[] | SponsorPlanUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: SponsorPlanCreateOrConnectWithoutFestivalInput | SponsorPlanCreateOrConnectWithoutFestivalInput[]
    createMany?: SponsorPlanCreateManyFestivalInputEnvelope
    connect?: SponsorPlanWhereUniqueInput | SponsorPlanWhereUniqueInput[]
  }

  export type FestivalHighlightCreateNestedManyWithoutFestivalInput = {
    create?: XOR<FestivalHighlightCreateWithoutFestivalInput, FestivalHighlightUncheckedCreateWithoutFestivalInput> | FestivalHighlightCreateWithoutFestivalInput[] | FestivalHighlightUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: FestivalHighlightCreateOrConnectWithoutFestivalInput | FestivalHighlightCreateOrConnectWithoutFestivalInput[]
    createMany?: FestivalHighlightCreateManyFestivalInputEnvelope
    connect?: FestivalHighlightWhereUniqueInput | FestivalHighlightWhereUniqueInput[]
  }

  export type ChairpersonUncheckedCreateNestedOneWithoutFestivalInput = {
    create?: XOR<ChairpersonCreateWithoutFestivalInput, ChairpersonUncheckedCreateWithoutFestivalInput>
    connectOrCreate?: ChairpersonCreateOrConnectWithoutFestivalInput
    connect?: ChairpersonWhereUniqueInput
  }

  export type ThemeUncheckedCreateNestedOneWithoutFestivalInput = {
    create?: XOR<ThemeCreateWithoutFestivalInput, ThemeUncheckedCreateWithoutFestivalInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutFestivalInput
    connect?: ThemeWhereUniqueInput
  }

  export type SponsorPlanUncheckedCreateNestedManyWithoutFestivalInput = {
    create?: XOR<SponsorPlanCreateWithoutFestivalInput, SponsorPlanUncheckedCreateWithoutFestivalInput> | SponsorPlanCreateWithoutFestivalInput[] | SponsorPlanUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: SponsorPlanCreateOrConnectWithoutFestivalInput | SponsorPlanCreateOrConnectWithoutFestivalInput[]
    createMany?: SponsorPlanCreateManyFestivalInputEnvelope
    connect?: SponsorPlanWhereUniqueInput | SponsorPlanWhereUniqueInput[]
  }

  export type FestivalHighlightUncheckedCreateNestedManyWithoutFestivalInput = {
    create?: XOR<FestivalHighlightCreateWithoutFestivalInput, FestivalHighlightUncheckedCreateWithoutFestivalInput> | FestivalHighlightCreateWithoutFestivalInput[] | FestivalHighlightUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: FestivalHighlightCreateOrConnectWithoutFestivalInput | FestivalHighlightCreateOrConnectWithoutFestivalInput[]
    createMany?: FestivalHighlightCreateManyFestivalInputEnvelope
    connect?: FestivalHighlightWhereUniqueInput | FestivalHighlightWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UniversityUpdateOneRequiredWithoutFestivalsNestedInput = {
    create?: XOR<UniversityCreateWithoutFestivalsInput, UniversityUncheckedCreateWithoutFestivalsInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutFestivalsInput
    upsert?: UniversityUpsertWithoutFestivalsInput
    connect?: UniversityWhereUniqueInput
    update?: XOR<XOR<UniversityUpdateToOneWithWhereWithoutFestivalsInput, UniversityUpdateWithoutFestivalsInput>, UniversityUncheckedUpdateWithoutFestivalsInput>
  }

  export type ChairpersonUpdateOneWithoutFestivalNestedInput = {
    create?: XOR<ChairpersonCreateWithoutFestivalInput, ChairpersonUncheckedCreateWithoutFestivalInput>
    connectOrCreate?: ChairpersonCreateOrConnectWithoutFestivalInput
    upsert?: ChairpersonUpsertWithoutFestivalInput
    disconnect?: ChairpersonWhereInput | boolean
    delete?: ChairpersonWhereInput | boolean
    connect?: ChairpersonWhereUniqueInput
    update?: XOR<XOR<ChairpersonUpdateToOneWithWhereWithoutFestivalInput, ChairpersonUpdateWithoutFestivalInput>, ChairpersonUncheckedUpdateWithoutFestivalInput>
  }

  export type ThemeUpdateOneWithoutFestivalNestedInput = {
    create?: XOR<ThemeCreateWithoutFestivalInput, ThemeUncheckedCreateWithoutFestivalInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutFestivalInput
    upsert?: ThemeUpsertWithoutFestivalInput
    disconnect?: ThemeWhereInput | boolean
    delete?: ThemeWhereInput | boolean
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutFestivalInput, ThemeUpdateWithoutFestivalInput>, ThemeUncheckedUpdateWithoutFestivalInput>
  }

  export type SponsorPlanUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<SponsorPlanCreateWithoutFestivalInput, SponsorPlanUncheckedCreateWithoutFestivalInput> | SponsorPlanCreateWithoutFestivalInput[] | SponsorPlanUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: SponsorPlanCreateOrConnectWithoutFestivalInput | SponsorPlanCreateOrConnectWithoutFestivalInput[]
    upsert?: SponsorPlanUpsertWithWhereUniqueWithoutFestivalInput | SponsorPlanUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: SponsorPlanCreateManyFestivalInputEnvelope
    set?: SponsorPlanWhereUniqueInput | SponsorPlanWhereUniqueInput[]
    disconnect?: SponsorPlanWhereUniqueInput | SponsorPlanWhereUniqueInput[]
    delete?: SponsorPlanWhereUniqueInput | SponsorPlanWhereUniqueInput[]
    connect?: SponsorPlanWhereUniqueInput | SponsorPlanWhereUniqueInput[]
    update?: SponsorPlanUpdateWithWhereUniqueWithoutFestivalInput | SponsorPlanUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: SponsorPlanUpdateManyWithWhereWithoutFestivalInput | SponsorPlanUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: SponsorPlanScalarWhereInput | SponsorPlanScalarWhereInput[]
  }

  export type FestivalHighlightUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<FestivalHighlightCreateWithoutFestivalInput, FestivalHighlightUncheckedCreateWithoutFestivalInput> | FestivalHighlightCreateWithoutFestivalInput[] | FestivalHighlightUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: FestivalHighlightCreateOrConnectWithoutFestivalInput | FestivalHighlightCreateOrConnectWithoutFestivalInput[]
    upsert?: FestivalHighlightUpsertWithWhereUniqueWithoutFestivalInput | FestivalHighlightUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: FestivalHighlightCreateManyFestivalInputEnvelope
    set?: FestivalHighlightWhereUniqueInput | FestivalHighlightWhereUniqueInput[]
    disconnect?: FestivalHighlightWhereUniqueInput | FestivalHighlightWhereUniqueInput[]
    delete?: FestivalHighlightWhereUniqueInput | FestivalHighlightWhereUniqueInput[]
    connect?: FestivalHighlightWhereUniqueInput | FestivalHighlightWhereUniqueInput[]
    update?: FestivalHighlightUpdateWithWhereUniqueWithoutFestivalInput | FestivalHighlightUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: FestivalHighlightUpdateManyWithWhereWithoutFestivalInput | FestivalHighlightUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: FestivalHighlightScalarWhereInput | FestivalHighlightScalarWhereInput[]
  }

  export type ChairpersonUncheckedUpdateOneWithoutFestivalNestedInput = {
    create?: XOR<ChairpersonCreateWithoutFestivalInput, ChairpersonUncheckedCreateWithoutFestivalInput>
    connectOrCreate?: ChairpersonCreateOrConnectWithoutFestivalInput
    upsert?: ChairpersonUpsertWithoutFestivalInput
    disconnect?: ChairpersonWhereInput | boolean
    delete?: ChairpersonWhereInput | boolean
    connect?: ChairpersonWhereUniqueInput
    update?: XOR<XOR<ChairpersonUpdateToOneWithWhereWithoutFestivalInput, ChairpersonUpdateWithoutFestivalInput>, ChairpersonUncheckedUpdateWithoutFestivalInput>
  }

  export type ThemeUncheckedUpdateOneWithoutFestivalNestedInput = {
    create?: XOR<ThemeCreateWithoutFestivalInput, ThemeUncheckedCreateWithoutFestivalInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutFestivalInput
    upsert?: ThemeUpsertWithoutFestivalInput
    disconnect?: ThemeWhereInput | boolean
    delete?: ThemeWhereInput | boolean
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutFestivalInput, ThemeUpdateWithoutFestivalInput>, ThemeUncheckedUpdateWithoutFestivalInput>
  }

  export type SponsorPlanUncheckedUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<SponsorPlanCreateWithoutFestivalInput, SponsorPlanUncheckedCreateWithoutFestivalInput> | SponsorPlanCreateWithoutFestivalInput[] | SponsorPlanUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: SponsorPlanCreateOrConnectWithoutFestivalInput | SponsorPlanCreateOrConnectWithoutFestivalInput[]
    upsert?: SponsorPlanUpsertWithWhereUniqueWithoutFestivalInput | SponsorPlanUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: SponsorPlanCreateManyFestivalInputEnvelope
    set?: SponsorPlanWhereUniqueInput | SponsorPlanWhereUniqueInput[]
    disconnect?: SponsorPlanWhereUniqueInput | SponsorPlanWhereUniqueInput[]
    delete?: SponsorPlanWhereUniqueInput | SponsorPlanWhereUniqueInput[]
    connect?: SponsorPlanWhereUniqueInput | SponsorPlanWhereUniqueInput[]
    update?: SponsorPlanUpdateWithWhereUniqueWithoutFestivalInput | SponsorPlanUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: SponsorPlanUpdateManyWithWhereWithoutFestivalInput | SponsorPlanUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: SponsorPlanScalarWhereInput | SponsorPlanScalarWhereInput[]
  }

  export type FestivalHighlightUncheckedUpdateManyWithoutFestivalNestedInput = {
    create?: XOR<FestivalHighlightCreateWithoutFestivalInput, FestivalHighlightUncheckedCreateWithoutFestivalInput> | FestivalHighlightCreateWithoutFestivalInput[] | FestivalHighlightUncheckedCreateWithoutFestivalInput[]
    connectOrCreate?: FestivalHighlightCreateOrConnectWithoutFestivalInput | FestivalHighlightCreateOrConnectWithoutFestivalInput[]
    upsert?: FestivalHighlightUpsertWithWhereUniqueWithoutFestivalInput | FestivalHighlightUpsertWithWhereUniqueWithoutFestivalInput[]
    createMany?: FestivalHighlightCreateManyFestivalInputEnvelope
    set?: FestivalHighlightWhereUniqueInput | FestivalHighlightWhereUniqueInput[]
    disconnect?: FestivalHighlightWhereUniqueInput | FestivalHighlightWhereUniqueInput[]
    delete?: FestivalHighlightWhereUniqueInput | FestivalHighlightWhereUniqueInput[]
    connect?: FestivalHighlightWhereUniqueInput | FestivalHighlightWhereUniqueInput[]
    update?: FestivalHighlightUpdateWithWhereUniqueWithoutFestivalInput | FestivalHighlightUpdateWithWhereUniqueWithoutFestivalInput[]
    updateMany?: FestivalHighlightUpdateManyWithWhereWithoutFestivalInput | FestivalHighlightUpdateManyWithWhereWithoutFestivalInput[]
    deleteMany?: FestivalHighlightScalarWhereInput | FestivalHighlightScalarWhereInput[]
  }

  export type FestivalCreateNestedOneWithoutFestivalHighlightsInput = {
    create?: XOR<FestivalCreateWithoutFestivalHighlightsInput, FestivalUncheckedCreateWithoutFestivalHighlightsInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutFestivalHighlightsInput
    connect?: FestivalWhereUniqueInput
  }

  export type FestivalUpdateOneRequiredWithoutFestivalHighlightsNestedInput = {
    create?: XOR<FestivalCreateWithoutFestivalHighlightsInput, FestivalUncheckedCreateWithoutFestivalHighlightsInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutFestivalHighlightsInput
    upsert?: FestivalUpsertWithoutFestivalHighlightsInput
    connect?: FestivalWhereUniqueInput
    update?: XOR<XOR<FestivalUpdateToOneWithWhereWithoutFestivalHighlightsInput, FestivalUpdateWithoutFestivalHighlightsInput>, FestivalUncheckedUpdateWithoutFestivalHighlightsInput>
  }

  export type FestivalCreateNestedOneWithoutChairpersonInput = {
    create?: XOR<FestivalCreateWithoutChairpersonInput, FestivalUncheckedCreateWithoutChairpersonInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutChairpersonInput
    connect?: FestivalWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChairpersonsInput = {
    create?: XOR<UserCreateWithoutChairpersonsInput, UserUncheckedCreateWithoutChairpersonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChairpersonsInput
    connect?: UserWhereUniqueInput
  }

  export type ChairpersonCreateNestedOneWithoutSuccessorsInput = {
    create?: XOR<ChairpersonCreateWithoutSuccessorsInput, ChairpersonUncheckedCreateWithoutSuccessorsInput>
    connectOrCreate?: ChairpersonCreateOrConnectWithoutSuccessorsInput
    connect?: ChairpersonWhereUniqueInput
  }

  export type ChairpersonCreateNestedManyWithoutPredecessorInput = {
    create?: XOR<ChairpersonCreateWithoutPredecessorInput, ChairpersonUncheckedCreateWithoutPredecessorInput> | ChairpersonCreateWithoutPredecessorInput[] | ChairpersonUncheckedCreateWithoutPredecessorInput[]
    connectOrCreate?: ChairpersonCreateOrConnectWithoutPredecessorInput | ChairpersonCreateOrConnectWithoutPredecessorInput[]
    createMany?: ChairpersonCreateManyPredecessorInputEnvelope
    connect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
  }

  export type ChairpersonUncheckedCreateNestedManyWithoutPredecessorInput = {
    create?: XOR<ChairpersonCreateWithoutPredecessorInput, ChairpersonUncheckedCreateWithoutPredecessorInput> | ChairpersonCreateWithoutPredecessorInput[] | ChairpersonUncheckedCreateWithoutPredecessorInput[]
    connectOrCreate?: ChairpersonCreateOrConnectWithoutPredecessorInput | ChairpersonCreateOrConnectWithoutPredecessorInput[]
    createMany?: ChairpersonCreateManyPredecessorInputEnvelope
    connect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FestivalUpdateOneRequiredWithoutChairpersonNestedInput = {
    create?: XOR<FestivalCreateWithoutChairpersonInput, FestivalUncheckedCreateWithoutChairpersonInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutChairpersonInput
    upsert?: FestivalUpsertWithoutChairpersonInput
    connect?: FestivalWhereUniqueInput
    update?: XOR<XOR<FestivalUpdateToOneWithWhereWithoutChairpersonInput, FestivalUpdateWithoutChairpersonInput>, FestivalUncheckedUpdateWithoutChairpersonInput>
  }

  export type UserUpdateOneRequiredWithoutChairpersonsNestedInput = {
    create?: XOR<UserCreateWithoutChairpersonsInput, UserUncheckedCreateWithoutChairpersonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChairpersonsInput
    upsert?: UserUpsertWithoutChairpersonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChairpersonsInput, UserUpdateWithoutChairpersonsInput>, UserUncheckedUpdateWithoutChairpersonsInput>
  }

  export type ChairpersonUpdateOneWithoutSuccessorsNestedInput = {
    create?: XOR<ChairpersonCreateWithoutSuccessorsInput, ChairpersonUncheckedCreateWithoutSuccessorsInput>
    connectOrCreate?: ChairpersonCreateOrConnectWithoutSuccessorsInput
    upsert?: ChairpersonUpsertWithoutSuccessorsInput
    disconnect?: ChairpersonWhereInput | boolean
    delete?: ChairpersonWhereInput | boolean
    connect?: ChairpersonWhereUniqueInput
    update?: XOR<XOR<ChairpersonUpdateToOneWithWhereWithoutSuccessorsInput, ChairpersonUpdateWithoutSuccessorsInput>, ChairpersonUncheckedUpdateWithoutSuccessorsInput>
  }

  export type ChairpersonUpdateManyWithoutPredecessorNestedInput = {
    create?: XOR<ChairpersonCreateWithoutPredecessorInput, ChairpersonUncheckedCreateWithoutPredecessorInput> | ChairpersonCreateWithoutPredecessorInput[] | ChairpersonUncheckedCreateWithoutPredecessorInput[]
    connectOrCreate?: ChairpersonCreateOrConnectWithoutPredecessorInput | ChairpersonCreateOrConnectWithoutPredecessorInput[]
    upsert?: ChairpersonUpsertWithWhereUniqueWithoutPredecessorInput | ChairpersonUpsertWithWhereUniqueWithoutPredecessorInput[]
    createMany?: ChairpersonCreateManyPredecessorInputEnvelope
    set?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    disconnect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    delete?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    connect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    update?: ChairpersonUpdateWithWhereUniqueWithoutPredecessorInput | ChairpersonUpdateWithWhereUniqueWithoutPredecessorInput[]
    updateMany?: ChairpersonUpdateManyWithWhereWithoutPredecessorInput | ChairpersonUpdateManyWithWhereWithoutPredecessorInput[]
    deleteMany?: ChairpersonScalarWhereInput | ChairpersonScalarWhereInput[]
  }

  export type ChairpersonUncheckedUpdateManyWithoutPredecessorNestedInput = {
    create?: XOR<ChairpersonCreateWithoutPredecessorInput, ChairpersonUncheckedCreateWithoutPredecessorInput> | ChairpersonCreateWithoutPredecessorInput[] | ChairpersonUncheckedCreateWithoutPredecessorInput[]
    connectOrCreate?: ChairpersonCreateOrConnectWithoutPredecessorInput | ChairpersonCreateOrConnectWithoutPredecessorInput[]
    upsert?: ChairpersonUpsertWithWhereUniqueWithoutPredecessorInput | ChairpersonUpsertWithWhereUniqueWithoutPredecessorInput[]
    createMany?: ChairpersonCreateManyPredecessorInputEnvelope
    set?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    disconnect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    delete?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    connect?: ChairpersonWhereUniqueInput | ChairpersonWhereUniqueInput[]
    update?: ChairpersonUpdateWithWhereUniqueWithoutPredecessorInput | ChairpersonUpdateWithWhereUniqueWithoutPredecessorInput[]
    updateMany?: ChairpersonUpdateManyWithWhereWithoutPredecessorInput | ChairpersonUpdateManyWithWhereWithoutPredecessorInput[]
    deleteMany?: ChairpersonScalarWhereInput | ChairpersonScalarWhereInput[]
  }

  export type FestivalCreateNestedOneWithoutThemeInput = {
    create?: XOR<FestivalCreateWithoutThemeInput, FestivalUncheckedCreateWithoutThemeInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutThemeInput
    connect?: FestivalWhereUniqueInput
  }

  export type FestivalUpdateOneRequiredWithoutThemeNestedInput = {
    create?: XOR<FestivalCreateWithoutThemeInput, FestivalUncheckedCreateWithoutThemeInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutThemeInput
    upsert?: FestivalUpsertWithoutThemeInput
    connect?: FestivalWhereUniqueInput
    update?: XOR<XOR<FestivalUpdateToOneWithWhereWithoutThemeInput, FestivalUpdateWithoutThemeInput>, FestivalUncheckedUpdateWithoutThemeInput>
  }

  export type FestivalCreateNestedOneWithoutSponsorPlansInput = {
    create?: XOR<FestivalCreateWithoutSponsorPlansInput, FestivalUncheckedCreateWithoutSponsorPlansInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutSponsorPlansInput
    connect?: FestivalWhereUniqueInput
  }

  export type FestivalUpdateOneRequiredWithoutSponsorPlansNestedInput = {
    create?: XOR<FestivalCreateWithoutSponsorPlansInput, FestivalUncheckedCreateWithoutSponsorPlansInput>
    connectOrCreate?: FestivalCreateOrConnectWithoutSponsorPlansInput
    upsert?: FestivalUpsertWithoutSponsorPlansInput
    connect?: FestivalWhereUniqueInput
    update?: XOR<XOR<FestivalUpdateToOneWithWhereWithoutSponsorPlansInput, FestivalUpdateWithoutSponsorPlansInput>, FestivalUncheckedUpdateWithoutSponsorPlansInput>
  }

  export type UserCreateNestedOneWithoutCommitteeMembersInput = {
    create?: XOR<UserCreateWithoutCommitteeMembersInput, UserUncheckedCreateWithoutCommitteeMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommitteeMembersInput
    connect?: UserWhereUniqueInput
  }

  export type UniversityCreateNestedOneWithoutCommitteeMembersInput = {
    create?: XOR<UniversityCreateWithoutCommitteeMembersInput, UniversityUncheckedCreateWithoutCommitteeMembersInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutCommitteeMembersInput
    connect?: UniversityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommitteeMembersNestedInput = {
    create?: XOR<UserCreateWithoutCommitteeMembersInput, UserUncheckedCreateWithoutCommitteeMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommitteeMembersInput
    upsert?: UserUpsertWithoutCommitteeMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommitteeMembersInput, UserUpdateWithoutCommitteeMembersInput>, UserUncheckedUpdateWithoutCommitteeMembersInput>
  }

  export type UniversityUpdateOneRequiredWithoutCommitteeMembersNestedInput = {
    create?: XOR<UniversityCreateWithoutCommitteeMembersInput, UniversityUncheckedCreateWithoutCommitteeMembersInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutCommitteeMembersInput
    upsert?: UniversityUpsertWithoutCommitteeMembersInput
    connect?: UniversityWhereUniqueInput
    update?: XOR<XOR<UniversityUpdateToOneWithWhereWithoutCommitteeMembersInput, UniversityUpdateWithoutCommitteeMembersInput>, UniversityUncheckedUpdateWithoutCommitteeMembersInput>
  }

  export type UserCreateNestedOneWithoutUniversityRolesInput = {
    create?: XOR<UserCreateWithoutUniversityRolesInput, UserUncheckedCreateWithoutUniversityRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUniversityRolesInput
    connect?: UserWhereUniqueInput
  }

  export type UniversityCreateNestedOneWithoutUniversityRolesInput = {
    create?: XOR<UniversityCreateWithoutUniversityRolesInput, UniversityUncheckedCreateWithoutUniversityRolesInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutUniversityRolesInput
    connect?: UniversityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUniversityRolesNestedInput = {
    create?: XOR<UserCreateWithoutUniversityRolesInput, UserUncheckedCreateWithoutUniversityRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUniversityRolesInput
    upsert?: UserUpsertWithoutUniversityRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUniversityRolesInput, UserUpdateWithoutUniversityRolesInput>, UserUncheckedUpdateWithoutUniversityRolesInput>
  }

  export type UniversityUpdateOneRequiredWithoutUniversityRolesNestedInput = {
    create?: XOR<UniversityCreateWithoutUniversityRolesInput, UniversityUncheckedCreateWithoutUniversityRolesInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutUniversityRolesInput
    upsert?: UniversityUpsertWithoutUniversityRolesInput
    connect?: UniversityWhereUniqueInput
    update?: XOR<XOR<UniversityUpdateToOneWithWhereWithoutUniversityRolesInput, UniversityUpdateWithoutUniversityRolesInput>, UniversityUncheckedUpdateWithoutUniversityRolesInput>
  }

  export type GakusaiArticleSectionCreateNestedManyWithoutArticleInput = {
    create?: XOR<GakusaiArticleSectionCreateWithoutArticleInput, GakusaiArticleSectionUncheckedCreateWithoutArticleInput> | GakusaiArticleSectionCreateWithoutArticleInput[] | GakusaiArticleSectionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: GakusaiArticleSectionCreateOrConnectWithoutArticleInput | GakusaiArticleSectionCreateOrConnectWithoutArticleInput[]
    createMany?: GakusaiArticleSectionCreateManyArticleInputEnvelope
    connect?: GakusaiArticleSectionWhereUniqueInput | GakusaiArticleSectionWhereUniqueInput[]
  }

  export type GakusaiArticleSectionUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<GakusaiArticleSectionCreateWithoutArticleInput, GakusaiArticleSectionUncheckedCreateWithoutArticleInput> | GakusaiArticleSectionCreateWithoutArticleInput[] | GakusaiArticleSectionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: GakusaiArticleSectionCreateOrConnectWithoutArticleInput | GakusaiArticleSectionCreateOrConnectWithoutArticleInput[]
    createMany?: GakusaiArticleSectionCreateManyArticleInputEnvelope
    connect?: GakusaiArticleSectionWhereUniqueInput | GakusaiArticleSectionWhereUniqueInput[]
  }

  export type GakusaiArticleSectionUpdateManyWithoutArticleNestedInput = {
    create?: XOR<GakusaiArticleSectionCreateWithoutArticleInput, GakusaiArticleSectionUncheckedCreateWithoutArticleInput> | GakusaiArticleSectionCreateWithoutArticleInput[] | GakusaiArticleSectionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: GakusaiArticleSectionCreateOrConnectWithoutArticleInput | GakusaiArticleSectionCreateOrConnectWithoutArticleInput[]
    upsert?: GakusaiArticleSectionUpsertWithWhereUniqueWithoutArticleInput | GakusaiArticleSectionUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: GakusaiArticleSectionCreateManyArticleInputEnvelope
    set?: GakusaiArticleSectionWhereUniqueInput | GakusaiArticleSectionWhereUniqueInput[]
    disconnect?: GakusaiArticleSectionWhereUniqueInput | GakusaiArticleSectionWhereUniqueInput[]
    delete?: GakusaiArticleSectionWhereUniqueInput | GakusaiArticleSectionWhereUniqueInput[]
    connect?: GakusaiArticleSectionWhereUniqueInput | GakusaiArticleSectionWhereUniqueInput[]
    update?: GakusaiArticleSectionUpdateWithWhereUniqueWithoutArticleInput | GakusaiArticleSectionUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: GakusaiArticleSectionUpdateManyWithWhereWithoutArticleInput | GakusaiArticleSectionUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: GakusaiArticleSectionScalarWhereInput | GakusaiArticleSectionScalarWhereInput[]
  }

  export type GakusaiArticleSectionUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<GakusaiArticleSectionCreateWithoutArticleInput, GakusaiArticleSectionUncheckedCreateWithoutArticleInput> | GakusaiArticleSectionCreateWithoutArticleInput[] | GakusaiArticleSectionUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: GakusaiArticleSectionCreateOrConnectWithoutArticleInput | GakusaiArticleSectionCreateOrConnectWithoutArticleInput[]
    upsert?: GakusaiArticleSectionUpsertWithWhereUniqueWithoutArticleInput | GakusaiArticleSectionUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: GakusaiArticleSectionCreateManyArticleInputEnvelope
    set?: GakusaiArticleSectionWhereUniqueInput | GakusaiArticleSectionWhereUniqueInput[]
    disconnect?: GakusaiArticleSectionWhereUniqueInput | GakusaiArticleSectionWhereUniqueInput[]
    delete?: GakusaiArticleSectionWhereUniqueInput | GakusaiArticleSectionWhereUniqueInput[]
    connect?: GakusaiArticleSectionWhereUniqueInput | GakusaiArticleSectionWhereUniqueInput[]
    update?: GakusaiArticleSectionUpdateWithWhereUniqueWithoutArticleInput | GakusaiArticleSectionUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: GakusaiArticleSectionUpdateManyWithWhereWithoutArticleInput | GakusaiArticleSectionUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: GakusaiArticleSectionScalarWhereInput | GakusaiArticleSectionScalarWhereInput[]
  }

  export type GakusaiArticleCreateNestedOneWithoutSectionsInput = {
    create?: XOR<GakusaiArticleCreateWithoutSectionsInput, GakusaiArticleUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: GakusaiArticleCreateOrConnectWithoutSectionsInput
    connect?: GakusaiArticleWhereUniqueInput
  }

  export type GakusaiArticleUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<GakusaiArticleCreateWithoutSectionsInput, GakusaiArticleUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: GakusaiArticleCreateOrConnectWithoutSectionsInput
    upsert?: GakusaiArticleUpsertWithoutSectionsInput
    connect?: GakusaiArticleWhereUniqueInput
    update?: XOR<XOR<GakusaiArticleUpdateToOneWithWhereWithoutSectionsInput, GakusaiArticleUpdateWithoutSectionsInput>, GakusaiArticleUncheckedUpdateWithoutSectionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ChairpersonCreateWithoutUserInput = {
    id?: string
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutChairpersonInput
    predecessor?: ChairpersonCreateNestedOneWithoutSuccessorsInput
    successors?: ChairpersonCreateNestedManyWithoutPredecessorInput
  }

  export type ChairpersonUncheckedCreateWithoutUserInput = {
    id?: string
    festivalId: string
    predecessorId?: string | null
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    successors?: ChairpersonUncheckedCreateNestedManyWithoutPredecessorInput
  }

  export type ChairpersonCreateOrConnectWithoutUserInput = {
    where: ChairpersonWhereUniqueInput
    create: XOR<ChairpersonCreateWithoutUserInput, ChairpersonUncheckedCreateWithoutUserInput>
  }

  export type ChairpersonCreateManyUserInputEnvelope = {
    data: ChairpersonCreateManyUserInput | ChairpersonCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommitteeMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutCommitteeMembersInput
  }

  export type CommitteeMemberUncheckedCreateWithoutUserInput = {
    id?: string
    universityId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitteeMemberCreateOrConnectWithoutUserInput = {
    where: CommitteeMemberWhereUniqueInput
    create: XOR<CommitteeMemberCreateWithoutUserInput, CommitteeMemberUncheckedCreateWithoutUserInput>
  }

  export type CommitteeMemberCreateManyUserInputEnvelope = {
    data: CommitteeMemberCreateManyUserInput | CommitteeMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UniversityRoleCreateWithoutUserInput = {
    id?: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutUniversityRolesInput
  }

  export type UniversityRoleUncheckedCreateWithoutUserInput = {
    id?: string
    universityId: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityRoleCreateOrConnectWithoutUserInput = {
    where: UniversityRoleWhereUniqueInput
    create: XOR<UniversityRoleCreateWithoutUserInput, UniversityRoleUncheckedCreateWithoutUserInput>
  }

  export type UniversityRoleCreateManyUserInputEnvelope = {
    data: UniversityRoleCreateManyUserInput | UniversityRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChairpersonUpsertWithWhereUniqueWithoutUserInput = {
    where: ChairpersonWhereUniqueInput
    update: XOR<ChairpersonUpdateWithoutUserInput, ChairpersonUncheckedUpdateWithoutUserInput>
    create: XOR<ChairpersonCreateWithoutUserInput, ChairpersonUncheckedCreateWithoutUserInput>
  }

  export type ChairpersonUpdateWithWhereUniqueWithoutUserInput = {
    where: ChairpersonWhereUniqueInput
    data: XOR<ChairpersonUpdateWithoutUserInput, ChairpersonUncheckedUpdateWithoutUserInput>
  }

  export type ChairpersonUpdateManyWithWhereWithoutUserInput = {
    where: ChairpersonScalarWhereInput
    data: XOR<ChairpersonUpdateManyMutationInput, ChairpersonUncheckedUpdateManyWithoutUserInput>
  }

  export type ChairpersonScalarWhereInput = {
    AND?: ChairpersonScalarWhereInput | ChairpersonScalarWhereInput[]
    OR?: ChairpersonScalarWhereInput[]
    NOT?: ChairpersonScalarWhereInput | ChairpersonScalarWhereInput[]
    id?: StringFilter<"Chairperson"> | string
    festivalId?: StringFilter<"Chairperson"> | string
    userId?: StringFilter<"Chairperson"> | string
    predecessorId?: StringNullableFilter<"Chairperson"> | string | null
    handoverDate?: DateTimeNullableFilter<"Chairperson"> | Date | string | null
    handoverComment?: StringNullableFilter<"Chairperson"> | string | null
    message?: StringNullableFilter<"Chairperson"> | string | null
    displayOrder?: IntFilter<"Chairperson"> | number
    createdAt?: DateTimeFilter<"Chairperson"> | Date | string
    updatedAt?: DateTimeFilter<"Chairperson"> | Date | string
  }

  export type CommitteeMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: CommitteeMemberWhereUniqueInput
    update: XOR<CommitteeMemberUpdateWithoutUserInput, CommitteeMemberUncheckedUpdateWithoutUserInput>
    create: XOR<CommitteeMemberCreateWithoutUserInput, CommitteeMemberUncheckedCreateWithoutUserInput>
  }

  export type CommitteeMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: CommitteeMemberWhereUniqueInput
    data: XOR<CommitteeMemberUpdateWithoutUserInput, CommitteeMemberUncheckedUpdateWithoutUserInput>
  }

  export type CommitteeMemberUpdateManyWithWhereWithoutUserInput = {
    where: CommitteeMemberScalarWhereInput
    data: XOR<CommitteeMemberUpdateManyMutationInput, CommitteeMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type CommitteeMemberScalarWhereInput = {
    AND?: CommitteeMemberScalarWhereInput | CommitteeMemberScalarWhereInput[]
    OR?: CommitteeMemberScalarWhereInput[]
    NOT?: CommitteeMemberScalarWhereInput | CommitteeMemberScalarWhereInput[]
    id?: StringFilter<"CommitteeMember"> | string
    userId?: StringFilter<"CommitteeMember"> | string
    universityId?: StringFilter<"CommitteeMember"> | string
    role?: EnumRoleFilter<"CommitteeMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"CommitteeMember"> | Date | string
    updatedAt?: DateTimeFilter<"CommitteeMember"> | Date | string
  }

  export type UniversityRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UniversityRoleWhereUniqueInput
    update: XOR<UniversityRoleUpdateWithoutUserInput, UniversityRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UniversityRoleCreateWithoutUserInput, UniversityRoleUncheckedCreateWithoutUserInput>
  }

  export type UniversityRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UniversityRoleWhereUniqueInput
    data: XOR<UniversityRoleUpdateWithoutUserInput, UniversityRoleUncheckedUpdateWithoutUserInput>
  }

  export type UniversityRoleUpdateManyWithWhereWithoutUserInput = {
    where: UniversityRoleScalarWhereInput
    data: XOR<UniversityRoleUpdateManyMutationInput, UniversityRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UniversityRoleScalarWhereInput = {
    AND?: UniversityRoleScalarWhereInput | UniversityRoleScalarWhereInput[]
    OR?: UniversityRoleScalarWhereInput[]
    NOT?: UniversityRoleScalarWhereInput | UniversityRoleScalarWhereInput[]
    id?: StringFilter<"UniversityRole"> | string
    userId?: StringFilter<"UniversityRole"> | string
    universityId?: StringFilter<"UniversityRole"> | string
    role?: EnumRoleFilter<"UniversityRole"> | $Enums.Role
    createdAt?: DateTimeFilter<"UniversityRole"> | Date | string
    updatedAt?: DateTimeFilter<"UniversityRole"> | Date | string
  }

  export type FestivalCreateWithoutUniversityInput = {
    id?: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chairperson?: ChairpersonCreateNestedOneWithoutFestivalInput
    theme?: ThemeCreateNestedOneWithoutFestivalInput
    sponsorPlans?: SponsorPlanCreateNestedManyWithoutFestivalInput
    festivalHighlights?: FestivalHighlightCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateWithoutUniversityInput = {
    id?: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chairperson?: ChairpersonUncheckedCreateNestedOneWithoutFestivalInput
    theme?: ThemeUncheckedCreateNestedOneWithoutFestivalInput
    sponsorPlans?: SponsorPlanUncheckedCreateNestedManyWithoutFestivalInput
    festivalHighlights?: FestivalHighlightUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalCreateOrConnectWithoutUniversityInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutUniversityInput, FestivalUncheckedCreateWithoutUniversityInput>
  }

  export type FestivalCreateManyUniversityInputEnvelope = {
    data: FestivalCreateManyUniversityInput | FestivalCreateManyUniversityInput[]
    skipDuplicates?: boolean
  }

  export type UniversityRoleCreateWithoutUniversityInput = {
    id?: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUniversityRolesInput
  }

  export type UniversityRoleUncheckedCreateWithoutUniversityInput = {
    id?: string
    userId: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityRoleCreateOrConnectWithoutUniversityInput = {
    where: UniversityRoleWhereUniqueInput
    create: XOR<UniversityRoleCreateWithoutUniversityInput, UniversityRoleUncheckedCreateWithoutUniversityInput>
  }

  export type UniversityRoleCreateManyUniversityInputEnvelope = {
    data: UniversityRoleCreateManyUniversityInput | UniversityRoleCreateManyUniversityInput[]
    skipDuplicates?: boolean
  }

  export type CommitteeMemberCreateWithoutUniversityInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommitteeMembersInput
  }

  export type CommitteeMemberUncheckedCreateWithoutUniversityInput = {
    id?: string
    userId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitteeMemberCreateOrConnectWithoutUniversityInput = {
    where: CommitteeMemberWhereUniqueInput
    create: XOR<CommitteeMemberCreateWithoutUniversityInput, CommitteeMemberUncheckedCreateWithoutUniversityInput>
  }

  export type CommitteeMemberCreateManyUniversityInputEnvelope = {
    data: CommitteeMemberCreateManyUniversityInput | CommitteeMemberCreateManyUniversityInput[]
    skipDuplicates?: boolean
  }

  export type FestivalUpsertWithWhereUniqueWithoutUniversityInput = {
    where: FestivalWhereUniqueInput
    update: XOR<FestivalUpdateWithoutUniversityInput, FestivalUncheckedUpdateWithoutUniversityInput>
    create: XOR<FestivalCreateWithoutUniversityInput, FestivalUncheckedCreateWithoutUniversityInput>
  }

  export type FestivalUpdateWithWhereUniqueWithoutUniversityInput = {
    where: FestivalWhereUniqueInput
    data: XOR<FestivalUpdateWithoutUniversityInput, FestivalUncheckedUpdateWithoutUniversityInput>
  }

  export type FestivalUpdateManyWithWhereWithoutUniversityInput = {
    where: FestivalScalarWhereInput
    data: XOR<FestivalUpdateManyMutationInput, FestivalUncheckedUpdateManyWithoutUniversityInput>
  }

  export type FestivalScalarWhereInput = {
    AND?: FestivalScalarWhereInput | FestivalScalarWhereInput[]
    OR?: FestivalScalarWhereInput[]
    NOT?: FestivalScalarWhereInput | FestivalScalarWhereInput[]
    id?: StringFilter<"Festival"> | string
    universityId?: StringFilter<"Festival"> | string
    year?: IntFilter<"Festival"> | number
    status?: StringFilter<"Festival"> | string
    createdAt?: DateTimeFilter<"Festival"> | Date | string
    updatedAt?: DateTimeFilter<"Festival"> | Date | string
  }

  export type UniversityRoleUpsertWithWhereUniqueWithoutUniversityInput = {
    where: UniversityRoleWhereUniqueInput
    update: XOR<UniversityRoleUpdateWithoutUniversityInput, UniversityRoleUncheckedUpdateWithoutUniversityInput>
    create: XOR<UniversityRoleCreateWithoutUniversityInput, UniversityRoleUncheckedCreateWithoutUniversityInput>
  }

  export type UniversityRoleUpdateWithWhereUniqueWithoutUniversityInput = {
    where: UniversityRoleWhereUniqueInput
    data: XOR<UniversityRoleUpdateWithoutUniversityInput, UniversityRoleUncheckedUpdateWithoutUniversityInput>
  }

  export type UniversityRoleUpdateManyWithWhereWithoutUniversityInput = {
    where: UniversityRoleScalarWhereInput
    data: XOR<UniversityRoleUpdateManyMutationInput, UniversityRoleUncheckedUpdateManyWithoutUniversityInput>
  }

  export type CommitteeMemberUpsertWithWhereUniqueWithoutUniversityInput = {
    where: CommitteeMemberWhereUniqueInput
    update: XOR<CommitteeMemberUpdateWithoutUniversityInput, CommitteeMemberUncheckedUpdateWithoutUniversityInput>
    create: XOR<CommitteeMemberCreateWithoutUniversityInput, CommitteeMemberUncheckedCreateWithoutUniversityInput>
  }

  export type CommitteeMemberUpdateWithWhereUniqueWithoutUniversityInput = {
    where: CommitteeMemberWhereUniqueInput
    data: XOR<CommitteeMemberUpdateWithoutUniversityInput, CommitteeMemberUncheckedUpdateWithoutUniversityInput>
  }

  export type CommitteeMemberUpdateManyWithWhereWithoutUniversityInput = {
    where: CommitteeMemberScalarWhereInput
    data: XOR<CommitteeMemberUpdateManyMutationInput, CommitteeMemberUncheckedUpdateManyWithoutUniversityInput>
  }

  export type UniversityCreateWithoutFestivalsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    universityRoles?: UniversityRoleCreateNestedManyWithoutUniversityInput
    committeeMembers?: CommitteeMemberCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateWithoutFestivalsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    universityRoles?: UniversityRoleUncheckedCreateNestedManyWithoutUniversityInput
    committeeMembers?: CommitteeMemberUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityCreateOrConnectWithoutFestivalsInput = {
    where: UniversityWhereUniqueInput
    create: XOR<UniversityCreateWithoutFestivalsInput, UniversityUncheckedCreateWithoutFestivalsInput>
  }

  export type ChairpersonCreateWithoutFestivalInput = {
    id?: string
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChairpersonsInput
    predecessor?: ChairpersonCreateNestedOneWithoutSuccessorsInput
    successors?: ChairpersonCreateNestedManyWithoutPredecessorInput
  }

  export type ChairpersonUncheckedCreateWithoutFestivalInput = {
    id?: string
    userId: string
    predecessorId?: string | null
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    successors?: ChairpersonUncheckedCreateNestedManyWithoutPredecessorInput
  }

  export type ChairpersonCreateOrConnectWithoutFestivalInput = {
    where: ChairpersonWhereUniqueInput
    create: XOR<ChairpersonCreateWithoutFestivalInput, ChairpersonUncheckedCreateWithoutFestivalInput>
  }

  export type ThemeCreateWithoutFestivalInput = {
    id?: string
    themeName: string
    eventDate?: Date | string | null
    eventEndDate?: Date | string | null
    venue?: string | null
    schedule?: string | null
    details?: string | null
    accessInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThemeUncheckedCreateWithoutFestivalInput = {
    id?: string
    themeName: string
    eventDate?: Date | string | null
    eventEndDate?: Date | string | null
    venue?: string | null
    schedule?: string | null
    details?: string | null
    accessInfo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThemeCreateOrConnectWithoutFestivalInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutFestivalInput, ThemeUncheckedCreateWithoutFestivalInput>
  }

  export type SponsorPlanCreateWithoutFestivalInput = {
    id?: string
    planName: string
    amount: number
    benefits?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorPlanUncheckedCreateWithoutFestivalInput = {
    id?: string
    planName: string
    amount: number
    benefits?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorPlanCreateOrConnectWithoutFestivalInput = {
    where: SponsorPlanWhereUniqueInput
    create: XOR<SponsorPlanCreateWithoutFestivalInput, SponsorPlanUncheckedCreateWithoutFestivalInput>
  }

  export type SponsorPlanCreateManyFestivalInputEnvelope = {
    data: SponsorPlanCreateManyFestivalInput | SponsorPlanCreateManyFestivalInput[]
    skipDuplicates?: boolean
  }

  export type FestivalHighlightCreateWithoutFestivalInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalHighlightUncheckedCreateWithoutFestivalInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalHighlightCreateOrConnectWithoutFestivalInput = {
    where: FestivalHighlightWhereUniqueInput
    create: XOR<FestivalHighlightCreateWithoutFestivalInput, FestivalHighlightUncheckedCreateWithoutFestivalInput>
  }

  export type FestivalHighlightCreateManyFestivalInputEnvelope = {
    data: FestivalHighlightCreateManyFestivalInput | FestivalHighlightCreateManyFestivalInput[]
    skipDuplicates?: boolean
  }

  export type UniversityUpsertWithoutFestivalsInput = {
    update: XOR<UniversityUpdateWithoutFestivalsInput, UniversityUncheckedUpdateWithoutFestivalsInput>
    create: XOR<UniversityCreateWithoutFestivalsInput, UniversityUncheckedCreateWithoutFestivalsInput>
    where?: UniversityWhereInput
  }

  export type UniversityUpdateToOneWithWhereWithoutFestivalsInput = {
    where?: UniversityWhereInput
    data: XOR<UniversityUpdateWithoutFestivalsInput, UniversityUncheckedUpdateWithoutFestivalsInput>
  }

  export type UniversityUpdateWithoutFestivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    universityRoles?: UniversityRoleUpdateManyWithoutUniversityNestedInput
    committeeMembers?: CommitteeMemberUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateWithoutFestivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    universityRoles?: UniversityRoleUncheckedUpdateManyWithoutUniversityNestedInput
    committeeMembers?: CommitteeMemberUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type ChairpersonUpsertWithoutFestivalInput = {
    update: XOR<ChairpersonUpdateWithoutFestivalInput, ChairpersonUncheckedUpdateWithoutFestivalInput>
    create: XOR<ChairpersonCreateWithoutFestivalInput, ChairpersonUncheckedCreateWithoutFestivalInput>
    where?: ChairpersonWhereInput
  }

  export type ChairpersonUpdateToOneWithWhereWithoutFestivalInput = {
    where?: ChairpersonWhereInput
    data: XOR<ChairpersonUpdateWithoutFestivalInput, ChairpersonUncheckedUpdateWithoutFestivalInput>
  }

  export type ChairpersonUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChairpersonsNestedInput
    predecessor?: ChairpersonUpdateOneWithoutSuccessorsNestedInput
    successors?: ChairpersonUpdateManyWithoutPredecessorNestedInput
  }

  export type ChairpersonUncheckedUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    predecessorId?: NullableStringFieldUpdateOperationsInput | string | null
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successors?: ChairpersonUncheckedUpdateManyWithoutPredecessorNestedInput
  }

  export type ThemeUpsertWithoutFestivalInput = {
    update: XOR<ThemeUpdateWithoutFestivalInput, ThemeUncheckedUpdateWithoutFestivalInput>
    create: XOR<ThemeCreateWithoutFestivalInput, ThemeUncheckedCreateWithoutFestivalInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutFestivalInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutFestivalInput, ThemeUncheckedUpdateWithoutFestivalInput>
  }

  export type ThemeUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    themeName?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeUncheckedUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    themeName?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    accessInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorPlanUpsertWithWhereUniqueWithoutFestivalInput = {
    where: SponsorPlanWhereUniqueInput
    update: XOR<SponsorPlanUpdateWithoutFestivalInput, SponsorPlanUncheckedUpdateWithoutFestivalInput>
    create: XOR<SponsorPlanCreateWithoutFestivalInput, SponsorPlanUncheckedCreateWithoutFestivalInput>
  }

  export type SponsorPlanUpdateWithWhereUniqueWithoutFestivalInput = {
    where: SponsorPlanWhereUniqueInput
    data: XOR<SponsorPlanUpdateWithoutFestivalInput, SponsorPlanUncheckedUpdateWithoutFestivalInput>
  }

  export type SponsorPlanUpdateManyWithWhereWithoutFestivalInput = {
    where: SponsorPlanScalarWhereInput
    data: XOR<SponsorPlanUpdateManyMutationInput, SponsorPlanUncheckedUpdateManyWithoutFestivalInput>
  }

  export type SponsorPlanScalarWhereInput = {
    AND?: SponsorPlanScalarWhereInput | SponsorPlanScalarWhereInput[]
    OR?: SponsorPlanScalarWhereInput[]
    NOT?: SponsorPlanScalarWhereInput | SponsorPlanScalarWhereInput[]
    id?: StringFilter<"SponsorPlan"> | string
    festivalId?: StringFilter<"SponsorPlan"> | string
    planName?: StringFilter<"SponsorPlan"> | string
    amount?: IntFilter<"SponsorPlan"> | number
    benefits?: StringNullableFilter<"SponsorPlan"> | string | null
    displayOrder?: IntFilter<"SponsorPlan"> | number
    createdAt?: DateTimeFilter<"SponsorPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SponsorPlan"> | Date | string
  }

  export type FestivalHighlightUpsertWithWhereUniqueWithoutFestivalInput = {
    where: FestivalHighlightWhereUniqueInput
    update: XOR<FestivalHighlightUpdateWithoutFestivalInput, FestivalHighlightUncheckedUpdateWithoutFestivalInput>
    create: XOR<FestivalHighlightCreateWithoutFestivalInput, FestivalHighlightUncheckedCreateWithoutFestivalInput>
  }

  export type FestivalHighlightUpdateWithWhereUniqueWithoutFestivalInput = {
    where: FestivalHighlightWhereUniqueInput
    data: XOR<FestivalHighlightUpdateWithoutFestivalInput, FestivalHighlightUncheckedUpdateWithoutFestivalInput>
  }

  export type FestivalHighlightUpdateManyWithWhereWithoutFestivalInput = {
    where: FestivalHighlightScalarWhereInput
    data: XOR<FestivalHighlightUpdateManyMutationInput, FestivalHighlightUncheckedUpdateManyWithoutFestivalInput>
  }

  export type FestivalHighlightScalarWhereInput = {
    AND?: FestivalHighlightScalarWhereInput | FestivalHighlightScalarWhereInput[]
    OR?: FestivalHighlightScalarWhereInput[]
    NOT?: FestivalHighlightScalarWhereInput | FestivalHighlightScalarWhereInput[]
    id?: StringFilter<"FestivalHighlight"> | string
    festivalId?: StringFilter<"FestivalHighlight"> | string
    title?: StringFilter<"FestivalHighlight"> | string
    description?: StringNullableFilter<"FestivalHighlight"> | string | null
    imageUrl?: StringNullableFilter<"FestivalHighlight"> | string | null
    displayOrder?: IntFilter<"FestivalHighlight"> | number
    createdAt?: DateTimeFilter<"FestivalHighlight"> | Date | string
    updatedAt?: DateTimeFilter<"FestivalHighlight"> | Date | string
  }

  export type FestivalCreateWithoutFestivalHighlightsInput = {
    id?: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutFestivalsInput
    chairperson?: ChairpersonCreateNestedOneWithoutFestivalInput
    theme?: ThemeCreateNestedOneWithoutFestivalInput
    sponsorPlans?: SponsorPlanCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateWithoutFestivalHighlightsInput = {
    id?: string
    universityId: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chairperson?: ChairpersonUncheckedCreateNestedOneWithoutFestivalInput
    theme?: ThemeUncheckedCreateNestedOneWithoutFestivalInput
    sponsorPlans?: SponsorPlanUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalCreateOrConnectWithoutFestivalHighlightsInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutFestivalHighlightsInput, FestivalUncheckedCreateWithoutFestivalHighlightsInput>
  }

  export type FestivalUpsertWithoutFestivalHighlightsInput = {
    update: XOR<FestivalUpdateWithoutFestivalHighlightsInput, FestivalUncheckedUpdateWithoutFestivalHighlightsInput>
    create: XOR<FestivalCreateWithoutFestivalHighlightsInput, FestivalUncheckedCreateWithoutFestivalHighlightsInput>
    where?: FestivalWhereInput
  }

  export type FestivalUpdateToOneWithWhereWithoutFestivalHighlightsInput = {
    where?: FestivalWhereInput
    data: XOR<FestivalUpdateWithoutFestivalHighlightsInput, FestivalUncheckedUpdateWithoutFestivalHighlightsInput>
  }

  export type FestivalUpdateWithoutFestivalHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutFestivalsNestedInput
    chairperson?: ChairpersonUpdateOneWithoutFestivalNestedInput
    theme?: ThemeUpdateOneWithoutFestivalNestedInput
    sponsorPlans?: SponsorPlanUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateWithoutFestivalHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairperson?: ChairpersonUncheckedUpdateOneWithoutFestivalNestedInput
    theme?: ThemeUncheckedUpdateOneWithoutFestivalNestedInput
    sponsorPlans?: SponsorPlanUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalCreateWithoutChairpersonInput = {
    id?: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutFestivalsInput
    theme?: ThemeCreateNestedOneWithoutFestivalInput
    sponsorPlans?: SponsorPlanCreateNestedManyWithoutFestivalInput
    festivalHighlights?: FestivalHighlightCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateWithoutChairpersonInput = {
    id?: string
    universityId: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    theme?: ThemeUncheckedCreateNestedOneWithoutFestivalInput
    sponsorPlans?: SponsorPlanUncheckedCreateNestedManyWithoutFestivalInput
    festivalHighlights?: FestivalHighlightUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalCreateOrConnectWithoutChairpersonInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutChairpersonInput, FestivalUncheckedCreateWithoutChairpersonInput>
  }

  export type UserCreateWithoutChairpersonsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    role?: $Enums.Role
    profileImage?: string | null
    bio?: string | null
    department?: string | null
    snsLinks?: string | null
    contactPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    committeeMembers?: CommitteeMemberCreateNestedManyWithoutUserInput
    universityRoles?: UniversityRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChairpersonsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    role?: $Enums.Role
    profileImage?: string | null
    bio?: string | null
    department?: string | null
    snsLinks?: string | null
    contactPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    committeeMembers?: CommitteeMemberUncheckedCreateNestedManyWithoutUserInput
    universityRoles?: UniversityRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChairpersonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChairpersonsInput, UserUncheckedCreateWithoutChairpersonsInput>
  }

  export type ChairpersonCreateWithoutSuccessorsInput = {
    id?: string
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutChairpersonInput
    user: UserCreateNestedOneWithoutChairpersonsInput
    predecessor?: ChairpersonCreateNestedOneWithoutSuccessorsInput
  }

  export type ChairpersonUncheckedCreateWithoutSuccessorsInput = {
    id?: string
    festivalId: string
    userId: string
    predecessorId?: string | null
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChairpersonCreateOrConnectWithoutSuccessorsInput = {
    where: ChairpersonWhereUniqueInput
    create: XOR<ChairpersonCreateWithoutSuccessorsInput, ChairpersonUncheckedCreateWithoutSuccessorsInput>
  }

  export type ChairpersonCreateWithoutPredecessorInput = {
    id?: string
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    festival: FestivalCreateNestedOneWithoutChairpersonInput
    user: UserCreateNestedOneWithoutChairpersonsInput
    successors?: ChairpersonCreateNestedManyWithoutPredecessorInput
  }

  export type ChairpersonUncheckedCreateWithoutPredecessorInput = {
    id?: string
    festivalId: string
    userId: string
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    successors?: ChairpersonUncheckedCreateNestedManyWithoutPredecessorInput
  }

  export type ChairpersonCreateOrConnectWithoutPredecessorInput = {
    where: ChairpersonWhereUniqueInput
    create: XOR<ChairpersonCreateWithoutPredecessorInput, ChairpersonUncheckedCreateWithoutPredecessorInput>
  }

  export type ChairpersonCreateManyPredecessorInputEnvelope = {
    data: ChairpersonCreateManyPredecessorInput | ChairpersonCreateManyPredecessorInput[]
    skipDuplicates?: boolean
  }

  export type FestivalUpsertWithoutChairpersonInput = {
    update: XOR<FestivalUpdateWithoutChairpersonInput, FestivalUncheckedUpdateWithoutChairpersonInput>
    create: XOR<FestivalCreateWithoutChairpersonInput, FestivalUncheckedCreateWithoutChairpersonInput>
    where?: FestivalWhereInput
  }

  export type FestivalUpdateToOneWithWhereWithoutChairpersonInput = {
    where?: FestivalWhereInput
    data: XOR<FestivalUpdateWithoutChairpersonInput, FestivalUncheckedUpdateWithoutChairpersonInput>
  }

  export type FestivalUpdateWithoutChairpersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutFestivalsNestedInput
    theme?: ThemeUpdateOneWithoutFestivalNestedInput
    sponsorPlans?: SponsorPlanUpdateManyWithoutFestivalNestedInput
    festivalHighlights?: FestivalHighlightUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateWithoutChairpersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: ThemeUncheckedUpdateOneWithoutFestivalNestedInput
    sponsorPlans?: SponsorPlanUncheckedUpdateManyWithoutFestivalNestedInput
    festivalHighlights?: FestivalHighlightUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type UserUpsertWithoutChairpersonsInput = {
    update: XOR<UserUpdateWithoutChairpersonsInput, UserUncheckedUpdateWithoutChairpersonsInput>
    create: XOR<UserCreateWithoutChairpersonsInput, UserUncheckedCreateWithoutChairpersonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChairpersonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChairpersonsInput, UserUncheckedUpdateWithoutChairpersonsInput>
  }

  export type UserUpdateWithoutChairpersonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    snsLinks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    committeeMembers?: CommitteeMemberUpdateManyWithoutUserNestedInput
    universityRoles?: UniversityRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChairpersonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    snsLinks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    committeeMembers?: CommitteeMemberUncheckedUpdateManyWithoutUserNestedInput
    universityRoles?: UniversityRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChairpersonUpsertWithoutSuccessorsInput = {
    update: XOR<ChairpersonUpdateWithoutSuccessorsInput, ChairpersonUncheckedUpdateWithoutSuccessorsInput>
    create: XOR<ChairpersonCreateWithoutSuccessorsInput, ChairpersonUncheckedCreateWithoutSuccessorsInput>
    where?: ChairpersonWhereInput
  }

  export type ChairpersonUpdateToOneWithWhereWithoutSuccessorsInput = {
    where?: ChairpersonWhereInput
    data: XOR<ChairpersonUpdateWithoutSuccessorsInput, ChairpersonUncheckedUpdateWithoutSuccessorsInput>
  }

  export type ChairpersonUpdateWithoutSuccessorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutChairpersonNestedInput
    user?: UserUpdateOneRequiredWithoutChairpersonsNestedInput
    predecessor?: ChairpersonUpdateOneWithoutSuccessorsNestedInput
  }

  export type ChairpersonUncheckedUpdateWithoutSuccessorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    predecessorId?: NullableStringFieldUpdateOperationsInput | string | null
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChairpersonUpsertWithWhereUniqueWithoutPredecessorInput = {
    where: ChairpersonWhereUniqueInput
    update: XOR<ChairpersonUpdateWithoutPredecessorInput, ChairpersonUncheckedUpdateWithoutPredecessorInput>
    create: XOR<ChairpersonCreateWithoutPredecessorInput, ChairpersonUncheckedCreateWithoutPredecessorInput>
  }

  export type ChairpersonUpdateWithWhereUniqueWithoutPredecessorInput = {
    where: ChairpersonWhereUniqueInput
    data: XOR<ChairpersonUpdateWithoutPredecessorInput, ChairpersonUncheckedUpdateWithoutPredecessorInput>
  }

  export type ChairpersonUpdateManyWithWhereWithoutPredecessorInput = {
    where: ChairpersonScalarWhereInput
    data: XOR<ChairpersonUpdateManyMutationInput, ChairpersonUncheckedUpdateManyWithoutPredecessorInput>
  }

  export type FestivalCreateWithoutThemeInput = {
    id?: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutFestivalsInput
    chairperson?: ChairpersonCreateNestedOneWithoutFestivalInput
    sponsorPlans?: SponsorPlanCreateNestedManyWithoutFestivalInput
    festivalHighlights?: FestivalHighlightCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateWithoutThemeInput = {
    id?: string
    universityId: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chairperson?: ChairpersonUncheckedCreateNestedOneWithoutFestivalInput
    sponsorPlans?: SponsorPlanUncheckedCreateNestedManyWithoutFestivalInput
    festivalHighlights?: FestivalHighlightUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalCreateOrConnectWithoutThemeInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutThemeInput, FestivalUncheckedCreateWithoutThemeInput>
  }

  export type FestivalUpsertWithoutThemeInput = {
    update: XOR<FestivalUpdateWithoutThemeInput, FestivalUncheckedUpdateWithoutThemeInput>
    create: XOR<FestivalCreateWithoutThemeInput, FestivalUncheckedCreateWithoutThemeInput>
    where?: FestivalWhereInput
  }

  export type FestivalUpdateToOneWithWhereWithoutThemeInput = {
    where?: FestivalWhereInput
    data: XOR<FestivalUpdateWithoutThemeInput, FestivalUncheckedUpdateWithoutThemeInput>
  }

  export type FestivalUpdateWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutFestivalsNestedInput
    chairperson?: ChairpersonUpdateOneWithoutFestivalNestedInput
    sponsorPlans?: SponsorPlanUpdateManyWithoutFestivalNestedInput
    festivalHighlights?: FestivalHighlightUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateWithoutThemeInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairperson?: ChairpersonUncheckedUpdateOneWithoutFestivalNestedInput
    sponsorPlans?: SponsorPlanUncheckedUpdateManyWithoutFestivalNestedInput
    festivalHighlights?: FestivalHighlightUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalCreateWithoutSponsorPlansInput = {
    id?: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityCreateNestedOneWithoutFestivalsInput
    chairperson?: ChairpersonCreateNestedOneWithoutFestivalInput
    theme?: ThemeCreateNestedOneWithoutFestivalInput
    festivalHighlights?: FestivalHighlightCreateNestedManyWithoutFestivalInput
  }

  export type FestivalUncheckedCreateWithoutSponsorPlansInput = {
    id?: string
    universityId: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chairperson?: ChairpersonUncheckedCreateNestedOneWithoutFestivalInput
    theme?: ThemeUncheckedCreateNestedOneWithoutFestivalInput
    festivalHighlights?: FestivalHighlightUncheckedCreateNestedManyWithoutFestivalInput
  }

  export type FestivalCreateOrConnectWithoutSponsorPlansInput = {
    where: FestivalWhereUniqueInput
    create: XOR<FestivalCreateWithoutSponsorPlansInput, FestivalUncheckedCreateWithoutSponsorPlansInput>
  }

  export type FestivalUpsertWithoutSponsorPlansInput = {
    update: XOR<FestivalUpdateWithoutSponsorPlansInput, FestivalUncheckedUpdateWithoutSponsorPlansInput>
    create: XOR<FestivalCreateWithoutSponsorPlansInput, FestivalUncheckedCreateWithoutSponsorPlansInput>
    where?: FestivalWhereInput
  }

  export type FestivalUpdateToOneWithWhereWithoutSponsorPlansInput = {
    where?: FestivalWhereInput
    data: XOR<FestivalUpdateWithoutSponsorPlansInput, FestivalUncheckedUpdateWithoutSponsorPlansInput>
  }

  export type FestivalUpdateWithoutSponsorPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutFestivalsNestedInput
    chairperson?: ChairpersonUpdateOneWithoutFestivalNestedInput
    theme?: ThemeUpdateOneWithoutFestivalNestedInput
    festivalHighlights?: FestivalHighlightUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateWithoutSponsorPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairperson?: ChairpersonUncheckedUpdateOneWithoutFestivalNestedInput
    theme?: ThemeUncheckedUpdateOneWithoutFestivalNestedInput
    festivalHighlights?: FestivalHighlightUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type UserCreateWithoutCommitteeMembersInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    role?: $Enums.Role
    profileImage?: string | null
    bio?: string | null
    department?: string | null
    snsLinks?: string | null
    contactPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chairpersons?: ChairpersonCreateNestedManyWithoutUserInput
    universityRoles?: UniversityRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommitteeMembersInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    role?: $Enums.Role
    profileImage?: string | null
    bio?: string | null
    department?: string | null
    snsLinks?: string | null
    contactPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chairpersons?: ChairpersonUncheckedCreateNestedManyWithoutUserInput
    universityRoles?: UniversityRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommitteeMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommitteeMembersInput, UserUncheckedCreateWithoutCommitteeMembersInput>
  }

  export type UniversityCreateWithoutCommitteeMembersInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festivals?: FestivalCreateNestedManyWithoutUniversityInput
    universityRoles?: UniversityRoleCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateWithoutCommitteeMembersInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festivals?: FestivalUncheckedCreateNestedManyWithoutUniversityInput
    universityRoles?: UniversityRoleUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityCreateOrConnectWithoutCommitteeMembersInput = {
    where: UniversityWhereUniqueInput
    create: XOR<UniversityCreateWithoutCommitteeMembersInput, UniversityUncheckedCreateWithoutCommitteeMembersInput>
  }

  export type UserUpsertWithoutCommitteeMembersInput = {
    update: XOR<UserUpdateWithoutCommitteeMembersInput, UserUncheckedUpdateWithoutCommitteeMembersInput>
    create: XOR<UserCreateWithoutCommitteeMembersInput, UserUncheckedCreateWithoutCommitteeMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommitteeMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommitteeMembersInput, UserUncheckedUpdateWithoutCommitteeMembersInput>
  }

  export type UserUpdateWithoutCommitteeMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    snsLinks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairpersons?: ChairpersonUpdateManyWithoutUserNestedInput
    universityRoles?: UniversityRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommitteeMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    snsLinks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairpersons?: ChairpersonUncheckedUpdateManyWithoutUserNestedInput
    universityRoles?: UniversityRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UniversityUpsertWithoutCommitteeMembersInput = {
    update: XOR<UniversityUpdateWithoutCommitteeMembersInput, UniversityUncheckedUpdateWithoutCommitteeMembersInput>
    create: XOR<UniversityCreateWithoutCommitteeMembersInput, UniversityUncheckedCreateWithoutCommitteeMembersInput>
    where?: UniversityWhereInput
  }

  export type UniversityUpdateToOneWithWhereWithoutCommitteeMembersInput = {
    where?: UniversityWhereInput
    data: XOR<UniversityUpdateWithoutCommitteeMembersInput, UniversityUncheckedUpdateWithoutCommitteeMembersInput>
  }

  export type UniversityUpdateWithoutCommitteeMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivals?: FestivalUpdateManyWithoutUniversityNestedInput
    universityRoles?: UniversityRoleUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateWithoutCommitteeMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivals?: FestivalUncheckedUpdateManyWithoutUniversityNestedInput
    universityRoles?: UniversityRoleUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type UserCreateWithoutUniversityRolesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    role?: $Enums.Role
    profileImage?: string | null
    bio?: string | null
    department?: string | null
    snsLinks?: string | null
    contactPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chairpersons?: ChairpersonCreateNestedManyWithoutUserInput
    committeeMembers?: CommitteeMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUniversityRolesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    role?: $Enums.Role
    profileImage?: string | null
    bio?: string | null
    department?: string | null
    snsLinks?: string | null
    contactPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    chairpersons?: ChairpersonUncheckedCreateNestedManyWithoutUserInput
    committeeMembers?: CommitteeMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUniversityRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUniversityRolesInput, UserUncheckedCreateWithoutUniversityRolesInput>
  }

  export type UniversityCreateWithoutUniversityRolesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festivals?: FestivalCreateNestedManyWithoutUniversityInput
    committeeMembers?: CommitteeMemberCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateWithoutUniversityRolesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    logoUrl?: string | null
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    festivals?: FestivalUncheckedCreateNestedManyWithoutUniversityInput
    committeeMembers?: CommitteeMemberUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityCreateOrConnectWithoutUniversityRolesInput = {
    where: UniversityWhereUniqueInput
    create: XOR<UniversityCreateWithoutUniversityRolesInput, UniversityUncheckedCreateWithoutUniversityRolesInput>
  }

  export type UserUpsertWithoutUniversityRolesInput = {
    update: XOR<UserUpdateWithoutUniversityRolesInput, UserUncheckedUpdateWithoutUniversityRolesInput>
    create: XOR<UserCreateWithoutUniversityRolesInput, UserUncheckedCreateWithoutUniversityRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUniversityRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUniversityRolesInput, UserUncheckedUpdateWithoutUniversityRolesInput>
  }

  export type UserUpdateWithoutUniversityRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    snsLinks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairpersons?: ChairpersonUpdateManyWithoutUserNestedInput
    committeeMembers?: CommitteeMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUniversityRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    snsLinks?: NullableStringFieldUpdateOperationsInput | string | null
    contactPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairpersons?: ChairpersonUncheckedUpdateManyWithoutUserNestedInput
    committeeMembers?: CommitteeMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UniversityUpsertWithoutUniversityRolesInput = {
    update: XOR<UniversityUpdateWithoutUniversityRolesInput, UniversityUncheckedUpdateWithoutUniversityRolesInput>
    create: XOR<UniversityCreateWithoutUniversityRolesInput, UniversityUncheckedCreateWithoutUniversityRolesInput>
    where?: UniversityWhereInput
  }

  export type UniversityUpdateToOneWithWhereWithoutUniversityRolesInput = {
    where?: UniversityWhereInput
    data: XOR<UniversityUpdateWithoutUniversityRolesInput, UniversityUncheckedUpdateWithoutUniversityRolesInput>
  }

  export type UniversityUpdateWithoutUniversityRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivals?: FestivalUpdateManyWithoutUniversityNestedInput
    committeeMembers?: CommitteeMemberUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateWithoutUniversityRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festivals?: FestivalUncheckedUpdateManyWithoutUniversityNestedInput
    committeeMembers?: CommitteeMemberUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type GakusaiArticleSectionCreateWithoutArticleInput = {
    id?: string
    heading: string
    content: string
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiArticleSectionUncheckedCreateWithoutArticleInput = {
    id?: string
    heading: string
    content: string
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiArticleSectionCreateOrConnectWithoutArticleInput = {
    where: GakusaiArticleSectionWhereUniqueInput
    create: XOR<GakusaiArticleSectionCreateWithoutArticleInput, GakusaiArticleSectionUncheckedCreateWithoutArticleInput>
  }

  export type GakusaiArticleSectionCreateManyArticleInputEnvelope = {
    data: GakusaiArticleSectionCreateManyArticleInput | GakusaiArticleSectionCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type GakusaiArticleSectionUpsertWithWhereUniqueWithoutArticleInput = {
    where: GakusaiArticleSectionWhereUniqueInput
    update: XOR<GakusaiArticleSectionUpdateWithoutArticleInput, GakusaiArticleSectionUncheckedUpdateWithoutArticleInput>
    create: XOR<GakusaiArticleSectionCreateWithoutArticleInput, GakusaiArticleSectionUncheckedCreateWithoutArticleInput>
  }

  export type GakusaiArticleSectionUpdateWithWhereUniqueWithoutArticleInput = {
    where: GakusaiArticleSectionWhereUniqueInput
    data: XOR<GakusaiArticleSectionUpdateWithoutArticleInput, GakusaiArticleSectionUncheckedUpdateWithoutArticleInput>
  }

  export type GakusaiArticleSectionUpdateManyWithWhereWithoutArticleInput = {
    where: GakusaiArticleSectionScalarWhereInput
    data: XOR<GakusaiArticleSectionUpdateManyMutationInput, GakusaiArticleSectionUncheckedUpdateManyWithoutArticleInput>
  }

  export type GakusaiArticleSectionScalarWhereInput = {
    AND?: GakusaiArticleSectionScalarWhereInput | GakusaiArticleSectionScalarWhereInput[]
    OR?: GakusaiArticleSectionScalarWhereInput[]
    NOT?: GakusaiArticleSectionScalarWhereInput | GakusaiArticleSectionScalarWhereInput[]
    id?: StringFilter<"GakusaiArticleSection"> | string
    articleId?: StringFilter<"GakusaiArticleSection"> | string
    heading?: StringFilter<"GakusaiArticleSection"> | string
    content?: StringFilter<"GakusaiArticleSection"> | string
    imageUrl?: StringNullableFilter<"GakusaiArticleSection"> | string | null
    displayOrder?: IntFilter<"GakusaiArticleSection"> | number
    createdAt?: DateTimeFilter<"GakusaiArticleSection"> | Date | string
    updatedAt?: DateTimeFilter<"GakusaiArticleSection"> | Date | string
  }

  export type GakusaiArticleCreateWithoutSectionsInput = {
    id?: string
    title: string
    excerpt: string
    chairpersonName: string
    university: string
    year: number
    thumbnailUrl: string
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiArticleUncheckedCreateWithoutSectionsInput = {
    id?: string
    title: string
    excerpt: string
    chairpersonName: string
    university: string
    year: number
    thumbnailUrl: string
    status?: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiArticleCreateOrConnectWithoutSectionsInput = {
    where: GakusaiArticleWhereUniqueInput
    create: XOR<GakusaiArticleCreateWithoutSectionsInput, GakusaiArticleUncheckedCreateWithoutSectionsInput>
  }

  export type GakusaiArticleUpsertWithoutSectionsInput = {
    update: XOR<GakusaiArticleUpdateWithoutSectionsInput, GakusaiArticleUncheckedUpdateWithoutSectionsInput>
    create: XOR<GakusaiArticleCreateWithoutSectionsInput, GakusaiArticleUncheckedCreateWithoutSectionsInput>
    where?: GakusaiArticleWhereInput
  }

  export type GakusaiArticleUpdateToOneWithWhereWithoutSectionsInput = {
    where?: GakusaiArticleWhereInput
    data: XOR<GakusaiArticleUpdateWithoutSectionsInput, GakusaiArticleUncheckedUpdateWithoutSectionsInput>
  }

  export type GakusaiArticleUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    chairpersonName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiArticleUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    chairpersonName?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChairpersonCreateManyUserInput = {
    id?: string
    festivalId: string
    predecessorId?: string | null
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitteeMemberCreateManyUserInput = {
    id?: string
    universityId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityRoleCreateManyUserInput = {
    id?: string
    universityId: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChairpersonUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutChairpersonNestedInput
    predecessor?: ChairpersonUpdateOneWithoutSuccessorsNestedInput
    successors?: ChairpersonUpdateManyWithoutPredecessorNestedInput
  }

  export type ChairpersonUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    predecessorId?: NullableStringFieldUpdateOperationsInput | string | null
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successors?: ChairpersonUncheckedUpdateManyWithoutPredecessorNestedInput
  }

  export type ChairpersonUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    predecessorId?: NullableStringFieldUpdateOperationsInput | string | null
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutCommitteeMembersNestedInput
  }

  export type CommitteeMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityRoleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityUpdateOneRequiredWithoutUniversityRolesNestedInput
  }

  export type UniversityRoleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityRoleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalCreateManyUniversityInput = {
    id?: string
    year: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityRoleCreateManyUniversityInput = {
    id?: string
    userId: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommitteeMemberCreateManyUniversityInput = {
    id?: string
    userId: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairperson?: ChairpersonUpdateOneWithoutFestivalNestedInput
    theme?: ThemeUpdateOneWithoutFestivalNestedInput
    sponsorPlans?: SponsorPlanUpdateManyWithoutFestivalNestedInput
    festivalHighlights?: FestivalHighlightUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chairperson?: ChairpersonUncheckedUpdateOneWithoutFestivalNestedInput
    theme?: ThemeUncheckedUpdateOneWithoutFestivalNestedInput
    sponsorPlans?: SponsorPlanUncheckedUpdateManyWithoutFestivalNestedInput
    festivalHighlights?: FestivalHighlightUncheckedUpdateManyWithoutFestivalNestedInput
  }

  export type FestivalUncheckedUpdateManyWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityRoleUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUniversityRolesNestedInput
  }

  export type UniversityRoleUncheckedUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityRoleUncheckedUpdateManyWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeMemberUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommitteeMembersNestedInput
  }

  export type CommitteeMemberUncheckedUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommitteeMemberUncheckedUpdateManyWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorPlanCreateManyFestivalInput = {
    id?: string
    planName: string
    amount: number
    benefits?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FestivalHighlightCreateManyFestivalInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorPlanUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorPlanUncheckedUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorPlanUncheckedUpdateManyWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalHighlightUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalHighlightUncheckedUpdateWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FestivalHighlightUncheckedUpdateManyWithoutFestivalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChairpersonCreateManyPredecessorInput = {
    id?: string
    festivalId: string
    userId: string
    handoverDate?: Date | string | null
    handoverComment?: string | null
    message?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChairpersonUpdateWithoutPredecessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    festival?: FestivalUpdateOneRequiredWithoutChairpersonNestedInput
    user?: UserUpdateOneRequiredWithoutChairpersonsNestedInput
    successors?: ChairpersonUpdateManyWithoutPredecessorNestedInput
  }

  export type ChairpersonUncheckedUpdateWithoutPredecessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    successors?: ChairpersonUncheckedUpdateManyWithoutPredecessorNestedInput
  }

  export type ChairpersonUncheckedUpdateManyWithoutPredecessorInput = {
    id?: StringFieldUpdateOperationsInput | string
    festivalId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    handoverDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoverComment?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiArticleSectionCreateManyArticleInput = {
    id?: string
    heading: string
    content: string
    imageUrl?: string | null
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GakusaiArticleSectionUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiArticleSectionUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GakusaiArticleSectionUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}