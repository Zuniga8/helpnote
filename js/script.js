import { listSubStatus } from "./templates.js";
import { listBadleads } from './templates.js';
import { scriptProntos } from "./templates.js";
import { task } from "./wincriteria.js";

//      Time
const t = new Date();
const txt_date = t.getDate() + "/" + (t.getMonth() + 1) + "/" + t.getFullYear()

//      Menu Note

let opt = document.querySelectorAll('.opt')
document.querySelector('.optMenu').addEventListener('change', function (ch) {
    document.querySelectorAll('[name="options"]').forEach(function (op, id) {
        //console.log(id + ' = ' + op.value + ' - ' + op.checked)
        if (!opt[id].className.includes('d-none')) {
            opt[id].classList.add('d-none')
        }
        if (op.checked) {
            opt[id].classList.remove('d-none')
        }
    })
})
//      FIM  Menu Note

//          Textarea {
let textEnter = document.querySelectorAll(".txtarea");
textEnter.forEach(function (txt) {
    txt.addEventListener("input", calcTextarea
    );
});
function calcTextarea() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
}
//     } Fim Textarea


//      sub Status
let recebess = ''
listSubStatus.forEach(function (ss) {
    recebess = recebess + "<option>" + ss + "</option>";
})
document.querySelector('#txt_subStatus').innerHTML = recebess
//      Fim sub Status


//      bad Leads

let exibeBadlead = ''
let checkbl = []
listBadleads.forEach(function (bl, n) {
    exibeBadlead = exibeBadlead +
        '<li><input type="checkbox" name="menuopt" id="drop' + n + '" value="' + bl + '"/>' +
        '<label class="open" for="drop' + n + '">' + bl + '</label></li>'
})
document.querySelector('.badLeads').innerHTML = exibeBadlead
document.querySelectorAll('input[name="menuopt"]').forEach(function (blc) {
    blc.addEventListener('click', function () {
        if (blc.checked == true) {
            checkbl.push(blc.value)
        } else if (blc.checked == false) {
            let n = checkbl.indexOf(blc.value)
            checkbl.splice(n, 1)
        }
    })
})
//      Fim badleads


// BTN limpar dados 
document.querySelector('#limparNote').addEventListener('click', function () {
    form.reset();
    document.querySelector(".lbl").innerHTML = "";
    checkbl = [];

    let txt_textarea = document.querySelectorAll('textarea')
    txt_textarea.forEach(function (t) {
        t.style.height = "auto"
        t.style.height = txt_textarea.scrollHeight + "px";
    })

})

// Fim BTN limpar dados

//      btn menu preview
let form = document.querySelector('#formNote')
let preview = document.querySelector('.preview')
document.querySelector('#checkPreview').addEventListener('click', function () {
    if (preview.classList.contains('d-none')) {
        console.log('ok')
        form.classList.toggle('d-none')
        preview.classList.toggle('d-none')
        GerarNote()
    } else {
        form.classList.toggle('d-none')
        preview.classList.toggle('d-none')
    }
})

document.querySelector('#txt_subStatus').addEventListener('change', function (op) {
    document.querySelector('#txt_subStatus').setAttribute('value', op.target.value)
})

//      Gera note
function GerarNote() {
    console.log('click beranote')
    gtag('event', 'click_geranote')
    let imprime = '' + "<p class='pb-0 mb-2 text-break'><span class='fw-bold'>Data </span>" + txt_date + "</p>";
    let x = 0
    let form = document.querySelector('#formNote')
    form.querySelectorAll('div.row > div> label').forEach(function (lbl, id) {
        let registra = ''
        //console.log(id + '- ' + lbl.innerText)
        if (id > 6 && id < 11) {
            registra = "<br>" + form.querySelectorAll('textarea')[id - 7].value.replaceAll("\n", "<br>");
            x += 1
        } else if (id == 12) {
            document.querySelectorAll("[name='menuopt']").forEach(function (opt) {
                if (opt.checked) {
                    registra = registra + '<br>' + opt.value
                    gtag('event', ''+ opt.value +'')
                }
            })
        }
        else {
            registra = form.querySelectorAll('.form-control')[x].value
            x += 1
        }

        imprime = imprime +
            "<p class='pb-0 mb-2 text-break'><span class='fw-bold'>" +
            lbl.innerText +
            '</span>  ' +
            registra +
            "</p>";
    })
    document.querySelector("#notePreview").innerHTML = imprime;
}

