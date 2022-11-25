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
        response = `CON Ikaze Kuri Hinga Wizeye Platform.\n1. English\n2. Kinyarwanda`;
        
    } else if (text == '1') {
        response = `END Sorry using english is still under development !!`;
    } else if (text == '2') {
        response = `CON 1. Amakuru y'iteganyagihe.\n2. Amakuru y'umusaruro 
        \n3. Inama zijyanye n'ubuhinzi
       \n 4. Gusaba Ubufasha
        \n5. Gusaba Hinga wizeye device
        \n00. subira inyuma
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
        text='2';

    }
    else if (text == '2*3') {

        response = `CON Inama zijyanye n'ubuhinzi.
        1. Igihe cyo guhinga
        2. Igihingwa cyatanga umusaruro
        3. Guhunika umusaruro
        00. subira inyuma
        0. subira ahabanza`;


    } else if (text == '2*4') {

        response = `CON Ubufasha.
        Wifuza ubufasha wahamagara nimero ya RAB itishyurwa 1212
        cyangwa ukatwandikira ubutumwa bugufi kuri +25078278273
        00. subira inyuma
        0. subira ahabanza`;


    }
    else if (text == '2*5') {

        response = `CON Gusaba Hinga wizeye device.
        Iki gikoresho wagisanga kuri koperative ubarizwamo cg ukaduhamagara kuri 0788373733
        00. subira inyuma
        0. subira ahabanza`;


    }
    //1.Amakuru yo mu murima nonaha?
    else if (text == '2*1*1') {

        response = `END Ibipimo.
         Ibipimo biva mu mirima ubu bigaragaza ko
         ubushyuhe = 25°C
         Ubuhehe mu butaka= 50%
         Humidity =30 RH
         Umwanzuro: Ntakibazo gihari`;


    } //2. Iteganyagihe
    else if (text == '2*1*2') {

        response = `END Iteganyagihe.
        Biteganyijwe ko ikirere kizaba:
        ubushyuhe = 27°C
        Ubuhehe mu butaka = 50%
        Humidity = 30 RH
        Imvura = 0 mm
        Bikomeje gutya mugiriwe inama zo gukoresha
        uburyo bwo kuvomerera imyaka`;


    }
    //3. Inama z'icyo nakora ubu
    else if (text == '2*1*3') {

        response = `END Inama z'icyo  Wakora ubu
        Dushingiye ku bipimo biva mu mirima 
        nta`;
    }
    

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});


app.listen(port, () => {
    console.log(`App listening on ${port}`);
})







