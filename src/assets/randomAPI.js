//AJAX to get random data
//from: https://randomuser.me/documentation#howto

function getPerson() {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      console.log(data);
    },
  });
}

export default getPerson;
