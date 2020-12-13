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

export type Endpoint = {
    method: string;
    name: string;
    params: Param[];
    path: string;
    returnType?: ReturnValue;
    description?: string;
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
    updateEndpoints: (filter: (endpoints: C[]) => C[]) => void;
};

type Data<C> = {
    apiContexts: C[];
};

type Selected<T extends Endpoint> = {
    endpoint: T;
    apiPath: string;
};

function createRepository<
    T extends Selected<Endpoint>,
    C extends Context<Endpoint>
>({ apiContexts }: Data<C>): () => RepositoryAPI<T, C> {
    const selectedEndpoint = writable<T | null>(null);
    const selectEndpoint = (endpoint: T) => selectedEndpoint.set(endpoint);
    const endpoints = writable<C[]>(apiContexts);
    const updateEndpoints = (filter: (apiContexts: C[]) => C[]) => {
        endpoints.set(filter(apiContexts));
    };

    return () => {
        return {
            selectedEndpoint,
            selectEndpoint,
            endpoints,
            updateEndpoints,
        };
    };
}
export const {
    selectedEndpoint,
    selectEndpoint,
    endpoints,
    updateEndpoints,
} = createRepository(productionData)();
