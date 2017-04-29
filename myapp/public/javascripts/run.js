function run () {
    console.log("run");


    $('button').bind('click', function (e) {
        post();
    });

    function post () {
        $.ajax({
            type: "GET",
            url: "http://localhost:3001/test",
            data: {text: '현우바보'},
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        });
    }
}