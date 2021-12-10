import React, { FC, memo } from "react";

interface TrackProgressPropsInterface {
  left: number;
  right: number;
  onChange: (e) => void;
  formatView?: (value: number) => string;
}

const TrackProgress: FC<TrackProgressPropsInterface> = ({
  left,
  right,
  formatView,
  onChange,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {formatView ? formatView(left) : left} /{" "}
        {formatView ? formatView(right) : right}
      </div>
    </div>
  );
};

export default memo(TrackProgress);
