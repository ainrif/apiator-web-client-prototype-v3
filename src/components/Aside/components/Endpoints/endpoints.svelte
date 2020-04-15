<script>
    export let endpoints;
</script>

<div class="endpoints">
    <span>ENDPOINTS</span>

    <ul class="ednpoints-list">
        {#each endpoints as endpoint}
            <li class="endpoint-item">
                <span class="endpoint-title">{endpoint.apiPath}</span>
                <ul class="endpoint-methods">
                    {#each endpoint.apiEndpoints as method}
                        <li class="endpoint-method">{method.method}</li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</div>
