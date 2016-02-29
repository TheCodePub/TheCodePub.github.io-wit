(function() {
    // load the code snippets
    // (c) initial idea is owned by Lea Verou (btw, she is a girl!)

    $('[data-src]').each(function(index) {
        var src = $( this ).attr('data-src');
        $( this ).load(src);
    });
}());