// Type definitions for dynamodb 1.3
// Project: https://github.com/baseprime/dynamodb#readme
// Definitions by: katsanva <https://github.com/katsanva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { AnySchema } from 'joi';
import * as bunyan from 'bunyan';
import { callbackify } from 'util';
import { Readable } from 'stream';

import { Callback } from './Callback';
import { Model } from './Model';
import { DynamoDB, Projection, DocumentClient, DynamoDbSet } from './DynamoDB';

interface CreateTablesOptions {
    [key: string]: { readCapacity: number; writeCapacity: number };
}

interface CreateTables {
    (options?: CreateTablesOptions): Promise<any>;
    (options: CreateTablesOptions, callback: Callback<any>): void;
    (callback: Callback<any>): void;
}

interface IndexDefinition {
    hashKey: string;
    rangeKey?: string | undefined;
    name: string;
    type: 'local' | 'global';
    projection?: Projection | undefined;
}

export interface DefineConfig<T> {
    hashKey: string;
    rangeKey?: string | undefined;
    timestamps?: boolean | undefined;
    createdAt?: boolean | string | undefined;
    updatedAt?: boolean | string | undefined;
    tableName?: string | (() => string) | undefined;
    indexes?: ReadonlyArray<IndexDefinition> | undefined;
    schema?: {
        [key: string]: AnySchema | { [key: string]: AnySchema };
    } | undefined;
}

export const log: bunyan;
export function dynamoDriver(driver?: DynamoDB): DynamoDB;
export function documentClient(docClient?: DocumentClient): DocumentClient;
export function reset(): void;
export function Set(data: ReadonlyArray<any>, type: string): DynamoDbSet;
export function define(name: string, config: DefineConfig<any>): Model<any>;
export function define<T>(name: string, config: DefineConfig<T>): Model<T>;
export function model(name: string, model?: Model<any>): Model<any>;
export function model<T>(name: string, model?: Model<T>): Model<T>;
export const createTables: CreateTables;
export const types: {
    stringSet: () => AnySchema;
    numberSet: () => AnySchema;
    binarySet: () => AnySchema;
    uuid: () => AnySchema;
    timeUUID: () => AnySchema;
};

export const models: {
    [key: string]: typeof Model;
};

export const AWS: any;

export { Model };
