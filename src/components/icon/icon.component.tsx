import React from 'react';

// import all svg files and require them from a folder
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Name = string;

const Icon = ({ name }: { name: Name }) => {
  return (
    <svg className="icon">
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
