<template>
  <div class="container">
    <div class="py-5 text-center">
      <h2>精算フォーム</h2>
      <p
        class="lead"
      >以下は、Bootstrapのフォームコントロールで完全に構築されたサンプルフォーム。必要な各フォームグループには、フォームを完了せずに送信しようとすると切り替わる検証状態がついている。</p>
    </div>
    <div class="col-md-12 order-md-1">
      <h4 class="mb-3">請求先住所</h4>
      <form class="needs-validation" novalidate>
        <div class="row">
        </div>

        <div class="row">
        <hr class="mb-4">
        <hr class="mb-4">

        <h4 class="mb-3">ホタルの大きさ</h4>
        <h4 class="mb-3">ホタルの透明度</h4>
        <h4 class="mb-3">ホタルの点滅</h4>
        <h4 class="mb-3">ホタルの最大数</h4>
        <h4 class="mb-3">ホタルの最小数</h4>
        <h4 class="mb-3">ホタルの色</h4>
        <h4 class="mb-3">デバッグモード</h4>
        <h4 class="mb-3">ベジエ曲線</h4>
        <h5 class="mb-3">自由</h5>
        <h5 class="mb-3">固定N次</h5>

        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="cc-name">カードの名義</label>
            <input type="text" class="form-control" id="cc-name" placeholder required>
            <small class="text-muted">カード上に表示されているフルネーム</small>
            <div class="invalid-feedback">カードの名義を入力してください</div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="cc-number">クレジットカード番号</label>
            <input type="text" class="form-control" id="cc-number" placeholder required>
            <div class="invalid-feedback">クレジットカード番号を入力してください</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="cc-expiration">有効期限</label>
            <input type="text" class="form-control" id="cc-expiration" placeholder required>
            <div class="invalid-feedback">有効期限を入力してください</div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input type="text" class="form-control" id="cc-cvv" placeholder required>
            <div class="invalid-feedback">セキュリティコードを入力してください</div>
          </div>
        </div>
        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit">精算を続ける</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(`this = ${this.$http}`);
    this.fetchBooks();
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    fetchBooks() {
      this.$http.get("/api/books").then(res => {
        this.books = res.data;
      });
    }
  }
};
</script>