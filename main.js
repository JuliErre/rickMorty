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
        html += '<div class="col-xl-3 col-lg-6 col-md-12 col-xs-12 carta">' +
            '<img src="' + c.image + '" class="imgCart">' +
            '<h3> ' + c.name + '</h3>' +
            '<p>Species: ' + c.species + '</p>' +
            '<p>Gender: ' + c.gender + '</p>' +
            '<p>Status: ' + c.status + '</p>' +
            '<p>Location: ' + c.location.name + '</p>' +
            '</div>'
            

    });
    
    $("#personajes").html(html);

}

const pages = (info) => {

    


    $(".botones").html(`<button class="atras btn-grad" onclick="getData('${info.prev}')">atras</button>` +
        `<button class="siguiente btn-grad" onclick="getData('${info.next}')">siguiente</button>`);

        info.prev == null ? $(".atras").hide(): ''  ;
        info.next == null ? $(".siguiente").hide(): '' ;

        //if (info.prev == null) { $("#atras").hide() }
        //if (info.next == null) { $("#siguiente").hide() }
        

}

getData(API);