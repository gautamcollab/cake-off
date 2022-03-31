// your code here
let nav = document.getElementById('cake-list')

const request = async () =>{
    let req = await fetch('http://localhost:3000/cakes/1')
    let res = await req.json() 

    let img = document.getElementById('cake-image')
    img.setAttribute('src', res.image_url)

    let h2 = document.getElementById('cake-name')
    h2.innerText = res.name

    let desc = document.getElementById('cake-description')
    desc.innerText = res.description

    let review = document.getElementById('review-list')
    review.innerText = res.reviews

    // res.forEach((element) => {
    //     let li = document.createElement('li')
    //     li.innerText = element.name
    //     nav.append(li)
    // })

    let newReview = document.getElementById('review-form')
    let reviewList = document.getElementById('review-list')

    newReview.addEventListener('submit', (e) => {
        e.preventDefault()
        let review = document.getElementById('review')
        let ul = document.createElement('ul')
        ul.innerText = review.value
        reviewList.append(ul)
    })

}
request() 