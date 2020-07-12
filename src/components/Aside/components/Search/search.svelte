<script>
    import hint from './icons/hint.svg';
</script>

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

<div class="search">
    <input placeholder="Search..." class="search-input" type="text" />
    <img class="search-hint" src={hint} alt="help" />
</div>
