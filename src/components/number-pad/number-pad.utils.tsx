export type InputString =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '.'
  | 'c'
  | 'Delete'
  | 'OK';

export const generateOutput = (text: InputString, output: string) => {
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
      output === '0' ? (output = text) : (output = output + text);
      break;
    case 'Delete':
      output.length === 1 ? (output = '') : (output = output.slice(0, -1));
      break;
    case 'c':
      output = '';
      break;
    case 'OK':
      break;
    case '.':
      if (output.indexOf('.') >= 0) return output;
      output = output + '.';
      break;
  }

  return output;
};
