$(document).ready(function () {
  $.get("http://localhost:3000/posts", function (data) {
    console.log(data);
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      $("table tbody").append(
        `
            <tr>
              <th>` +
          data[i].id +
          `</th>
              <th>` +
          data[i].nameInput +
          `</th>
              <th>` +
          data[i].author +
          `</th>
              <th>` +
          data[i].ganre +
          `</th>
              <th>` +
          data[i].date +
          `</th>
              <th>` +
          data[i].sellCount +
          `</th>
              <th>` +
          data[i].price +
          `</th>
              <th>` +
          data[i].dateSell +
          `</th>
              <th>` +
          data[i].receivedCount +
          `</th>
              <th><img src="` +
          data[i].image +
          `" width="80px" height="100px"></th>
              <th><a class="delete" href="#" data-id="` +
          data[i].id +
          `">Delete</a>
            </tr>
            `
      );
    }
  });
});

$(document).on("click",".delete",function(e){
  e.preventDefault();
  id=$(this).data("id");
  $.post("http://localhost:3000/posts",{action:".delete",id:id},function(data){
    console.log(data);
  });
});


$(document).ready(function () {
  $("#inputBtn").bind("click", function () {
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/posts",
      data: {
        nameInput: $("#nameInput").val(),
        author: $("#author").val(),
        ganre: $("#ganre").val(),
        date: $("#date").val(),
        sellCount: $("#sellCount").val(),
        price: $("#price").val(),
        dateSell: $("#dateSell").val(),
        receivedCount: $("#receivedCount").val(),
        image: $("#image").val(),
      },
      dataType: "html",
      beforeSend: function () {
        $("loading").show();
      },
      success: function (data) {
        if (data == "Success") {
          // ...
        }
      },
    });
  });
});
