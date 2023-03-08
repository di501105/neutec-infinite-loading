<template>
  <a-config-provider>
    <div class="p-4 space-y-4">
      <div class="font-bold text-3xl">Kuro Hsu Repo list:</div>
      <div
        v-for="item in repoList"
        :key="item.id"
        class="shadow-lg rounded-lg space-y-2 p-4 min-h-[142px] flex flex-col justify-center"
      >
        <div class="font-bold text-lg">
          {{ item.name }}
        </div>
        <div v-show="item.description">
          {{ item.description }}
        </div>
        <a
          class="font-semibold inline-block"
          :href="item.html_url"
          target="_blank"
        >
          {{ item.html_url }}
        </a>
      </div>
      <infinite-loading :distance="1" @infinite="infiniteHandler" />
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import debounce from 'lodash/debounce';
import InfiniteLoading from 'infinite-loading-vue3-ts';
import { defineComponent, ref } from 'vue';

import { getUserRepo } from '@/api/repos';

export default defineComponent({
  name: 'App',
  components: {
    InfiniteLoading,
  },
  setup: () => {
    /**
     * data
     */
    const repoList = ref<any>([]);
    const pageNumber = ref<number>(6);
    /**
     * mehtods
     */
    const infiniteHandler = debounce(async ($state: any): Promise<void> => {
      const params = {
        user: 'kurotanshi',
        pageNumber: pageNumber.value,
      };
      const res = await getUserRepo(params);

      if (res.length) {
        repoList.value = [];
        pageNumber.value += 6;
        repoList.value.push(...res);
        setTimeout(() => {
          $state.loaded();
        }, 1000);
      } else {
        $state.complete();
      }
    }, 500);
    return {
      infiniteHandler,
      repoList,
    };
  },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @apply bg-white min-h-full;
}
</style>
