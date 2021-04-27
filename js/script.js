console.log("Witaj Przybyszu! :)");

let main__button = document.querySelector(".main__button");
let main__firstHeader = document.querySelector(".main__firstHeader");
let main__changedHeader = document.querySelector(".main__changedHeader");

main__button.addEventListener("click", () => {
  main__firstHeader.classList.toggle("main__newHeader");

  if (main__firstHeader.classList.contains("main__newHeader")) {
    main__changedHeader.innerText = "Przywróć poprzedni kolor";
  } else {
    main__changedHeader.innerText = "Zmień kolor nagłówka";
  }
});