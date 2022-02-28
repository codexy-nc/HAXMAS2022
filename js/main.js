const University = document.querySelector("#university-input");
const Name1 = document.querySelector("#name1-input");
const Name2 = document.querySelector("#name2-input");
const Name3 = document.querySelector("#name3-input");
const Name4 = document.querySelector("#name4-input");
const Name5 = document.querySelector("#name5-input");
const Email1 = document.querySelector("#email1-input");
const Email2 = document.querySelector("#email2-input");
const Email3 = document.querySelector("#email3-input");
const Email4 = document.querySelector("#email4-input");
const Email5 = document.querySelector("#email5-input");
const TeamLeader = document.querySelector("#leader-input");
const TeamName = document.querySelector("#team-input");
const TeamLeaderEmail = document.querySelector("#leaderEmail-input");
const TeamContact = document.querySelector("#teamContact-input");
const RotaractClub = document.querySelector("#Club-input");
const Queries = document.querySelector("#query-input");
const Merch = document.querySelector("#merchandise-input");

// |------------------------------ Sliding Form (Slider) -------------------------------|

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstnext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

// ! First Next Button
nextBtnFirst.addEventListener("click", function (event) {
  if (
    Name1.value == "" ||
    Name1.value == null ||
    Name2.value == "" ||
    Name2.value == null ||
    Name3.value == "" ||
    Name3.value == null
  ) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please check the missing name fields!",
      footer: "<p>Participants name fields are compulsory.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else if (
    Email1.value == "" ||
    Email1.value == null ||
    Email2.value == "" ||
    Email2.value == null ||
    Email3.value == "" ||
    Email3.value == null
  ) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Email fields cannot be empty!",
      footer: "<p>Please enter the correct email address.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else if (
    !Email1.value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) ||
    !Email2.value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have entered the email field incorrectly",
      footer:
        "<p>Please check the fields and enter the valid email address!</p>",
      background: "#edfffc",
      showCancelButton: true,
      showConfirmButton: false,
      color: "fff",
      timer: 5000,
    });
  } else {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});

// ! Second Next button
nextBtnSec.addEventListener("click", function (event) {
  if (TeamLeader.value == "" || TeamLeader.value == null) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Team Leader name is missing!",
      footer: "<p>Team Leader name field is compulsory.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else if (TeamName.value == "" || TeamName.value == null) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Team name cannot be empty!",
      footer: "<p>Please enter your Team name.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else if (TeamLeaderEmail.value == "" || TeamLeaderEmail.value == null) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Team leader email cannot be empty!",
      footer: "<p>Please enter the correct email address.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else if (
    !TeamLeaderEmail.value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have entered the email field incorrectly!",
      footer: "<p>Please check the field and enter a valid email address.</p>",
      background: "#edfffc",
      showCancelButton: true,
      showConfirmButton: false,
      color: "fff",
      timer: 5000,
    });
  } else if (TeamContact.value == "" || TeamContact.value == null) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Team contact number field is empty!",
      footer: "<p>Please enter a valid contact number.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});

// ! Third Next Button
nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

// ! Submit Button
submitBtn.addEventListener("click", function (event) {
  if (Merch.value == "" || Merch.value == null) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Merchandise field is empty!",
      footer: "<p>Please enter Yes or No on your preference.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  }
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-26%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-52%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
