jQuery("#child").draggable({
    cursor: "move",
    containment: "parent",
    stop: function() {
        if(jQuery("#child").position().left < 1)
            jQuery("#child").css("left", "720px");
    }
});