const displayDiv = document.querySelector(".display");

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
  const html = `
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${result.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${result.transliteration}</h6>
        <p class="card-text">"${result.en.meaning}"</p>
        <button class="btn btn-refresh btn-sm">
          <img class="refresh" src="refresh.png" alt="" />
        </button>
      </div>
    </div>

  `;
  displayDiv.insertAdjacentHTML("beforeend", html);
};

fetchName(4);
