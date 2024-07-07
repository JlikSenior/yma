import { nextTick } from 'vue';

export default {
  name: 'Home',
  mounted() {
    nextTick(() => {
      this.updateContainerHeight();
      window.addEventListener('resize', this.updateContainerHeight);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateContainerHeight);
  },
  methods: {
    updateContainerHeight() {
      const headerHeight = this.$refs.header.offsetHeight;
      const footerHeight = this.$refs.footer.offsetHeight;
      if (window.innerWidth <= 768) {
        // 仅在移动端减去公告栏和页脚的高度
        const contentHeight = window.innerHeight - headerHeight - footerHeight;
        this.$refs.content.style.height = `${contentHeight}px`;
      } else {
        // 在电脑端使用全视口高度
        this.$refs.content.style.height = `auto`;
      }
    }
  }
}
