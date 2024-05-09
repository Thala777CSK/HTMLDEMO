$(document).ready(function ()
{
$("#submitbtn").click(function ()
{
    function Storedata(){
    
        let student={
            Name: $("#name").val(),
            Email: $("#email").val(),
            Mobile: $("#mobile").val(),
            gender: $("input[name='gender']:checked").val(),
        };
        $("#studentForm")[0].reset();
        return student;
    }
    
    function Storedatalocalstorage()
    {
        if(!localStorage.getItem("student"))
        {
            localStorage.setItem("student",JSON.stringify(Storedata()));
        }
        else{
            localStorage.removeItem("student");
            localStorage.setItem("student",JSON.stringify(Storedata()));
        }
    }
    Storedatalocalstorage();
    window.location.href="Ass2-1-2.html"
});
});