<script>
    import workspaceLogo from './workspace-logo.svg';

    import { selectedEndpoint } from '../../Stores/selected-endpoint';

    let endpoint = null;

    selectedEndpoint.subscribe(selected => {
        if (selected === null) {
            return;
        }

        endpoint = selected;
    });
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
    {#if endpoint === null}
        <img class="workspace-logo" src={workspaceLogo} alt="logotype" />
    {:else}
        <div class="workspace-selected">
            <h1 class="endpoints-method-{endpoint.method.toLowerCase()}">
                {endpoint.method} {endpoint.path}
            </h1>
            {#if endpoint.description}{endpoint.description}{/if}
        </div>
    {/if}
</div>
