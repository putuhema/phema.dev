"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FollowerPointerCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const firstPoints = [
    { x: 10, y: 180 },
    { x: 10, y: 20 },
    { x: 550, y: 20 },
    { x: 10, y: 20 },
    { x: 10, y: 180 },
  ];
  const secondPoints = [
    { x: 440, y: 80 },
    { x: 440, y: 120 },
    { x: 440, y: 120 },
    { x: 260, y: 120 },
  ];
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [currentPoint, setCurrentPoint] = React.useState(0);
  const [secondPoint, setSecondPoint] = React.useState(0);
  const [rect, setRect] = React.useState<DOMRect | null>(null);

  const firstX = useSpring(firstPoints[currentPoint].x, {
    stiffness: 300,
    damping: 30,
  });
  const firstY = useSpring(firstPoints[currentPoint].y, {
    stiffness: 300,
    damping: 30,
  });
  const secondX = useSpring(secondPoints[secondPoint].x, {
    stiffness: 300,
    damping: 30,
  });
  const secondY = useSpring(secondPoints[secondPoint].y, {
    stiffness: 300,
    damping: 30,
  });

  const updateCurrentPoint = React.useCallback(() => {
    setCurrentPoint((currentPoint + 1) % firstPoints.length);
  }, [currentPoint, firstPoints?.length]);

  const updateSecondPoint = React.useCallback(() => {
    setSecondPoint((secondPoint + 1) % secondPoints.length);
  }, [secondPoint, secondPoints?.length]);

  React.useEffect(() => {
    const invervalId2 = setInterval(updateSecondPoint, 2000);

    return () => {
      clearInterval(invervalId2);
    };
  }, [updateSecondPoint]);

  React.useEffect(() => {
    const invervalId1 = setInterval(updateCurrentPoint, 2000);

    return () => {
      clearInterval(invervalId1);
    };
  }, [updateCurrentPoint]);

  firstX.set(firstPoints[currentPoint].x);
  firstY.set(firstPoints[currentPoint].y);

  secondX.set(secondPoints[secondPoint].x);
  secondY.set(secondPoints[secondPoint].y);

  React.useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence mode="wait">
        <FollowPointer x={firstX} y={firstY} title="Putu" />
        <FollowPointer x={secondX} y={secondY} title="Mahendra" />
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
  color?: string;
}) => {
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className={cn(
          "h-6 w-6 text-background transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-zinc-200",
        )}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={
          "px-2 py-2 bg-background text-foreground border border-zinc-300/40 whitespace-nowrap min-w-max text-xs rounded-full"
        }
      >
        {title || "Putu Mahendra"}
      </motion.div>
    </motion.div>
  );
};
