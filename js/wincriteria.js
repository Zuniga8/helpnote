var inicio = {}

inicio = {
    //  anunciante atendeu a ligação
    'sim': 'prossita com o caso normalmente.',
    'não': 'valide se o rank da conta do cliente, se for de nivel bronze, o caso pode ser encerrado, sem seguir 2dayRule'
}

const call_started = {} 

export const task = {
    tipo: 'escolha',
    titulo: 'Escolha uma das Tarefas a seguir: ',
    steps: [{
        step: 'Ads Conversion Code',
        tipo: 'escolha',
        titulo: 'Escolha o passo a passo que deseja seguir: ',
        steps: [
            {
                step: 'Validar ID ADS',
                tipo: 'questão',
                titulo: 'O id da conta informada pelo anunciante , é a mesma solicitada pelo AM',
                steps: [{
                    step: 'Sim',
                    tipo: 'finish',
                    titulo: 'Prossiga com os demais passos para a  implementação'
                }, {
                    step: 'Não',
                    tipo: 'finish',
                    titulo: 'É necessario entrar em contato com o AM para validar o ID da conta de ADS, e se podemos seguir com a implementação solicitada' +
                        'Tambem é necessario tirar print da convesa que teve com o AM,' +
                        'Se caso o AM não responder durante 10 min, pode prosseguir com a implementação',
                    print: 'print_validar_id_ADS_não'
                }]

            }, {
                step: 'Validar conversões solicitadas',
                tipo: 'questão',
                titulo: 'As conversões solicitadas estão criadas ?',
                steps: [{
                    step: 'Sim',
                    tipo: 'finish',
                    titulo: 'Verifique se as mesmas estão criadas corretamente, se for necessario faça a correção.' +
                        'Verificar pontos importantes :'
                }, {
                    step: 'Não',
                    tipo: 'finish',
                    titulo: 'Faça a crianção das conversões de acordo com o que foi solicitado pelo AM' +
                        'É importante que o Modelo de Atribuição seja o mesmo que o anunciante solicitou',
                    print: 'print_Validar_conversões_solicitadas_não'
                }]
            }, {
                step: 'Validar implementação',
                tipo: 'questão',
                titulo: 'Validar como sera feito a implementação',
                steps: [{
                    step: 'Pagina ja possui GTM implementado',
                    tipo: 'finish',
                    titulo: 'Verifique se as mesmas estão criadas corretamente, se for necessario faça a correção.' +
                        'Faça a implementação de acordo com o que foi ',
                    print: 'print_das_conversões_não'
                }, {
                    step: 'Pagina ja foi implementada por Gtag',
                    tipo: 'finish',
                    titulo: 'Faça a crianção das conversões de acordo com o que foi solicitado pelo AM. ' +
                        'É importante que o Modelo de Atribuição seja o mesmo que o anunciante solicitou',
                    print: 'print_das_conversões_Gtag'
                }, {
                    step: 'Pagina não possui nenhuma tag instalada, GMT ou Gtag',
                    tipo: 'finish',
                    titulo: 'faça a implementação a sua escolha, seja por GTM ou por Gtag',
                    print: 'print_das_conversões'
                }]
            }]
    }, {
        step: 'Enhanced Conversion Code',
        tipo: 'escolha',
        titulo: ' Escolha o passo a passo que deseja seguir: ',
    }]
}



