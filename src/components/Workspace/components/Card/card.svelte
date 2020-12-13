<script lang="ts">
// @ts-ignore
import arrowIcon from './arrow.svg';
import type { ParsedParam } from '../../params-parser';

export let type: string;
export let params: Pick<
    ParsedParam,
    'name' | 'modelType' | 'defaultValue' | 'optional' | 'deprecated'
>[];

let opened: { [x: number]: boolean } = {};

const onDescriptionButtonClick = (index: number) => {
    if (opened[index]) {
        opened = {
            ...opened,
            [index]: !opened[index],
        };
    } else {
        opened = {
            ...opened,
            [index]: true,
        };
    }
};
</script>

<div class="card">
    <span class="card-parameter-type">{type}</span>
    {#each params as param, index}
        <div class="parameter">
            <div class="parameter-body">
                <div class="header">
                    <span class="parameter-name">{param.name}</span>
                    :
                    <span
                        class="parameter-datatype"
                    >{param.modelType.toLowerCase()}</span>
                    <span class="parameter-value">
                        {#if param.defaultValue}
                            {param.defaultValue}
                        {:else}No default value{/if}
                    </span>
                </div>
                <div
                    class="description-button"
                    on:click="{() => onDescriptionButtonClick(index)}"
                >
                    Description
                    <img
                        src="{arrowIcon}"
                        class="description-icon"
                        class:isOpen="{opened[index]}"
                        alt="description icon"
                    />
                </div>
            </div>
            <div class="description" class:visible="{opened[index]}">
                <div class="option">
                    <span>optional:</span>
                    {param.optional}
                </div>
                <div class="option">
                    <span>deprecated:</span>
                    {!!param.deprecated}
                </div>
            </div>
        </div>
    {/each}
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
    display: flex;
    align-items: center;

    color: var(--main-gray);
}

.description-icon {
    transition: transform 0.2s;
}

.isOpen {
    transform: rotate(180deg);
}

.description {
    display: none;

    margin-top: var(--S-margin);
    margin-left: var(--L-margin);
}

.option {
    margin-top: var(--XS-margin);
}

.option > span {
    color: var(--main-gray);
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
    margin-left: var(--XS-margin);

    color: var(--main-yellow);
}

.parameter-value {
    margin-left: var(--XS-margin);
    text-decoration: underline;
}
</style>
