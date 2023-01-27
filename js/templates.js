
export const scriptProntos = [
    {
        'indice': '2 Day Rule - dia 1',
        'substatus': 6,
        'Reason/Comments': '2DR - dia 1 ',
        'oncall': '' +
            '- Foram feitas 2 tentativas de contato via telefone, porem sem sucesso, \n' +
            '- Foi enviado email de tentativa de contato e aguardei 10 min na meeting,\n' +
            '- Fiz uma nova tentativa de contato, mas não tive retorno, \n' +
            '- Inicianteo o acompanhamento 2 Day Rule, \n' +
            '- farei uma nova tentativa de contato no proximo dia util.\n'
    },
    {
        'indice': '2 Day Rule - dia 2 closed',
        'substatus': 9,
        'Reason/Comments': '2DR - dia 2 ',
        'oncall': "" +
            "- Não houve resposta do anunciante via email  ,\n" +
            '- Foram feitas 2 tentativas de contato via telefone, porem sem sucesso, \n' +
            "- Anunciante não respondeu as tentativas de contato feito por telefone e por email, portanto, o caso sera encerrado.\n"
    },
    {
        'indice': '2 Day Rule - dia 2 Reagendamento',
        'substatus': 1,
        'Reason/Comments': '2DR - reagendado',
        'oncall': "" +
            "- Feito o contato com o anunciante, \n" +
            "- informou que teve um imprevisto e não poderá entrar na reunião, e solicitou reagendar,\n" +
            "- caso reagendado para o dia XX/XX as HH/MM .\n"
    },
    {
        'indice': 'Reagendamento',
        'substatus': 1,
        'Reason/Comments': 'Reagendado',
        'oncall': "" +
            "- Feito o contato com o anunciante, \n" +
            "- informou que teve um imprevisto e não poderá entrar na reunião, e solicitou reagendar,\n" +
            "- caso reagendado para o dia XX/XX as HH/MM .\n"
    },
    {
        'indice': 'Reagendamento - exceção',
        'substatus': 1,
        'Reason/Comments': 'Reagendamento aceito como exceção',
        'oncall': "" +
            "- Feito o contato com o anunciante, \n" +
            "- informou que teve um imprevisto, XXXXXX , e não poderá entrar na reunião, e solicitou reagendar,\n" +
            "- caso reagendado como exceção para o dia XX/XX as HH/MM .\n" +
            "- Anunciante ciente que o caso foi reagendado como exceção e que se não estiver disponivel no dia, o caso sera encerrado.\n"
    },
    {
        'indice': 'Reagendamento - Sem resposta ',
        'substatus': 9,
        'Reason/Comments': 'Reagendado',
        'oncall': "" +
            "- Feito o contato com o anunciante, \n" +
            "- Ciente que o caso ja havia sido reagendado, o mesmo solicita que o caso seja reagendado novamente\n" +
            "- Explico ao anunciante que Seguindo nosso processo de agendamento, infelizmente o caso já ultrapassou o número de reagendamento permitido, e sera necessario inativar o caso .\n" +
            "- Oriento ao anunciante que quando esteja pronto para tratar a implementação solicitada, faça a abertura de um novo caso . \n"
    },
    {
        'indice': 'Reagendado - via email',
        'substatus': 1,
        'Reason/Comments': 'Reagendado via Email    ',
        'oncall': "" +
            "- anunciante informa por email que não estara disponivel para a ligação devido a um imprevisto, e solicita reagendar o caso,\n " +
            "- caso reagendado para o dia DD/MM - HH PM"
    },

    {
        'indice': 'Reagendado - resposta via email',
        'substatus': 1,
        'Reason/Comments': 'Reagendado via Email',
        'oncall': "" +
            "- Anunciante responde via email informando a data e hora escolida \n" +
            "- caso reagendado como exceção para o dia XX/XX as HH/MM .\n"
    },

    {
        'indice': 'Inative - Anunciante não esta interesado ',
        'substatus': 10,
        'Reason/Comments': 'Anunciante não esta interesado',
        'oncall': "" +
            "- Em contato com anunciante , \n" +
            "- Anunciante informa não estar interesado na implementação, e o mesmo esta de acordo com o fechamento do caso . \n" +
            "- Devido a esta resposta, o caso sera encerrado. \n"
    },
    //
    {
        'indice': 'Inactive Technically Unfeasible',
        'substatus': 8,
        'Reason/Comments': 'Technically Unfeasible',
        'oncall': "" +
            "- Após análise mais aprofundada sobre o caso, foi visto que a tarefa solicitada pelo gerente de contas não é possível de ser implementada porque =>insira_o_porquê<=.  , \n" +
            "- Todas as opções disponiveis foram verificadas , \n" +
            "- Tambem foi verificado com um SME, mas é realmente não sera possivel realizar a implementação. , \n"
    },
    //          Script por Tasks - inclui GTM e Gtag
    {
        'indice': 'ADS Conversion Tracking - Gtag',
        'substatus': 16,
        'Reason/Comments': 'Solicitação implementadas',
        'oncall': "" +
            "Em contato com anunciante, \n" +
            "- validamos a solicitação feita no Caso, \n" +
            "- No google ADS, criamos a conversão solicitadas, com o modelo de atribuição 'XXX', \n" +
            "- Anunciante informa que possui Backup da pagina, \n" +
            "- Oriento ao anunciante como adicionar o codigo do google ADS e das conversões no codigo fonte da pagina,  \n" +
            "- Validamos com Tag Assistant, o funcionamento das tags, e testamos as ações de conversão na página web, e vimos que todas estão funcionando corretamente, \n" +
            "- no google ADS, o status da conversão mudou para 'no recent conversion', \n" +
            "- consultei o anunciante e diz não ter dúvidas sobre oimplementação feita, \n" +
            "- informo ao anunciante que de acordo com todos os testes realizados no Tag Assistant, podemos dar por concluido o caso, ja que todas as conversões implementadas estão funcionando, portanto o caso sera encerrado.  "
    },
    {
        'indice': 'ADS Conversion Tracking - GTM',
        'substatus': 16,
        'Reason/Comments': 'Solicitação implementadas',
        'oncall': "" +
            "Em contato com anunciante, \n" +
            "- validamos a solicitação feita no Caso, \n" +
            "- No google ADS, criamos a conversão solicitadas, com o modelo de atribuição 'XXX', \n" +
            "- Anunciante informa que possui Backup da pagina, \n" +
            "- Na pagina, oriento ao anunciante como implementar o GTM, \n" +
            "- no GTM, creamos as tags referente as conversões do google ADS,  \n" +
            "- Validamos com Tag Assistant, o funcionamento das tags, e testamos as ações de conversão na página web, e vimos que todas estão funcionando corretamente, \n" +
            "- no google ADS, o status da conversão mudou para 'no recent conversion', \n" +
            "- consultei o anunciante e diz não ter dúvidas sobre oimplementação feita, \n" +
            "- informo ao anunciante que de acordo com todos os testes realizados no Tag Assistant, podemos dar por concluido o caso, ja que todas as conversões implementadas estão funcionando, portanto o caso sera encerrado.  "
    },
    {
        'indice': 'ADS Enhanced Conversion - Gtag',
        'substatus': 5,
        'Reason/Comments': 'Aguardando conversões/impressões',
        'oncall': "" +
            "- validamos a solicitação feita no Caso, \n" +
            "- No google ADS, criamos a conversão solicitadas, com o modelo de atribuição 'XXX', e tambem habilitamos o EC na conversão XXX , \n" +
            "- Anunciante informa que possui Backup da pagina, \n" +
            "- Oriento ao anunciante como adicionar o codigo do google ADS e das conversões no codigo fonte da pagina, \n" +
            "- No Tag Assistant, testamos as ações de conversão na página web, e vimos que todas estão funcionando corretamente e a EC esta registrando os dados , \n" +
            "- No google ADS, o status da conversão mudou para 'no recent conversion', \n" +
            "- Consultei o anunciante e diz não ter dúvidas sobre implementação feita, \n" +
            "- Informo ao anunciante que iremos acompanhar a conta do Google ADS por 2 dias para ver se está gerando conversões/impressões e que assim que tudo estiver bem em termos de conversões, o caso será encerrado."
    },
    {
        'indice': 'ADS Enhanced Conversion - GTM',
        'substatus': 5,
        'Reason/Comments': 'Aguardando conversões/impressões',
        'oncall': "" +
            "- validamos a solicitação feita no Caso, \n" +
            "- No google ADS, criamos a conversão solicitadas, com o modelo de atribuição 'XXX', e tambem habilitamos o EC na conversão XXX , \n" +
            "- Anunciante informa que possui Backup da pagina, \n" +
            "- No GTM, creamos as Tags Referente as conversões do google ADS , \n" +
            "- No Tag Assistant, testamos as ações de conversão na página web, e vimos que todas estão funcionando corretamente e a EC esta registrando os dados corretamente, \n" +
            "- No google ADS, o status da conversão mudou para 'no recent conversion', \n" +
            "- Consultei o anunciante e diz não ter dúvidas sobre implementação feita, \n" +
            "- Informo ao anunciante que iremos acompanhar a conta do Google ADS por 2 dias para ver se está gerando conversões/impressões e que assim que tudo estiver bem em termos de conversões, o caso será encerrado."
    },
    {
        'indice': '',
        'substatus': '',
        'Reason/Comments': '',
        'oncall': "" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n"
    },
    {
        'indice': '',
        'substatus': '',
        'Reason/Comments': '',
        'oncall': "" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n"
    },
    {
        'indice': '',
        'substatus': '',
        'Reason/Comments': '',
        'oncall': "" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n"
    },
    {
        'indice': '',
        'substatus': '',
        'Reason/Comments': '',
        'oncall': "" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n"
    },
    {
        'indice': '',
        'substatus': '',
        'Reason/Comments': '',
        'oncall': "" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n"
    },
    {
        'indice': '',
        'substatus': '',
        'Reason/Comments': '',
        'oncall': "" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n"
    },
    {
        'indice': '',
        'substatus': '',
        'Reason/Comments': '',
        'oncall': "" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n"
    },
    {
        'indice': '',
        'substatus': '',
        'Reason/Comments': '',
        'oncall': "" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n" +
            "-  , \n"
    },
]

