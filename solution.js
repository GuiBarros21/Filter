const API_URL = 'https://randomuser.me/api?results=50'
const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

function filterData(searchTerm){
    listItems.forEach(item => {
        // console.log(item.innerText);
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}


async function getData(){
    const response = await fetch(API_URL)
    const { results } = await response.json()

    //clear result
    result.innerHTML = ''

    results.forEach((user) => {
        console.log(user);

        const li = document.createElement('li')

        listItems.push(li)

        const image = document.createElement('img')
        image.src = `${user.picture.thumbnail}`
        li.appendChild(image)

        const container = document.createElement('div')
        container.classList.add('user-info')
        li.appendChild(container)

        const username = document.createElement('h4')
        username.innerText = `${user.name.first} ${user.name.last}`
        container.appendChild(username)

        const locationInfo = document.createElement('p')
        locationInfo.innerText = `${user.location.city}, ${user.location.country}`
        container.appendChild(locationInfo)

        result.appendChild(li)

    })
    
}

getData()

filter.addEventListener('input', function(e){
    filterData(e.target.value)
})