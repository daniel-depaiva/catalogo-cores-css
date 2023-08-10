const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')


btn.addEventListener('click', function(){
    const randomNumber = getRandomNumbers()
        // background-color
    const mainColor = document.querySelector('#main-color')
    mainColor.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[getRandomNumbers()]
})

// função de números  aleatória
function getRandomNumbers(){
    return Math.floor( Math.random() * colors.length)
}