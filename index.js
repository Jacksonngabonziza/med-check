const express = require('express');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3333;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', (req, res) => {
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = '';

    if (text == '') {
        response = `CON Welcome to MediCheckup.
        Murakaze neza, Kuri Hinga Wizeye Platform.
        
        Please Choose a language
        1. English
        2. Kinyarwanda`;
        
    } else if (text == '1') {
        response = `END Mutwihanganire ntago gukoresha ikinyarwanda birakunda!!`;
    } else if (text == '2') {
        response = `CON 
        1. Amakuru y'iteganyagihe?.
        2. Amakuru y'umusaruro 
        3. Inama zijyanye n'ubuhinzi
        4. Gusaba Ubufasha
        5. Gusaba Hinga wizeye device
        00. subira inyuma
        0. subira ahabanza`;
    } else if (text == '2*1') {
        response = `CON 
        1.Amakuru yo mu murima nonaha?.
        2. Iteganyagihe
        3. Inama z'icyo nakora ubu
        00. subira inyuma
        0. subira ahabanza`;

    } else if (text == '2*2') {
        response = `CON Amakuru y'umusaruro.
        1. Umusaruro uteganyijwe iki gihembwe
        2. Umusaruro w'ibihembwe bishize
        00. subira inyuma
        0. subira ahabanza`;
    }
    else if (text.endsWith('*0')) {

        response = `CON 
        1. Amakuru y'iteganyagihe?.
        2. Amakuru y'umusaruro 
        3. Inama zijyanye n'ubuhinzi
        4. Gusaba Ubufasha
        5. Gusaba Hinga wizeye device
        00. subira inyuma
        0. subira ahabanza`;


    }
    else if (text == '2*3') {

        response = `CON Inama zijyanye n'ubuhinzi.
        1. Igihe cyo guhinga
        2. Igihingwa cyatanga umusaruro
        3. Guhunika umusaruro
        00. subira inyuma
        0. subira ahabanza`;


    } else if (text == '2*2*1') {

        response = `CON Do you have muscle and joint pain?.
        1. Yes
        2. No`;


    }
    else if (text == '2*1*1*1') {

        response = `CON Do you have Sore throat?.
        1. Yes
        2. No`;


    } else if (text == '2*2*1*1') {

        response = `CON Do you have Sore throat?.
        1. Yes
        2. No`;


    }
    else if (text == '2*1*1*1*1') {

        response = `END We are sorry to announce you that, these look like the EBOLA signs and symptoms.
        Please contact 007 for an emergency MEDICAL SUPPORT`;
    }
    else if (text == '2*2*1*1*1') {

        response = `END We are sorry for the body pain, 
        these don't look like the EBOLA signs and symptoms.
        Please contact 911 for a MEDICAL ADVICE`;
    }

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});


app.listen(port, () => {
    console.log(`App listening on ${port}`);
})







