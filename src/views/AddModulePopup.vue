<template>
  <button @click="() => TogglePopup('buttonTrigger')">Add Module</button>
  <AddModule v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')"/>
</template>

<script>
import { ref } from 'vue';
import AddModule from '../components/AddModule.vue'
export default {
    data(){
        return
    },
    components: {
        AddModule,
    },
    setup () {
		const popupTriggers = ref({
			buttonTrigger: false,
		});
		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}
		return {
			AddModule,
			popupTriggers,
			TogglePopup
		}
	}
}
</script>

<style scoped>
button{
  border-radius: 5px;
  background: #308C05;
  border: 0.5px solid #000000;
  cursor: pointer;
  color: white;
  box-sizing: border-box;
  width: 100px;
  height: 25px;
  font-size: 12px;
  font-family: 'M PLUS Rounded 1c';
  font-weight: 500;
}
</style>