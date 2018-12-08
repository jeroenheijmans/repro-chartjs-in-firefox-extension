(function() {
  function load() {
    const element = document.body.insertBefore(document.createElement("canvas"), document.body.firstChild);
    const header = document.body.insertBefore(document.createElement("h1"), document.body.firstChild);

    header.innerHTML = "The extension is running. See <a href='https://github.com/jeroenheijmans/repro-chartjs-in-firefox-extension'>this repo for more info</a>. You should see a chart below this:";
    element.style.border = header.style.border = "4px solid red";

    const chart = new Chart(element.getContext("2d"), {
      type: "line",
      data: {
        datasets: [{
            label: "Test Dataset",
            data: [
              { x: moment('20180403'), y: 3 },
              { x: moment('20180404'), y: 8 },
              { x: moment('20180405'), y: 6 },
            ]
          },
        ],
      },
      options: { scales: { xAxes: [{ type: "time" }] } },
    });
  }

  if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
    console.info(`Loading via readyState = ${document.readyState}`);
    load();
  } else {
    console.info(`Loading via DOMContentLoaded because readyState = ${document.readyState}`);
    document.addEventListener("DOMContentLoaded", () => load());
  }
}());