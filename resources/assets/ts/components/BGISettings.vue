<template>
  <div class="container">
    <div class="py-5 text-center">
      <h2>Select Background Image.</h2>
      <p class="lead">ホタルを鑑賞する背景画像を設定することができます。</p>
    </div>
    <!-- カードの数だけ繰り返し -->
    <div class="row">
      <BGICard v-for="card in imgCards" :key="card.picName" :bgiData="card"/>
    </div>
  </div>
</template>

<script>
import BGICard from "./BGICard.vue";
export default {
  created() {
    // 1枚目
    this.imgCards.push({
      title: "花火1",
      imgName: "picture1",
      description: "水辺の花火夜景の画像です。"
    });
    // 2枚目
    this.imgCards.push({
      title: "花火2",
      imgName: "picture2",
      description: "水辺の花火夜景の画像です。"
    });
    // 3枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture4",
      description: "水辺の花火夜景の画像です。"
    });
    // 4枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture5",
      description: "水辺の花火夜景の画像です。"
    });
    // 5枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture6",
      description: "水辺の花火夜景の画像です。"
    });
    // 6枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture7",
      description: "水辺の花火夜景の画像です。"
    });
    // 7枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture8",
      description: "水辺の花火夜景の画像です。"
    });
    // 8枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture9",
      description: "水辺の花火夜景の画像です。"
    });
    // 9枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture10",
      description: "水辺の花火夜景の画像です。"
    });
    // 10枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture17",
      description: "水辺の花火夜景の画像です。"
    });
    // 11枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture19",
      description: "水辺の花火夜景の画像です。"
    });
    // 12枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture20",
      description: "水辺の花火夜景の画像です。"
    });
    // 13枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture28",
      description: "水辺の花火夜景の画像です。"
    });
    // 14枚目
    this.imgCards.push({
      title: "花火3",
      imgName: "picture29",
      description: "水辺の花火夜景の画像です。"
    });
  },
  data() {
    return {
      imgCards: [],
    };
  },
  components: {
    BGICard
  },
  methods: {}
};
</script>