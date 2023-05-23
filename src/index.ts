import React from "react";

const ChildrenWrapper: React.FC<{ children: React.ReactElement[] }> = ({
  children,
}) => {
  return children.reduceRight((result, child) =>
    React.cloneElement(child, child.props, result)
  );
};

export default ChildrenWrapper;
