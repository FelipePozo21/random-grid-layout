const infinite = document.getElementById('infinite')

function changeForms() {
    setInterval(() => {
        if(infinite.childNodes.length > 0) {
            for(let i = 0; i <= 6; i++) {
                const div = document.querySelector(`.containers-divs${i}`)

                let randomCol = Math.floor(Math.random() * (4 - 1 + 1) ) + 1;
                let randomRow = Math.floor(Math.random() * (2 - 1 + 1) ) + 1;
                
                div.setAttribute('style', `grid-column:span ${randomCol}; grid-row:span ${randomRow};`)

            }
        } else {
            for(let i = 0; i <= 6; i++){
                const div = document.createElement('div')
                
                let randomRow = Math.floor(Math.random() * (4 - 1 + 1) ) + 1;
                let randomCol = Math.floor(Math.random() * (4 - 1 + 1) ) + 1;
                
                div.classList = `containers-divs${i}`
                
                div.setAttribute('style', `grid-column:span ${randomCol}; grid-row:span ${randomRow};`)

                infinite.append(div)
            }
        }
    },2000)
}
changeForms()