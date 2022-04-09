import { reactive, ref, watch } from "vue";

const namespace = "agio-dao:";

export const useLocalStorageRef = <T>(key: string, defaultValue?: T) => {
  const init = localStorage.getItem(namespace + key);

  const tryParse = (value?: string | null) => {
    try {
      return JSON.parse(value || "");
    } catch {
      return;
    }
  };

  const tryStringify = <T = any>(value: T) => {
    try {
      return JSON.stringify(value);
    } catch {
      return "";
    }
  };

  const variable = ref<T>(tryParse(init) ?? defaultValue);

  watch(
    () => variable.value,
    (to) => {
      localStorage.setItem(namespace + key, tryStringify(to));
    },
    { deep: true, immediate: true }
  );

  return variable;
};

export const useLocalStorageReactive = <T extends Record<string, any>>(
  key: string,
  defaultValue: T
) => {
  const init = localStorage.getItem(namespace + key);
  const variable = reactive<T>(init ? JSON.parse(init) : defaultValue);

  watch(
    () => variable,
    (to) => {
      localStorage.setItem(namespace + key, JSON.stringify(to));
    },
    { deep: true, immediate: true }
  );

  return variable;
};

export const useLocalStorageRaw = <T>(key: string) => {
  const cached = localStorage.getItem(namespace + key);
  const set = (value?: T) => {
    localStorage.setItem(namespace + key, JSON.stringify(value));
    return value;
  };
  const get = (defaultValue?: T) => {
    if (cached) {
      return JSON.parse(cached);
    } else {
      set(defaultValue);
      return defaultValue;
    }
  };

  return {
    get,
    set,
  };
};

export default useLocalStorageRef;