export function buscaTemplate(templateStatus) {
    let retornaTemplate = ''

}
export const listBadleads = [
    "BAD LEAD - Wrong contact information",
    "BAD LEAD - Missing contact information",
    "BAD LEAD - Wrong task",
    "BAD LEAD - Client wasn't aware of the appointment",
    "BAD LEAD - Wrong URL",
    "BAD LEAD - URL not provided",
    "BAD LEAD - Wrong client's name",
    "BAD LEAD - Client is not interested",
    "BAD LEAD - No admin access",
    "BAD LEAD - Task without details/instructions",
    "BAD LEAD - Account suspended",
    "BAD LEAD - Wrong CID",
    "BAD LEAD - Solicitation Out of Scope",
    "BAD LEAD - Wrong Language",
    "BAD LEAD - Account manager didn't explain the importance of the service",
    "SPAM - Email Client"
]
export const listSubStatus = [
    "-",
    "AS - Reschedule 1 (ts as resched1)",
    "AS - Acceptable Reschedule (ts as reschedok)",
    "NI - Awaiting Inputs (ts ni ai)",
    "NI - In Consult (ts ni ic)",
    "NI - Awaiting Validation (ts ni av)",
    "NI - Attempted Contact (ts ni ac)",
    "NI - Other (ts ni oth)",
    "IN - Infeasible (ts in inf)",
    "IN - Not Reachable (ts in nrch)",
    "IN - Not Interested (ts in ni)",
    "IN - Not Ready (ts in nrdy)",
    "IN - Out of Scope - Rerouted to Internal Team (ts in oost)",
    "IN - Out of Scope - Unable to Transfer (ts in oosu)",
    "IN - Out of Scope - Email to Seller (ts in oos seller)",
    "IN - Other (ts in oth)",
    "SO - Verified (ts so verif)",
    "SO - Verified No Recent Conversion (ts so verif nrc)",
    "SO - Unverified (ts so unv)",
    "SO - Verification Not Needed (ts so vnn)"
]

