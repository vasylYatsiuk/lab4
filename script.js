$(document).ready(
    function () {
        $(document).on("submit", "#inputForm", function (e) {
            e.preventDefault();
            var id = Number($('table tbody tr:last td:first').text());
            $("table tbody").append(`<tr data-index="`+(id+1)+`">
                                    <td>`+(id+1)+`</td>
                                    <td>`+$("#nameInput").val()+`</td>
                                    <td>`+ $("#author").val()+`</td>
                                    <td>`+ $("#ganre").val()+`</td>
                                    <td>`+$("#date").val()+`</td>
                                    <td>`+ $("#sellCount").val()+`</td>
                                    <td>`+ $("#price").val()+`</td>
                                    <td>`+ $("#dateSell").val()+`</td>
                                    <td>`+ $("#receivedCount").val() +`</td>
                                    <td><img src="`+ $(" #image").val() +`" width="80px" height="100px"></td>
                                    <td><a data-index="`+ (id+1) +`" class="delete" href="#">Delete</a></td>
                                </tr>`);
            $("#inputForm")[0].reset();
        });
        $(document).on("click",".delete", function(e){
            e.preventDefault();
            let deleteNum=$(this).parent().parent().children().first().text();
            $(this).parent().parent().nextAll().each(function (index) {
                $(this).children().first().text(Number($(this).children().first().text())-1);
            });
            $(this).parent().parent().remove();
        });
    });