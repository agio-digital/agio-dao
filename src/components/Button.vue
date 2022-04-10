<template>
  <a
    v-if="$attrs.href"
    v-bind="$attrs"
    :class="getClass($attrs)"
    target="_blank"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    v-bind="$attrs"
    :class="getClass($attrs)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { ButtonHTMLAttributes, defineComponent, PropType, SetupContext, toRefs } from "vue";

interface Data {
  [key: string]: string;
}

export default defineComponent({
  inheritAttrs: false,
  props: {
    type: {
      required: false,
      type: String as PropType<ButtonHTMLAttributes["type"]>,
      default: "button"
    },
    size: {
      required: false,
      type: String as PropType<"2xs" | "xxs" | "xs" | "s" | "sm" | "m" | "md" | "lg">,
    },
    variant: {
      required: false,
      type: String as PropType<"secondary" | "tertiary" | "primary" | "alternative" | "link" | "brand" | "success">,
    },
    display: {
      required: false,
      type: String as PropType<"block" | "inline-block" | "inline">,
    },
  },
  setup(props) {
    const { variant, size, display } = toRefs(props);
    const baseClasses =
      "uppercase font-semibold text-center rounded px transition duration-150 appearance-none outline-none hover:shadow-md";

    const variants: Data = {
      "": "bg-sky-500 hover:bg-sky-600 text-white",
      primary: "bg-sky-500 hover:bg-sky-600 text-white",
      secondary: "bg-slate-200 hover:bg-slate-500 hover:text-white text-slate-700",
      alternative: "bg-slate-500 hover:bg-slate-600 text-white",
      brand: "bg-rose-900 hover:bg-rose-800 text-white font-brand",
      success: "bg-teal-400 hover:bg-teal-500 text-white font-brand",
      red: "bg-rose-700 hover:bg-rose-800 text-white",
      tertiary: "bg-teal-500 hover:bg-teal-600 text-white",
      link: "font-medium transition text-sky-500 underline hover:text-sky-700"
    };

    const sizes: Data = {
      "": "px-3 py-4 text-sm font-brand",
      "2xs": "px-3 md:px-2 py-1 text-xs normal-case	",
      xs: "px-3 md:px-4 py-2 text-xs",
      xxs: "px-3 md:px-3 py-1.5 text-2xs",
      s: "text-sm py-2.5 font-brand",
      sm: "text-sm py-3 font-brand",
      m: "text-base py-3.5 font-brand",
      md: "text-md py-4 font-brand",
    };

    const displays: Data = {
      "": "block w-full",
      "inline-block": "inline-block",
      inline: "inline",
    };

    const getClass = (attrs: SetupContext["attrs"]) => {
      if (variant.value === "link") return variants["link"];
      return `${baseClasses} ${variants[variant.value ?? ""]} ${displays[display.value ?? ""] || ""
        } ${sizes[size.value ?? ""] || ""} ${attrs?.class ?? ""} ${attrs?.disabled || attrs?.disabled === ""
          ? "opacity-60 pointer-events-none"
          : ""
        }`;
    }

    return {
      getClass,
    };
  },
});
</script>
