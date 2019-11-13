<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button
          class="btn btn-primary"
          @click="selectedComponent = 'appBlue'"
        >Load Blue Template</button>
        <button
          class="btn btn-success"
          @click="selectedComponent = 'appGreen'"
        >Load Green Template</button>
        <button
          class="btn btn-danger"
          @click="selectedComponent = 'appRed'"
        >Load Red Template</button>
        <hr>
        <component :is="selectedComponent">
          <p>Hello from child component</p>
        </component>
        <!-- or below content
        <app-red>
          <p>Hello from red</p>
        </app-red>
        <app-green>
          <p>Hello from green</p>
        </app-green>
        <app-blue>
          <p>Hello from blue</p>
        </app-blue> -->
      </div>
    </div>
  </div>
</template>

<script>
import Red from './components/Red';
import Green from './components/Green';
import Blue from './components/Blue';

export default {
  data: function () {
    return {
      selectedComponent: 'appRed'
    }
  },
  components: {
    'appRed': Red,
    'appGreen': Green,
    'appBlue': Blue
  }
}
</script>

<style>
</style>
