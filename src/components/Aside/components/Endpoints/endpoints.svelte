<script>
    import { endpoints } from '../../../../Stores/index';
</script>

<style>
    ul {
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-inline-start: 15px;
    }

    .endpoints {
        margin: var(--S-margin) 0;
    }

    .endpoints-title {
        color: var(--main-white);
    }

    .endpoints-list {
        line-height: 20px;
        list-style: none;

        padding-inline-start: 0px;
    }

    .endpoints-methods {
        list-style: none;
        font-weight: bold;
    }

    .endpoints-method {
        cursor: pointer;
    }

    .endpoints-method-get {
        color: var(--main-cyan);
    }

    .endpoints-method-post {
        color: var(--main-green);
    }

    .endpoints-method-put {
        color: var(--main-orange);
    }

    .endpoints-method-delete {
        color: var(--main-red);
    }

    .endpoints-method-admin {
        color: var(--main-blue);
    }
</style>

<div class="endpoints">
    <ul class="endpoints-list">
        {#each $endpoints as endpoint}
            <li class="endpoints-item">
                <span class="endpoints-title">{endpoint.apiPath}</span>
                <ul class="endpoints-methods">
                    {#each endpoint.apiEndpoints as entry}
                        <li
                            class="endpoints-method endpoints-method-{entry.method.toLowerCase()}">
                            {entry.method} {entry.path}
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</div>
