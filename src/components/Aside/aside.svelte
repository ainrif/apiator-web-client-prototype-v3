<script>
    import Header from './components/Header/header.svelte';
    import Search from './components/Search/search.svelte';
    import Endpoints from './components/Endpoints/endpoints.svelte';

    const endpoints = [
        {
            apiEndpoints: [
                {
                    method: 'GET',
                    name: 'getAuthors',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'QUERY',
                            index: 0,
                            modelType: 'STRING',
                            name: 'search',
                            optional: false,
                        },
                    ],
                    path: '/',
                    returnTypes: [
                        {
                            basedOn: [
                                {
                                    basedOn: [],
                                    modelType: 'OBJECT',
                                    type:
                                        'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
                                },
                            ],
                            modelType: 'ARRAY',
                        },
                    ],
                },
                {
                    method: 'POST',
                    name: 'createAuthor',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'BODY',
                            index: 0,
                            modelType: 'OBJECT',
                            optional: false,
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
                        },
                    ],
                    path: '/',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
                        },
                    ],
                },
                {
                    method: 'DELETE',
                    name: 'deleteAuthor',
                    params: [
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
                    ],
                    path: '/{id}',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
                        },
                    ],
                },
                {
                    method: 'GET',
                    name: 'getAuthor',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'PATH',
                            index: 0,
                            modelType: 'LONG',
                            name: 'id',
                            optional: false,
                        },
                    ],
                    path: '/{id}',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
                        },
                    ],
                },
                {
                    method: 'PUT',
                    name: 'updateAuthor',
                    params: [
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
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
                        },
                    ],
                    path: '/{id}',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
                        },
                    ],
                },
            ],
            apiPath: '/authors',
            name:
                'com.ainrif.apiator.test.model.jaxrs.uidev.controller.AuthorController',
        },
        {
            apiEndpoints: [
                {
                    method: 'GET',
                    name: 'getBooks',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'QUERY',
                            index: 0,
                            modelType: 'STRING',
                            name: 'search',
                            optional: false,
                        },
                    ],
                    path: '/',
                    returnTypes: [
                        {
                            basedOn: [
                                {
                                    basedOn: [],
                                    modelType: 'OBJECT',
                                    type:
                                        'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book',
                                },
                            ],
                            modelType: 'ARRAY',
                        },
                    ],
                },
                {
                    method: 'POST',
                    name: 'createBook',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'BODY',
                            index: 0,
                            modelType: 'OBJECT',
                            optional: false,
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book',
                        },
                    ],
                    path: '/',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book',
                        },
                    ],
                },
                {
                    method: 'DELETE',
                    name: 'deleteBook',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'PATH',
                            index: 0,
                            modelType: 'STRING',
                            name: 'isbn',
                            optional: false,
                        },
                    ],
                    path: '/{isbn}',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book',
                        },
                    ],
                },
                {
                    method: 'GET',
                    name: 'getBook',
                    params: [
                        {
                            basedOn: [],
                            defaultValue: '*',
                            httpParamType: 'PATH',
                            index: 0,
                            modelType: 'STRING',
                            name: 'isbn',
                            optional: false,
                        },
                    ],
                    path: '/{isbn}',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book',
                        },
                    ],
                },
                {
                    method: 'PUT',
                    name: 'updateBook',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'PATH',
                            index: 0,
                            modelType: 'STRING',
                            name: 'isbn',
                            optional: false,
                        },
                        {
                            basedOn: [],
                            httpParamType: 'BODY',
                            index: 1,
                            modelType: 'OBJECT',
                            optional: false,
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book',
                        },
                    ],
                    path: '/{isbn}',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book',
                        },
                    ],
                },
            ],
            apiPath: '/books',
            name:
                'com.ainrif.apiator.test.model.jaxrs.uidev.controller.BookController',
        },
        {
            apiEndpoints: [
                {
                    method: 'ADMIN',
                    name: 'adminRequest',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'PATH',
                            index: 0,
                            modelType: 'STRING',
                            name: 'token',
                            optional: false,
                        },
                    ],
                    path: '/admin/{token}',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'VOID',
                        },
                    ],
                },
                {
                    method: 'GET',
                    name: 'findAuthors',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'QUERY',
                            index: 0,
                            modelType: 'STRING',
                            name: 'book_title',
                            optional: false,
                        },
                    ],
                    path: '/authors',
                    returnTypes: [
                        {
                            basedOn: [
                                {
                                    basedOn: [],
                                    modelType: 'OBJECT',
                                    type:
                                        'com.ainrif.apiator.test.model.jaxrs.uidev.model.Author',
                                },
                            ],
                            modelType: 'ARRAY',
                        },
                    ],
                },
                {
                    method: 'GET',
                    name: 'findBooks',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'QUERY',
                            index: 0,
                            modelType: 'ENUMERATION',
                            name: 'status',
                            optional: true,
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book$Status',
                        },
                        {
                            basedOn: [],
                            httpParamType: 'QUERY',
                            index: 1,
                            modelType: 'STRING',
                            name: 'title',
                            optional: false,
                        },
                    ],
                    path: '/books',
                    returnTypes: [
                        {
                            basedOn: [
                                {
                                    basedOn: [],
                                    modelType: 'OBJECT',
                                    type:
                                        'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book',
                                },
                            ],
                            modelType: 'ARRAY',
                        },
                    ],
                },
                {
                    description: 'searches over all items in the library',
                    method: 'GET',
                    name: 'findByIsbn',
                    params: [
                        {
                            basedOn: [],
                            description:
                                '- number, dashes and spaces will be skipped',
                            httpParamType: 'QUERY',
                            index: 0,
                            modelType: 'STRING',
                            name: 'isbn',
                            optional: false,
                        },
                    ],
                    path: '/issues',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Book',
                        },
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Magazine',
                        },
                    ],
                },
                {
                    method: 'GET',
                    name: 'findMagazines',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'QUERY',
                            index: 0,
                            modelType: 'STRING',
                            name: 'title',
                            optional: false,
                        },
                    ],
                    path: '/magazines',
                    returnTypes: [
                        {
                            basedOn: [
                                {
                                    basedOn: [],
                                    modelType: 'OBJECT',
                                    type:
                                        'com.ainrif.apiator.test.model.jaxrs.uidev.model.Magazine',
                                },
                            ],
                            modelType: 'ARRAY',
                        },
                    ],
                },
                {
                    method: 'GET',
                    name: 'findPublishers',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'QUERY',
                            index: 0,
                            modelType: 'STRING',
                            name: 'title',
                            optional: false,
                        },
                    ],
                    path: '/publishers',
                    returnTypes: [
                        {
                            basedOn: [
                                {
                                    basedOn: [],
                                    modelType: 'OBJECT',
                                    type:
                                        'com.ainrif.apiator.test.model.jaxrs.uidev.model.Publisher',
                                },
                            ],
                            modelType: 'ARRAY',
                        },
                    ],
                },
            ],
            apiPath: '/library',
            name:
                'com.ainrif.apiator.test.model.jaxrs.uidev.controller.LibraryController',
        },
        {
            apiEndpoints: [
                {
                    method: 'GET',
                    name: 'getMagazines',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'QUERY',
                            index: 0,
                            modelType: 'STRING',
                            name: 'search',
                            optional: false,
                        },
                    ],
                    path: '/',
                    returnTypes: [
                        {
                            basedOn: [
                                {
                                    basedOn: [],
                                    modelType: 'OBJECT',
                                    type:
                                        'com.ainrif.apiator.test.model.jaxrs.uidev.model.Magazine',
                                },
                            ],
                            modelType: 'ARRAY',
                        },
                    ],
                },
                {
                    method: 'POST',
                    name: 'createMagazine',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'BODY',
                            index: 0,
                            modelType: 'OBJECT',
                            optional: false,
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Magazine',
                        },
                    ],
                    path: '/',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Magazine',
                        },
                    ],
                },
                {
                    method: 'DELETE',
                    name: 'deleteMagazine',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'PATH',
                            index: 0,
                            modelType: 'STRING',
                            name: 'isbn',
                            optional: false,
                        },
                    ],
                    path: '/{isbn}',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Magazine',
                        },
                    ],
                },
                {
                    method: 'GET',
                    name: 'getMagazine',
                    params: [
                        {
                            basedOn: [],
                            defaultValue: '*',
                            httpParamType: 'PATH',
                            index: 0,
                            modelType: 'STRING',
                            name: 'isbn',
                            optional: false,
                        },
                    ],
                    path: '/{isbn}',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Magazine',
                        },
                    ],
                },
                {
                    method: 'PUT',
                    name: 'updateMagazine',
                    params: [
                        {
                            basedOn: [],
                            httpParamType: 'PATH',
                            index: 0,
                            modelType: 'STRING',
                            name: 'isbn',
                            optional: false,
                        },
                        {
                            basedOn: [],
                            httpParamType: 'BODY',
                            index: 1,
                            modelType: 'OBJECT',
                            optional: false,
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Magazine',
                        },
                    ],
                    path: '/{isbn}',
                    returnTypes: [
                        {
                            basedOn: [],
                            modelType: 'OBJECT',
                            type:
                                'com.ainrif.apiator.test.model.jaxrs.uidev.model.Magazine',
                        },
                    ],
                },
            ],
            apiPath: '/magazine',
            name:
                'com.ainrif.apiator.test.model.jaxrs.uidev.controller.MagazineController',
        },
    ];
</script>

<style>
    .aside {
        height: 100vh;
        background-color: var(--blocks-bg-color);
        font-size: var(--font-size);
        border-right: 1px solid var(--border-color);
    }

    .section {
        margin-top: var(--L-margin);
        margin-left: var(--L-margin);
    }

    .section-title {
        color: var(--main-gray);
        font-weight: bold;
    }
</style>

<aside class="aside">
    <Header />
    <Search />

    <div class="section">
        <span class="section-title">ENDPOINTS</span>
        <Endpoints {endpoints} />
    </div>
    <div class="section">
        <span class="section-title">Model</span>
    </div>
</aside>
