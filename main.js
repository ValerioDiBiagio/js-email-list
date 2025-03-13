const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'


axios.get(endpoint)
    .then((response) => {

        const emails = response.data;
        console.log(emails);

        console.log(emails.response);

    })
    .catch(error => {
        console.log(error);
    })


