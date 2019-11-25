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
        let { width } = ret[0];
        this.width = width;
      })

  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onTap(event) {
      console.log(event);
      const targetValue = event.detail.clientX - this.left;
      console.log(targetValue);
      this.setSliderValue(this.currentSlider, targetValue)
    },
    onTouchMove(event) {
      console.log(event);
    },
    onTouchEnd(event) {
      console.log(event);
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
