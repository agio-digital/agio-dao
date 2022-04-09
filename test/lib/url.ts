export const isValidUrl = (value?: string) => {
  try {
    return Boolean(new URL(value || ""));
  } catch (e) {
    return false;
  }
};
