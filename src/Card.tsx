import { memo } from "react";
import RenderCounter from "./RenderCounter";
import type { SpaceItem } from "./types";

type Props = {
  data: SpaceItem;
};

function Card({ data }: Props) {
  const { name, emoji } = data;

  return (
    <div className="card">
      <div className="card-emoji">{emoji}</div>
      <div className="card-name">{name}</div>
      <RenderCounter/>
    </div>
  );
}

export default memo(Card);
