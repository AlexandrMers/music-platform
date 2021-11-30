import React, { ReactNode } from "react";

function StepsContentViewer({
  config,
}: {
  config: {
    condition: boolean;
    render: () => ReactNode;
  }[];
}) {
  return (
    <>
      {config.map(({ condition, render }, index) => {
        return condition && <div key={index}>{render()}</div>;
      })}
    </>
  );
}

export default StepsContentViewer;
