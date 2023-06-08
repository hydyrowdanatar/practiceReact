import React from "react";

const Spacer = (props) => {
  const { space } = props;
  return (
    <div>
      {new Array(space).fill(0).map((it, i) => {
        return <br key={i} />;
      })}
    </div>
  );
};

export default Spacer;
