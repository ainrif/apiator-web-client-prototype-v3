<script lang="ts">
import { selectedEndpoint, Endpoint } from '../../repository';
import { paramsParser, ParsedParam, ParsedParams } from './params-parser';

import Card from './components/Card/card.svelte';

// @ts-ignore
import workspaceLogo from './workspace-logo.svg';

let apiPath: string | null;
let endpoint: Endpoint | null;
let parsedParams: ParsedParams<ParsedParam> | never[];

$: apiPath = $selectedEndpoint ? $selectedEndpoint!.apiPath : null;
$: endpoint = $selectedEndpoint ? $selectedEndpoint!.endpoint : null;

$: parsedParams = endpoint ? paramsParser(endpoint.params) : [];
</script>

<div class="workspace">
    {#if endpoint === null}
        <img class="workspace-logo" src="{workspaceLogo}" alt="logotype" />
    {:else}
        <div class="workspace-selected">
            <h1 class="title endpoints-method-{endpoint.method.toLowerCase()}">
                {endpoint.method}

                <span>{`${apiPath}${endpoint.path}`}</span>
            </h1>
            {#if endpoint.description}{endpoint.description}{/if}
            <h2 class="params">URL parameters</h2>
            <div class="cards">
                {#each [...parsedParams] as [paramType, value]}
                    <Card type="{paramType}" params="{value}" />
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
.workspace {
    height: 100vh;
    position: relative;
}

.title {
    font-size: 18px;
}

.params {
    font-size: 12px;
    color: var(--main-gray);

    margin-bottom: 12px;
}

.cards {
    display: flex;
}

.workspace-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 800px;
}

.workspace-selected {
    color: var(--main-white);
    margin: 12px 17px;
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
