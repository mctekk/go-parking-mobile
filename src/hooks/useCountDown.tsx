// Modules
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react';


interface ITimerProps {
  started?: number | null;
  lastInterval?: number | null;
  timeToCount?: number;
  timeLeft?: number;
  requestId?: number;
}

/**
 * Custom hook to create a countdown timer.
 *
 * @param {number} [timeToCount=60000] - The total time to count down from in milliseconds. Default is 60 seconds.
 * @param {number} [interval=1000] - The interval in milliseconds at which the countdown updates. Default is 1 second.
 * @returns {[number, { start: (ttc?: number) => void, pause: () => void, resume: () => void, reset: () => void }]} - An array containing the time left and an object with control actions.
 *
 * @example
 * const [timeLeft, { start, pause, resume, reset }] = useCountDown(30000, 1000);
 *
 * useEffect(() => {
 *   start();
 * }, [start]);
 *
 * return (
 *   <div>
 *     <p>Time left: {timeLeft}ms</p>
 *     <button onClick={pause}>Pause</button>
 *     <button onClick={resume}>Resume</button>
 *     <button onClick={reset}>Reset</button>
 *   </div>
 * );
 */

const useCountDown = (timeToCount = 60 * 1000, interval = 1000) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const timer = useRef<ITimerProps>({});

  const run = (ts) => {
    if (!timer.current.started) {
      timer.current.started = ts;
      timer.current.lastInterval = ts;
    }

    const localInterval = Math.min(interval, timer.current.timeLeft || Infinity);
    if (ts - timer.current.lastInterval >= localInterval) {
      timer.current.lastInterval += localInterval;
      setTimeLeft((timeLeft) => {
        timer.current.timeLeft = timeLeft - localInterval;
        return timer.current.timeLeft;
      });
    }

    if (ts - timer.current.started < timer.current.timeToCount) {
      timer.current.requestId = window.requestAnimationFrame(run);
    } else {
      timer.current = {};
      setTimeLeft(0);
    }
  };

  const start = useCallback(
    (ttc) => {
      window.cancelAnimationFrame(timer.current.requestId);

      const newTimeToCount = ttc !== undefined ? ttc : timeToCount;
      timer.current.started = null;
      timer.current.lastInterval = null;
      timer.current.timeToCount = newTimeToCount;
      timer.current.requestId = window.requestAnimationFrame(run);

      setTimeLeft(newTimeToCount);
    },
    [timeToCount]
  );

  const pause = useCallback(() => {
    window.cancelAnimationFrame(timer.current.requestId);
    timer.current.started = null;
    timer.current.lastInterval = null;
    timer.current.timeToCount = timer.current.timeLeft;
  }, []);

  const resume = useCallback(() => {
    if (!timer.current.started && timer.current.timeLeft > 0) {
      window.cancelAnimationFrame(timer.current.requestId);
      timer.current.requestId = window.requestAnimationFrame(run);
    }
  }, []);

  const reset = useCallback(() => {
    if (timer.current.timeLeft) {
      window.cancelAnimationFrame(timer.current.requestId);
      timer.current = {};
      setTimeLeft(0);
    }
  }, []);

  const actions = useMemo(() => ({ start, pause, resume, reset }), [start, pause, resume, reset]);

  useEffect(() => {
    return () => window.cancelAnimationFrame(timer.current.requestId);
  }, []);

  return [timeLeft, actions];
};

export default useCountDown;
