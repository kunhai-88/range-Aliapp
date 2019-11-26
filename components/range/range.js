const toNumber = (num) => Number(num);

Component({
  mixins: [],
  data: {
    start: 0,
    end: 100
  },
  props: {
    min: 0,
    max: 100,
    value: [0, 0],
    onChange: () => '',
  },
  
  didMount() {
    this.currentSlider = 'start';
    this.left = 0;
    
    this.deltaValue = toNumber(this.props.max) - toNumber(this.props.min);
    this.setValue(this.props.value);
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
      this.change();
    },
    setSliderValue(sliderName = 'start', targetValue) {

      const distance = Math.min(Math.max(targetValue, 0), this.width)

      const sliderValue = Math.floor((distance / this.width) * 100)
      this.setData({
        [sliderName]: sliderValue
      })
      this.change();
    },
    setValue(value) {
      const start = Math.round(((value[0] - toNumber(this.props.min)) / this.deltaValue) * 100);
      const end = Math.round(((value[1] - toNumber(this.props.min)) / this.deltaValue) * 100);
      this.setData({ start, end })
    },
    change() {
      const { start, end } = this.data;
      const a = Math.round((start / 100) * this.deltaValue) + toNumber(this.props.min)  
      const b = Math.round((end / 100) * this.deltaValue) + toNumber(this.props.min)  
      const result = [a, b].sort((x, y) => x - y)
      this.props.onChange(result)
    }

  }
});
