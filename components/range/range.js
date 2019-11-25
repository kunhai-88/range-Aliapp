Component({
  mixins: [],
  data: {
    start: 0,
    end: 100
  },
  props: {
    header: '',
    message: '',
    maxLine: 6,
    fontSize: 14,
    fundHeaderInfo: {
      fundName: '基金名称',
      fundCode: '基金代码',
      scale: '资产规模',
      birthDate: '成立日期',
      operationType: '运作方式',
      custodian: '基金托管人'
    },
    fundData: {}
  },
  didMount() {
    this.currentSlider = 'start';
    this.left = 0;

    this.deltaValue = 100;
    my.createSelectorQuery()
      .select('.range-container').boundingClientRect().exec((ret) => {
        let { width, left } = ret[0];
        this.width = width;
        this.left = left;
      })

  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onTap(event) {
      const targetValue = event.detail.clientX - this.left;
      this.setSliderValue(this.currentSlider, targetValue)
    },
    onTouchMove(event) {

      const clientX = event.touches[0].clientX
      this.setSliderValue(event.target.dataset.type, clientX - this.left)
    },
    onTouchEnd(event) {
      this.currentSlider = event.target.dataset.type;

    },
    setSliderValue(sliderName = 'start', targetValue) {

      const distance = Math.min(Math.max(targetValue, 0), this.width)

      const sliderValue = Math.floor((distance / this.width) * 100)
      console.log(sliderValue);
      this.setData({
        [sliderName]: sliderValue
      })

    }
  }
});
