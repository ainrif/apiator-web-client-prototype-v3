<script>
import { updateEndpoints } from '../../../../repository';

// @ts-ignore
import hint from './icons/hint.svg';

let searchValue = '';

$: (function (value) {
    updateEndpoints((endpointsStore) => {
        const result = [];

        for (const { apiEndpoints, apiPath, name } of endpointsStore) {
            const filteredApiEndpoints = apiEndpoints.filter((endpoint) => {
                return endpoint.path.search(value) !== -1 ? endpoint : false;
            });

            if (filteredApiEndpoints.length > 0) {
                result.push({
                    apiPath,
                    name,
                    apiEndpoints: filteredApiEndpoints,
                });
            }
        }

        return result;
    });
})(searchValue);
</script>

<div class="search">
    <input
        bind:value="{searchValue}"
        placeholder="Search..."
        class="search-input"
        type="text"
    />
    <img class="search-hint" src="{hint}" alt="help" />
</div>

<style>
.search {
    position: relative;
}

.search-input {
    text-indent: 12px;
    height: 35px;
    width: 100%;
    border-width: 0px;
    padding: 0;
    margin: 0;
    background: #424d57;

    outline: none;
    caret-color: var(--main-white);
    color: var(--main-white);
}

.search-input::value {
    padding-left: 12px;
}

.search-hint {
    position: absolute;
    top: 50%;
    right: 9px;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;

    cursor: pointer;
}
</style>
