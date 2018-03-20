<template lang="html">
  <div class="slider-wrap">
    <div id="my_slider">
      <!-- <span class="btn prev" @click="move('prev')">&lt;</span> -->
      <span class="btn next" @click="move('next')">&gt;</span>
      <ul id="list" :style="{ transform: `translateX(${translate}px)` }">
        <li v-for="(img, n) in images" :id="`item_${n}`" class="item" :class="{'is-active': !n}">
          <img :src="'src/assets/' + img.src" :alt="img.alt" class="img">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          src: "fractale_1.jpg",
          alt: "fractale 1"
        },
        {
          src: "fractale_2.jpg",
          alt: "fractale 2"
        },
        {
          src: "fractale_3.jpg",
          alt: "fractale 3"
        }
      ],
      imageWidth: 640,
      translate: 0,
      duration: 1,
      busy: false,
      list: null,
      item: null,
    }
  },
  mounted() {
    this.list = this.$el.querySelector("#list");
    this.items = this.$el.getElementsByClassName("item");
    this.list.style.transitionDuration = this.duration + "s";
  },
  methods: {
    changeDOMOrder(destination, target) {
        const ref = destination === "start" ? this.items[0] : null;
        return this.list.insertBefore(target, ref); // si end, on insère en fin de liste
    },
    getTargetImage(direction, active) {
      var current;
      if (direction === "next") {
        current = active.nextElementSibling || this.items[0];
      } else {
        current = active.previousElementSibling || this.items[this.items.length - 1];
      }
      return current;
    },
    animate(direction) {
      this.translate = direction === "next" ? -this.imageWidth : this.imageWidth;
    },
    toggleActiveCSS(target, active) {
      target.classList.add("is-active");
      active.classList.remove("is-active");
    },
    resetState() {
      this.list.style.transitionDuration = "0s";
      this.translate = 0;
      window.setTimeout(() => {
        this.busy = !this.busy;
        this.list.style.transitionDuration = this.duration + "s";
      }, 50);
    },
    move(direction) {

      if (this.busy) return;

      this.busy = !this.busy;

      const active = this.$el.querySelector(".item.is-active");
      const target = this.getTargetImage(direction, active);

      if (direction === "next") {
        this.animate(direction);
        window.setTimeout(() => {
          this.changeDOMOrder("end", active);
          this.toggleActiveCSS(target, active);
          this.resetState();
        }, this.duration * 1000); // duration en seconde converti en millisecondes
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#my_slider {
  position: relative;
  width: 640px;
  height: 320px;
  margin: 0 auto;
  overflow: hidden;
}
#my_slider .btn {
  align-items: center;
  background: white;
  border: 2px solid;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-weight: bolder;
  height: 32px;
  justify-content: center;
  position: absolute;
  top: calc(50% - 16px);
  width: 32px;
  z-index: 3;
  opacity: .5;
}
#my_slider .btn:hover {
  color: #42b983;
  opacity: 1;
}
#my_slider .btn.next {
  right: 5px;
}
#my_slider .btn.prev {
  left: 5px;
}
#list {
  height: inherit;
  margin: 0;
  width: 100%;
  display: flex;
}
#list .item {
  margin: 0;
}
</style>
