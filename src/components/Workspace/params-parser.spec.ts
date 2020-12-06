import { paramsParser } from './params-parser';

const fixture = [
    {
        basedOn: [],
        httpParamType: 'QUERY',
        index: 0,
        modelType: 'STRING',
        name: 'search',
        optional: false,
    },
    {
        basedOn: [],
        httpParamType: 'BODY',
        index: 0,
        modelType: 'OBJECT',
        optional: false,
        type: 'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
    },
    {
        basedOn: [],
        httpParamType: 'PATH',
        index: 0,
        modelType: 'LONG',
        name: 'id',
        optional: false,
    },
    {
        basedOn: [],
        defaultValue: 'false',
        httpParamType: 'QUERY',
        index: 1,
        modelType: 'BOOLEAN',
        name: 'with_books',
        optional: false,
    },
    {
        basedOn: [],
        httpParamType: 'PATH',
        index: 0,
        modelType: 'LONG',
        name: 'id',
        optional: false,
    },
    {
        basedOn: [],
        httpParamType: 'PATH',
        index: 0,
        modelType: 'LONG',
        name: 'id',
        optional: false,
    },
    {
        basedOn: [],
        httpParamType: 'BODY',
        index: 1,
        modelType: 'OBJECT',
        optional: false,
        deprecated: false,
        type: 'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
    },
];

describe('Params parser', () => {
    it('should return params grouped by httpParamType', () => {
        const result = paramsParser(fixture);

        expect(result.size).toBe(3);

        expect(result.get('QUERY')!).toHaveLength(2);
        expect(result.get('PATH')!).toHaveLength(3);
        expect(result.get('BODY')!).toHaveLength(2);

        expect(result.get('QUERY')![0]).toStrictEqual({
            basedOn: [],
            name: 'search',
            modelType: 'STRING',
            optional: false,
            index: 0,
        });
    });
});
