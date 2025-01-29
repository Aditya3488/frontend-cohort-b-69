const seats = Array.from({ length: 40 }, (_, index) => ({
  seatNumber: index + 1,
}));

// console.log(seats)

let seatsContainer = document.querySelector(".seats");

function bookSeat(seatNumber) {
  seatNumber = parseInt(seatNumber);
  let modal = document.querySelector("#modal");
  modal.classList.remove("hidden");
  let bookingBtn = document.querySelector(".btn");
  bookingBtn.addEventListener("click", () => {
    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    seats[seatNumber - 1] = {
      name: nameInput.value,
      email: emailInput.value,
      status: true,
      seatNumber: seatNumber,
    };
    // console.log(seats)
    nameInput.value = "";
    emailInput.value = "";
    modal.classList.add("hidden");
    renderSeats();
  });
}

renderSeats = () => {
  seatsContainer.innerHTML = "";
  seats.map((seat) => {
    let button = document.createElement("button");
    button.classList.add("seat");
    button.innerText = seat.seatNumber;
    if (seat.status === true) {
      button.classList.add("seat-booked");
      button.setAttribute("disabled", true);
    } else {
      button.addEventListener("click", (e) => {
        let seatNumber = e.target.innerText;
        bookSeat(seatNumber);
      });
    }

    seatsContainer.appendChild(button);
  });
};

renderSeats();
