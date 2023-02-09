import { useState } from "react";

export function useTrait(initialValue) {
  const [trait, updateTrait] = useState(initialValue);
  let current = trait;

  // console.log("trait", current);
  const get = () => current;

  const set = (newValue) => {
    current = newValue;
    updateTrait(newValue);
    return current;
  };

  return {
    get,
    set,
  };
}
