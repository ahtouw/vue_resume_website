<template>
  <v-sheet class="mb-16 mb-md-8 px-0" height="4rem">
    <v-container fluid class="py-0 px-0 position-fixed" style="z-index: 999">
      <v-row class="bg-light-green-lighten-5 mb-6" align="end">
        <v-col class="text-h3 text-center" lg="7">
          <span style="font-family: 'MontSerrat'" class="text-no-wrap">
            William
            <span class="font-weight-black">Ah Tou</span>
          </span>
        </v-col>
        <v-col align="center" lg="4" class="justify-center">
          <v-btn-group stacked density="comfortable">
            <!-- Home Button -->
            <!-- <v-btn to="/">
              <v-icon icon="mdi mdi-home" />
              <span class="d-none d-sm-flex pl-sm-1"> Home </span>
            </v-btn> -->

            <!-- Resume Button -->
            <v-btn to="/">
              <v-icon icon="mdi mdi-account" />
              <span class="d-none d-sm-flex pl-sm-1"> Resume </span>
            </v-btn>

            <!-- Project Button -->
            <v-menu open-on-hover open-delay="0">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                  <v-icon icon="mdi mdi-text-box" />
                  <span class="d-none d-sm-flex pl-sm-1"> Projects </span>
                  <v-icon icon="mdi mdi-chevron-down" />
                </v-btn>
              </template>

              <!-- Individual Projects -->
              <v-list density="compact" variant="flat">
                <v-list-item
                  v-for="project in projects"
                  :to="{
                    name: 'Projects',
                    params: { title: project.title_dash },
                  }"
                >
                  {{ project.title }}
                </v-list-item>
              </v-list>
            </v-menu>

            <v-divider class="mx-2" vertical role="presentation"></v-divider>
            <v-btn
              variant="plain"
              icon="mdi mdi-linkedin"
              href="https://www.linkedin.com/in/william-ah-tou-533a5192/"
            />
            <v-btn
              variant="plain"
              icon="mdi mdi-github"
              href="https://github.com/ahtouw"
            />
          </v-btn-group>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup>
import projectsData from "@/assets/projectsData.json";
import { computed } from "vue";
const projects = computed(() => {
  return projectsData.map((project) => {
    return {
      ...project,
      title_dash: project.title.replace(/\s+/g, "-"),
    };
  });
});
</script>
