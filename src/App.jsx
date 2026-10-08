import { useState } from 'react';
import './App.css'

function CalcDisplay({dispValue}) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({buttonLabel, buttonClassName = 'Button', onClick}) {
  return (
    <div className={buttonClassName} onClick={(onClick)}>
      {buttonLabel}
    </div>
  );
}


function App() {
  const [disp, setDisp] = useState(0);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(value);
  }

  return (
    <div className='App'>
      <div className='Header'> Calculator of Karl Emmanuel S. Tinio - WMD3A </div>
      <div className='Calculator'>
        <CalcDisplay dispValue={disp}/>
        <div className='Keypad'>
          <CalcButton buttonLabel={7} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={8} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={9} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'/'} buttonClassName = 'SlashButton' onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={4} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={5} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={6} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'*'} buttonClassName = 'AsteriskButton' onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={1} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={2} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={3} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'-'} buttonClassName = 'MinusButton' onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'C'} buttonClassName = 'CButton' onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={0} onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'='} buttonClassName = 'EqualButton' onClick={buttonClickHandler}/>
          <CalcButton buttonLabel={'+'} buttonClassName = 'PlusButton' onClick={buttonClickHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App
