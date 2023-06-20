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
let card_index = 0
let cards = []

let card_images = [
    'images\\entities\\card1.png',
    'images\\entities\\card2.png',
    'images\\entities\\card3.jpg',
    'images\\entities\\card4.png',
    'images\\entities\\png-transparent-minecraft-mob-herobrine-skeleton-著色頁2-minecraft-skeleton-angle-furniture-rectangle.png'
]
for (let i = 0;i<3;i++){
    add_card(card_images[i], 'right')
}
function add_card(image, side){
    let new_card = document.createElement('img')
    new_card.src = image
    new_card.classList.add('gallery__card__pic')
    if(side == 'left'){
        cards.unshift(new_card)
        gallery_cards.prepend(new_card)
    }
    else{
        cards.push(new_card)
        gallery_cards.append(new_card)
    }
    
}
gallery_button_right.addEventListener('click', e => {
    gallery_cards.removeChild(cards[0])
    cards.shift()
    card_index++
    if(card_index > card_images.length -1){
        card_index = 0
    }
    add_card(card_images[(card_index + 2) % card_images.length], 'right')
})
gallery_button_left.addEventListener('click', e => {
    gallery_cards.removeChild(cards[2])
    cards.pop()
    card_index--
    if(card_index < 0){
        card_index = card_images.length - 1
    }
    add_card(card_images[card_index], 'left')
})
