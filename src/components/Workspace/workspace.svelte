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
    }
</style>

<div class="workspace">
    {#if endpoint === null}
        <img class="workspace-logo" src={workspaceLogo} alt="logotype" />
    {:else}
        <div class="workspace-selected">{endpoint.description}</div>
    {/if}
</div>
