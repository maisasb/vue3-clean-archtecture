import { ref } from "vue";

import enUS from "./en_US";

export default function useLabel() {
  const language = ref("en_US");
  const setLanguage = (lang: string): void => {
    language.value = lang;
  };
  const getLabel = (label: string) => {
    const result = label
      .split(".")
      .reduce((value: any, entry: string) => value[entry], enUS);
    return result;
  };
  return {
    getLabel,
    setLanguage,
  };
}
