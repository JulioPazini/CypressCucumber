/// <reference types="Cypress" />
import { loginElements } from '../elements/Login.elements.js';
import consultaLotacaoPadraoUsuario from '../data/Login.js';
import * as systemMessages from '../constants/SystemMessages.constant.js';

const url = Cypress.config("baseUrl");

class LoginPage {
    // Acessa o site que será testado
    open() {
        cy.visit(url)
    }

    preencherUsuario(usuario) {
        if (cy.get(loginElements.formLogin(), {
                timeout: 40000
            })) {
            cy.get(loginElements.inputUsuario()).type(usuario.login);
        }
    }

    preencherSenha(usuario) {
        if (cy.get(loginElements.formLogin(), {
                timeout: 40000
            })) {
            cy.get(loginElements.inputSenha()).type(usuario.senha);
        }
    }

    efetuarLogin() {
        cy.get(loginElements.buttonEntrar()).click();
    }

    verificarUsuarioLogado(usuario) {
        cy.get(loginElements.buttonAvatar()).click().should('contain', usuario.iniciais);
    }

    verificarTelaLogin() {
        cy.get(loginElements.formLogin()).should('be.visible', 'Tela de login deveria estar sendo apresentada');
    }

    verificarMensagemLogin() {
        cy.get(loginElements.labelMensagemLoginInvalido()).should('contain', systemMessages.LOGIN_INVALIDO);
    }

    acessarMenuUsuario() {
        cy.get(loginElements.buttonAvatar()).click();
        cy.get(loginElements.formUsuario(), {
            timeout: 40000
        });
    }

    efetuarLogoff() {
        if (cy.get(loginElements.formUser()) === false) {
            cy.get(loginElements.buttonAvatar()).click();
            cy.get(loginElements.buttonSair()).click();

        } else {
            cy.get(loginElements.buttonSair()).click();
        }
        cy.get(loginElements.formLogin()).should('be.visible');
    }

    login(usuario) {
        if (cy.get(loginElements.formLogin(), {
            timeout: 40000
        })) {
            this.preencherUsuario(usuario);
            this.preencherSenha(usuario);
            this.efetuarLogin();
        }
    }

    validarNomeUsuarioVisivel(nomeUsuarioEsperado) {
        cy
        .get(loginElements.labelNomeUsuario())
        .should('contain', nomeUsuarioEsperado, 'O nome do usuário em exibição não esta de acordo com o esperado.');
    }

    validarNomeCargoVisivel(cargoEsperado) {
        cy
        .get(loginElements.labelNomeCargo())
        .should('contain', cargoEsperado, 'O nome do usuário em exibição não esta de acordo com o esperado.');
    }

    async validarLotacaoPadraoSetada(usuario) {
        const retornoConsultaBD = await this.pegarNomeLotacaoPadrao(usuario);
        cy
        .get(loginElements.comboLotacao())
        .should('contain', retornoConsultaBD, 'A lotação setada não é a lotação padrão do usuário.');
    }

    async pegarNomeLotacaoPadrao(usuario) {
        const retornoConsulta = await consultaLotacaoPadraoUsuario(usuario);
        return retornoConsulta;
    }
}

export const loginPage = new LoginPage();