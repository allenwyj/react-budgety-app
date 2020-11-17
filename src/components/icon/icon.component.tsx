import React from 'react';
import classnames from 'classnames';

// import all svg files and require them from a folder
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

// name can be optional
interface Props {
  name?: string;
  className?: string;
  [x: string]: any;
}

const Icon: React.FC<Props> = props => {
  const { name, children, className, ...rest } = props;
  return (
    <svg className={classnames('icon', className)} {...rest}>
      {
        // render the svg when props.name has value
      }
      {name && <use xlinkHref={`#${name}`} />}
    </svg>
  );
};

export default Icon;
