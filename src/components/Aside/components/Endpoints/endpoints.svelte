<script lang="ts">
    import { endpoints, selectEndpoint } from '../../../../repository';

    function handleClick(event: any) {
        if (event) {
            if (event.target.classList.contains('endpoints-method')) {
                const name = event.target.dataset.name;
                const endpointIndex = event.target.dataset.endpointIndex;

                const selectedApi = $endpoints[endpointIndex].apiEndpoints;

                for (let i = 0; i < selectedApi.length; i++) {
                    if (selectedApi[i].name === name) {
                        selectEndpoint(selectedApi[i]);

                        break;
                    }
                }
            }
        }
    }
</script>

<style>
    ul {
        margin-block-start: 0;
        margin-block-end: 0;
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
    <ul class="endpoints-list" on:click={handleClick}>
        {#each $endpoints as endpoint, index}
            <li class="endpoints-item">
                <span class="endpoints-title">{endpoint.apiPath}</span>
                <ul class="endpoints-methods">
                    {#each endpoint.apiEndpoints as entry}
                        <li
                            data-name={entry.name}
                            data-endpoint-index={index}
                            class="endpoints-method endpoints-method-{entry.method.toLowerCase()}">
                            {entry.method} {entry.path}
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</div>
