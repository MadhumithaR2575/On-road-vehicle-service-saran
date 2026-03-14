document.getElementById("serviceForm").addEventListener("submit", function(e){
e.preventDefault();

const name=document.getElementById("name").value;

document.getElementById("message").innerHTML =
"<h3>Request Submitted Successfully!</h3><p>Thank you "+name+", our mechanic will contact you soon.</p>";
});