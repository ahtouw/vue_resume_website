<template>
  <v-container fluid class="px-0 pt-0 mx-auto" style="max-width: 1300px">
    <v-row>
      <v-col>
        <Feats title="About" type="about" color="" />
        <Feats
          title="Projects"
          type="project"
          color="bg-light-green-lighten-3"
        />
        <Feats
          title="Certificates"
          type="cert"
          color="bg-light-green-lighten-2"
        />
      </v-col>
      <v-col>
        <Feats title="Jobs" type="job" color="bg-light-green-lighten-1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Feats from "@/components/ResumeFeats.vue";
</script>
