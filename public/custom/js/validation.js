$(function(){
    $("#register-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            newPassword: "required",
            confirmPassword: {
                required: true,
                equalTo: "#newPassword"
            }
        }
    });
});