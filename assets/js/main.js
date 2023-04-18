const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imgSrc: 'https://picsum.photos/id/237/200/300',
        imageToSwap: 'https://picsum.photos/id/240/200/300',
        colors: ['black','red','blue','green',],
        colorsIndex: 0
      }
    },
    methods: {
        cambiaImmagine(){
            let imageToSwap = this.imgSrc
            this.imgSrc = this.imageToSwap;
            this.imageToSwap = imageToSwap
        },
        cambiaColore(){
            if (this.colorsIndex == this.colors.length - 1) {
            this.colorsIndex = 0
        }else {
            this.colorsIndex ++
        }
        }

    },
  }).mount('#app')