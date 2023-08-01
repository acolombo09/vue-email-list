"use strict"
/*
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/
const { createApp } = Vue

const app = createApp({
  data() {
    return {
      randomEmails: [],
    };
  },
  methods: {
  },
  mounted() {
    // lo inserisco qui perchè voglio che parta non appena si apre la pagina
    // se volessi farlo tramite un click, basta metterlo nei methods come solito
    for (let i = 0; i < 10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((axiosResp) => {

      // dati inviati dal server come risposta alla richiesta fatta
      // una volta ricevuti i dati dal server tramite axios, li salvo in randomEmails
      // dove data è l'oggetto che il server mi sta ritornando 
      // da quell' oggetto data, response è la chiave per accedere
      /* ho provato con function normale ma non funziona in quanto il this è window
        serve il this di Vue, di conseguenza serve una arrow function 
        scritta nel .then come callback function
      */

      this.randomEmails.push(axiosResp.data.response);

      // Verifica se ho ottenuto tutte le email
      if (this.randomEmails.length === 10) {
        // Ora posso procedere con il rendering dei risultati completi
        console.log(this.randomEmails);
      }
    });
    }
  },
}).mount("#app");

/* una volta ottenuta la random email, devo fare in modo che ne compaiano 10 
  10 come da richiesta e stampo con un v-for nell'html in una lista.
*/