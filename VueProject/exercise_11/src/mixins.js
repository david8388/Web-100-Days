export const textMixins = {
  computed: {
    textAppendLengthByComputed () {
      return `${this.text} (${this.text.length})`
    }
  }
}
