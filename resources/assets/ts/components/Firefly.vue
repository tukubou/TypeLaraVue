<template>
  <div id="content" class="container-fluid p-0">
    <canvas ref="my-canvas" class="canvas"></canvas>
  </div>
  <!--container-->
</template>

<script>
// キャンバス用コンポーネントの読み込み
import { getParentSize } from "../utils.ts";
import Firefly from "../firefly.ts";
export default {
  created() {
  },
  data() {
    return {
      image_src: "picture",
      ps: getParentSize(),
      time: 0,
      maxflag: false,
      developflag: true,
      fireflies: [],
      maxnum: 10000
    };
  },
  methods: {
    main() {
      // キャンバスをクリア（消す）
      console.log('firefly');
      this.ctx.clearRect(0, 0, this.ps.width, this.ps.height);
      if (this.time > 100 || this.time == 0) {
        this.time = 0;
        // サークルオブジェクトを配列に格納
        if (!this.maxflag) {
          this.fireflies.push(new Firefly(this.fireflies.length, this.ctx));
          this.fireflies[this.fireflies.length - 1].init();
          if (this.fireflies.length === this.maxnum) {
            this.maxflag = true;
          }
        }
      }
      // 蛍の描画
      for (const firefly of this.fireflies) {
        firefly.move();
        firefly.view(this.developflag);
      }
      this.time++;
    },
    start() {
      const self = this;
      setInterval(function() {
        self.main();
      }, 10);
    }
  },
  mounted() {
    // mounted 以降で canvas の DOM にアクセスできる
    let canvas = this.$refs["my-canvas"];
    this.ctx = canvas.getContext("2d");
    canvas.width = this.ps.width;
    canvas.height = this.ps.height;
    this.start();
  }
};
</script>
<style>
.canvas {
  background-image: url("../../images/firefly/picture2.jpg");
}
</style>