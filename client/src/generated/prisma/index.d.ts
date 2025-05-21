
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
 * Model MandiLatLong
 * 
 */
export type MandiLatLong = $Result.DefaultSelection<Prisma.$MandiLatLongPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MandiLatLongs
 * const mandiLatLongs = await prisma.mandiLatLong.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more MandiLatLongs
   * const mandiLatLongs = await prisma.mandiLatLong.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.mandiLatLong`: Exposes CRUD operations for the **MandiLatLong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MandiLatLongs
    * const mandiLatLongs = await prisma.mandiLatLong.findMany()
    * ```
    */
  get mandiLatLong(): Prisma.MandiLatLongDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    MandiLatLong: 'MandiLatLong'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "mandiLatLong"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MandiLatLong: {
        payload: Prisma.$MandiLatLongPayload<ExtArgs>
        fields: Prisma.MandiLatLongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MandiLatLongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MandiLatLongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload>
          }
          findFirst: {
            args: Prisma.MandiLatLongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MandiLatLongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload>
          }
          findMany: {
            args: Prisma.MandiLatLongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload>[]
          }
          create: {
            args: Prisma.MandiLatLongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload>
          }
          createMany: {
            args: Prisma.MandiLatLongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MandiLatLongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload>[]
          }
          delete: {
            args: Prisma.MandiLatLongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload>
          }
          update: {
            args: Prisma.MandiLatLongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload>
          }
          deleteMany: {
            args: Prisma.MandiLatLongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MandiLatLongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MandiLatLongUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload>[]
          }
          upsert: {
            args: Prisma.MandiLatLongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MandiLatLongPayload>
          }
          aggregate: {
            args: Prisma.MandiLatLongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMandiLatLong>
          }
          groupBy: {
            args: Prisma.MandiLatLongGroupByArgs<ExtArgs>
            result: $Utils.Optional<MandiLatLongGroupByOutputType>[]
          }
          count: {
            args: Prisma.MandiLatLongCountArgs<ExtArgs>
            result: $Utils.Optional<MandiLatLongCountAggregateOutputType> | number
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
  }
  export type GlobalOmitConfig = {
    mandiLatLong?: MandiLatLongOmit
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
   * Model MandiLatLong
   */

  export type AggregateMandiLatLong = {
    _count: MandiLatLongCountAggregateOutputType | null
    _avg: MandiLatLongAvgAggregateOutputType | null
    _sum: MandiLatLongSumAggregateOutputType | null
    _min: MandiLatLongMinAggregateOutputType | null
    _max: MandiLatLongMaxAggregateOutputType | null
  }

  export type MandiLatLongAvgAggregateOutputType = {
    id: number | null
    Latitude: number | null
    Longitude: number | null
  }

  export type MandiLatLongSumAggregateOutputType = {
    id: number | null
    Latitude: number | null
    Longitude: number | null
  }

  export type MandiLatLongMinAggregateOutputType = {
    id: number | null
    State: string | null
    Mandi: string | null
    Latitude: number | null
    Longitude: number | null
  }

  export type MandiLatLongMaxAggregateOutputType = {
    id: number | null
    State: string | null
    Mandi: string | null
    Latitude: number | null
    Longitude: number | null
  }

  export type MandiLatLongCountAggregateOutputType = {
    id: number
    State: number
    Mandi: number
    Latitude: number
    Longitude: number
    _all: number
  }


  export type MandiLatLongAvgAggregateInputType = {
    id?: true
    Latitude?: true
    Longitude?: true
  }

  export type MandiLatLongSumAggregateInputType = {
    id?: true
    Latitude?: true
    Longitude?: true
  }

  export type MandiLatLongMinAggregateInputType = {
    id?: true
    State?: true
    Mandi?: true
    Latitude?: true
    Longitude?: true
  }

  export type MandiLatLongMaxAggregateInputType = {
    id?: true
    State?: true
    Mandi?: true
    Latitude?: true
    Longitude?: true
  }

  export type MandiLatLongCountAggregateInputType = {
    id?: true
    State?: true
    Mandi?: true
    Latitude?: true
    Longitude?: true
    _all?: true
  }

  export type MandiLatLongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MandiLatLong to aggregate.
     */
    where?: MandiLatLongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MandiLatLongs to fetch.
     */
    orderBy?: MandiLatLongOrderByWithRelationInput | MandiLatLongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MandiLatLongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MandiLatLongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MandiLatLongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MandiLatLongs
    **/
    _count?: true | MandiLatLongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MandiLatLongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MandiLatLongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MandiLatLongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MandiLatLongMaxAggregateInputType
  }

  export type GetMandiLatLongAggregateType<T extends MandiLatLongAggregateArgs> = {
        [P in keyof T & keyof AggregateMandiLatLong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMandiLatLong[P]>
      : GetScalarType<T[P], AggregateMandiLatLong[P]>
  }




  export type MandiLatLongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MandiLatLongWhereInput
    orderBy?: MandiLatLongOrderByWithAggregationInput | MandiLatLongOrderByWithAggregationInput[]
    by: MandiLatLongScalarFieldEnum[] | MandiLatLongScalarFieldEnum
    having?: MandiLatLongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MandiLatLongCountAggregateInputType | true
    _avg?: MandiLatLongAvgAggregateInputType
    _sum?: MandiLatLongSumAggregateInputType
    _min?: MandiLatLongMinAggregateInputType
    _max?: MandiLatLongMaxAggregateInputType
  }

  export type MandiLatLongGroupByOutputType = {
    id: number
    State: string
    Mandi: string
    Latitude: number
    Longitude: number
    _count: MandiLatLongCountAggregateOutputType | null
    _avg: MandiLatLongAvgAggregateOutputType | null
    _sum: MandiLatLongSumAggregateOutputType | null
    _min: MandiLatLongMinAggregateOutputType | null
    _max: MandiLatLongMaxAggregateOutputType | null
  }

  type GetMandiLatLongGroupByPayload<T extends MandiLatLongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MandiLatLongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MandiLatLongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MandiLatLongGroupByOutputType[P]>
            : GetScalarType<T[P], MandiLatLongGroupByOutputType[P]>
        }
      >
    >


  export type MandiLatLongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    State?: boolean
    Mandi?: boolean
    Latitude?: boolean
    Longitude?: boolean
  }, ExtArgs["result"]["mandiLatLong"]>

  export type MandiLatLongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    State?: boolean
    Mandi?: boolean
    Latitude?: boolean
    Longitude?: boolean
  }, ExtArgs["result"]["mandiLatLong"]>

  export type MandiLatLongSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    State?: boolean
    Mandi?: boolean
    Latitude?: boolean
    Longitude?: boolean
  }, ExtArgs["result"]["mandiLatLong"]>

  export type MandiLatLongSelectScalar = {
    id?: boolean
    State?: boolean
    Mandi?: boolean
    Latitude?: boolean
    Longitude?: boolean
  }

  export type MandiLatLongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "State" | "Mandi" | "Latitude" | "Longitude", ExtArgs["result"]["mandiLatLong"]>

  export type $MandiLatLongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MandiLatLong"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      State: string
      Mandi: string
      Latitude: number
      Longitude: number
    }, ExtArgs["result"]["mandiLatLong"]>
    composites: {}
  }

  type MandiLatLongGetPayload<S extends boolean | null | undefined | MandiLatLongDefaultArgs> = $Result.GetResult<Prisma.$MandiLatLongPayload, S>

  type MandiLatLongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MandiLatLongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MandiLatLongCountAggregateInputType | true
    }

  export interface MandiLatLongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MandiLatLong'], meta: { name: 'MandiLatLong' } }
    /**
     * Find zero or one MandiLatLong that matches the filter.
     * @param {MandiLatLongFindUniqueArgs} args - Arguments to find a MandiLatLong
     * @example
     * // Get one MandiLatLong
     * const mandiLatLong = await prisma.mandiLatLong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MandiLatLongFindUniqueArgs>(args: SelectSubset<T, MandiLatLongFindUniqueArgs<ExtArgs>>): Prisma__MandiLatLongClient<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MandiLatLong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MandiLatLongFindUniqueOrThrowArgs} args - Arguments to find a MandiLatLong
     * @example
     * // Get one MandiLatLong
     * const mandiLatLong = await prisma.mandiLatLong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MandiLatLongFindUniqueOrThrowArgs>(args: SelectSubset<T, MandiLatLongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MandiLatLongClient<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MandiLatLong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MandiLatLongFindFirstArgs} args - Arguments to find a MandiLatLong
     * @example
     * // Get one MandiLatLong
     * const mandiLatLong = await prisma.mandiLatLong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MandiLatLongFindFirstArgs>(args?: SelectSubset<T, MandiLatLongFindFirstArgs<ExtArgs>>): Prisma__MandiLatLongClient<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MandiLatLong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MandiLatLongFindFirstOrThrowArgs} args - Arguments to find a MandiLatLong
     * @example
     * // Get one MandiLatLong
     * const mandiLatLong = await prisma.mandiLatLong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MandiLatLongFindFirstOrThrowArgs>(args?: SelectSubset<T, MandiLatLongFindFirstOrThrowArgs<ExtArgs>>): Prisma__MandiLatLongClient<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MandiLatLongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MandiLatLongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MandiLatLongs
     * const mandiLatLongs = await prisma.mandiLatLong.findMany()
     * 
     * // Get first 10 MandiLatLongs
     * const mandiLatLongs = await prisma.mandiLatLong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mandiLatLongWithIdOnly = await prisma.mandiLatLong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MandiLatLongFindManyArgs>(args?: SelectSubset<T, MandiLatLongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MandiLatLong.
     * @param {MandiLatLongCreateArgs} args - Arguments to create a MandiLatLong.
     * @example
     * // Create one MandiLatLong
     * const MandiLatLong = await prisma.mandiLatLong.create({
     *   data: {
     *     // ... data to create a MandiLatLong
     *   }
     * })
     * 
     */
    create<T extends MandiLatLongCreateArgs>(args: SelectSubset<T, MandiLatLongCreateArgs<ExtArgs>>): Prisma__MandiLatLongClient<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MandiLatLongs.
     * @param {MandiLatLongCreateManyArgs} args - Arguments to create many MandiLatLongs.
     * @example
     * // Create many MandiLatLongs
     * const mandiLatLong = await prisma.mandiLatLong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MandiLatLongCreateManyArgs>(args?: SelectSubset<T, MandiLatLongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MandiLatLongs and returns the data saved in the database.
     * @param {MandiLatLongCreateManyAndReturnArgs} args - Arguments to create many MandiLatLongs.
     * @example
     * // Create many MandiLatLongs
     * const mandiLatLong = await prisma.mandiLatLong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MandiLatLongs and only return the `id`
     * const mandiLatLongWithIdOnly = await prisma.mandiLatLong.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MandiLatLongCreateManyAndReturnArgs>(args?: SelectSubset<T, MandiLatLongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MandiLatLong.
     * @param {MandiLatLongDeleteArgs} args - Arguments to delete one MandiLatLong.
     * @example
     * // Delete one MandiLatLong
     * const MandiLatLong = await prisma.mandiLatLong.delete({
     *   where: {
     *     // ... filter to delete one MandiLatLong
     *   }
     * })
     * 
     */
    delete<T extends MandiLatLongDeleteArgs>(args: SelectSubset<T, MandiLatLongDeleteArgs<ExtArgs>>): Prisma__MandiLatLongClient<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MandiLatLong.
     * @param {MandiLatLongUpdateArgs} args - Arguments to update one MandiLatLong.
     * @example
     * // Update one MandiLatLong
     * const mandiLatLong = await prisma.mandiLatLong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MandiLatLongUpdateArgs>(args: SelectSubset<T, MandiLatLongUpdateArgs<ExtArgs>>): Prisma__MandiLatLongClient<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MandiLatLongs.
     * @param {MandiLatLongDeleteManyArgs} args - Arguments to filter MandiLatLongs to delete.
     * @example
     * // Delete a few MandiLatLongs
     * const { count } = await prisma.mandiLatLong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MandiLatLongDeleteManyArgs>(args?: SelectSubset<T, MandiLatLongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MandiLatLongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MandiLatLongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MandiLatLongs
     * const mandiLatLong = await prisma.mandiLatLong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MandiLatLongUpdateManyArgs>(args: SelectSubset<T, MandiLatLongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MandiLatLongs and returns the data updated in the database.
     * @param {MandiLatLongUpdateManyAndReturnArgs} args - Arguments to update many MandiLatLongs.
     * @example
     * // Update many MandiLatLongs
     * const mandiLatLong = await prisma.mandiLatLong.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MandiLatLongs and only return the `id`
     * const mandiLatLongWithIdOnly = await prisma.mandiLatLong.updateManyAndReturn({
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
    updateManyAndReturn<T extends MandiLatLongUpdateManyAndReturnArgs>(args: SelectSubset<T, MandiLatLongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MandiLatLong.
     * @param {MandiLatLongUpsertArgs} args - Arguments to update or create a MandiLatLong.
     * @example
     * // Update or create a MandiLatLong
     * const mandiLatLong = await prisma.mandiLatLong.upsert({
     *   create: {
     *     // ... data to create a MandiLatLong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MandiLatLong we want to update
     *   }
     * })
     */
    upsert<T extends MandiLatLongUpsertArgs>(args: SelectSubset<T, MandiLatLongUpsertArgs<ExtArgs>>): Prisma__MandiLatLongClient<$Result.GetResult<Prisma.$MandiLatLongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MandiLatLongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MandiLatLongCountArgs} args - Arguments to filter MandiLatLongs to count.
     * @example
     * // Count the number of MandiLatLongs
     * const count = await prisma.mandiLatLong.count({
     *   where: {
     *     // ... the filter for the MandiLatLongs we want to count
     *   }
     * })
    **/
    count<T extends MandiLatLongCountArgs>(
      args?: Subset<T, MandiLatLongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MandiLatLongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MandiLatLong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MandiLatLongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MandiLatLongAggregateArgs>(args: Subset<T, MandiLatLongAggregateArgs>): Prisma.PrismaPromise<GetMandiLatLongAggregateType<T>>

    /**
     * Group by MandiLatLong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MandiLatLongGroupByArgs} args - Group by arguments.
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
      T extends MandiLatLongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MandiLatLongGroupByArgs['orderBy'] }
        : { orderBy?: MandiLatLongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MandiLatLongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMandiLatLongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MandiLatLong model
   */
  readonly fields: MandiLatLongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MandiLatLong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MandiLatLongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MandiLatLong model
   */
  interface MandiLatLongFieldRefs {
    readonly id: FieldRef<"MandiLatLong", 'Int'>
    readonly State: FieldRef<"MandiLatLong", 'String'>
    readonly Mandi: FieldRef<"MandiLatLong", 'String'>
    readonly Latitude: FieldRef<"MandiLatLong", 'Float'>
    readonly Longitude: FieldRef<"MandiLatLong", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MandiLatLong findUnique
   */
  export type MandiLatLongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * Filter, which MandiLatLong to fetch.
     */
    where: MandiLatLongWhereUniqueInput
  }

  /**
   * MandiLatLong findUniqueOrThrow
   */
  export type MandiLatLongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * Filter, which MandiLatLong to fetch.
     */
    where: MandiLatLongWhereUniqueInput
  }

  /**
   * MandiLatLong findFirst
   */
  export type MandiLatLongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * Filter, which MandiLatLong to fetch.
     */
    where?: MandiLatLongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MandiLatLongs to fetch.
     */
    orderBy?: MandiLatLongOrderByWithRelationInput | MandiLatLongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MandiLatLongs.
     */
    cursor?: MandiLatLongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MandiLatLongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MandiLatLongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MandiLatLongs.
     */
    distinct?: MandiLatLongScalarFieldEnum | MandiLatLongScalarFieldEnum[]
  }

  /**
   * MandiLatLong findFirstOrThrow
   */
  export type MandiLatLongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * Filter, which MandiLatLong to fetch.
     */
    where?: MandiLatLongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MandiLatLongs to fetch.
     */
    orderBy?: MandiLatLongOrderByWithRelationInput | MandiLatLongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MandiLatLongs.
     */
    cursor?: MandiLatLongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MandiLatLongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MandiLatLongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MandiLatLongs.
     */
    distinct?: MandiLatLongScalarFieldEnum | MandiLatLongScalarFieldEnum[]
  }

  /**
   * MandiLatLong findMany
   */
  export type MandiLatLongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * Filter, which MandiLatLongs to fetch.
     */
    where?: MandiLatLongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MandiLatLongs to fetch.
     */
    orderBy?: MandiLatLongOrderByWithRelationInput | MandiLatLongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MandiLatLongs.
     */
    cursor?: MandiLatLongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MandiLatLongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MandiLatLongs.
     */
    skip?: number
    distinct?: MandiLatLongScalarFieldEnum | MandiLatLongScalarFieldEnum[]
  }

  /**
   * MandiLatLong create
   */
  export type MandiLatLongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * The data needed to create a MandiLatLong.
     */
    data: XOR<MandiLatLongCreateInput, MandiLatLongUncheckedCreateInput>
  }

  /**
   * MandiLatLong createMany
   */
  export type MandiLatLongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MandiLatLongs.
     */
    data: MandiLatLongCreateManyInput | MandiLatLongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MandiLatLong createManyAndReturn
   */
  export type MandiLatLongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * The data used to create many MandiLatLongs.
     */
    data: MandiLatLongCreateManyInput | MandiLatLongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MandiLatLong update
   */
  export type MandiLatLongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * The data needed to update a MandiLatLong.
     */
    data: XOR<MandiLatLongUpdateInput, MandiLatLongUncheckedUpdateInput>
    /**
     * Choose, which MandiLatLong to update.
     */
    where: MandiLatLongWhereUniqueInput
  }

  /**
   * MandiLatLong updateMany
   */
  export type MandiLatLongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MandiLatLongs.
     */
    data: XOR<MandiLatLongUpdateManyMutationInput, MandiLatLongUncheckedUpdateManyInput>
    /**
     * Filter which MandiLatLongs to update
     */
    where?: MandiLatLongWhereInput
    /**
     * Limit how many MandiLatLongs to update.
     */
    limit?: number
  }

  /**
   * MandiLatLong updateManyAndReturn
   */
  export type MandiLatLongUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * The data used to update MandiLatLongs.
     */
    data: XOR<MandiLatLongUpdateManyMutationInput, MandiLatLongUncheckedUpdateManyInput>
    /**
     * Filter which MandiLatLongs to update
     */
    where?: MandiLatLongWhereInput
    /**
     * Limit how many MandiLatLongs to update.
     */
    limit?: number
  }

  /**
   * MandiLatLong upsert
   */
  export type MandiLatLongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * The filter to search for the MandiLatLong to update in case it exists.
     */
    where: MandiLatLongWhereUniqueInput
    /**
     * In case the MandiLatLong found by the `where` argument doesn't exist, create a new MandiLatLong with this data.
     */
    create: XOR<MandiLatLongCreateInput, MandiLatLongUncheckedCreateInput>
    /**
     * In case the MandiLatLong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MandiLatLongUpdateInput, MandiLatLongUncheckedUpdateInput>
  }

  /**
   * MandiLatLong delete
   */
  export type MandiLatLongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
    /**
     * Filter which MandiLatLong to delete.
     */
    where: MandiLatLongWhereUniqueInput
  }

  /**
   * MandiLatLong deleteMany
   */
  export type MandiLatLongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MandiLatLongs to delete
     */
    where?: MandiLatLongWhereInput
    /**
     * Limit how many MandiLatLongs to delete.
     */
    limit?: number
  }

  /**
   * MandiLatLong without action
   */
  export type MandiLatLongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MandiLatLong
     */
    select?: MandiLatLongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MandiLatLong
     */
    omit?: MandiLatLongOmit<ExtArgs> | null
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


  export const MandiLatLongScalarFieldEnum: {
    id: 'id',
    State: 'State',
    Mandi: 'Mandi',
    Latitude: 'Latitude',
    Longitude: 'Longitude'
  };

  export type MandiLatLongScalarFieldEnum = (typeof MandiLatLongScalarFieldEnum)[keyof typeof MandiLatLongScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type MandiLatLongWhereInput = {
    AND?: MandiLatLongWhereInput | MandiLatLongWhereInput[]
    OR?: MandiLatLongWhereInput[]
    NOT?: MandiLatLongWhereInput | MandiLatLongWhereInput[]
    id?: IntFilter<"MandiLatLong"> | number
    State?: StringFilter<"MandiLatLong"> | string
    Mandi?: StringFilter<"MandiLatLong"> | string
    Latitude?: FloatFilter<"MandiLatLong"> | number
    Longitude?: FloatFilter<"MandiLatLong"> | number
  }

  export type MandiLatLongOrderByWithRelationInput = {
    id?: SortOrder
    State?: SortOrder
    Mandi?: SortOrder
    Latitude?: SortOrder
    Longitude?: SortOrder
  }

  export type MandiLatLongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MandiLatLongWhereInput | MandiLatLongWhereInput[]
    OR?: MandiLatLongWhereInput[]
    NOT?: MandiLatLongWhereInput | MandiLatLongWhereInput[]
    State?: StringFilter<"MandiLatLong"> | string
    Mandi?: StringFilter<"MandiLatLong"> | string
    Latitude?: FloatFilter<"MandiLatLong"> | number
    Longitude?: FloatFilter<"MandiLatLong"> | number
  }, "id">

  export type MandiLatLongOrderByWithAggregationInput = {
    id?: SortOrder
    State?: SortOrder
    Mandi?: SortOrder
    Latitude?: SortOrder
    Longitude?: SortOrder
    _count?: MandiLatLongCountOrderByAggregateInput
    _avg?: MandiLatLongAvgOrderByAggregateInput
    _max?: MandiLatLongMaxOrderByAggregateInput
    _min?: MandiLatLongMinOrderByAggregateInput
    _sum?: MandiLatLongSumOrderByAggregateInput
  }

  export type MandiLatLongScalarWhereWithAggregatesInput = {
    AND?: MandiLatLongScalarWhereWithAggregatesInput | MandiLatLongScalarWhereWithAggregatesInput[]
    OR?: MandiLatLongScalarWhereWithAggregatesInput[]
    NOT?: MandiLatLongScalarWhereWithAggregatesInput | MandiLatLongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MandiLatLong"> | number
    State?: StringWithAggregatesFilter<"MandiLatLong"> | string
    Mandi?: StringWithAggregatesFilter<"MandiLatLong"> | string
    Latitude?: FloatWithAggregatesFilter<"MandiLatLong"> | number
    Longitude?: FloatWithAggregatesFilter<"MandiLatLong"> | number
  }

  export type MandiLatLongCreateInput = {
    State: string
    Mandi: string
    Latitude: number
    Longitude: number
  }

  export type MandiLatLongUncheckedCreateInput = {
    id?: number
    State: string
    Mandi: string
    Latitude: number
    Longitude: number
  }

  export type MandiLatLongUpdateInput = {
    State?: StringFieldUpdateOperationsInput | string
    Mandi?: StringFieldUpdateOperationsInput | string
    Latitude?: FloatFieldUpdateOperationsInput | number
    Longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type MandiLatLongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    State?: StringFieldUpdateOperationsInput | string
    Mandi?: StringFieldUpdateOperationsInput | string
    Latitude?: FloatFieldUpdateOperationsInput | number
    Longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type MandiLatLongCreateManyInput = {
    id?: number
    State: string
    Mandi: string
    Latitude: number
    Longitude: number
  }

  export type MandiLatLongUpdateManyMutationInput = {
    State?: StringFieldUpdateOperationsInput | string
    Mandi?: StringFieldUpdateOperationsInput | string
    Latitude?: FloatFieldUpdateOperationsInput | number
    Longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type MandiLatLongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    State?: StringFieldUpdateOperationsInput | string
    Mandi?: StringFieldUpdateOperationsInput | string
    Latitude?: FloatFieldUpdateOperationsInput | number
    Longitude?: FloatFieldUpdateOperationsInput | number
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MandiLatLongCountOrderByAggregateInput = {
    id?: SortOrder
    State?: SortOrder
    Mandi?: SortOrder
    Latitude?: SortOrder
    Longitude?: SortOrder
  }

  export type MandiLatLongAvgOrderByAggregateInput = {
    id?: SortOrder
    Latitude?: SortOrder
    Longitude?: SortOrder
  }

  export type MandiLatLongMaxOrderByAggregateInput = {
    id?: SortOrder
    State?: SortOrder
    Mandi?: SortOrder
    Latitude?: SortOrder
    Longitude?: SortOrder
  }

  export type MandiLatLongMinOrderByAggregateInput = {
    id?: SortOrder
    State?: SortOrder
    Mandi?: SortOrder
    Latitude?: SortOrder
    Longitude?: SortOrder
  }

  export type MandiLatLongSumOrderByAggregateInput = {
    id?: SortOrder
    Latitude?: SortOrder
    Longitude?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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