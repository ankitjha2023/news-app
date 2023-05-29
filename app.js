const apiKey = "pub_236142c2086fd5665bce70dfd8967f8e3a2ec"

let query ="india"


const newsContainer = document.getElementById('news-container')

const input = document.getElementById('input')
const searchBtn = document.getElementById('search-btn')

const fetchNews = async(apiKey,query) =>{
    let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${query}`
    console.log(url)
    const res = await fetch(url)
    const data =  await res.json()
    console.log(data.results)
    

    data.results.forEach((result) => {

      
        if(result.description != null){
            let src
            if(result.image_url!=null){
                src=result.image_url
            }else{
                src ="news.jpg"
            }
            let newsCard = document.createElement('div')
            newsCard.classList.add('col-md-6')
            newsCard.innerHTML = `

            <div class="card">
            <img src="${src}" width="200px" class="card-img-top">
             <div class="card-body">
             <h5 class="card-title">${result.title}</h5>
             <p class="card-text">${result.description.slice(0,100)+"..."}</p>
             <a href="${result.link}" target="_blank">Read Article</a>
             </div>
            </div>
            
            
            `
            newsContainer.appendChild(newsCard)
        }
       
       
    });

}
const home = document.getElementById('home')
const homeLink = document.getElementById('home-link')

homeLink.addEventListener('click',()=>{
    home.style.display="block"    
    newsContainer.innerHTML = ""
    fetchNews(apiKey,query)
})

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    home.style.display="none"
    newsContainer.innerHTML=""
    
    fetchNews(apiKey,input.value)
    input.value=""
})

async function fetchNewsApi(category){

    home.style.display="none"
    newsContainer.innerHTML=""
    let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}`

    const res = await fetch(url)
    const data =  await res.json()


    data.results.forEach((result) => {

      
        if(result.description != null){
            let src
            if(result.image_url!=null){
                src=result.image_url
            }else{
                src ="news.jpg"
            }
          
            let row = document.createElement('div')
            row.classList.add('row','my-3')
            
            row.innerHTML = `
            <div class="col-md-6 text-center">
            <img src="${src}"  class="img-fluid row-image">
            </div>
            <div class="col-lg-6 col-sm-12">
            
                <h5 class="card-title my-3">${result.title}</h5>
                <p class="card-text">${result.description.slice(0,400)+"..."}</p>
                <a href="${result.link}" target="_blank">Read Article</a>
            </div>
            
        
            
            `
            newsContainer.appendChild(row)
        }
       
       
       
       
    });
    
}    

   
   

 fetchNews(apiKey,query)


