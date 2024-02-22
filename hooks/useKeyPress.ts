import * as React from "react";

type Callback = (event: KeyboardEvent) => void;

export const useKeyPress = (keyCodes: string[], callback: Callback) => {
  React.useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (keyCodes.includes(event.code)) {
        callback(event);
      }
    };

    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [keyCodes, callback]);
};
