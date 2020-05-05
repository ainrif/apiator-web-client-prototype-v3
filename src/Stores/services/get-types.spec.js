import { getTypes } from './get-types';

describe('getTypes service', () => {
    const fixture = [
        {
            fields: [],
            modelType: 'OBJECT',
            type: 'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
        },
        {
            description: 'Common type form library items',
            fields: [],
            modelType: 'OBJECT',
            type: 'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book',
        },
        {
            description: 'Periodic publications use the same isbn',
            fields: [],
            modelType: 'OBJECT',
            type: 'com.ainrif.apiator.test.model.jaxrs.uidev.model.Magazine',
        },
        {
            fields: [],
            modelType: 'OBJECT',
            type: 'com.ainrif.apiator.test.model.jaxrs.uidev.model.Publisher',
        },
    ];

    it('should return array of titles where title is value after last dot of type string', () => {
        expect(getTypes(fixture)).toStrictEqual([
            'Author',
            'Book',
            'Magazine',
            'Publisher',
        ]);
    });
});
