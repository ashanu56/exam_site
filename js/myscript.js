$(document).ready(function () {
    $('.inserted').hide();
    $(document.body).on('change', '#choice', function () {
        var choice = $(this).val();
        $('#answer').empty();
        $.ajax({
            url: 'generate-dropdown.php',
            type: 'post',
            data: {
                choice: choice
            },
            success: function (result) {
                $('#display-choice').html(result)
            }
        });
    });

    $(document.body).on('click', '#maxSubmit', function () {
        var array = $('#maxFind').val();
        $.ajax({
            url: 'answer.php',
            type: 'post',
            data: {
                maxArray : array
            },
            success: function (result) {
                $('#answer').html(result);
            }
        });
    });
    $(document.body).on('click', '#minSubmit', function () {
        var array = $('#minFind').val();
        $.ajax({
            url: 'answer.php',
            type: 'post',
            data: {
                minArray : array
            },
            success: function (result) {
                $('#answer').html(result);
            }
        });
    });
    $(document.body).on('click', '#rangeSubmit', function () {
        var range1 = $('#range1').val();
        var range2 = $('#range2').val();
        $.ajax({
            url: 'answer.php',
            type: 'post',
            data: {
                range1: range1,
                range2:range2
            },
            success: function (result) {
                $('#answer').html(result);
            }
        });
    });
    $(document.body).on('click', '.productList', function () {
        var item_name = $(this).html();
        item_name = item_name.trim();
        $.ajax({
            url: 'generate-dropdown.php',
            type: 'post',
            data: {
                product_item: item_name
            },
            success: function (result) {
                $("#product_list").html(result);
            }
        });
    });

});



