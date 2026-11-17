import { useState, useEffect, useRef, useCallback } from 'react';

// Use characters of relatively uniform visual metrics
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$*';

export function useScramble(text, enabled = true, speed = 25) {
  const [displayText, setDisplayText] = useState(text);
  const isScramblingRef = useRef(false);
  const timeoutRef = useRef(null);
  const hardStopTimerRef = useRef(null);

  const scramble = useCallback(() => {
    // If already scrambling, don't overlap
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hardStopTimerRef.current) clearTimeout(hardStopTimerRef.current);

    let frame = 0;
    const length = text.length;

    // Safety hard stop: strictly terminate animation well before 1 second (max 650ms)
    hardStopTimerRef.current = setTimeout(() => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setDisplayText(text);
      isScramblingRef.current = false;
    }, 650);

    const update = () => {
      let output = '';
      let complete = 0;

      for (let i = 0; i < length; i++) {
        if (text[i] === ' ') {
          output += ' ';
          complete++;
          continue;
        }

        // Each letter resolves progressively
        if (frame >= (i + 1) * 2) {
          output += text[i];
          complete++;
        } else {
          output += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplayText(output);

      if (complete < length) {
        frame++;
        timeoutRef.current = setTimeout(update, speed);
      } else {
        // Animation finished naturally
        setDisplayText(text);
        isScramblingRef.current = false;
        if (hardStopTimerRef.current) clearTimeout(hardStopTimerRef.current);
      }
    };

    update();
  }, [text, speed]);

  useEffect(() => {
    if (enabled) {
      scramble();
    } else {
      setDisplayText(text);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hardStopTimerRef.current) clearTimeout(hardStopTimerRef.current);
      isScramblingRef.current = false;
    };
  }, [text, enabled, scramble]);

  return { displayText, triggerScramble: scramble, isScrambling: isScramblingRef.current };
}
