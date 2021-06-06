fetch('data.json')
.then(response => response.json())
.then(data => {
    function mouvement(date) {
        console.log(date);
        if (1549<date && date<1570) {
            return "pléiade"
        }else if(1570<date && date<1600){
            return "baroque"
        }else if(1650<date && date<1700){
            return "classicisme"
        }else if(1720<date && date<1770){
            return "les lumières"
        }else if(1820<date && date<1865){
            return "le romantisme"
        }else if(1818<date && date<1865){
        //     return "le parnasse"
        // }else if(1866<date && date<1875){
            return "le realisme"
        }else if(1875<date && date<1885){
            return "le naturalisme"
        }else if(1885<date && date<1900){
            return "le symbolisme"
        }else if(1900<date && date<1923){
            return "Le dadaisme"
        }else if(1923<date && date<1940){
            return "le surrealisme"
        }else{
            return "absurde"
        }
        
    }
    for (let i = 0; i < data.length; i++) {
        // document.querySelector('#container').innerHTML += '<br />';
        document.querySelector('#container').innerHTML += (
            `<div class="item">
                <div class='fullscreen'>  </div>
                <h1>${data[i].title}</h1> 
                <h2>${data[i].auteur}</h2>
                <h3>${data[i].date} </h3>
                <h4>${mouvement(data[i].date)}</h4>
                <h5>${data[i].genre}</h5>
                <h6>${data[i].extrait.situer}</h6>
                <div class='blockImp'>
                    <div class='blockItem'> <span class='theme'>${data[i].theme}</span> </div>
                    <div class='blockItem'> <span class='problematique'>${data[i].problematique}</span> </div>
                    <div class='blockItem'> <span class='plan'>${data[i].plan}</span> </div>
                </div>

            </div `)


        // document.querySelector('#container').innerHTML += 'coucou';
    }


    let listItems = document.querySelectorAll('.item')
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', (data) => {

            function fullscreenStyles() {
                let pathItem = data.path[1].style;
                let pathFullscreen = data.path[0];

                pathItem.animation = 'none'
                pathItem.height = '100vh';
                pathItem.width = '100vw';
                pathItem.top = "-5px";
                pathItem.left = "-5px";
                pathItem.position = 'fixed';
                // pathFullscreen.innerHTML = 'EXIT'
                pathFullscreen.className = 'exit'
            }
            function exitStyles() {
                let pathItem = data.path[1].style;
                let pathFullscreen = data.path[0];

                pathItem.animation = ''
                pathItem.position = '';
                pathItem.width = '';
                pathItem.height = '';
                // pathFullscreen.innerHTML = 'EXIT'
                pathFullscreen.className = 'fullscreen'
            }


            if (data.path[0].className === 'fullscreen') fullscreenStyles() 
            else if (data.path[0].className === 'exit') exitStyles()
        })
        //fin addeventlisten
    }
    function lineBreak(module, number, change) {
        let text = document.querySelectorAll(module)[number].innerText.split(change).join('\n')
        document.querySelectorAll(module)[number].innerText = text
        if(document.querySelectorAll(module)[number+1]) lineBreak(module, number+1, change)
    }
    lineBreak('.plan', 0, '--->')            
          
})