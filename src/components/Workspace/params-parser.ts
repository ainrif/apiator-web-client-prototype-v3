// eslint-disable-next-line no-unused-vars
import type { Param } from '../../repository';

type AvailableParamTypes = 'QUERY' | 'PATH' | 'BODY';
export type ParsedParam = {
    name: string;
    modelType: string;
    defaultValue?: string;
    optional?: boolean;
    deprecated?: boolean;
    index: number;
    basedOn: any[]; // @todo: Clarify type
};

export type ParsedParams<V extends ParsedParam> = Map<AvailableParamTypes, V[]>;

export const paramsParser = <P extends Param, R extends ParsedParam>(
    rowParams: P[]
): ParsedParams<R> => {
    const result = new Map();

    rowParams.forEach((param) => {
        const { httpParamType, ...rest } = param;

        const cell = result.get(httpParamType);

        if (cell) {
            cell.push(rest);
        } else {
            result.set(httpParamType, [rest]);
        }
    });

    return result;
};
