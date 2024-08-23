import { type ClassValue, clsx } from "clsx";
import { formatDistanceToNow, subMonths } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomRotation = () => {
  const isNegative = Math.random() < 0.5;
  const angle = Math.floor(Math.random() * 60);
  return isNegative ? -angle : angle;
};

export function formatRelativeDate(date = new Date()) {
  return formatDistanceToNow(date, { addSuffix: true });
}
