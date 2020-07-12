<script>
    import { repository } from '../../repository.ts';
    import workspaceLogo from './workspace-logo.svg';
    import Card from './components/Card/card.svelte';

    const { selectedEndpoint } = repository();
</script>

<style>
    .workspace {
        position: relative;
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
            <h1 class="$selectedEndpoints-method-{$selectedEndpoint.method.toLowerCase()}">
                {$selectedEndpoint.method} {$selectedEndpoint.path}
            </h1>
            {#if $selectedEndpoint.description}{$selectedEndpoint.description}{/if}
            {#each $selectedEndpoint.params as param}
                <Card
                    HTTPParameterType={param.httpParamType}
                    parameterName={param.name}
                    parameterDataType={param.modelType} />
            {/each}
        </div>
    {/if}
</div>
