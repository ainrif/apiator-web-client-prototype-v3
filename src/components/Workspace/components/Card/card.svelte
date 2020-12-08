<script>
    export let type;
    export let name;
    export let modelType;
    export let defaultValue;
    export let optional;
    export let deprecated;

    let isDescriptionVisible = false;
</script>

<div class="card">
    <span class="card-parameter-type">{type}</span>
    <div class="parameter">
        <div class="parameter-body">
            <div class="header">
                <span class="parameter-name">{name}</span>
                :
                <span class="parameter-datatype">{modelType}</span>
            <span class="parameter-value">
                {#if defaultValue}{defaultValue}{:else}No default value{/if}
            </span>
            </div>
            <div class="description-button" on:click={() => isDescriptionVisible = !isDescriptionVisible}>Description</div>
        </div>
        <div class="description" class:visible={isDescriptionVisible}>
            optional: {optional} deprecated: {deprecated}
        </div>
    </div>
</div>

<style>
    .card {
        padding: 8px;
        width: 460px;
        background-color: var(--blocks-bg-color);

        margin-bottom: var(--L-margin);
        margin-right: var(--L-margin);
    }

    .parameter {
        font-size: var(--font-size);

        margin-top: var(--L-margin);
    }

    .parameter-body {
        display: flex;
        justify-content: space-between;
    }

    .header {
        display: flex;
    }

    .description-button {
        color: var(--main-gray);
    }

    .description {
        display: none;
    }

    .visible {
        display: block;
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
