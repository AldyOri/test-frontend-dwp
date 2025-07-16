import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  onComplete?: () => void;
}

export default function CountdownTimer({
  targetDate,
  className,
  onComplete,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (onComplete) onComplete();
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const padWithZero = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className={cn("flex items-center justify-center gap-x-2", className)}>
      <p className="flex w-16 flex-col items-center">
        <span className="text-sm font-medium">Days</span>
        <span className="text-4xl font-bold">{padWithZero(timeLeft.days)}</span>
      </p>

      <span className="mt-4 text-4xl font-bold">:</span>

      <p className="flex w-16 flex-col items-center">
        <span className="text-sm font-medium">Hours</span>
        <span className="text-4xl font-bold">
          {padWithZero(timeLeft.hours)}
        </span>
      </p>

      <span className="mt-4 text-4xl font-bold">:</span>

      <p className="flex w-16 flex-col items-center">
        <span className="text-sm font-medium">Minutes</span>
        <span className="text-4xl font-bold">
          {padWithZero(timeLeft.minutes)}
        </span>
      </p>

      <span className="mt-4 text-4xl font-bold">:</span>

      <p className="flex w-16 flex-col items-center">
        <span className="text-sm font-medium">Seconds</span>
        <span className="text-4xl font-bold">
          {padWithZero(timeLeft.seconds)}
        </span>
      </p>
    </div>
  );
}
