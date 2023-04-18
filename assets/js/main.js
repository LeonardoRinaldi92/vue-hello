const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imgSrc: 'https://picsum.photos/id/237/200/300',
        imageToSwap: 'https://picsum.photos/id/240/200/300',
      }
    },
    methods: {
        cambiaImmagine(){
            let imageToSwap = this.imgSrc
            this.imgSrc = this.imageToSwap;
            this.imageToSwap = imageToSwap
        }
    },
  }).mount('#app')