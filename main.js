const API = 'https://rickandmortyapi.com/api/character';

const getData = (apiUrl) => {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
            printData(json),
                pages(json.info)
        })
        .catch(error => { console.error('Error' + error) })

}


//document.getElementById("")//


const printData = (data) => {
    let html = '';
    data.results.forEach(c => {
        html += '<div class="carta">' +
            '<img src="' + c.image + '" class="imgCart">' +
            '<h3> ' + c.name + '</h3>' +
            '<p> ' + c.species + '</p>' +
            '<p> ' + c.gender + '</p>' +
            '<p> ' + c.status + '</p>' +
            '</div>'
            

    });
    
    $("#main").html(html);

}

const pages = (info) => {

    


    $("#botones").html(`<button id="atras" onclick="getData('${info.prev}')">atras</button>` +
        `<button id="siguiente" onclick="getData('${info.next}')">siguiente</button>`);

        info.prev == null ? $("#atras").hide(): ''  ;
        info.next == null ? $("#siguiente").hide(): '' ;

        //if (info.prev == null) { $("#atras").hide() }
        //if (info.next == null) { $("#siguiente").hide() }
        

}

getData(API);