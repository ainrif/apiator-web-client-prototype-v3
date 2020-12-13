<script>
import Header from './components/Header/header.svelte';
import Search from './components/Search/search.svelte';
import Endpoints from './components/Endpoints/endpoints.svelte';
</script>

<aside class="aside">
    <Header />
    <Search />

    <div class="section">
        <span class="section-title">ENDPOINTS</span>
        <Endpoints />
    </div>
    <div class="section"><span class="section-title">Model</span></div>
</aside>

<style>
.aside {
    min-height: 100vh;

    background-color: var(--blocks-bg-color);
    font-size: var(--font-size);
    border-right: 1px solid var(--border-color);
}

.section {
    margin-top: var(--L-margin);
    margin-left: var(--L-margin);
}

.section-title {
    color: var(--main-gray);
    font-weight: bold;
}
</style>
