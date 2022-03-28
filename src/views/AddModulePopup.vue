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

</style>