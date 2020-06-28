<script>
    /** @todo: Fix size of card (shouldn't be hardcoded) */

    export let HTTPParameterType;
    export let parameterName;
    export let parameterDataType;
</script>

<style>
    .card {
        padding: 8px;
        width: 460px;
        height: 150px;
        background-color: var(--blocks-bg-color);
    }

    .card-parameter-type {
        color: var(--main-gray);
    }

    .parameter-name {
        color: var(--main-white);
    }
</style>

<div class="card">
    <span class="card-parameter-type">{HTTPParameterType}</span>
    <div class="parameter">
        <span class="parameter-name">{parameterName}</span>
        :
        <span class="parameter-datatype">{parameterDataType}</span>
    </div>
</div>
