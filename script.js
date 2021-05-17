fetch('data.json')
.then(response => response.json())
.then(data => {
    // console.log(data);
    // console.log(data.length);
    for (let i = 0; i < data.length; i++) {
        // document.querySelector('#container').innerHTML += '<br />';
        document.querySelector('#container').innerHTML += (
            `<div class="item">
                <div class='fullscreen'>  </div>
                <h1>${data[i].title}</h1> 
                <h2>${data[i].auteur}</h2>
                <h3>${data[i].date} </h3>
                <h4>${data[i].mouvement}</h4>
                <h5>${data[i].genre}</h5>
                <h6>coucou6</h6>
                <div class='blockImp'>
                    <div class='blockItem'> <span class='theme'>${data[i].theme}</span> </div>
                    <div class='blockItem'> <span class='problematique'>${data[i].problematique}</span> </div>
                    <div class='blockItem'> <span class='plan'>${data[i].plan}</span> </div>
                </div>

            </div `)


        // document.querySelector('#container').innerHTML += 'coucou';
    }

    console.log(document.querySelectorAll('.item'));
    let listItems = document.querySelectorAll('.item')
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', (data) => {
            
            
            function fullscreenStyles() {
                let pathItem = data.path[1].style;
                let pathFullscreen = data.path[0];

                pathItem.animation = 'none'
                pathItem.position = 'fixed';
                pathItem.top = "-5px";
                pathItem.left = "-5px";
                pathItem.width = '100vw';
                pathItem.height = '100vh';
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

            // if (data.path[0].className === 'exit') exitStyles()
        })
        
    }
})
window.scrollbars.visible()
