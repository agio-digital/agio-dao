import { get } from "lodash";

export const parseErrorMessage = (
  error: any,
  defaultMessage = "Something went wrong"
) => {
  const startString =
    "Error: VM Exception while processing transaction: reverted with reason string '";
  const messageNested: string = get(error, "data.message") || "";
  const messageNestedParsed = messageNested.startsWith(startString)
    ? "Error: " + messageNested.split(startString)[1].slice(0, -1)
    : messageNested;
  const message: string = get(error, "message") || "";
  return messageNestedParsed || message || defaultMessage;
};
