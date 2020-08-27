$(document).ready(function (e) {

    $('#form-id').on('submit', function (e) {

        e.preventDefault()

        let height = Number(($('#height').val()).replace(",", "."))
        let weight = Number($('#weight').val().replace(",", "."))
        let gender = $('#gender').val()
        let invalidDatas = height > 2.5 || weight > 300 || typeof height == 'string' || typeof weight == 'string'
        let emptyFields = height == '' || weight == '' || gender == ''
        let getImc = (w, h) => {return (w/(Math.pow(h, 2))).toFixed(2)}//calc function

        /* ============== start validations tests =============================== */
        if (!invalidDatas && !emptyFields) {
           let result = getImc(weight, height)

            successMsg (result, gender)

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

function successMsg (finalResult, genderAll) { 
    console.log(finalResult, genderAll)

    alert(finalResult, genderAll)
 }

