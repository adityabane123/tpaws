function myFunction(clicked_id) {
    var d = new Date();
    if (d.getDate() >= clicked_id) {
        $.getJSON("index.json", function(results) {
            $.each(results, function(key, val) {
                if (val.date == clicked_id) {
                    window.confirm(val.msg);
                }
            });
        });
    } else {
        window.alert("You cannot look into future");
    }
}