//       BTN copia
document.querySelector('#CopiarNote').addEventListener('click', function () {
    if (preview.classList.contains('d-none') && !form.classList.contains('d-none')) {
        gtag('event', 'click_copia')
        form.classList.toggle('d-none')
        preview.classList.toggle('d-none')
        GerarNote()
    }
})
//       FIM BTN copia

//      lista Txt Pronto
{
    let optScript = ''
    scriptProntos.forEach(function (opt) {
        optScript = optScript + '<option value="' + opt.indice + '">'
    })
    document.querySelector('#listaTxtPronto').innerHTML = optScript
}


//      ADD  lista Txt Pronto
document.querySelector('#AddTxtPronto').addEventListener('click', function () {
    let txtPronto = document.querySelector('#txtPronto').value;
    let subStatus = document.querySelector('#txt_subStatus')

    if (txtPronto != '') {
        scriptProntos.forEach(function (item) {
            if (item.indice == txtPronto) {
                subStatus.selectedIndex = item.substatus;                                  // substatus
                document.querySelector('#txt_reason').value = item['Reason/Comments']       //  reason comments
                let txt_textarea = document.querySelector('#txt_oncall')                    // txt oncall
                txt_textarea.value = txt_textarea.value + item.oncall;
                txt_textarea.style.height = "auto"
                txt_textarea.style.height = txt_textarea.scrollHeight + "px";
            }
        })
    }
        gtag('event', ''+ subStatus.value +'')

})//      Fim lista Txt Pronto



//   QA process
let qabox = document.querySelector('.option')
let qaquestion = document.createElement('p')
let question = document.querySelector('.question')
let quest_task = document.querySelectorAll('.optQuestion')
let options = '<div class="optQuestion mx-auto" value="ntipo">OPT</div>' 
var backQuiz = []

//      info task
function quizTask() {
    //console.log('quizTask clicked')
    let receneTask = ''
    question.innerHTML = '<h3>' + task.titulo + '</h3>'
    task.steps.forEach(function (tTask, id) {
        receneTask = receneTask + options.replace('OPT', tTask.step)

    });
    qabox.innerHTML = receneTask
}

function backQuizget(){
    
    var st = []
    document.querySelectorAll('#quizQA > .option >.optQuestion').forEach(function(a){
        st.push({step : a.innerText})
    })
    backQuiz.push({titulo : question.querySelector('h3').innerText , steps : st})
    return backQuiz
}

//          btn Quiz Option
document.addEventListener('click', function (b) {
    
    let Tquiz = pesquisa(b.target.innerText)
    if (b.target.className.includes('optQuestion')) {  
        quizImprime(Tquiz)

        //backQuiz.push(Tquiz)
        
        console.log( 'click opt ')
        console.log(backQuiz)
        
        backQuizget()
    }
    if (b.target.id == 'startQA') {
        document.querySelector('#startQA').classList.add('d-none')
        document.querySelector('#backQA').classList.remove('d-none')
        
        //backQuizget()
        let st2 = []
        task.steps.forEach(function(a){
            st2.push({step : a.step})
        })
        backQuiz.push({titulo : task.titulo , steps : st2 })

        console.log(backQuiz)
        quizTask()
    }
    if (b.target.id == 'backQA') {
        console.log(backQuiz)
        backQuiz.pop()
        quizImprime(backQuiz[backQuiz.length-1])
    } 
})

//          imprime na tela as pergutas e alternativas
function quizImprime(quizArray) {
    let receneTask = ''
    console.log(quizArray.titulo)
    question.innerHTML = '<h3>' + quizArray.titulo + '</h3>'
    if (quizArray.tipo == "finish") { 
        receneTask = receneTask + quizArray.print
    } else {
        quizArray.steps.forEach(function (tTask, id) {
            receneTask = receneTask + options.replace('OPT', tTask.step)
        });
    }
    qabox.innerHTML = receneTask
}

//          pesquisa Step
function pesquisa(stepName) {
    let result = { titulo: null, steps: null, tipo: null, print: null };

    // Função recursiva para percorrer todos os steps
    function searchSteps(step) {
        
        if (step.step === stepName ) {
            result.titulo = step.titulo;
            result.steps = step.steps;
            result.tipo = step.tipo;
            result.print = step.print;
            return;
        }
        if (step.steps && step.steps.length > 0) {
            for (let i = 0; i < step.steps.length; i++) {
                searchSteps(step.steps[i]);
                if (result.steps) return; // Para a busca caso encontre o resultado
            }
        }
    }

    searchSteps(task); // Chama a função recursiva a partir do objeto task

    return result;
}
