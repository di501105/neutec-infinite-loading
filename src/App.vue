<template>
  <a-config-provider>
    <div>123123</div>
  </a-config-provider>
</template>

<script lang="ts">
// import _ from 'lodash'
import { defineComponent, onBeforeMount } from 'vue'

// import { getUserRepo } from '@/api/repos'

// const { MODE } = import.meta.env

export default defineComponent({
  name: 'App',
  setup: () => {
    /**
     * data
     */
    // const component = ref<string>('DefaultPage')
    /**
     * mehtods
     */
    // const toGetUserInfo = () => {
    //   if (_.isEmpty(auth.currentUser)) {
    //     toGetCurrentUser()
    //   }
    //   if (_.isEmpty(auth.profileInfo)) {
    //     toGetProfileInfo()
    //   }
    //   if (_.isEmpty(network.companyInfo)) {
    //     toGetCompanyInfo()
    //   }
    // }
    // const toGetCurrentUser = async (): Promise<void> => {
    //   const res = await getUserInfo()
    //   if (res?.success) {
    //     auth.setCurrentUser(res.data)
    //   }
    // }
    // const toGetProfileInfo = async (): Promise<void> => {
    //   const res = await getProfileInfo()
    //   if (res?.success) {
    //     auth.setProfileInfo(res.data)
    //   }
    // }
    // const toGetCompanyInfo = async (): Promise<void> => {
    //   const res = await getCompanyInfo()
    //   if (res?.success) {
    //     network.setCompanyInfo(res.data)
    //   }
    // }
    onBeforeMount(() => {
      //
    })
  }
})
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @apply bg-stone-100 min-h-full;
}
</style>
