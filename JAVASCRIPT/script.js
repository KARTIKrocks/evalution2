$(document).ready(function () {
  // $("#subbtn").mouseenter(function(){
  //   var bt = document.getElementById("subbtn");
  //   if (submitstatus) {
  //     bt.disabled= true;
  //   } else {
  //     bt.disabled= false;
  //   }
  // })

  $(function () {
    open();
    $("#configuration").click(open);
  });

  function open() {
    $(".configuration").prop("disabled", !this.checked);
  }
  //monday
  $(function () {
    enablemon();
    $("#monday").click(enablemon);
  });

  function enablemon() {
    $(".monday").prop("disabled", !this.checked);
    // $(".selected").prop("disabled", true);
    // $(".selected").click(function () {
    //   var $this = $(this),
    //     $inputs = $($this.data("target"));

    //   $inputs.prop("disabled", !this.checked);
    //   if (!this.checked) {
    //     $inputs.prop("checked", false);
    //   }
    // }
    // );
  }
  //tuesday
  $(function () {
    enabletue();
    $("#tuesday").click(enabletue);
  });

  function enabletue() {
    $(".tuesday").prop("disabled", !this.checked);
  }
  //wednesday
  $(function () {
    enablewed();
    $("#wednesday").click(enablewed);
  });

  function enablewed() {
    $(".wednesday").prop("disabled", !this.checked);
  }
  //thursday
  $(function () {
    enablethur();
    $("#thursday").click(enablethur);
  });

  function enablethur() {
    $(".thursday").prop("disabled", !this.checked);
  }
  //friday
  $(function () {
    enablefri();
    $("#friday").click(enablefri);
  });

  function enablefri() {
    $(".friday").prop("disabled", !this.checked);
  }
  //saturday
  $(function () {
    enablesat();
    $("#saturday").click(enablesat);
  });

  function enablesat() {
    $(".saturday").prop("disabled", !this.checked);
  }
  //sunday
  $(function () {
    enablesun();
    $("#sunday").click(enablesun);
  });

  function enablesun() {
    $(".sunday").prop("disabled", !this.checked);
  }

  $(function () {
    $("#name").on("blur", function () {
      if (
        $("#name")
          .val()
          .match(/^[a-zA-Z]+$/) &&
        $("#name").val() != ""
      ) {
        $("#errorname").hide();
        submitstatus = false;
      } else {
        $("#errorname").html("should contain only character !");
        $("#errorname").css("color", "red");
        $("#errorname").show();
      }
    });

    $("#phonenumber").on("blur", function () {
      if (
        $("#phonenumber").val() != "" &&
        $("#phonenumber")
          .val()
          .match(
            /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
          )
      ) {
        $("#errorphone").hide();
        submitstatus = true;
      } else {
        $("#errorphone").html("plz enter valid phone number !");
        $("#errorphone").css("color", "red");
        $("#errorphone").show();
        submitstatus = false;
      }
    });

    $("#email").on("blur", function () {
      // var emailvalue=$('#email').val();

      if (
        $("#email").val() != "" &&
        $("#email")
          .val()
          .match(/^[a-zA-Z0-9.-]+@+tntra.io*$/)
      ) {
        $("#erroremail").hide();
        submitstatus = true;
      } else {
        $("#erroremail").html("plz enter valid email !");
        $("#erroremail").css("color", "red");
        $("#erroremail").show();
        submitstatus = false;
      }
    });

    $("#age").on("blur", function () {
      // var emailvalue=$('#email').val();

      if (
        $("#age").val() != "" &&
        $("#age")
          .val()
          .match(/^[1-9][0-9]?$|^100$/)
      ) {
        $("#errorage").hide();
        submitstatus = true;
      } else {
        $("#errorage").html("plz enter valid age !");
        $("#errorage").css("color", "red");
        $("#errorage").show();
        submitstatus = false;
      }
    });

    $("#sun").on("blur", function () {
      if ($("#sun").val() != "") {
        $("#drop-1").hide();
        submitstatus = true;
      } else {
        if ($("input[name='answer'][id='sun']:checked")) {
        }
        $("#drop-1").html("plz select one option !");
        $("#drop-1").css("color", "red");
        $("#drop-1").show();
        submitstatus = false;
      }
    });

    $("#mon").on("blur", function () {
      if ($("#mon").val() != "") {
        $("#drop-2").hide();
        submitstatus = true;
      } else {
        $("#drop-2").css("color", "red");
        $("#drop-2").show();
        $("#drop-2").html("plz select one option !");
        submitstatus = false;
      }
    });
    $("#tue").on("blur", function () {
      if ($("#tue").val() != "") {
        $("#drop-3").hide();
        submitstatus = true;
      } else {
        $("#drop-3").html("plz select one option !");
        $("#drop-3").css("color", "red");
        $("#drop-3").show();
        submitstatus = false;
      }
    });
    $("#wed").on("blur", function () {
      if ($("#wed").val() != "") {
        $("#drop-4").hide();
        submitstatus = true;
      } else {
        $("#drop-4").html("plz select one option !");
        $("#drop-4").css("color", "red");
        $("#drop-4").show();
        submitstatus = false;
      }
    });
    $("#thur").on("blur", function () {
      if ($("#thur").val() != "") {
        $("#drop-5").hide();
        submitstatus = true;
      } else {
        $("#drop-5").html("plz select one option !");
        $("#drop-5").css("color", "red");
        $("#drop-5").show();
        submitstatus = false;
      }
    });
    $("#fri").on("blur", function () {
      if ($("#fri").val() != "") {
        $("#drop-6").hide();
        submitstatus = true;
      } else {
        $("#drop-6").html("plz select one option !");
        $("#drop-6").css("color", "red");
        $("#drop-6").show();
        submitstatus = false;
      }
    });
    $("#sat").on("blur", function () {
      if ($("#sat").val() != "") {
        $("#drop-7").hide();
        submitstatus = true;
      } else {
        $("#drop-7").html("plz select one option !");
        $("#drop-7").css("color", "red");
        $("#drop-7").show();
        submitstatus = false;
      }
    });

    $(".radbtn").on("blur", function () {
      if ($("input[name='Gender']:checked").length == 0) {
        $("#errorrad").html("Please select one option");
        $("#errorrad").css("color", "red");
        submitstatus = false;
      } else {
        $("#errorrad").hide();
        submitstatus = true;
      }
    });

    $("#subbtn").on("click", function (e) {
      e.preventDefault();
      // if (fname() == true && lname() == true && moblie() == true && email() == true && age() == true && ($("#d2").prop("disabled")==false && sunday()==true) || ($("#d1").prop("disabled")==false && monday()==true) || ($("#d3").prop("disabled")==false && tuesday()==true ) || ($("#d4").prop("disabled")==false && w()==true )  || ($("#d5").prop("disabled")==false && t()==true )  || ($("#d6").prop("disabled")==false && f()==true  )|| ($("#d7").prop("disabled")==false && s()==true )){

      var name = document.getElementById("name").value;
      localStorage.setItem("name", name);

      var age = document.getElementById("age").value;
      localStorage.setItem("age", age);

      var email = document.getElementById("email").value;
      localStorage.setItem("email", email);

      var phone = document.getElementById("phonenumber").value;
      localStorage.setItem("phone", phone);

      var gender = $('input[type="radio"][name = "Gender"]:checked').val();
      sessionStorage.setItem("gender", gender);

      var sunday = $("#sun").val();
      sessionStorage.setItem("sunday", sunday);

      var monday = $("#mon").val();
      sessionStorage.setItem("monday", monday);

      var tuesday = $("#tue").val();
      sessionStorage.setItem("tuesday", tuesday);

      var wednesday = $("#wed").val();
      sessionStorage.setItem("wednesday", wednesday);

      var thursday = $("#thur").val();
      sessionStorage.setItem("thursday", thursday);

      var friday = $("#fri").val();
      sessionStorage.setItem("friday", friday);

      var saturday = $("#sat").val();
      sessionStorage.setItem("saturday", saturday);
    });



    // $("#form").submit(function (e) {
    //   // e.preventDefault();
    // });
  });
});
