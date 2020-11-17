import React from 'react';

// import all svg files and require them from a folder
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

// name can be optional
type Props = {
  name?: string;
};

const Icon: React.FC<Props> = props => {
  return (
    <svg className="icon">
      {
        // render the svg when props.name has value
      }
      {props.name && <use xlinkHref={`#${props.name}`} />}
    </svg>
  );
};

export default Icon;
