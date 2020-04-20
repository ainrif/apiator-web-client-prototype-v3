<script>
    import Header from './components/Header/header.svelte';
    import Aside from './components/Aside/aside.svelte';
    import Workspace from './components/Workspace/workspace.svelte';

    const name = 'apiator web client v3';
</script>

<style>
    :global(body) {
        min-height: 100vh;
        margin: 0 0;
        --workspace-bg-color: #22262a;
        --blocks-bg-color: #161a1d;
        --main-gray: #778188;
        --main-white: #c7cdd2;
        --main-red: #e77e7f;
        --main-orange: #e0a680;
        --main-cyan: #0e8181;
        --main-green: #55a574;
        --main-blue: #a6bfd9;
        --font-size: 14px;

        background-color: var(--workspace-bg-color);
    }

    .content {
        display: grid;
        grid-template-columns: 325px auto;
    }
</style>

<div class="content">
    <div class="sidebar">
        <Header version="0.42" />
        <Aside />
    </div>

    <Workspace />
</div>
