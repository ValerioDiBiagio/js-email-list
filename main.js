const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'


axios.get(endpoint)
    .then((response) => {
        console.log(response)

        const emails = response.data;
        console.log(emails);
        
        const email = emails.response;
        console.log(email);

        const ulElement = document.querySelector('.list');

        console.log(ulElement)

        let emailList = '';

        for (let i = 0; i < 10; i++) {
                
            emailList += `<li>${email}</li>`
        
        }

        ulElement.innerHTML = emailList;
        
        

    })
    .catch(error => {
        console.log(error);
    })


