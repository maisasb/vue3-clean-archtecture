<template>
  <input :type="type" :value="value" @input="setValue" />
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      required: true,
    },
  },
  emits: ["input"],
  setup(props, ctx) {
    const setValue = (event) => {
      ctx.emit("input", event.target.value);
    };

    return {
      setValue,
    };
  },
};
</script>
