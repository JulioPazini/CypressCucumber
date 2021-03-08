/* global Given, Then, When */

import {
    Given,
    Then,
    When
} from 'cypress-cucumber-preprocessor/steps';
import { loginPage } from '../pages/Login.page.js';
import { context } from '../../fixtures/Context.js';

Given(/^que esteja na URL da Promotoria Criminal$/, () => {
    loginPage.open();
});

Given(/^esteja logado na Promotoria Criminal$/, () => {
    loginPage.open();
    loginPage.login(context.logins.LoginDadosPromotor);
});

When(/^informar um usuário válido$/, () => {
    loginPage.preencherUsuario(context.logins.LoginDadosPromotor);
});

When(/^informar um usuário inválido$/, () => {
    loginPage.preencherUsuario(context.logins.LoginUsuarioInvalido);
});

When(/^uma senha válida$/, () => {
    loginPage.preencherSenha(context.logins.LoginDadosPromotor);
    loginPage.efetuarLogin();
});

When(/^uma senha inválida$/, () => {
    loginPage.preencherSenha(context.logins.LoginSenhaInvalida);
    loginPage.efetuarLogin();
});

When(/^clicar no botão "Entrar", sem informar usuario e senha$/, () => {
    loginPage.efetuarLogin();
});

When(/^acessar o ícone contendo as informações do usuário no canto superior direito$/, () => {
    loginPage.acessarMenuUsuario();
});

Then(/^deve ser realizada a autenticação no sistema$/, () => {
    loginPage.verificarUsuarioLogado(context.logins.LoginDadosPromotor);
});

Then(/^deve ser efetuado o logoff$/, () => {
    loginPage.efetuarLogoff();
});

Then(/^não deve ser realizada a autenticação no sistema$/, () => {
    loginPage.verificarTelaLogin();
});

Then(/^uma mensagem informativa "Usuário ou senha inválida"$/, () => {
    loginPage.verificarMensagemLogin();
});

Then(/^deve conter o nome do usuário logado$/, () => {
    loginPage.validarNomeUsuarioVisivel(context.logins.LoginDadosPromotor.nome);
});

Then(/^deve conter o cargo do usuário logado$/, () => {
    loginPage.validarNomeCargoVisivel(context.logins.LoginDadosPromotor.cargo);
});

Then(/^por padrão a lotação a qual o usuário está logado$/, () => {
    loginPage.validarLotacaoPadraoSetada(context.logins.LoginDadosPromotor.login);
});