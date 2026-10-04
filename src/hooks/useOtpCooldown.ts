import { useCallback, useEffect, useState } from "react";

/** Counts down once per second after `start()`; `remaining` is 0 when idle. */
export function useOtpCooldown(seconds = 30) {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    if (remaining <= 0) return;
    const id = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(id);
  }, [remaining]);

  const start = useCallback(() => setRemaining(seconds), [seconds]);
  const reset = useCallback(() => setRemaining(0), []);

  return { remaining, start, reset };
}
