$(window).on('load',function(){
    var checkAge = sessionStorage.getItem("is21OrOver");

    if(checkAge) {
        $('#staticBackdrop').modal('hide');
    } 
    else {
        $('#staticBackdrop').modal('show');
    }
});

function modalAccepted() {
    sessionStorage.setItem("is21OrOver", "true");
}