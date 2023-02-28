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
    let imprime = '' + "<p class='pb-0 mb-2 text-break'><span class='fw-bold'>Data </span>" + txt_date + "</p>";
    let x = 0
    let form = document.querySelector('#formNote')
    form.querySelectorAll('div.row > div> label').forEach(function (lbl, id) {
        let registra = ''
        //console.log(id + '- ' + lbl.innerText)
        if (id > 2 && id < 7) {
            registra = "<br>" + form.querySelectorAll('textarea')[id - 3].value.replaceAll("\n", "<br>");
            x += 1
        } else if (id == 8) {
            document.querySelectorAll("[name='menuopt']").forEach(function (opt) {
                if (opt.checked) {
                    registra = registra + '<br>' + opt.value
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
})//      Fim lista Txt Pronto



//   QA process
let qabox = document.querySelector('.option')
let qaquestion = document.createElement('p')
let question = document.querySelector('.question')
let quest_task = document.querySelectorAll('.optQuestion')
let options = '<div class="optQuestion mx-auto" value="ntipo">OPT</div>'


let opt_market = ''
let option = ''

let quizHistory = ''
//      btn stat
let btnstarted = document.querySelector('#startQA')
btnstarted.addEventListener('click', function (btn) {
    btnstarted.classList.add('d-none')
    console.log('oi')
    quizTask()
})

//      info task
function quizTask() {
    let receneTask = ''
    question.innerHTML = '<h3>' + task.titulo + '</h3>'
    task.task.forEach(function (tTask, id) {
        console.log(tTask.tipo)
        receneTask = receneTask + options.replace('OPT', tTask.task)

    });
    qabox.innerHTML = receneTask
}


//      busca array

function pesquisa(item) {
    task.task.forEach(function (t) {
        if (t.task == item) {
            console.log(t.task)
            console.log(t.step)
            return [t.task, t.step]
        }
    })
    task.task.forEach(function (t) {
        if (t.task == item) {
            console.log(t.task)
            t.step.forEach(function (s) {
                if (s.step == item) {
                    console.log(s.step)
                    console.log(s.steps)
                    return [s.step, s.steps]

                }
            })

        }
    })
}

function pesquisa(taskName, stepName) {
    const taskToFind = task.task.find(t => t.task === taskName);
  
    if (!taskToFind) {
      return null;
    }
  
    const stepToFind = taskToFind.step.find(s => s.step === stepName);
  
    if (!stepToFind) {
      return null;
    }
  
    const stepValue = stepToFind;
    const stepsArray = stepValue.steps;
  
    return { step: stepValue, steps: stepsArray };
  }

const result = pesquisa('Ads Conversion Code', 'Validar ID ADS');
console.log(result); // { step: {...}, steps: [...] }





function quizQuestion() {

}
function quizFinish() {

}



/*
let recebeElemento = ''
function escolhaTask() {
    console.log(task[0].inicio)
    question.innerHTML = '<h3>' + task[0].inicio + '</h3>'
    for (let x = 0; x < task.length; x++) {
        if (task[x].task) {
            option = option + options.replace('OPT', task[x].task)
            console.log(task[x].task)
        }
    }
    qabox.innerHTML = option
    optvalue()
}
function optvalue() {
    document.querySelectorAll('.optQuestion').forEach(function (task_opt) {
        task_opt.addEventListener('click', function () {
            opt_market = task_opt.innerHTML
            console.log(opt_market)
            //perguntas()
            escolha_etapa()
        })
    })
}

function escolha_etapa() {
    task.forEach(function (dado) {
        if (dado.task == opt_market) {
            //dado.steps
            option = ''
            question.innerHTML = '<h3> Siga as Etapas a Seguir : </h3>'
            dado.steps.forEach(function(opt, id){
                option = option + options.replace('OPT', opt.name_step)
            })
            qabox.innerHTML = option
        }
    })
}

function escolha_etapa2() {
    task.forEach(function (dado) {
        if (dado.task == opt_market) {
            //dado.steps
            option = ''
            question.innerHTML = '<h3> Siga as Etapas a Seguir : </h3>'
            dado.steps.forEach(function(opt, id){
                option = option + options.replace('OPT', opt.name_step)
            })
            qabox.innerHTML = option
        }
    })
}
*/

