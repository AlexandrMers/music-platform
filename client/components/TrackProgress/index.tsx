import React, { FC, memo } from "react";

interface TrackProgressPropsInterface {
  left: number;
  right: number;
  onChange: (e) => void;
}

const TrackProgress: FC<TrackProgressPropsInterface> = ({
  left,
  right,
  onChange,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {left} / {right}
      </div>
    </div>
  );
};

export default memo(TrackProgress);
