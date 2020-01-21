var aylien = require('aylien_textapi')
    //set aylien API credentials
var textapi = new aylien({
    application_id: 'a49e5674',
    application_key: 'd80d3cdb1e1d27f79cb58c448878207'
});

textapi.sentiment({ 'text': 'John is a very good football player!' }, function(error, response) {
    console.log('test')
    if (error === null) {
        console.log(response);
    } else {
        console.log(error);
    }
});


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log(formText)

    console.log("::: Form Submitted :::")
        // fetch(textapi.sentiment.)
        // .then((response) => {
        //   return response.json();
        // })
        // .then((myJson) => {
        //   console.log(myJson);
};

//document.getElementById('results').innerHTML = res.message





export { handleSubmit }