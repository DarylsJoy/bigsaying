new Vue({
  el: '#app',
  data: {
    message: {
      famous_saying : '这里应该是一句名言',
      famous_name : '不知道谁说的'
    },
    url: 'http://demo.daryldong.com/bigsaying/'
  },
  computed: {
    weibo: function () {
      return `http://service.weibo.com/share/share.php?url=${this.url}&title=${this.message.famous_saying}-${this.message.famous_name}`;
    },
    // wechat: function () {
    //   return `https://cli.im/api/qrcode/code?mhid=sELPDFnok80gPHovKdI&text=${this.url}`;
    // }
  },
  created: function () {
    this.getApi();
  },
  methods: {
    share: function (social) {
      let win = window.open(this[social], '_tab');
      win.focus();
    },
    getApi: function () {
      let self = this;
      $("#message").fadeOut(50, function () {
        $.ajax({
          url: "http://demo.daryldong.com/bigsaying/getting.php",
          type: "POST",
          dataType: 'json',
          success: function (data) {
            self.message = data.result;
            $("#message").fadeIn();
          }
        });
      });
    }
  }
});