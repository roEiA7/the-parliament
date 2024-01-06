import { ITurnState } from "../interfaces/GameState.interface";

export const getRemainigTime = (turn: ITurnState) => {
  const currentTime = Date.now();
  const endTime = turn.startTime + turn.duration;
  const timeLeft = endTime - currentTime;

  return Math.max(0, timeLeft);
};

const toUnits = (time: number) => {
  return {
    tens: Math.floor(time / 10),
    ones: time % 10,
  };
};

// Function to calculate time until 22:30 PM tonight
export function getTimeUntil() {
  // Current date and time
  const now = new Date();

  // Target time (22:30) tonight
  const targetTime = new Date();
  targetTime.setHours(22, 30, 0, 0);

  // Calculate the time difference in milliseconds
  //@ts-ignore
  const timeDifference = targetTime - now;

  // Convert the time difference to hours, minutes, and seconds
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    hours: toUnits(hours),
    minutes: toUnits(minutes),
    seconds: toUnits(seconds),
  };
}
