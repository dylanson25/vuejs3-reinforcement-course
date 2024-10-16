const { createApp, ref } = Vue;

const app = createApp({
  // template: `
  //   <h1>{{message}}</h1>
  //   <p>{{author}}</p>
  //   `,
  setup() {
    const message = ref("I'm Batman");
    const author = ref("I'm Batman");

    // setTimeout(() => {
    //   message.value = "Hola, Soy Goku";
    //   author.value = "- Goku";
    // }, 1000);

    const changeQuote = () => {
      message.value = "Hola, Soy Goku";
      author.value = "- Goku";
    };

    return {
      author,
      message,

      changeQuote,
    };
  },
});

app.mount("#app");
