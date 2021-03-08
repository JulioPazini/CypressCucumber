Feature: Realizar login virtual na aplicação

    Background:
        Given que esteja na URL da Promotoria Criminal

    Scenario: Realizar login na Promotoria Criminal com dados válidos
        When informar um usuário válido
        And uma senha válida
        Then deve ser realizada a autenticação no sistema
        And deve ser efetuado o logoff

    Scenario: Realizar login na Promotoria Criminal com usuário inválido
        When informar um usuário inválido
        And uma senha válida
        Then não deve ser realizada a autenticação no sistema
        And uma mensagem informativa "Usuário ou senha inválida"

    Scenario: Realizar login na Promotoria Criminal com senha inválida
        When informar um usuário válido
        And uma senha inválida
        Then não deve ser realizada a autenticação no sistema
        And uma mensagem informativa "Usuário ou senha inválida"

    Scenario: Realizar login na Promotoria Criminal sem informar usuário e senha
        When clicar no botão "Entrar", sem informar usuario e senha
        Then não deve ser realizada a autenticação no sistema
        And uma mensagem informativa "Usuário ou senha inválida"

# Scenario: Visualizar informações do usuário logado
#     Given esteja logado na Promotoria Criminal
#     When acessar o ícone contendo as informações do usuário no canto superior direito
#     Then deve conter o nome do usuário logado
#     And deve conter o cargo do usuário logado
#     And por padrão a lotação a qual o usuário está logado

# Scenario: Visualizar lista de lotação
#     Given esteja logado na Promotoria Criminal
#     When acessar o ícone contendo as informações do usuário no canto superior direito
#     And clicar no combobox das lotações
#     Then deve ser listado todas as lotações

# Scenario: Alterar de lotação
#     Given esteja logado na Promotoria Criminal
#     When acessar o ícone contendo as informações do usuário no canto superior direito
#     And listar as lotações disponíveis
#     And selecionar uma lotação
#     Then deve ser direcionado para o painel de tarefas da lotação selecionada