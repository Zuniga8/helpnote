
export const scriptProntos = [
    {
        'indice': '2 Day Rule - dia 1',
        'substatus': 6,
        'Reason/Comments': '2DR - dia 1 ',
        'oncall': '' +
            '- Foram feitas 2 tentativas de contato via telefone, porem sem sucesso, \n' +
            '- Foi enviado e-mail de tentativa de contato e aguardei 10 min na meeting,\n' +
            '- Fiz uma nova tentativa de contato, mas não tive retorno, \n' +
            '- Iniciando o acompanhamento 2 Day Rule, \n' +
            '- farei uma nova tentativa de contato no próximo dia util.\n'
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
        'indice': 'Reagendamento - não houve resposta do anunciante ',
        'substatus': 9,
        'Reason/Comments': 'Reagendado - anunciante não responde',
        'oncall': "" +
            '- Foram feitas 2 tentativas de contato via telefone, porem sem sucesso, \n' +
            '- Foi enviado email de tentativa de contato e aguardei 10 min na meeting,\n' +
            '- Fiz uma nova tentativa de contato, mas não tive retorno, \n' +
            "- devido ao caso ja ter sido reagendado e que não obtivemos resposta do anunciante, o mesmo sera encerrado. \n"
    },
    {
        'indice': 'Reagendamento - exceção',
        'substatus': 1,
        'Reason/Comments': 'Reagendamento aceito como exceção',
        'oncall': "" +
            "- Feito o contato com o anunciante, \n" +
            "- informou que teve um imprevisto, XXXXXX , e não poderá entrar na reunião, e solicitou reagendar,\n" +
            "- caso reagendado como exceção para o dia XX/XX as HH/MM .\n" +
            "- Anunciante ciente que o caso foi reagendado como exceção e que se não estiver disponível no dia, o caso sera encerrado.\n"
    },
    {
        'indice': 'Reagendamento - Sem resposta ',
        'substatus': 9,
        'Reason/Comments': 'Reagendado',
        'oncall': "" +
            "- Feito o contato com o anunciante, \n" +
            "- Ciente que o caso ja havia sido reagendado, o mesmo solicita que o caso seja reagendado novamente\n" +
            "- Explico ao anunciante que Seguindo nosso processo de agendamento, infelizmente o caso já ultrapassou o número de reagendamento permitido, e sera necessário inativar o caso .\n" +
            "- Oriento ao anunciante que quando esteja pronto para tratar a implementação solicitada, faça a abertura de um novo caso . \n"
    },
    {
        'indice': 'Reagendado - via email',
        'substatus': 1,
        'Reason/Comments': 'Reagendado via Email    ',
        'oncall': "" +
            "- anunciante informa por email que não vai estar disponível para a ligação devido a um imprevisto, e solicita reagendar o caso,\n " +
            "- caso reagendado para o dia DD/MM - HH PM"
    },

    {
        'indice': 'Reagendado - resposta via email',
        'substatus': 1,
        'Reason/Comments': 'Reagendado via Email',
        'oncall': "" +
            "- Anunciante responde via email informando a data e hora escolhida \n" +
            "- caso reagendado como exceção para o dia XX/XX as HH/MM .\n"
    },

    {
        'indice': 'Inative - Anunciante não esta interessado ',
        'substatus': 10,
        'Reason/Comments': 'Anunciante não esta interessado',
        'oncall': "" +
            "- Em contato com anunciante , \n" +
            "- Anunciante informa que não esta interessado na implementação, e o mesmo esta de acordo com o fechamento do caso . \n" +
            "- Devido a esta resposta, o caso sera encerrado. \n"
    },
    //
    {
        'indice': 'Inactive Technically Unfeasible',
        'substatus': 8,
        'Reason/Comments': 'Technically Unfeasible',
        'oncall': "" +
            "- Após análise mais aprofundada sobre o caso, foi visto que a tarefa solicitada pelo gerente de contas não é possível de ser implementada porque =>insira_o_porquê<=.  , \n" +
            "- Todas as opções disponíveis foram verificadas , \n" +
            "- Também foi verificado com um SME, mas é realmente não sera possível realizar a implementação. , \n"
    },
    //          Script por Tasks - inclui GTM e Gtag
    {
        'indice': 'ADS Conversion Tracking - Gtag',
        'substatus': 16,
        'Reason/Comments': 'Solicitação implementadas',
        'oncall': "" +
            "Em contato com anunciante, \n" +
            "- validamos a solicitação feita no Caso, \n" +
            "- No Google ADS, criamos a conversão solicitadas, com o modelo de atribuição 'XXX', \n" +
            "- Anunciante informa que possui Backup da pagina, \n" +
            "- Oriento ao anunciante como adicionar o código do Google ADS e das conversões no código fonte da pagina,  \n" +
            "- Validamos com Tag Assistant, o funcionamento das tags, e testamos as ações de conversão na página web, e vimos que todas estão funcionando corretamente, \n" +
            "- no Google ADS, o status da conversão mudou para 'no recent conversion', \n" +
            "- consultei o anunciante e diz não ter dúvidas sobre o implementação feita, \n" +
            "- informo ao anunciante que de acordo com todos os testes realizados no Tag Assistant, podemos dar por concluído o caso, ja que todas as conversões implementadas estão funcionando, portanto o caso sera encerrado.  "
    },
    {
        'indice': 'ADS Conversion Tracking - GTM',
        'substatus': 16,
        'Reason/Comments': 'Solicitação implementadas',
        'oncall': "" +
            "Em contato com anunciante, \n" +
            "- validamos a solicitação feita no Caso, \n" +
            "- No Google ADS, criamos a conversão solicitadas, com o modelo de atribuição 'XXX', \n" +
            "- Anunciante informa que possui Backup da pagina, \n" +
            "- Na pagina, oriento ao anunciante como implementar o GTM, \n" +
            "- no GTM, criamos as tags referente as conversões do Google ADS,  \n" +
            "- Validamos com Tag Assistant, o funcionamento das tags, e testamos as ações de conversão na página web, e vimos que todas estão funcionando corretamente, \n" +
            "- no Google ADS, o status da conversão mudou para 'no recent conversion', \n" +
            "- consultei o anunciante e diz não ter dúvidas sobre o implementação feita, \n" +
            "- informo ao anunciante que de acordo com todos os testes realizados no Tag Assistant, podemos dar por concluído o caso, ja que todas as conversões implementadas estão funcionando, portanto o caso sera encerrado.  "
    },
    {
        'indice': 'ADS Enhanced Conversion - Gtag',
        'substatus': 5,
        'Reason/Comments': 'Aguardando conversões/impressões',
        'oncall': "" +
            "- validamos a solicitação feita no Caso, \n" +
            "- No Google ADS, criamos a conversão solicitadas, com o modelo de atribuição 'XXX', e também habilitamos o EC na conversão XXX , \n" +
            "- Anunciante informa que possui Backup da pagina, \n" +
            "- Oriento ao anunciante como adicionar o código do Google ADS e das conversões no código fonte da pagina, \n" +
            "- No Tag Assistant, testamos as ações de conversão na página web, e vimos que todas estão funcionando corretamente e a EC esta registrando os dados , \n" +
            "- No Google ADS, o status da conversão mudou para 'no recent conversion', \n" +
            "- Consultei o anunciante e diz não ter dúvidas sobre implementação feita, \n" +
            "- Informo ao anunciante que iremos acompanhar a conta do Google ADS por 2 dias para ver se está gerando conversões/impressões e que assim que tudo estiver bem em termos de conversões, o caso será encerrado."
    },
    {
        'indice': 'ADS Enhanced Conversion - GTM',
        'substatus': 5,
        'Reason/Comments': 'Aguardando conversões/impressões',
        'oncall': "" +
            "- validamos a solicitação feita no Caso, \n" +
            "- No Google ADS, criamos a conversão solicitadas, com o modelo de atribuição 'XXX', e também habilitamos o EC na conversão XXX , \n" +
            "- Anunciante informa que possui Backup da pagina, \n" +
            "- No GTM, criamos as Tags Referente as conversões do Google ADS , \n" +
            "- No Tag Assistant, testamos as ações de conversão na página web, e vimos que todas estão funcionando corretamente e a EC esta registrando os dados corretamente, \n" +
            "- No Google ADS, o status da conversão mudou para 'no recent conversion', \n" +
            "- Consultei o anunciante e diz não ter dúvidas sobre implementação feita, \n" +
            "- Informo ao anunciante que iremos acompanhar a conta do Google ADS por 2 dias para ver se está gerando conversões/impressões e que assim que tudo estiver bem em termos de conversões, o caso será encerrado."
    },
    {
        'indice': 'NRP - closed case',
        'substatus': 9,
        'Reason/Comments': 'NRP - No response from advertiser',
        'oncall': "" +
            '- Foram feitas 2 tentativas de contato via telefone, porem sem sucesso, \n' +
            '- Foi enviado email de tentativa de contato e aguardei 10 min na meeting,\n' +
            '- Fiz uma nova tentativa de contato, mas não tive retorno, \n' +
            '- Seguindo as regras de NPR, o caso sera encerrado'
    },
    {
        'indice': '3/9 - dia 1 / 3 / 6',
        'substatus': 3,
        'Reason/Comments': '3/9 - dia ',
        'oncall': "" +
            '- Feito contato com anunciante , \n' +
            '- ...informar o que anunciante disse , \n' +
            '- Informo ao anunciante que faremos um seguimento de 9 dias, onde a cada 3 dias vou entrar em contato para verificar se o que estava pendente foi realizado, \n'

    },
    {
        'indice': '3/9 - no response',
        'substatus': 3,
        'Reason/Comments': '3/9 - dia',
        'oncall': "" +
            "- Feito tentativa de contato com anunciante , sem exito , \n" +
            "- Feito verificação, e ação pendente ainda não foi realizada , \n" +
            "- ... descrever o que esta pendente .... , \n" +
            "- Vou enviar um email ao anunciante informando a tentativa de contato, e fazer uma nova tentativa em 3 dias uteis , \n"
    },
    {
        'indice': 'Fechamento de caso',
        'substatus': 16,
        'Reason/Comments': 'Registrando conversões/impressões',
        'oncall': "" +
            "- Feito Verificação , \n" +
            "- no Ads, houve registro de conversão e a aba diagnostico foi alterada para Recording conversion , \n" +
            "- no Dashboard EC, houve registro de hits e não foi detectado nenhum erro , \n" +
            "- no Tag assistant, foi feito testes, e visto que as conversões/Tags, estão ativando corretamente , \n" +
            "- De acordo com as verificações feitas, o caso sera encerrado , \n"
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
    "AS - Reschedule 1 (ts as resched1)",
    "AS - Acceptable Reschedule (ts as reschedok)",
    "NI - Awaiting Inputs (ts ni ai)",
    "NI - In Consult (ts ni ic)",
    "NI - Awaiting Validation (ts ni av)",
    "NI - Attempted Contact (ts ni ac)",
    "IN - Infeasible (ts in inf)",
    "IN - Not Reachable (ts in nrch)",
    "IN - Not Interested (ts in ni)",
    "IN - Not Ready (ts in nrdy)",
    "IN - Out of Scope - Rerouted to Internal Team (ts in oost)",
    "IN - Out of Scope - Unable to Transfer (ts in oosu)",
    "IN - Out of Scope - Email to Seller (ts in oos seller)",
    "IN - Troubleshooting [Transferred] ",
    "IN - Reschedule Limit Exceeded",
    "SO - Implementation Only (ts so verif)",
    "SO - Verified No Recent Conversion (ts so verif nrc)",
    "SO - Unverified (ts so unv)",
    "SO - Education Only (lg so oth)",
    "SO - Troubleshooting Only (lg so oth)"

]

