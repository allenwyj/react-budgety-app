import React, { useState } from 'react';
import { NumberPadSection } from './number-pad.styles';
import { generateOutput, InputString } from './number-pad.utils';

type Props = {
  value: number;
  onChange: (value: number) => void;
  onOk: () => void;
};

const NumberPad: React.FC<Props> = props => {
  const [output, setOutput] = useState(props.value.toString());

  const displayOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 16) {
      newOutput = output.slice(0, 16);
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;

    if (text === 'OK') {
      props.onOk();
      displayOutput('');
      return;
    }

    if ('0123456789.c'.split('').concat(['Delete']).indexOf(text) >= 0) {
      displayOutput(generateOutput(text as InputString, output));
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
