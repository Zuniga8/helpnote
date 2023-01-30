import { listSubStatus } from "./templates.js";
import { listBadleads } from './templates.js';
import { scriptProntos } from "./templates.js";

//      Time
const t = new Date();
const txt_date = t.getDate() + "/" + (t.getMonth() + 1) + "/" + t.getFullYear()

//      Menu Note
let opt = document.querySelectorAll('.opt')
document.querySelectorAll('[name="options"]').forEach(function (op) {
    op.addEventListener('click', function () {
        for (let x = 0; x < opt.length; x++) {
            if (op.value == opt[x].classList[1]) {
                opt[x].classList.toggle("d-none")
            } else {
                opt[x].classList.remove("d-none")
                opt[x].classList.toggle("d-none")
            }
        }
    })
})
//      Menu Note

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
{
    let exibeBadlead = ''
    listBadleads.forEach(function (bl, n) {
        exibeBadlead = exibeBadlead +
            '<li><input type="checkbox" name="menuopt" id="drop' + n + '" value="' + bl + '"/>' +
            '<label class="open" for="drop' + n + '">' + bl + '</label></li>'
    })
    document.querySelector('.badLeads').innerHTML = exibeBadlead

    let checkbl = []
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
}//      Fim badleads


// BTN limpar dados 
document.querySelector('#limparNote').addEventListener('click', function () {
    form.reset();
    document.querySelector(".lbl").innerHTML = "";
    checkbl = []
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

// fim BTN menun previw

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
//      FIM    gera note


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
} //      Fim lista Txt Pronto

//      ADD  lista Txt Pronto


//      Fim lista Txt Pronto


//     SUB  lista Txt Pronto

//      Fim lista Txt Pronto





