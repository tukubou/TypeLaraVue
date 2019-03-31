<template>
  <div class="col-md-4">
    <div class="card mb-4 border-primary shadow-sm" style="width: 18rem;">
      <img class="card-img-top" height="200" :src="imgPath" alt="カードの画像">
      <div class="card-body">
        <h5 class="card-title">{{bgiData.title}}</h5>
        <p class="card-text">{{bgiData.description}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">選択する</button>
            
          </div>
          <button type="button" class="btn btn-primary btn-sm">選択中</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  props: {
    bgiData: {
      default: {}
    }
  },
  methods: {},
  data() {
    return {
      imgPath: require(`../../images/firefly/${this.bgiData.imgName}.jpg`)
    };
  },

  mounted() {}
};
</script>

<style scoped>
</style>