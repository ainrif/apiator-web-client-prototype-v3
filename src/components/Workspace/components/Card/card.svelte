<script>
    export let type;
    export let name;
    export let modelType;
    export let defaultValue;

    // $: const { httpParamType, name, modelType, defaultValue } = param;
</script>

<style>
    .card {
        padding: 8px;
        width: 460px;
        background-color: var(--blocks-bg-color);
    }

    .parameter {
        font-size: var(--font-size);
    }

    .card-parameter-type {
        color: var(--main-gray);
    }

    .parameter-name {
        color: var(--main-white);
    }

    .parameter-datatype {
        color: var(--main-yellow);
    }

    .parameter-value {
        text-decoration: underline;
    }
</style>

<div class="card">
    <span class="card-parameter-type">{type}</span>
    <div class="parameter">
        <span class="parameter-name">{name}</span>
        :
        <span class="parameter-datatype">{modelType}</span>
        <span class="parameter-value">
            {#if defaultValue}
                {defaultValue}
            {:else}
                No default value
            {/if}
        </span>
    </div>
</div>
