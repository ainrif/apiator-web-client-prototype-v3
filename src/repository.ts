// eslint-disable-next-line no-unused-vars
import { readable, Readable, writable, Writable } from 'svelte/store';
import data from './endpoints-stub.json';

export type Param = {
    basedOn: any[];
    httpParamType: string;
    index: number;
    modelType: string;
    name?: string;
    optional: boolean;
    deprecated?: boolean;
    defaultValue?: any;
};

type ReturnValue = {
    basedOn: any[];
    modelType: string;
};

type Endpoint = {
    method: string;
    name: string;
    params: Param[];
    path: string;
    returnType?: ReturnValue;
};

type Context<T> = {
    apiEndpoints: T[];
    apiPath: string;
    name: string;
};

type RepositoryAPI<T, C> = {
    endpoints: Readable<C[]>;
    selectedEndpoint: Writable<T | null>;
    selectEndpoint: (endpoint: T) => void;
};

type Data<C> = {
    apiContexts: C[];
};

function createRepository<T extends Endpoint, C extends Context<T>>({
    apiContexts,
}: Data<C>): () => RepositoryAPI<T, C> {
    const selectedEndpoint = writable<T | null>(null);
    const selectEndpoint = (endpoint: T) => selectedEndpoint.set(endpoint);
    const endpoints = readable(apiContexts, () => {});

    return () => {
        return {
            selectedEndpoint,
            selectEndpoint,
            endpoints,
        };
    };
}
export const { selectedEndpoint, selectEndpoint, endpoints } = createRepository(
    data
)();
