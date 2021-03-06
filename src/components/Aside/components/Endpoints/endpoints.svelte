<script lang="ts">
import {
    endpoints,
    selectEndpoint,
    selectedEndpoint,
} from '../../../../repository';

function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.classList.contains('endpoints-method')) {
        const name = target.dataset.name;
        const apiContextIndex = (target.dataset
            .contextIndex as unknown) as number;

        const selectedApi = $endpoints[apiContextIndex].apiEndpoints;

        for (let i = 0; i < selectedApi.length; i++) {
            if (selectedApi[i].name === name) {
                selectEndpoint({
                    endpoint: selectedApi[i],
                    apiPath: $endpoints[apiContextIndex].apiPath,
                });

                break;
            }
        }
    }
}

let activeEndpointIdentifier: string;

$: activeEndpointIdentifier = $selectedEndpoint
    ? `${$selectedEndpoint!.endpoint.method}${$selectedEndpoint!.endpoint.path}`
    : '';
</script>

<div class="endpoints">
    <ul class="endpoints-list" on:click="{handleClick}">
        {#each $endpoints as endpoint, index}
            <li class="endpoints-item">
                <span class="endpoints-title">{endpoint.apiPath}</span>
                <ul class="endpoints-methods">
                    {#each endpoint.apiEndpoints as entry}
                        <li
                            data-name="{entry.name}"
                            data-context-index="{index}"
                            class="endpoints-method endpoints-method-{entry.method.toLowerCase()}"
                            class:active="{activeEndpointIdentifier === `${entry.method}${entry.path}`}"
                            title="{`${entry.method}${entry.path}`}"
                        >
                            {entry.method}
                            {entry.path}
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</div>

<style>
.endpoints {
    text-overflow: ellipsis;
    overflow: scroll;
    white-space: nowrap;
    width: 100%;
    box-sizing: border-box;
}

ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 15px;
}

.path {
    margin-left: var(--XS-margin);
}

.endpoints {
    margin: var(--S-margin) 0;
}

.active {
    color: var(--active-endpoint-color) !important;

    text-decoration: underline;
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
    width: 90%;
    overflow: hidden;

    text-overflow: ellipsis;

    margin-top: var(--XS-margin);

    cursor: pointer;

    transition: color 0.2s;
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

.endpoints-method-patch {
    color: var(--main-yellow);
}
</style>
