// salvare in una variabile api email boolean
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// fare un ciclo for per generare 10 email randomiche
for (let i = 0; i < 10; i++) {

// chiamata api
axios.get(endpoint)
    .then((response) => {
        // salvare in una variabile l'oggetto data 
        const emails = response.data;
        // salvare in una variabile l'email 
        const email = emails.response;
        // salvare in una variabile l'elemento ul html
        const ulElement = document.querySelector('.list');
       // appendere ad ul l'elemento li con l'email randomica
        ulElement.innerHTML += `<li>${email}</li>`
     
    })
    .catch(error => {
        console.log(error);
    })

}

