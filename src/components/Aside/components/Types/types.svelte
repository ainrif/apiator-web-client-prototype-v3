<script>
    import { types } from '../../../../Stores/index';
</script>

<style>
    ul {
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-inline-start: 15px;
    }

    .types {
        margin: var(--S-margin) 0;
    }

    .types-list {
        padding-inline-start: 0px;

        line-height: 20px;
        list-style: none;
        font-weight: bold;
    }

    .type {
        cursor: pointer;
        color: var(--main-white);
    }
</style>

<div class="types">
    <ul class="types-list">
        {#each $types as type}
            <li class="type">{type}</li>
        {/each}
    </ul>
</div>
