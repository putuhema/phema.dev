"use client";

import { RefObject, useEffect, useState } from "react";
import useMaxZIndex from "@/hooks/useMaxZIndex";
import { cn, getRandomRotation } from "@/lib/utils";
import { motion, type PanInfo, useAnimation } from "framer-motion";
import React from "react";

const Drag = React.memo(
  ({
    children,
    className,
    initialX,
    initialY,
    parentRef,
    ...props
  }: {
    children: React.ReactNode;
    parentRef?: RefObject<HTMLDivElement>;
    className?: string;
    initialX?: number;
    initialY?: number;
  }) => {
    const [zIndex, updateZIndex] = useMaxZIndex();
    const controls = useAnimation();
    const [position, setPosition] = useState({ x: initialX ?? 0, y: initialY ?? 0 });
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
      const getRandomRotation = () => Math.floor(Math.random() * 60) - 30;
      const getRandomPosition = () => {
        if (parentRef?.current) {
          const { width, height } = parentRef.current.getBoundingClientRect();
          return {
            x: initialX ?? Math.floor(Math.random() * (width - 100)),
            y: initialY ?? Math.floor(Math.random() * (height - 100)),
          };
        }
        return {
          x: initialX ?? Math.floor(Math.random() * 1000),
          y: initialY ?? Math.floor(Math.random() * 1000),
        };
      };

      const randomRotation = getRandomRotation();
      const randomPosition = getRandomPosition();

      setRotation(randomRotation);
      setPosition(randomPosition);
      controls.start({ rotate: randomRotation, x: randomPosition.x, y: randomPosition.y });
    }, [initialX, initialY, parentRef, controls]);

    const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
      const direction = info.offset.x > 0 ? 1 : -1;
      const velocity = Math.min(Math.abs(info.velocity.x), 1);

      controls.start({
        rotate: rotation + velocity * 40 * direction,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 30,
          mass: 1,
          restDelta: 0.001,
        },
      });
    };

    return (
      <motion.div
        drag
        dragElastic={0.2}
        dragConstraints={parentRef}
        className={cn(
          "select-none w-fit h-fit drag-elements absolute",
          className
        )}
        dragTransition={{ power: 0.2, timeConstant: 200 }}
        onMouseDown={updateZIndex}
        onTouchStart={updateZIndex}
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={false}
        style={{
          zIndex,
          x: position.x,
          y: position.y,
          rotate: rotation,
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

export default Drag;