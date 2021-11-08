$(function () {

    const createPostBtn = $("#submit");
    const name = $("#post");
    const description = $("#description");

    // creates a new task and adds it to the database
    const newTaskHandler = () => {

        if (name.val() && description.val()) {

            let postData = {
                name: name.val(),
                description: description.val(),
            };

            $.ajax({
                type: "POST",
                url: "/api/post",
                data: postData,
                complete: function () {
                    $(".added").show().delay(1000).fadeOut();
                }
            });
        } else $(".complete").show().delay(2000).fadeOut();

    };

    createPostBtn.click(function (e) {
        e.preventDefault();
        newTaskHandler();
    });

});
