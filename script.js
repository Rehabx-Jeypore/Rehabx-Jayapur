document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const problem = document.getElementById("problem").value.trim();

  const message =
`Hello RehabX-Jeypore,

I would like to book a physiotherapy session.

Name: ${name}
Phone: ${phone}
Preferred date: ${date}
Preferred time: ${time}
Concern: ${problem}

Please confirm the appointment. Thank you.`;

  window.open("https://wa.me/918327780865?text=" + encodeURIComponent(message), "_blank");
});
