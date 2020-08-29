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

    if(resultMale > 31.1) {
        rendering(resultMale, 'Obsesity', 'danger')
    }else
        if(resultMale > 27.8 && resultMale < 31.2) {
            rendering(resultMale, 'Overweight', 'warning')
        }else
            if(resultMale > 26.4 && resultMale < 27.9) {
                rendering(resultMale, 'Slightly overweight', 'info')
        }else
            if(resultMale < 20.7) {
                rendering(resultMale, 'Under weight', 'danger')
            }else{
                rendering(resultMale, 'Ideal weight', 'success')
            }
    
}

function successMsgFemale(resultFemale) {

    if(resultFemale > 32.3) {
        rendering(resultFemale, 'Obsesity', 'danger')
    }else
        if(resultFemale > 27.3 && resultFemale < 32.4) {
            rendering(resultFemale, 'Overweight', 'warning')
        }else
            if(resultFemale > 25.8 && resultFemale < 27.4) {
                rendering(resultFemale, 'Slightly overweight', 'info')
        }else
            if(resultFemale < 19.1) {
                rendering(resultFemale, 'Under weight', 'danger')
            }else{
                rendering(resultFemale, 'Ideal weight', 'success')
            }

}

function rendering(resRender, category, color) {

    $('#alertResult').html(
        `
        <div class="alert alert-${color} alert-dismissible fade show" role="alert">
        <strong>Your BMI: ${resRender}</strong> - Category: ${category}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>

        `
    );

}

