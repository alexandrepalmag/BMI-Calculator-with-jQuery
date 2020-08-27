$(document).ready(function (e) {

    $('#form-id').on('submit', function (e) {

        e.preventDefault()
        
        let height = $('#height').val()
        let weight = $('#weight').val()
        let gender = $('#gender').val()
        let result = ''
        let invalidDatas = height > 2.5 || weight > 300
        let emptyFields = height == '' || weight == '' || gender == ''

        /* ============== start validations tests =============================== */
        switch(true) {
            case invalidDatas: 
            alert('valores inválidos')
            console.log('erro')
            break

            case emptyFields:
                alert('fill all fields')
            default:
                return false
        }
        /* ============== end validations tests =============================== */

        result = h

        
    });

     /* ============== start clear button action =============================== */
        $('#clear-btn').on('click', function () {
            
            $('#form-id [name]').val('');

        });

     /* ============== end clear button action =============================== */

});