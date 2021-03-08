class LoginElements {
    formLogin = () => {
        return '#kc-form-login';
    }

    inputUsuario = () => {
        return '[data-test="keycloak-login-username"]';
    }

    inputSenha = () => {
        return '[data-test="keycloak-login-password"]';
    }

    buttonEntrar = () => {
        return '[data-test="keycloak-login-btn-login"]';
    }

    buttonAvatar = () => {
        return '[data-testid="avatar-button"]';
    }

    labelMensagemLoginInvalido = () => {
        return '[id="container-message"]';
    }

    formUsuario = () => {
        return '[data-testid="sidebar-user"]';
    }

    buttonSair = () => {
        return '[data-testid="btn_logout"]';
    }

    labelNomeUsuario = () => {
        return '[data-testid="name-sidebaruser"]';
    }

    labelNomeCargo = () => {
        return '[data-testid="jobrole-sidebaruser"]';
    }

    comboLotacao = () => {
        return '[data-testid="sidebar-user-lotacao"] > div > div';
    }

    inputComboLotacao = () => {
        return '//*[@data-testid="sidebar-user-lotacao"]//input[contains(@id, "select")]';
    }

    buttonFecharMenuUsuario = () => {
        return '[data-testid="user-panel"] [aria-label="Fechar"]';
    }

    formUser = () => {
        return '[data-testid="user-panel"]';
    }
}

export const loginElements = new LoginElements();