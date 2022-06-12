import React, { useState} from 'react';

const TipCalculator = () => {
 const [bill, setBill] = useState(50);
 const [tipPercentage, setTipPercentage] = useState(18);
 const [people, setPeople] = useState(1);
  
  const onChangeBill = event => {
    setBill(event.target.value);
  }

  const onChangeTipPercentage = event => {
    setTipPercentage(event.target.value);
  }

  const onChangePeople = event => {
    setPeople(event.target.value);
  }

  const totalTip = (bill * tipPercentage) / 100;
  const perPersonTip = totalTip / people;
  
  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input 
        id="bill"
        type="number"
        min="0"
        value={bill}
        onChange={onChangeBill}
      />

      <label htmlFor="tipPercentage">Tip Percentage</label>
      <input 
        id="tipPercentage"  
        type="number"
        min="0"
        value={tipPercentage}
        onChange={onChangeTipPercentage}
      />

      <label htmlFor="people">Number of People</label>
      <input 
        id="people"
        type="number"
        min="1"
        value={people}
        onChange={onChangePeople}
      />

      <p>Total Tip: {isNaN(totalTip) ? '-' : `$${totalTip.toFixed(2)}`}</p>
      <p>Tip Per Person: {isNaN(perPersonTip) ? '-' : `$${perPersonTip.toFixed(2)}`}</p>
    </>
  );
}

export default TipCalculator;