

//      btn menu preview 
let SFform = document.querySelector('#SFformNote')
let SFpreview = document.querySelector('.SFpreview')
document.querySelector('#SFcheckPreview').addEventListener('click', function () {
    if (SFpreview.classList.contains('d-none')) {
        console.log('ok')
        SFform.classList.toggle('d-none')
        SFpreview.classList.toggle('d-none')
        SFGerarNote()
    } else {
        SFform.classList.toggle('d-none')
        SFpreview.classList.toggle('d-none')
    }
})


//      Gera note
function SFGerarNote() {
    console.log('click beranote')
    gtag('event', 'click_geranote_SF')
    let imprime = ''
    let form = document.querySelector('#SFformNote')
    form.querySelectorAll('div.row > div> label').forEach(function (lbl, id) {
        let registra = ''
        //console.log(id + '- ' + lbl.innerText)
        if (id > 0 ) {
            form.querySelectorAll('textarea')
            registra = "<br>" + form.querySelectorAll('textarea')[id-1].value.replaceAll("\n", "<br>");
          //  x += 1
        } else {
            registra = form.querySelector('#txt_SFspeak').value
            //x += 1
        }

        imprime = imprime +
            "<p class='pb-0 mb-2 text-break'><span class='fw-bold'>" +
            lbl.innerText +
            '</span>  ' +
            registra +
            "</p>";
    })
    document.querySelector("#SFnotePreview").innerHTML = imprime;
}

//      BTN copia
document.querySelector('#SFCopiarNote').addEventListener('click', function () {
    if (SFpreview.classList.contains('d-none') && !SFform.classList.contains('d-none')) {
        gtag('event', 'click_copia')
        SFform.classList.toggle('d-none')
        SFpreview.classList.toggle('d-none')
        SFGerarNote()
    }
})