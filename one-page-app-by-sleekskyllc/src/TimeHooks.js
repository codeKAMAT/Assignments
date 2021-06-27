import { addTime } from './TimeService'

export function useTimes([times, setTimes]) {
  return {
    times,
    addTime: (time) => setTimes(addTime(times, time)),
  }
}
