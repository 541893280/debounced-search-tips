new Vue({
  el: '#app',
  data: {
    text: '',
    tips: [],
  },
  watch: {
    text (val) {
      this.debouncedGetTips();
    },
  },
  methods: {
    getTips() {
      axios
        .get(`http://192.168.8.58:8080/www.baidu.com/sugrec?prod=pc&wd=${this.text}`)
        .then(resp => {
          let data = resp.data;
          this.tips = data ? data.g : [];
        });
    },
  },
  created() {
    this.debouncedGetTips = _.debounce(this.getTips, 500);
  },
});