/*


<==============================================================>

AS - Reschedule 1 

- Feito o contato com o anunciante, 
- informou que teve um imprevisto e não podera entrar na reunião, e solicitou reagendar ,
- caso reagendado para o dia XX/XX as HH/MM

<==============================================================>

NI - Awaiting Validation

- em contato com anunciante, validamos a solicitação.
- no ADS, implementamos as conversões solicitadas com o modelo de atribuição XXX
- no GTM, implementamos as conversões criadas no google ADS,
- no Tag Assistant, realizamos os testes das conversões implementadas e vimos que estão funcionando corretamente, 
- anunciante informou que não houve duvidas referente a implementação e esta ciente de que todas as tags estão funcionando , 
- ciente de que faremos um acompanhamento de 2 dias na conta de google ADS, para validar se esta registrando impressões/conversões na conta de ADS,


<==============================================================>

NI - Awaiting Inputs

=> sem backup { via Gtag }

- em contato com anunciante, validamos a solicitação,
- no ADS, criamos as conversões referente a solicitação com modelo de atribuição XXX,
- Anunciante informa que não possui acesso ao codigo da pagina / backup pronto, 
- Ciente de que vou le enviar por email o codigo de conversão que sera necessario implementar na pagina, para que o desenvolvedor possa inserir por codigo,
- Ciente de que faremos um acompanhamento de 9 dias, onde a cada 3 dias vou entrar em contato para validar a implementação.
- Ciente de que vou retornar o contato dia XX/XX para seguir validar a implementação,


=> sem backup { via GTM }

- em contato com anunciante, validamos a solicitação,
- no ADS, criamos as conversões referente a solicitação com modelo de atribuição XXX,
- Anunciante informa que não possui acesso ao codigo da pagina / backup pronto, então oriento que usaremos a ferramenta chamada Google Tag Manager para a implementação,
- no GTM, implementamos as conversões criadas no google ADS,
- informo ao anunciante que sera necessario implementar o GTM no CMS da pagina para validar as tags,

- Ciente de que faremos um acompanhamento de 9 dias, onde a cada 3 dias vou entrar em contato para validar a implementação.
- Ciente de que vou retornar o contato dia XX/XX para seguir validar a implementação,

<==============================================================>

SO - Verified

Lembre-se que ele vai ser a continuação do comentário do Need Info - Awaiting Validation
Informe as validações que foram feitas
Informe se houve registro das conversões
Informe que o caso será encerrado
Ex: "A conversão "Clique no Formulário" teve conversões registradas no painel do Google ADs, o Tag Assistant continua disparando a Tag verde/azul. Tudo solicitado pelo AM foi implementado corretamente e temos o registro das conversões, por esse motivo o caso será finalizado"


<==============================================================>


IN - Not Reachable
Informe com detalhes o porque do caso estar sendo finalizado
Ex: "Após o acompanhamento do 2 Day Rule e o anunciante não ter respondido nenhuma das minhas tentativas de contato, tanto por telefone como por email, irei inativar o caso"
*/









