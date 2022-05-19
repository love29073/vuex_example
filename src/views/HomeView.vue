<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">    
    <div>
      <button class="btn" @click="openModal">Open Modal</button>
    </div>
    <Popup v-model="modalOpen">
      <h3 slot="header">{{ popupTitle }}</h3>    
      <p slot="body">{{ popupContent }}</p>
    </Popup>
  </div>
</template>

<script>
// @ is an alias to /src
import Popup from "@/components/Popup.vue";

export default {
  name: 'HomeView',
  components: {
    Popup
  },
  data: () => ({
    modalOpen: false,
    popupTitle: '自定義標題',
    popupContent: '自定義內容'
  }),
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    }  
  },
}
</script>

<style scoped lang="scss">
button{
  margin: 10px;
  border-radius: 8px;
  background-color: #ddd;
  border: 1px solid #ddd;
  padding: 12px 22px;
  
  &:hover{
    cursor: pointer;
  }
}
</style>