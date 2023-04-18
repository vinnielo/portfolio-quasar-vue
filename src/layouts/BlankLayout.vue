<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <q-toolbar class="bg-black text-white shadow-2 row justify-between" >
      <q-btn-toggle
        v-model="model"
        flat
        stretch
        toggle-color="purple"
        :options="options1"
      />

      <q-btn to="about">
        <q-avatar
        size="xl"
        >
          <img src="../assets/avatarimg3.jpg" />
        </q-avatar>
      </q-btn>

      <q-btn-toggle
        v-model="model"
        flat
        stretch
        toggle-color="purple"
        :options="options"
      />
    </q-toolbar>

    <q-footer bordered class="bg-black text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        v-model="tab"
      >
        <q-tab to="#">
          <q-icon
          name="fa-brands fa-instagram"
          size="lg"
          />
        </q-tab>
        <q-tab to="#">
          <q-icon
          name="fa-brands fa-facebook"
          size="lg"
           />
        </q-tab>
        <q-tab to="#">
          <q-icon
          name="fa-brands fa-linkedin-in"
          size="lg"
          />
        </q-tab>
      </q-tabs>
    </q-footer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      model: ref("one"),

      options1: [
        { label: "About", value: "about", to: "about" },
        { label: "Work", value: "work", to: "work" },
      ],
      options: [
        { label: "Contact", value: "contact", to: "contact" },
        { label: "Resume", value: "resume", to: "work" },
      ],
    };
  },
};
</script>
