const { createApp, ref } = Vue;

const app = createApp({
  template: `
    <h1>{{message}}</h1>
    <p>{{author}}</p>
    `,
  setup() {
    const message = ref("I'm Batman");
    const author = ref("I'm Batman");

    setTimeout(() => {
      message.value = "Soy Goku";
      author.value = "Bruce Walyne";
    }, 1000);

    return {
      author,
      message,
    };
  },
});

app.mount("#app");
