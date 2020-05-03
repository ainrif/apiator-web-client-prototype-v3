import { readable } from 'svelte/store';
import data from '../endpoints-stub.json';

export const endpoints = readable(data.apiContexts);
