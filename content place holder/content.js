const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const  name = document.getElementById('name')
const  date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="lap.jpg" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nemo.'
    profile_img.innerHTML = '<img src="images (1).jpg" alt="">'
    name.innerHTML = 'Mike Don'
    date.innerHTML = 'Aug 16 2024'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}