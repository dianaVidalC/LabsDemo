$(_=> {
    const validateForm = () => {
        const Password = document.getElementById("input-password");
        const confirmaPassword = document.getElementById("new-password");
        const lostPassword = document.getElementById("lost-password");
        const enviar = document.getElementById("enviar");

        $("#name").blur(function() {
            if ($("#name").val() =="") {
                $(".bad").removeClass("hide");
            } else {
                $(".bad").addClass("hide");
                $(".good").removeClass("hide");
            }
        })
        $("#input-email").blur(function() {
            const patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if ($("#input-email").val() =="") {
                $(".bad").removeClass("hide");
            } else {
                if(!patron.test($("#input-email").val())) {
                    $(".bad").removeClass("hide");
                }else {

                    $(".bad").addClass("hide");
                    $(".good").removeClass("hide");
                }
            }
        })
        $("#input-password").blur(function() {
            if ($("#input-password").val() =="") {
                $(".alert").removeClass("hide");
                $(".bordes input").addClass("color-red");
            } else {
                $(".alert").addClass("hide");
                $(".bordes input").removeClass("color-red");
            }
        })
    }
    validateForm();
})

