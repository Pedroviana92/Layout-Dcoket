let carousel = document.querySelector('.carousel-inner')

async function getCarousel () {
    let resposta = await fetch('https://picsum.photos/v2/list')
    let imagens = await resposta.json()

    console.log(carousel)

    
    for(imagem of imagens) {
        let newCarousel = `
        <div class="carousel-item">
        <img src="${imagem.download_url}" class="d-block w-100" alt="...">
        </div>
        `

        carousel.innerHTML += newCarousel
    }
    
}

getCarousel()