import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

/* Sovellus käynnistyy, suoritetaan komponentin App-koodi, joka luo useState-hookin avulla sovellukselle laskurin tilan counter
 * Komponentti renderöi laskimen alkuarvon 0 näyttävän komponentin Display sekä kolme Button-komponenttia,
 * joille se asettaa laskurin tilaa muuttavat tapahtumankäsittelijät.
 * Kun jotain napeista painetaan, suoritetaan vastaava tapahtumankäsittelijä.
 * Tapahtumankäsittelijä muuttaa komponentin App tilaa funktion setCounter avulla.
 * Tilaa muuttavan funktion kutsuminen aiheuttaa komponentin uudelleenrenderöitymisen.
 * Eli jos painetaan nappia plus, muuttaa napin tapahtumankäsittelijä tilan counter arvoksi 1 ja komponentti App renderöidään uudelleen.
 * Komponentin uudelleenrenderöinti aiheuttaa sen "alikomponentteina" olevien Display- ja Button-komponenttien uudelleenrenderöitymisen.
 * Display saa propsin arvoksi laskurin uuden arvon 1 ja Button-komponentit saavat propseina tilaa sopivasti muuttavat tapahtumankäsittelijät. */
const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={decreaseByOne} text="minus" />
      <Button handleClick={setToZero} text="zero" />
    </div>
  );
};

export default App;
