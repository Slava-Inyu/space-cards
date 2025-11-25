import { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import RenderCounter from "./RenderCounter";
import Card from "./Card";
import type { SpaceItem } from "./types";
import { fetchSpaceCards } from "./api";

const INITIAL_COUNT = 5;
const MAX_CARDS = 10;

function CardList() {
  const [cards, setCards] = useState<SpaceItem[]>([]);
  const [spacePool, setSpacePool] = useState<SpaceItem[]>([]);

  useEffect(() => {
    fetchSpaceCards((error, data) => {
      if (error) {
        console.error("Failed to fetch space cards:", error);
        return;
      }

      if (data) {
        setSpacePool(data);
        setCards(data.slice(0, INITIAL_COUNT));
      }
    });
  }, []);

  const handleAdd = useCallback(() => {
    setCards((prevState) => {
      if (prevState.length >= MAX_CARDS) {
        return prevState;
      }

      const usedNames = new Set(prevState.map(card => card.name));
      const availableItems = spacePool.filter(item => !usedNames.has(item.name));

      if (availableItems.length === 0) {
        return prevState;
      }

      const randomIndex = Math.floor(Math.random() * availableItems.length);
      const selectedItem = availableItems[randomIndex];
      const newItem: SpaceItem = {
        ...selectedItem,
        id: Date.now(),
      };

      return [newItem, ...prevState];
    });
  }, [spacePool]);

  const handleRemove = useCallback(() => {
    setCards((prevState) => {
      if (prevState.length === 0) {
        return prevState;
      }

      return prevState.slice(0, -1);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Space Explorer</h1>

      <div className="card-list">
        {cards.map((item) => (
          <Card data={item} />
        ))}
      </div>

      <div className="button-section">
        <Button onClick={handleAdd} theme="add" text="+" />
        <Button onClick={handleRemove} theme="remove" text="-" />
      </div>
      <RenderCounter/>
    </div>
  );
}

export default CardList;
