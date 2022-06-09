$(document).ready(function () {
  jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-z," "]+$/i.test(value);
  });
  jQuery.validator.addMethod("phonenumber", function (value, element) {
    return this.optional(element) || /^[6-9]\d{9}$/.test(value);
  });
  jQuery.validator.addMethod("Email", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9.-]+@+tntra.io*$/i.test(value);
  });
  jQuery.validator.addMethod("age", function (value, element) {
    return this.optional(element) || /^[1-9][0-9]?$|^100$/.test(value);
  });

  $("#form").validate({
    rules: {
      name: {
        required: true,
        lettersonly: true,
      },
      email: {
        required: true,
        Email: true,
      },
      age: {
        required: true,
        age: true,
      },
      phonenumber: {
        required: true,
        digits: true,
        rangelength: [10, 10],
        phonenumber: true,
      },
      container: {
        required: true,
      },
      gender: {
        required: true,
      },
      sun: {
        required: {
          depends: function (element) {
            if (" " == $("#sun").val()) {
              //Set predefined value to blank.
              $("#sun").val("");
            }
            return true;
          },
        },
      },
      mon: {
        required: {
          depends: function (element) {
            if (" " == $("#mon").val()) {
              //Set predefined value to blank.
              $("#monday1").val("");
            }
            return true;
          },
        },
      },
      tues: {
        required: {
          depends: function (element) {
            if (" " == $("#tues").val()) {
              //Set predefined value to blank.
              $("#tues").val("");
            }
            return true;
          },
        },
      },
      wed: {
        required: {
          depends: function (element) {
            if (" " == $("#wed").val()) {
              //Set predefined value to blank.
              $("#wed").val("");
            }
            return true;
          },
        },
      },
      thur: {
        required: {
          depends: function (element) {
            if (" " == $("#thur").val()) {
              //Set predefined value to blank.
              $("#thur").val("");
            }
            return true;
          },
        },
      },
      fri: {
        required: {
          depends: function (element) {
            if (" " == $("#fri").val()) {
              //Set predefined value to blank.
              $("#fri").val("");
            }
            return true;
          },
        },
      },
      sat: {
        required: {
          depends: function (element) {
            if (" " == $("#sat").val()) {
              //Set predefined value to blank.
              $("#sat").val("");
            }
            return true;
          },
        },
      },
    },
    messages: {
      name: {
        required: "*Please enter your name",
        lettersonly: "*Please enter only characters",
      },
      email: {
        required: "*Please enter your email ",
        Email: "*Please enter valid email",
      },
      age: {
        required: "*Please enter your age",
        age: "*please enter valid age",
      },
      phonenumber: {
        required: "*Please enter your Phone number",
        digits: "*Please enter digits",
        rangelength: "*Please enter 10 numbers only",
        phonenumber: "*Please enter valid phone number",
      },
      gender: {
        required: "*Please select your gender",
      },
      sun: {
        required: "*Please select one.",
      },
      mon: {
        required: "*Please select one.",
      },
      tues: {
        required: "*Please select one.",
      },
      wed: {
        required: "*Please select one.",
      },
      thur: {
        required: "*Please select one.",
      },
      fri: {
        required: "*Please select one.",
      },
      sat: {
        required: "*Please select one.",
      },
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.appendTo(element.parents(".radio1"));
      } else {
        // This is the default behavior
        error.insertAfter(element);
      }
    },
  });


  // errror msg on timing dropdown
  $("#sun").on("blur", function () {
    if ($("#sun").val() != "") {
      $("#drop-1").hide();
    } else {
      if ($("input[name='answer'][id='sun']:checked")) {
      }
      $("#drop-1").html("plz select one option !");
      $("#drop-1").css("color", "red");
      $("#drop-1").show();
    }
  });

  $("#mon").on("blur", function () {
    if ($("#mon").val() != "") {
      $("#drop-2").hide();
    } else {
      $("#drop-2").css("color", "red");
      $("#drop-2").show();
      $("#drop-2").html("plz select one option !");
    }
  });
  $("#tue").on("blur", function () {
    if ($("#tue").val() != "") {
      $("#drop-3").hide();
    } else {
      $("#drop-3").html("plz select one option !");
      $("#drop-3").css("color", "red");
      $("#drop-3").show();
    }
  });
  $("#wed").on("blur", function () {
    if ($("#wed").val() != "") {
      $("#drop-4").hide();
    } else {
      $("#drop-4").html("plz select one option !");
      $("#drop-4").css("color", "red");
      $("#drop-4").show();
    }
  });
  $("#thur").on("blur", function () {
    if ($("#thur").val() != "") {
      $("#drop-5").hide();
    } else {
      $("#drop-5").html("plz select one option !");
      $("#drop-5").css("color", "red");
      $("#drop-5").show();
    }
  });
  $("#fri").on("blur", function () {
    if ($("#fri").val() != "") {
      $("#drop-6").hide();
    } else {
      $("#drop-6").html("plz select one option !");
      $("#drop-6").css("color", "red");
      $("#drop-6").show();
    }
  });
  $("#sat").on("blur", function () {
    if ($("#sat").val() != "") {
      $("#drop-7").hide();
    } else {
      $("#drop-7").html("plz select one option !");
      $("#drop-7").css("color", "red");
      $("#drop-7").show();
    }
  });

  $("#subbtn").on("click", function passvalues(e) {
    e.preventDefault();

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
});

//checkbox disable
$(function () {
  enable_cb();
  $("#configuration").click(enable_cb);
});
function enable_cb() {
  $("input.configuration").prop("disabled", !this.checked);
  $(".configuration").prop("checked", false);
  enable_c1();
  enable_c2();
  enable_c3();
  enable_c4();
  enable_c5();
  enable_c6();
  enable_c7();
}
//sunday
$(function () {
  enable_c1();
  $("#sunday").click(enable_c1);
});
function enable_c1() {
  $(".sunday").prop("disabled", !this.checked);
  $("#sun").prop("selected", true);
}

//monday
$(function () {
  enable_c2();
  $("#monday").click(enable_c2);
});
function enable_c2() {
  $(".monday").prop("disabled", !this.checked);
  $("#mon").prop("selected", true);
}

//tuesday
$(function () {
  enable_c3();
  $("#tuesday").click(enable_c3);
});
function enable_c3() {
  $(".tuesday").prop("disabled", !this.checked);
  $("#tue").prop("selected", true);
}

//wednesday
$(function () {
  enable_c4();
  $("#wednesday").click(enable_c4);
});
function enable_c4() {
  $(".wednesday").prop("disabled", !this.checked);
  $("#wed").prop("selected", true);
}

//thursday
$(function () {
  enable_c5();
  $("#thursday").click(enable_c5);
});
function enable_c5() {
  $(".thursday").prop("disabled", !this.checked);
  $("#thur").prop("selected", true);
}

//friday
$(function () {
  enable_c6();
  $("#friday").click(enable_c6);
});

function enable_c6() {
  $(".friday").prop("disabled", !this.checked);
  $("#fri").prop("selected", true);
}

//saturday
$(function () {
  enable_c7();
  $("#saturday").click(enable_c7);
});

function enable_c7() {
  $(".saturday").prop("disabled", !this.checked);
  $("#sun").prop("selected", true);
}



