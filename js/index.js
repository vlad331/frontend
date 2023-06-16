document.addEventListener('mousemove', e =>{
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * 0.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `
    })
})

let gallery_button_left = document.getElementsByClassName('gallery__button__left')[0]
let gallery_button_right = document.getElementsByClassName('gallery__button__right')[0]
let gallery_cards = document.getElementsByClassName('gallery__cards')[0]

let card_images = [
    'images\\entities\\card1.png',
    'images\\entities\\card2.png',
    'images\\entities\\card3.jpg'
]
for (let i = 0;i<3;i++){
    add_card(card_images[i])
}
function add_card(image){
    let new_card = document.createElement('img')
    new_card.src = image
    new_card.classList.add('gallery__card__pic')
    gallery_cards.append(new_card)
}
gallery_button_left.addEventListener('click', e => {

})
