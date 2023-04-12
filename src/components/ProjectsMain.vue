<template>
  <!-- Todo: Have a redirect to NotFound.vue instead of if/else -->
  <template v-if="!project">
    <div style="text-align: center">Page not found.</div>
  </template>
  <template v-else>
    <v-sheet max-width="900" class="mx-auto">
      <v-card flat class="mx-auto">
        <v-card-title
          class="text-center text-h5 text-sm-h4"
          style="font-weight: bold"
        >
          <span style="font-family: 'MontSerrat'">
            {{ project.title }}
          </span>
        </v-card-title>
        <v-divider
          color="success"
          length="550"
          thickness="4"
          class="mx-auto mb-2 border-opacity-25"
        />
        <v-card-subtitle
          class="text-center"
          style="font-size: 1rem; font-weight: bold"
        >
          {{ project.date }}
        </v-card-subtitle>
        <v-card-text>
          {{ project.intro.text }}
        </v-card-text>
      </v-card>

      <v-card flat class="bg-light-green-lighten-3">
        <v-card-title
          primary-title
          style="font-size: 1.8rem; font-weight: bold"
        >
          {{ project.goal.title }}
          <v-divider
            color="success"
            length="550"
            thickness="4"
            class="mb-2 border-opacity-25"
          />
        </v-card-title>
        <v-card-text>
          {{ project.goal.text }}
        </v-card-text>
      </v-card>

      <v-card flat>
        <v-card-title
          primary-title
          style="font-size: 1.8rem; font-weight: bold"
        >
          {{ project.architecture.title }}
          <v-divider
            color="success"
            length="550"
            thickness="4"
            class="mb-2 border-opacity-25"
          />
        </v-card-title>
        <v-card-text>
          {{ project.architecture.text }}
        </v-card-text>
        <v-img
          :src="`/img/${project.architecture.image}`"
          :alt="project.architecture.image"
          max-width="400"
          class="mx-auto mb-5"
        />
      </v-card>

      <v-card flat class="bg-light-green-lighten-3">
        <v-card-title
          primary-title
          style="font-size: 1.8rem; font-weight: bold"
        >
          {{ project.steps.title }}
          <v-divider
            color="success"
            length="550"
            thickness="4"
            class="mb-2 border-opacity-25"
          />
        </v-card-title>
        <v-card
          v-for="step in project.steps.step"
          flat
          class="bg-light-green-lighten-3"
        >
          <v-card-title
            primary-title
            style="font-size: 1.2rem; font-weight: bold"
          >
            {{ step.title }}
          </v-card-title>

          <v-card-text>
            <div v-html="formatStepText(step.text)"></div>
          </v-card-text>
        </v-card>
      </v-card>

      <v-card flat>
        <v-card-title
          primary-title
          style="font-size: 1.8rem; font-weight: bold"
        >
          {{ project.conclusion.title }}
          <v-divider
            color="success"
            length="550"
            thickness="4"
            class="mb-2 border-opacity-25"
          />
        </v-card-title>

        <v-card-text>
          {{ project.conclusion.text }}
        </v-card-text>
      </v-card>
    </v-sheet>
  </template>
</template>

<script setup>
import projectsData from "@/assets/projectsData.json";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const project = computed(() => {
  return projectsData.find(
    (project) => project.title.replace(/\s+/g, "-") === route.params.title
  );
});
function formatStepText(text) {
  return text.replace(
    /```([\s\S]*?)```/g,
    "<code  class='bg-light-green-lighten-2 px-1'>$1</code>"
  );
}
function getImgUrl(pic) {
  return require("../assets/" + pic);
}
</script>
