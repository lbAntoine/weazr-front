<template>
  <section>
    <div class="histo-container">
      <div class="switch-container">
        <p class="toggleText" :class="{ active: !checked }">Semaine</p>
        <label class="switch">
          <input type="checkbox" v-model="checked" @change="onChange">
          <span class="slider round"></span>
        </label>
        <p class="toggleText" :class="{ active: checked }">24h</p>
      </div>
      <div class="boite">
        <BaBarChart v-if="!checked"/>
        <LiLineChart v-if="checked"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaBarChart from '../components/Charts/BaBarChart.vue'
import LiLineChart from '../components/Charts/LiLineChart.vue'

export default defineComponent({
  components: {
    BaBarChart,
    LiLineChart
  },
  props: {
    defaultChecked: {
      type: Boolean, default: false
    }
  },
  data() {
    return {
      checked: this.defaultChecked
    }
  },
  methods: {
    onChange () {
      this.$emit('input', this.checked)
    }
  },
})
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #3bb36d;
}

input:focus + .slider {
  box-shadow: 0 0 1px #3bb36d;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.switch-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.toggleText {
  color: aliceblue;
  margin: 1rem;
}

.histo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chart-container {
  height: 50vh;
  width: 92vw;
}
p {
  transition: 0.5s ease;
  font-size: 3em;
}
p.active {
  color: #3bb36d;
}

@media screen and (max-width: 480px) {
  p {
    font-size: 2em;
  }
}
</style>