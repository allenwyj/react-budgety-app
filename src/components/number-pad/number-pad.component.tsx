import React, { useState } from 'react';
import { NumberPadSection } from './number-pad.styles';

const NumberPad: React.FC = () => {
  const [output, _setOutput] = useState<string>('0');

  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        output === '0' ? setOutput(text) : setOutput(output + text);
        break;
      case 'Delete':
        output.length === 1
          ? setOutput('0')
          : setOutput(output.slice(0, output.length - 1));
        break;
      case 'c':
        setOutput('0');
        break;
      case 'OK':
        break;
      case '.':
        if (output.indexOf('.') >= 0) return;
        setOutput(output + '.');
        break;
    }
  };

  return (
    <NumberPadSection>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Delete</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>c</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </NumberPadSection>
  );
};

export default NumberPad;
