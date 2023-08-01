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
    getEmailsFromApi() {},
  },
  mounted() {
    // lo inserisco qui perchè voglio che parta non appena si apre la pagina
    // se volessi farlo tramite un click, basta metterlo nei methods come solito
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail"
    ).then((axiosResp) => {
      // dati inviati dal server come risposta alla richiesta fatta
      axiosResp.data;
      // una volta ricevuti i dati dal server tramite axios, li salvo in randomEmails
      // dove data è l'oggetto che il server mi sta ritornando 
      // da quell' oggetto data, response è la chiave per accedere
      this.randomEmails = axiosResp.data.response;
      /* ho provato con function normale ma non funziona in quanto il this è window
        serve il this di Vue, di conseguenza serve una arrow function 
        scritta nel .then come callback function*/
        
    })
  },
}).mount("#app");

/* una volta ottenuta la random email, devo fare in modo che ne compaiano 10 
  10 come da richiesta e stampo con un v-for nell'html in una lista.
*/