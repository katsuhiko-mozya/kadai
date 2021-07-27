$("#myform").on("submit",function(e){
    e.preventDefault();
    let form = $('#myform').serializeArray();
    alert(JSON.stringify(form))
})