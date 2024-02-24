
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Developers
 * 
 */
export type Developers = $Result.DefaultSelection<Prisma.$DevelopersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Developers
 * const developers = await prisma.developers.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Developers
   * const developers = await prisma.developers.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.developers`: Exposes CRUD operations for the **Developers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Developers
    * const developers = await prisma.developers.findMany()
    * ```
    */
  get developers(): Prisma.DevelopersDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Developers: 'Developers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'developers'
      txIsolationLevel: never
    },
    model: {
      Developers: {
        payload: Prisma.$DevelopersPayload<ExtArgs>
        fields: Prisma.DevelopersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevelopersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevelopersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          findFirst: {
            args: Prisma.DevelopersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevelopersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          findMany: {
            args: Prisma.DevelopersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>[]
          }
          create: {
            args: Prisma.DevelopersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          createMany: {
            args: Prisma.DevelopersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DevelopersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          update: {
            args: Prisma.DevelopersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          deleteMany: {
            args: Prisma.DevelopersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DevelopersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DevelopersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevelopersPayload>
          }
          aggregate: {
            args: Prisma.DevelopersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDevelopers>
          }
          groupBy: {
            args: Prisma.DevelopersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DevelopersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DevelopersFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.DevelopersAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.DevelopersCountArgs<ExtArgs>,
            result: $Utils.Optional<DevelopersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Developers
   */

  export type AggregateDevelopers = {
    _count: DevelopersCountAggregateOutputType | null
    _min: DevelopersMinAggregateOutputType | null
    _max: DevelopersMaxAggregateOutputType | null
  }

  export type DevelopersMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    name: string | null
    designation: string | null
    profileImage: string | null
    coverImage: string | null
    about: string | null
  }

  export type DevelopersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    name: string | null
    designation: string | null
    profileImage: string | null
    coverImage: string | null
    about: string | null
  }

  export type DevelopersCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    name: number
    designation: number
    profileImage: number
    coverImage: number
    about: number
    talksAbout: number
    socialProfiles: number
    projects: number
    _all: number
  }


  export type DevelopersMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    name?: true
    designation?: true
    profileImage?: true
    coverImage?: true
    about?: true
  }

  export type DevelopersMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    name?: true
    designation?: true
    profileImage?: true
    coverImage?: true
    about?: true
  }

  export type DevelopersCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    name?: true
    designation?: true
    profileImage?: true
    coverImage?: true
    about?: true
    talksAbout?: true
    socialProfiles?: true
    projects?: true
    _all?: true
  }

  export type DevelopersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developers to aggregate.
     */
    where?: DevelopersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DevelopersOrderByWithRelationInput | DevelopersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevelopersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Developers
    **/
    _count?: true | DevelopersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevelopersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevelopersMaxAggregateInputType
  }

  export type GetDevelopersAggregateType<T extends DevelopersAggregateArgs> = {
        [P in keyof T & keyof AggregateDevelopers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevelopers[P]>
      : GetScalarType<T[P], AggregateDevelopers[P]>
  }




  export type DevelopersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevelopersWhereInput
    orderBy?: DevelopersOrderByWithAggregationInput | DevelopersOrderByWithAggregationInput[]
    by: DevelopersScalarFieldEnum[] | DevelopersScalarFieldEnum
    having?: DevelopersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevelopersCountAggregateInputType | true
    _min?: DevelopersMinAggregateInputType
    _max?: DevelopersMaxAggregateInputType
  }

  export type DevelopersGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    name: string
    designation: string
    profileImage: string
    coverImage: string
    about: string
    talksAbout: string[]
    socialProfiles: string[]
    projects: JsonValue[]
    _count: DevelopersCountAggregateOutputType | null
    _min: DevelopersMinAggregateOutputType | null
    _max: DevelopersMaxAggregateOutputType | null
  }

  type GetDevelopersGroupByPayload<T extends DevelopersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevelopersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevelopersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevelopersGroupByOutputType[P]>
            : GetScalarType<T[P], DevelopersGroupByOutputType[P]>
        }
      >
    >


  export type DevelopersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    designation?: boolean
    profileImage?: boolean
    coverImage?: boolean
    about?: boolean
    talksAbout?: boolean
    socialProfiles?: boolean
    projects?: boolean
  }, ExtArgs["result"]["developers"]>

  export type DevelopersSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    designation?: boolean
    profileImage?: boolean
    coverImage?: boolean
    about?: boolean
    talksAbout?: boolean
    socialProfiles?: boolean
    projects?: boolean
  }


  export type $DevelopersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Developers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      name: string
      designation: string
      profileImage: string
      coverImage: string
      about: string
      talksAbout: string[]
      socialProfiles: string[]
      projects: Prisma.JsonValue[]
    }, ExtArgs["result"]["developers"]>
    composites: {}
  }


  type DevelopersGetPayload<S extends boolean | null | undefined | DevelopersDefaultArgs> = $Result.GetResult<Prisma.$DevelopersPayload, S>

  type DevelopersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DevelopersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DevelopersCountAggregateInputType | true
    }

  export interface DevelopersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Developers'], meta: { name: 'Developers' } }
    /**
     * Find zero or one Developers that matches the filter.
     * @param {DevelopersFindUniqueArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DevelopersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DevelopersFindUniqueArgs<ExtArgs>>
    ): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Developers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DevelopersFindUniqueOrThrowArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DevelopersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DevelopersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersFindFirstArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DevelopersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DevelopersFindFirstArgs<ExtArgs>>
    ): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Developers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersFindFirstOrThrowArgs} args - Arguments to find a Developers
     * @example
     * // Get one Developers
     * const developers = await prisma.developers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DevelopersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DevelopersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Developers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Developers
     * const developers = await prisma.developers.findMany()
     * 
     * // Get first 10 Developers
     * const developers = await prisma.developers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const developersWithIdOnly = await prisma.developers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DevelopersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DevelopersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Developers.
     * @param {DevelopersCreateArgs} args - Arguments to create a Developers.
     * @example
     * // Create one Developers
     * const Developers = await prisma.developers.create({
     *   data: {
     *     // ... data to create a Developers
     *   }
     * })
     * 
    **/
    create<T extends DevelopersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DevelopersCreateArgs<ExtArgs>>
    ): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Developers.
     *     @param {DevelopersCreateManyArgs} args - Arguments to create many Developers.
     *     @example
     *     // Create many Developers
     *     const developers = await prisma.developers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DevelopersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DevelopersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Developers.
     * @param {DevelopersDeleteArgs} args - Arguments to delete one Developers.
     * @example
     * // Delete one Developers
     * const Developers = await prisma.developers.delete({
     *   where: {
     *     // ... filter to delete one Developers
     *   }
     * })
     * 
    **/
    delete<T extends DevelopersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DevelopersDeleteArgs<ExtArgs>>
    ): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Developers.
     * @param {DevelopersUpdateArgs} args - Arguments to update one Developers.
     * @example
     * // Update one Developers
     * const developers = await prisma.developers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DevelopersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DevelopersUpdateArgs<ExtArgs>>
    ): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Developers.
     * @param {DevelopersDeleteManyArgs} args - Arguments to filter Developers to delete.
     * @example
     * // Delete a few Developers
     * const { count } = await prisma.developers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DevelopersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DevelopersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Developers
     * const developers = await prisma.developers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DevelopersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DevelopersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Developers.
     * @param {DevelopersUpsertArgs} args - Arguments to update or create a Developers.
     * @example
     * // Update or create a Developers
     * const developers = await prisma.developers.upsert({
     *   create: {
     *     // ... data to create a Developers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Developers we want to update
     *   }
     * })
    **/
    upsert<T extends DevelopersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DevelopersUpsertArgs<ExtArgs>>
    ): Prisma__DevelopersClient<$Result.GetResult<Prisma.$DevelopersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Developers that matches the filter.
     * @param {DevelopersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const developers = await prisma.developers.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DevelopersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Developers.
     * @param {DevelopersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const developers = await prisma.developers.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DevelopersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersCountArgs} args - Arguments to filter Developers to count.
     * @example
     * // Count the number of Developers
     * const count = await prisma.developers.count({
     *   where: {
     *     // ... the filter for the Developers we want to count
     *   }
     * })
    **/
    count<T extends DevelopersCountArgs>(
      args?: Subset<T, DevelopersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevelopersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevelopersAggregateArgs>(args: Subset<T, DevelopersAggregateArgs>): Prisma.PrismaPromise<GetDevelopersAggregateType<T>>

    /**
     * Group by Developers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopersGroupByArgs} args - Group by arguments.
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
      T extends DevelopersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevelopersGroupByArgs['orderBy'] }
        : { orderBy?: DevelopersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DevelopersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevelopersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Developers model
   */
  readonly fields: DevelopersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Developers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevelopersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Developers model
   */ 
  interface DevelopersFieldRefs {
    readonly id: FieldRef<"Developers", 'String'>
    readonly email: FieldRef<"Developers", 'String'>
    readonly username: FieldRef<"Developers", 'String'>
    readonly password: FieldRef<"Developers", 'String'>
    readonly name: FieldRef<"Developers", 'String'>
    readonly designation: FieldRef<"Developers", 'String'>
    readonly profileImage: FieldRef<"Developers", 'String'>
    readonly coverImage: FieldRef<"Developers", 'String'>
    readonly about: FieldRef<"Developers", 'String'>
    readonly talksAbout: FieldRef<"Developers", 'String[]'>
    readonly socialProfiles: FieldRef<"Developers", 'String[]'>
    readonly projects: FieldRef<"Developers", 'Json[]'>
  }
    

  // Custom InputTypes

  /**
   * Developers findUnique
   */
  export type DevelopersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where: DevelopersWhereUniqueInput
  }


  /**
   * Developers findUniqueOrThrow
   */
  export type DevelopersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where: DevelopersWhereUniqueInput
  }


  /**
   * Developers findFirst
   */
  export type DevelopersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where?: DevelopersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DevelopersOrderByWithRelationInput | DevelopersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DevelopersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DevelopersScalarFieldEnum | DevelopersScalarFieldEnum[]
  }


  /**
   * Developers findFirstOrThrow
   */
  export type DevelopersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where?: DevelopersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DevelopersOrderByWithRelationInput | DevelopersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Developers.
     */
    cursor?: DevelopersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Developers.
     */
    distinct?: DevelopersScalarFieldEnum | DevelopersScalarFieldEnum[]
  }


  /**
   * Developers findMany
   */
  export type DevelopersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Filter, which Developers to fetch.
     */
    where?: DevelopersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Developers to fetch.
     */
    orderBy?: DevelopersOrderByWithRelationInput | DevelopersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Developers.
     */
    cursor?: DevelopersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Developers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Developers.
     */
    skip?: number
    distinct?: DevelopersScalarFieldEnum | DevelopersScalarFieldEnum[]
  }


  /**
   * Developers create
   */
  export type DevelopersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * The data needed to create a Developers.
     */
    data: XOR<DevelopersCreateInput, DevelopersUncheckedCreateInput>
  }


  /**
   * Developers createMany
   */
  export type DevelopersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Developers.
     */
    data: DevelopersCreateManyInput | DevelopersCreateManyInput[]
  }


  /**
   * Developers update
   */
  export type DevelopersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * The data needed to update a Developers.
     */
    data: XOR<DevelopersUpdateInput, DevelopersUncheckedUpdateInput>
    /**
     * Choose, which Developers to update.
     */
    where: DevelopersWhereUniqueInput
  }


  /**
   * Developers updateMany
   */
  export type DevelopersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Developers.
     */
    data: XOR<DevelopersUpdateManyMutationInput, DevelopersUncheckedUpdateManyInput>
    /**
     * Filter which Developers to update
     */
    where?: DevelopersWhereInput
  }


  /**
   * Developers upsert
   */
  export type DevelopersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * The filter to search for the Developers to update in case it exists.
     */
    where: DevelopersWhereUniqueInput
    /**
     * In case the Developers found by the `where` argument doesn't exist, create a new Developers with this data.
     */
    create: XOR<DevelopersCreateInput, DevelopersUncheckedCreateInput>
    /**
     * In case the Developers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevelopersUpdateInput, DevelopersUncheckedUpdateInput>
  }


  /**
   * Developers delete
   */
  export type DevelopersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
    /**
     * Filter which Developers to delete.
     */
    where: DevelopersWhereUniqueInput
  }


  /**
   * Developers deleteMany
   */
  export type DevelopersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Developers to delete
     */
    where?: DevelopersWhereInput
  }


  /**
   * Developers findRaw
   */
  export type DevelopersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Developers aggregateRaw
   */
  export type DevelopersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Developers without action
   */
  export type DevelopersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Developers
     */
    select?: DevelopersSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const DevelopersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    name: 'name',
    designation: 'designation',
    profileImage: 'profileImage',
    coverImage: 'coverImage',
    about: 'about',
    talksAbout: 'talksAbout',
    socialProfiles: 'socialProfiles',
    projects: 'projects'
  };

  export type DevelopersScalarFieldEnum = (typeof DevelopersScalarFieldEnum)[keyof typeof DevelopersScalarFieldEnum]


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
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DevelopersWhereInput = {
    AND?: DevelopersWhereInput | DevelopersWhereInput[]
    OR?: DevelopersWhereInput[]
    NOT?: DevelopersWhereInput | DevelopersWhereInput[]
    id?: StringFilter<"Developers"> | string
    email?: StringFilter<"Developers"> | string
    username?: StringFilter<"Developers"> | string
    password?: StringFilter<"Developers"> | string
    name?: StringFilter<"Developers"> | string
    designation?: StringFilter<"Developers"> | string
    profileImage?: StringFilter<"Developers"> | string
    coverImage?: StringFilter<"Developers"> | string
    about?: StringFilter<"Developers"> | string
    talksAbout?: StringNullableListFilter<"Developers">
    socialProfiles?: StringNullableListFilter<"Developers">
    projects?: JsonNullableListFilter<"Developers">
  }

  export type DevelopersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    profileImage?: SortOrder
    coverImage?: SortOrder
    about?: SortOrder
    talksAbout?: SortOrder
    socialProfiles?: SortOrder
    projects?: SortOrder
  }

  export type DevelopersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: DevelopersWhereInput | DevelopersWhereInput[]
    OR?: DevelopersWhereInput[]
    NOT?: DevelopersWhereInput | DevelopersWhereInput[]
    password?: StringFilter<"Developers"> | string
    name?: StringFilter<"Developers"> | string
    designation?: StringFilter<"Developers"> | string
    profileImage?: StringFilter<"Developers"> | string
    coverImage?: StringFilter<"Developers"> | string
    about?: StringFilter<"Developers"> | string
    talksAbout?: StringNullableListFilter<"Developers">
    socialProfiles?: StringNullableListFilter<"Developers">
    projects?: JsonNullableListFilter<"Developers">
  }, "id" | "email" | "username">

  export type DevelopersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    profileImage?: SortOrder
    coverImage?: SortOrder
    about?: SortOrder
    talksAbout?: SortOrder
    socialProfiles?: SortOrder
    projects?: SortOrder
    _count?: DevelopersCountOrderByAggregateInput
    _max?: DevelopersMaxOrderByAggregateInput
    _min?: DevelopersMinOrderByAggregateInput
  }

  export type DevelopersScalarWhereWithAggregatesInput = {
    AND?: DevelopersScalarWhereWithAggregatesInput | DevelopersScalarWhereWithAggregatesInput[]
    OR?: DevelopersScalarWhereWithAggregatesInput[]
    NOT?: DevelopersScalarWhereWithAggregatesInput | DevelopersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Developers"> | string
    email?: StringWithAggregatesFilter<"Developers"> | string
    username?: StringWithAggregatesFilter<"Developers"> | string
    password?: StringWithAggregatesFilter<"Developers"> | string
    name?: StringWithAggregatesFilter<"Developers"> | string
    designation?: StringWithAggregatesFilter<"Developers"> | string
    profileImage?: StringWithAggregatesFilter<"Developers"> | string
    coverImage?: StringWithAggregatesFilter<"Developers"> | string
    about?: StringWithAggregatesFilter<"Developers"> | string
    talksAbout?: StringNullableListFilter<"Developers">
    socialProfiles?: StringNullableListFilter<"Developers">
    projects?: JsonNullableListFilter<"Developers">
  }

  export type DevelopersCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    name: string
    designation: string
    profileImage?: string
    coverImage: string
    about: string
    talksAbout?: DevelopersCreatetalksAboutInput | string[]
    socialProfiles?: DevelopersCreatesocialProfilesInput | string[]
    projects?: DevelopersCreateprojectsInput | InputJsonValue[]
  }

  export type DevelopersUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    name: string
    designation: string
    profileImage?: string
    coverImage: string
    about: string
    talksAbout?: DevelopersCreatetalksAboutInput | string[]
    socialProfiles?: DevelopersCreatesocialProfilesInput | string[]
    projects?: DevelopersCreateprojectsInput | InputJsonValue[]
  }

  export type DevelopersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    talksAbout?: DevelopersUpdatetalksAboutInput | string[]
    socialProfiles?: DevelopersUpdatesocialProfilesInput | string[]
    projects?: DevelopersUpdateprojectsInput | InputJsonValue[]
  }

  export type DevelopersUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    talksAbout?: DevelopersUpdatetalksAboutInput | string[]
    socialProfiles?: DevelopersUpdatesocialProfilesInput | string[]
    projects?: DevelopersUpdateprojectsInput | InputJsonValue[]
  }

  export type DevelopersCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    name: string
    designation: string
    profileImage?: string
    coverImage: string
    about: string
    talksAbout?: DevelopersCreatetalksAboutInput | string[]
    socialProfiles?: DevelopersCreatesocialProfilesInput | string[]
    projects?: DevelopersCreateprojectsInput | InputJsonValue[]
  }

  export type DevelopersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    talksAbout?: DevelopersUpdatetalksAboutInput | string[]
    socialProfiles?: DevelopersUpdatesocialProfilesInput | string[]
    projects?: DevelopersUpdateprojectsInput | InputJsonValue[]
  }

  export type DevelopersUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    talksAbout?: DevelopersUpdatetalksAboutInput | string[]
    socialProfiles?: DevelopersUpdatesocialProfilesInput | string[]
    projects?: DevelopersUpdateprojectsInput | InputJsonValue[]
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableListFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DevelopersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    profileImage?: SortOrder
    coverImage?: SortOrder
    about?: SortOrder
    talksAbout?: SortOrder
    socialProfiles?: SortOrder
    projects?: SortOrder
  }

  export type DevelopersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    profileImage?: SortOrder
    coverImage?: SortOrder
    about?: SortOrder
  }

  export type DevelopersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    profileImage?: SortOrder
    coverImage?: SortOrder
    about?: SortOrder
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

  export type DevelopersCreatetalksAboutInput = {
    set: string[]
  }

  export type DevelopersCreatesocialProfilesInput = {
    set: string[]
  }

  export type DevelopersCreateprojectsInput = {
    set: InputJsonValue[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DevelopersUpdatetalksAboutInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DevelopersUpdatesocialProfilesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DevelopersUpdateprojectsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DevelopersDefaultArgs instead
     */
    export type DevelopersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DevelopersDefaultArgs<ExtArgs>

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