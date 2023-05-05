// ! ++++++++++ calcFunction

const calcFunction = () => {
  let grösse = Number(document.querySelector("#grösse").value);
  console.log({ grösse });
  let alter = Number(document.querySelector("#alter").value);
  console.log({ alter });
  let gewicht = Number(document.querySelector("#gewicht").value);
  console.log({ gewicht });
  let körper = document.querySelector('input[name="körperbau"]:checked').value;
  console.log({ körper });
  let aktivität = document.querySelector("#aktivität").value;
  console.log({ aktivität });

  let grundumsatzKcalOutput = document.querySelector(".grundumsatz-kcal");
  let gesamtumsatzKcalOuput = document.querySelector(".gesamtumsatz-kcal");
  let grundumsatzKjOutput = document.querySelector(".grundumsatz-kj");
  let gesamtumsatzKjOuput = document.querySelector(".gesamtumsatz-kj");

  if (körper == "männlich") {
    console.log("mann");
    let grundumsatzKcal = 66.47 + 13.7 * gewicht + 5 * grösse - 6.8 * alter;
    console.log(grundumsatzKcal);
    let gesamtumsatzKcal = grundumsatzKcal * aktivität;
    console.log(gesamtumsatzKcal);
    grundumsatzKcalOutput.innerText = Math.round(grundumsatzKcal);
    gesamtumsatzKcalOuput.innerText = Math.round(gesamtumsatzKcal);
    let grundumsatzKj = grundumsatzKcal * 4.1868;
    console.log(grundumsatzKj);
    let gesamtumsatzKj = gesamtumsatzKcal * 4.1868;
    console.log(gesamtumsatzKj);
    grundumsatzKjOutput.innerText = Math.round(grundumsatzKj);
    gesamtumsatzKjOuput.innerText = Math.round(gesamtumsatzKj);
  } else {
    console.log("frau");
    let grundumsatzKcal = 655.1 + 9.6 * gewicht + 1.8 * grösse - 4.7 * alter;
    console.log(grundumsatzKcal);
    let gesamtumsatzKcal = grundumsatzKcal * aktivität;
    console.log(gesamtumsatzKcal);
    grundumsatzKcalOutput.innerText = Math.round(grundumsatzKcal);
    gesamtumsatzKcalOuput.innerText = Math.round(gesamtumsatzKcal);
    let grundumsatzKj = grundumsatzKcal * 4.1868;
    console.log(grundumsatzKj);
    let gesamtumsatzKj = gesamtumsatzKcal * 4.1868;
    console.log(gesamtumsatzKj);
    grundumsatzKjOutput.innerText = Math.round(grundumsatzKj);
    gesamtumsatzKjOuput.innerText = Math.round(gesamtumsatzKj);
  }
};
