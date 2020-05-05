import { readable } from 'svelte/store';
import { getTypes } from './services/get-types';
import data from '../endpoints-stub.json';

export const endpoints = readable(data.apiContexts);
export const types = readable(getTypes(data.usedApiTypes));
