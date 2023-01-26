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
document.querySelector('.limpaform').addEventListener('click', function () {
    document.querySelector("form").reset();
    document.querySelector(".lbl").innerHTML = "";
    checkbl = []
})
// Fim BTN limpar dados

//          gera note
function geraNote() {
    let imprime = ''
    let x = 0
    let form = document.querySelector('#formNote')
    form.querySelectorAll('div.row > div> label').forEach(function (lbl, id) {
        let registra = ''
        if (id === 2) {
//             = form.querySelector('.selected').innerText
            opt = document.querySelector('#txt_subStatus').selectedIndex
            registra = document.querySelectorAll('#txt_subStatus>option')[opt].innerText
        } else if (id === 4 || id === 5 || id === 6 || id === 7) {
            registra = "<br>" + form.querySelectorAll('textarea')[id - 4].value.replaceAll("\n", "<br>");
        } else if (id == 8) {
            document.querySelectorAll("[name='menuopt']").forEach(function (opt) {
                if (opt.checked) {
                    registra = registra + '<br>' + opt.value
                }
            })
        }
        else {
            registra = form.querySelectorAll('input.form-control')[x].value
            x += 1
        }

        imprime = imprime +
            "<p class='pb-0 mb-2 text-break'><span class='fw-bold'>" +
            lbl.innerText +
            '</span>  ' +
            registra +
            "</p>";
    })
    document.querySelector(".lbl").innerHTML = imprime;
}
//          gera note


