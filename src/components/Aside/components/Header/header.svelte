<script>
    import logo from './logo.svg';
    import menu from './menu.svg';
</script>

<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 18px 0;
    }

    .header-logo-container {
        display: flex;
        align-items: center;
    }

    .header-title {
        align-self: center;
        font-size: 18px;
        color: var(--main-white);
        margin: 0 0 0 12px;
    }

    .header-logo {
        width: 28px;
        height: 28px;
        margin-left: 12px;
    }

    .header-menu {
        width: 13px;
        height: 10px;
        margin: 0 12px 0 0;
        cursor: pointer;
    }
</style>

<header class="header">
    <div class="header-logo-container">
        <img class="header-logo" src={logo} alt="logotype" />
        <h1 class="header-title">Apiator</h1>
    </div>

    <img class="header-menu" src={menu} alt="menu" />
</header>
