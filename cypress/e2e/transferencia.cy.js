describe('Transferencias', () => {
    beforeEach(() => {
         cy.visit('/')
         cy.fazerLoginComCredenciaisValidas()   
    })

    it('Deve transferir quando informo dados e valores validos', () => {
            // Act = Agir/Ação
            cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '11')

            // Assert = Afirmação
            cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
            // Act = Agir/Ação
            cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '6000')

            // Assert = Afirmação
            cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})