$(_=> {
    const validateForm = (name,email,password,newPassword,lastPassword) => {

        name.blur(function() {
            if (name.val() =="") {
                $(".name .icon-error").removeClass("hide");
                $(".name .icon-check").addClass("hide");
                name.addClass("error");
            } else {
                $(".name .icon-error").addClass("hide");
                $(".name .icon-check").removeClass("hide");
                name.removeClass("error");
            }
        })
        email.blur(function() {
            const patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if (email.val() =="") {
                $(".email .icon-error").removeClass("hide");
                $(".email .icon-check").addClass("hide");
                email.addClass("error");
            } else {
                if(!patron.test($("#input-email").val())) {
                    $(".email .icon-error").removeClass("hide");
                    email.addClass("error");
                }else {
                    $(".email .icon-error").addClass("hide");
                    $(".email .icon-check").removeClass("hide");
                    email.removeClass("error");
                }
            }
        })
        password.blur(function() {
            if (password.val().length<6) {
                $(".input-password .alert").removeClass("hide");
                $(".input-password .icon-error").removeClass("hide");
                $(".input-password .icon-check").addClass("hide");
                password.addClass("error");
            } else {
                if (password.val() === "123456" || password.val() === "abcdef") {
                    $(".input-password .alert").addClass("hide");
                    $(".input-password .icon-error").addClass("hide");
                    $(".input-password .icon-check").removeClass("hide");
                    password.removeClass("error");
                    $(".easy-pass").removeClass("hide");
                    $(".bar-messages").removeClass("hide");
                }else {
                    $(".easy-pass").addClass("hide");
                    $(".bar-messages").addClass("hide");
                    $(".input-password .icon-check").removeClass("hide");
                }
            }
        })
        newPassword.blur(function() {
            if (newPassword.val()!= password.val() || newPassword.val().length===0) {
                $(".new-password .alert").removeClass("hide");
                $(".new-password .icon-error").removeClass("hide");
                $(".new-password .icon-check").addClass("hide");
                newPassword.addClass("error");
            } else {
                $(".new-password .alert").addClass("hide");
                $(".new-password .icon-error").addClass("hide");
                $(".new-password .icon-check").removeClass("hide");
                newPassword.removeClass("error");
            }
        })
        lastPassword.blur(function() {
            if (lastPassword.val().length===0) {
                $(".last-password .icon-error").removeClass("hide");
                $(".last-password .icon-check").addClass("hide");
                lastPassword.addClass("error");
            } else {
                $(".last-password .alert").addClass("hide");
                $(".last-password .icon-error").addClass("hide");
                $(".last-password .icon-check").removeClass("hide");
                lastPassword.removeClass("error");
            }
        })
    }
    $("#enviar").on("click",(e)=>{
        e.preventDefault();
        if($(".icon-error").hasClass("hide")){
            $(".save").removeClass("hide");
            $(".nosave").addClass("hide");
        }
        if($(".icon-check").hasClass("hide")){
            $(".save").addClass("hide");
            $(".nosave").removeClass("hide");
        }
    })
    validateForm($("#name"),$("#input-email"),$("#input-password"),$("#new-password"),$("#last-password"));
})

