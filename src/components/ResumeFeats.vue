<template>
  <v-card
    flat
    class="text-start mx-auto"
    style="font-size: 2rem; font-weight: bold"
    :max-width="isJob ? 700 : 550"
  >
    {{ props.title }}
  </v-card>
  <v-divider
    color="success"
    :length="isJob ? 700 : 550"
    thickness="4"
    class="mx-auto mb-2"
  />
  <template v-for="feat in filteredFeats">
    <v-card
      :class="props.color"
      class="mx-auto pb-2 mb-3"
      :max-width="isJob ? 700 : 550"
      min-width="400"
      density="comfortable"
      :variant="isAbout ? 'flat' : 'tonal'"
    >
      <v-card-title primary-title class="font-weight-bold pb-0">
        {{ feat.title }}
        <v-btn
          v-if="isProject"
          icon="mdi-page-next"
          size="x-small"
          variant="plain"
          :ripple="false"
          :to="{
            name: 'Projects',
            params: { title: replaceSpaces(feat.title) },
          }"
        />
      </v-card-title>
      <v-card-subtitle class="font-weight-bold mb-1">
        {{ feat.date }}
      </v-card-subtitle>
      <v-card-subtitle class="font-weight-bold">
        {{ feat.company }}
      </v-card-subtitle>
      <v-card-text
        v-for="detail in feat.details"
        class="pt-1 pb-1"
        :class="isAbout ? 'text-subtitle-1' : ''"
      >
        <v-icon v-if="!isAbout" icon="mdi-rhombus-medium-outline" />
        <span style="font-family: 'MontSerrat'">
          {{ detail }}
        </span>
      </v-card-text>
    </v-card>
  </template>
</template>

<script setup>
import feats from "@/assets/featData.json";
import { computed } from "vue";
const props = defineProps({
  color: { type: String, required: false, default: "bg-light-green-lighten-3" },
  title: { type: String, required: true },
  type: { type: String, required: true },
});
const filteredFeats = computed(() => {
  return feats.filter((feat) => feat.type === props.type);
});

const isAbout = computed(() => {
  return props.type === "about";
});
const isJob = computed(() => {
  return props.type === "job";
});
const isProject = computed(() => {
  return props.type === "project";
});

const replaceSpaces = (text) => {
  return text.replace(/\s+/g, "-");
};
</script>
