<template>
  <div class="main-content">
    <div class="container-fluid">
      <div class="center">
        <img v-bind:src="$opensilex.getResourceURI('images/logo-sixtine.png')" alt="logo-sixtine" />
        <h2>{{$t('sixtine.welcome-message')}} <br/><br/> {{$t('sixtine.title')}}</h2>
      </div>
      <div class="inrae-logo center">
         <img
            v-bind:src="
              $opensilex.getResourceURI('images/logo-marque-inrae.png')
            "
            alt="inrae-logo"
          />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class DefaultHomeComponent extends Vue {}
</script>

<style scoped lang="scss">
.center {
    text-align: center;
}

.inrae-logo {
  margin-top: 20px;
}
</style>
