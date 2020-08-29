$(document).ready(function (e) {

    $('#form-id').on('submit', function (e) {

        e.preventDefault()

        let height = Number(($('#height').val()).replace(",", "."))
        let weight = Number($('#weight').val().replace(",", "."))
        let gender = $('#gender').val()
        let invalidDatas = height > 2.5 || weight > 300 || isNaN(height) || isNaN(weight)
        let emptyFields = height == '' || weight == '' || gender == ''
        let getImc = (w, h) => { return (w / (Math.pow(h, 2))).toFixed(2) }//calc function
        let result = ''

        /* ============== start validations tests =============================== */
        if (!invalidDatas && !emptyFields) {
            result = getImc(weight, height)

            gender == 'male' ? (successMsgMale(result)) : (successMsgFemale(result))

        } else
            if (invalidDatas) {
                errorMsg('Invalid data!')
            } else {
                errorMsg('Fill in all the fields on the form!')
            }

        clearFileds()
    });

});

/* ============== start clear button action =============================== */
$('#clear-btn').on('click', function () {

    clearFileds()

});

/* =================== error mensage: invalid datas or empty fields =============*/
function errorMsg(err) {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err}`,
    })

}

/* =================== this funtion clear the fields =============*/
function clearFileds() {

    $('#form-id [name]').val('');

}

function successMsgMale(resultMale) {
    

}

function successMsgFemale(resultFemale) {
    $('#alertResult').html(
        `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>${resultFemale}</strong> You should check in on some of those fields below.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>

        `
);

}

function rendering() {

    $('#alertResult').html(
        `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>${resultMale}</strong> You should check in on some of those fields below.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>

        `
);

}

