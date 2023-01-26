
import { listSubStatus } from "./templates.js";
import { listBadleads } from './templates.js';
import { scriptProntos } from "./templates.js";

//      imprime data no campo date
window.addEventListener("DOMContentLoaded", function () {
    const t = new Date();
    document.getElementById("txt_data").innerHTML = t.getDate() + "/" + (t.getMonth() + 1) + "/" + t.getFullYear()
})
//       fim - imprime data


/*


    "content_scripts": [
        {
          "matches": ["https://*.youtube.com/*"], 
          "css": ["css/insertcss.css"],
          "js": ["js/script2.js"]
        }
      ]


//      add link 

function capturaLink() {
    let linkSS = document.querySelector('#txt_screen')
    linkSS.innerHTML += window.location.href + '\n'

    linkSS.style.height = "auto";
    linkSS.style.height = linkSS.scrollHeight + "px";
}

window.addEventListener("DOMContentLoaded", function () {
    const btnadd = document.querySelector("#addlink")
    btnadd.addEventListener('click', function () {
        event.preventDefault();

        const [tab] = chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: capturaLink,
        })
    })
})
*/
//      fim add link


/*       checkbox form                    */
window.addEventListener("DOMContentLoaded", function () {
    let on = document.querySelectorAll('.txt_label')
    on.forEach(function (box, i) {
        box.querySelector('label').addEventListener('click', function () {
            let seletor = 'div>.form' + (i + 1)
            box.querySelector(seletor).classList.toggle("d-none");
        })
    })
})
/*       fim checkbox form */

//       Textarea
window.addEventListener("DOMContentLoaded", function () {
    let textEnter = document.querySelectorAll(".txtarea");
    textEnter.forEach(function (txt) {
        txt.addEventListener("input", calcTextarea
        );
    });
    function calcTextarea() {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    }
})
//      fim textarea

//      sub status
window.addEventListener("DOMContentLoaded", function () {
    let retornaSS = '';
    listSubStatus.forEach(function (ss) {
        retornaSS = retornaSS +
            '<div class="option">' +
            '<input type="radio" class="radio" id="' + ss + '" name="category" />' +
            '<label for="' + ss + '">' + ss + '</label>' +
            '</div>'
    });
    document.querySelector('.options-container').innerHTML = retornaSS

    selectSub(null);
})
//      fim sub status
function selectSub(teste) {
    let selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");

    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", function () {
        optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(function (opt) {
        opt.addEventListener("click", function () {
            selected.innerHTML = opt.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        });
    });

    if (teste != null) {
        optionsContainer.classList.toggle("active");
        selected.innerHTML = optionsList[teste].innerText;
        optionsContainer.classList.remove("active")

    }
}

//          Bad Leads
window.addEventListener("DOMContentLoaded", function () {
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
})
//        FIM  Bad Leads

window.addEventListener("DOMContentLoaded", function () {

    let form = document.querySelector('#NoteForm')

    let listaLabel = []
    form.querySelectorAll('.txt_label > div > label').forEach(function (lbl) {
        listaLabel.push(lbl.innerText)
    })

    

})