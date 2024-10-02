<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePlayer } from "@vue-youtube/core";
import SectionText from "@/components/section-text.vue";

const open      = ref(false),
	  playerOne = ref(null),
	  playerTwo = ref(null);

// Instead of "onMounted" we could have another method responsible for loading on demand
onMounted(() => {
	const { onReady } = usePlayer("dQw4w9WgXcQ", playerOne, {
		width : "100%",
		height: "100%"
	});

	onReady((event) => {
		event.target.playVideo();
	});
});

const openModal = () => {

	const { onReady } = usePlayer("dQw4w9WgXcQ", playerTwo, {
		width : "100%",
		height: "100%"
	});

	onReady((event) => {
		event.target.playVideo();
	});

	open.value = true;
};
</script>

<template>
<section-text/>

<button
	@click.prevent="openModal()"
>
	Open
</button>

<div
	id="modal"
	v-if="open"
	@click="open = false"
>
	<div
		class="content"
		@click.stop
	>
		<div ref="playerTwo"/>
	</div>
</div>

<div ref="playerOne"/>

</template>