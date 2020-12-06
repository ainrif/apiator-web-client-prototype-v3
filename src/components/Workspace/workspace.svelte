<script lang="ts">
    import { selectedEndpoint } from '../../repository';
    import { paramsParser } from './params-parser';

    import Card from './components/Card/card.svelte';

    // @ts-ignore
    import workspaceLogo from './workspace-logo.svg';

    let parsedParams;

    $: parsedParams = $selectedEndpoint ? paramsParser($selectedEndpoint.params) : [];
</script>

<style>
    .workspace {
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

<div class="workspace">
    {#if $selectedEndpoint === null}
        <img class="workspace-logo" src={workspaceLogo} alt="logotype" />
    {:else}
        <div class="workspace-selected">
            <h1
                class="title endpoints-method-{$selectedEndpoint.method.toLowerCase()}">
                {$selectedEndpoint.method} {$selectedEndpoint.path}
            </h1>
            {#if $selectedEndpoint.description}
                {$selectedEndpoint.description}
            {/if}
            <h2 class="params">URL parameters</h2>
            {#each [...parsedParams] as [paramType, value]}
                {#each value as {name, modelType, defaultValue, optional, deprecated}}
                    <Card
                        name={name}
                        type={paramType}
                        modelType={modelType}
                        defaultValue={defaultValue}
                        optional={optional ? optional : false}
                        deprecated={deprecated ? deprecated : false}
                    />
                {/each}
            {/each}
        </div>
    {/if}
</div>
