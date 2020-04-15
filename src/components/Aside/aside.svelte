<script>
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
    ];
</script>

<style>
    .aside {
        background-color: var(--blocks-bg-color);
    }
</style>

<aside class="aside">
    <Search />

    <Endpoints {endpoints} />
    <div>Model</div>
</aside>
