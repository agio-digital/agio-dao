import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

dayjs.locale("en");
dayjs.locale("pt-br");

export type Dayish = undefined | string | number | Date | null | dayjs.Dayjs;

export const fromNow = (dayish: Dayish) => dayjs(dayish).fromNow();

export const formatMs = (ms: number) => {
  const seconds = (ms / 1000).toFixed(1);
  const minutes = (ms / (1000 * 60)).toFixed(1);
  const hours = (ms / (1000 * 60 * 60)).toFixed(1);
  const days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
  if (+seconds < 60) return seconds + " Sec";
  else if (+minutes < 60) return minutes + " Min";
  else if (+hours < 24) return hours + " Hrs";
  else return days + " Days";
};

export default dayjs;
