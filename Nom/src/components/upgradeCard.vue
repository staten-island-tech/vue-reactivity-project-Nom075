<template>
  <div
    class="relative w-full"
    @mouseenter="hover = true; updateTooltipPosition($event)"
    @mousemove="updateTooltipPosition($event)"
    @mouseleave="hover = false"
  >
    <button
      v-if="upgrade.X"
      class="h-25 w-full p-1 justify-items-center"
    >
      <div class="flex flex-col h-full w-full">
      </div>
    </button>
    <button
      v-else-if="upgrade.owned"
      class="bg-green-400 border-black border-2 h-25 w-full p-1 justify-items-center hover:bg-green-200"
    >
      <div class="flex flex-col h-full w-full">
        <div class="flex h-[80%] justify-center">
          <img :src="upgrade.image" alt="cook" />
        </div>
        <div class="h-[20%] w-auto text-center">
          <h2 class="text-xs">{{ upgrade.name }}</h2>
        </div>
      </div>
    </button>

    <button
      v-else-if="upgrade.unlocked() && currentCrumbs.lessThan(upgrade.price)"
      @click="purchaseCalculation(upgrade)"
      class="bg-red-700 h-25 border-2 border-black w-full p-1 justify-items-center hover:bg-red-400"
    >
      <div class="flex flex-col h-full w-full">
        <div class="flex h-[80%] justify-center">
          <img :src="upgrade.image" alt="cook" />
        </div>
        <div class="h-[20%] w-auto text-center">
          <h2 class="text-xs">{{ upgrade.name }}</h2>
        </div>
      </div>
    </button>

    <button
      v-else-if="upgrade.unlocked()"
      @click="purchaseCalculation(upgrade)"
      class="bg-yellow-200 border-black border-2 h-25 w-full p-1 justify-items-center hover:bg-yellow-100"
    >
      <div class="flex flex-col h-full w-full">
        <div class="flex h-[80%] justify-center">
          <img :src="upgrade.image" alt="cook" />
        </div>
        <div class="h-[20%] w-auto text-center">
          <h2 class="text-xs">{{ upgrade.name }}</h2>
        </div>
      </div>
    </button>

    <button
      v-else
      class="bg-white border-black border-2 h-25 w-full p-1 justify-items-center hover:bg-blue-300"
    >
      <div class="flex flex-col h-full w-full">
        <div class="flex h-full justify-center">
          <img src="/Lock.png" alt="cook" />
        </div>
      </div>
    </button>

    <Teleport to="body">
      <div v-if = "upgrade.unlocked() && hover"
        class="absolute w-60 p-2 bg-white text-black text-sm rounded z-50 pointer-events-none shadow-lg gap-1"
        :style="tooltipStyle"
      >
        <h2 class="text-lg font-bold text-center">{{ upgrade.name }}</h2>
        <p class = "text-center italic">"{{ upgrade.description }}"</p>
        <p class = "text-center text-green-600">{{ upgrade.usefulDes }}</p>
        <p class = "text-center">Cost {{ format(upgrade.price)}} crumbs.</p>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { currentCrumbs, purchasedUpgrades, calculateLPS, format } from "@/router/cookieVariables";

//  <---------GPT: Mr. Whalen if u quiz me on this idk what this does. I just know it works.----------->

const hover = ref(false);
const tooltipX = ref(0);
const tooltipY = ref(0);

// reactive style for tooltip positioning
const tooltipStyle = ref({ top: "0px", left: "0px" });

// Update tooltip position dynamically based on cursor
function updateTooltipPosition(event) {
  tooltipX.value = event.clientX;
  tooltipY.value = event.clientY - 120; // slightly above cursor

  tooltipStyle.value = {
    top: `${tooltipY.value}px`,
    left: `${tooltipX.value - 96}px`, // center tooltip (tooltip width = 192px)
  };
}

//  <---------End of GPT----------->

function purchaseCalculation(upgrade) {
  if (currentCrumbs.value.greaterThanOrEqualTo(upgrade.price) && !upgrade.owned) {
    currentCrumbs.value = currentCrumbs.value.minus(upgrade.price);
    purchasedUpgrades.value.push(upgrade.name);
    upgrade.owned = true;
    upgrade.boost();
    calculateLPS();
  }
}

defineProps({
  upgrade: {
    type: Object,
    required: true,
  },
});
</script>


<style lang="scss" scoped>

</style>