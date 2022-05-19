<template>
    <transition name="modal">
      <div class="modal-mask" v-show="value">
        <div class="modal-container">
            <div class="modal-header">
              <slot name="header"></slot>
            </div>
            <div class="modal-body">
              <slot name="body"></slot>
              <Counter></Counter>
            </div>
            <div class="modal-footer">
              <button @click.prevent="close" class="close-btn">關閉</button>
            </div>
        </div>
      </div>
    </transition>
</template>

<script>
import Counter from "@/components/Counter.vue";
export default {
    name: 'Popup',
    components: {
      Counter
    },
    props: {
      value: {
        type: Boolean,
        required: true
      }
    },
    methods : {
      close() {
        this.$emit("input", !this.value);
      } 
    }
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  background-color: rgba(0, 0, 0, .8);
  transition: opacity .3s ease;

  .modal-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;

    .modal-header h3 {
      margin-top: 0;
      color: #42b983;
    }
    .modal-body {
      margin: 20px 0;
    }
    .modal-footer {
      overflow: hidden;
      .close-btn{
        padding: 8px 15px;
        border-radius: 3px;
        border: none;
        background-color:#09c;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}

.modal-enter, .modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>