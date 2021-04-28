const displayDiv = document.querySelector(".display");
const refreshBtn = document.querySelector(".btn-refresh");

const cardTitle = document.querySelector(".card-title");
const cardSubtitle = document.querySelector(".card-subtitle");
const cardText = document.querySelector(".card-text");

const fetchName = function (number) {
  fetch(`http://api.aladhan.com/asmaAlHusna/${number}`)
    .then((res) => {
      console.log(res);
      if (!res.ok) throw new Error("Invalid number entered");
      return res.json();
    })
    .then((data2) => {
      console.log(data2);
      const { data } = data2;
      const result = data[0];
      console.log(result);
      renderName(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const renderName = function (result) {
  cardTitle.textContent = `${result.name}`;
  cardSubtitle.textContent = `${result.transliteration}`;
  cardText.textContent = `${result.en.meaning}`;
};

const number = Math.trunc(Math.random() * 99);
fetchName(number);

const refreshPage = function () {
  window.location.reload();
};

refreshBtn.addEventListener("click", refreshPage);
