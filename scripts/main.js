$(document).ready(function (e) {

    $('#form-id').on('submit', function (e) {

        e.preventDefault()

        let height = Number(($('#height').val()).replace(",", "."))
        let weight = Number($('#weight').val().replace(",", "."))
        let gender = $('#gender').val()
        let result = ''
        let invalidDatas = height > 2.5 || weight > 300
        let emptyFields = height == '' || weight == '' || gender == ''

        /* ============== start validations tests =============================== */
        if (!invalidDatas && !emptyFields) {
            alert('ok')
            getImc()
        } else
            if (invalidDatas) {
                errorMsg()
            } else {
                errorMsg()
            }

        clearFileds()

    });

    /* ============== start clear button action =============================== */
    $('#clear-btn').on('click', function () {

        clearFileds()

    });

});

/* =================== error mensage: invalid datas or empty fields =============*/
function errorMsg() {



}


/* =================== this funtion clear the fields =============*/
function clearFileds() {

    $('#form-id [name]').val('');

}

function getImc() {



}

