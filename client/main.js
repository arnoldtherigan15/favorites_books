let baseUrl = 'http://localhost:3000'

$( document ).ready(function() {
    auth()
    $('.logout').click(function () {
        localStorage.clear()
        auth()
    })
})

function login (event) {
    event.preventDefault()
    let email = $('#email').val()
    let password = $('#password').val()

    $.ajax({
        method: 'POST',
        url: baseUrl + '/users/login',
        data: {
            email,
            password
        }
    })
        .done(data => {
            localStorage.setItem('token', data.token)
            auth()
        })
        .fail(err => {
            console.log(err,'errror')
        })
}

function auth() {
    if (localStorage.token) {
        $('.loginPage').hide()
        $('.updatePage').hide()
        $('.mainPage').show()
        fetchBooks()
    } else {
        $('.loginPage').show()
        $('.mainPage').hide()
        $('.updatePage').hide()
    }
}

function fetchBooks () {
    $.ajax({
        method: 'GET',
        url: baseUrl + '/books',
        headers: {
            token: localStorage.token
        }
    })
        .done(data => {
            $('.bookList').empty()
            for (let i = 0; i< data.Books.length; i++) {
                let title = data.Books[i].title
                let imgUrl = data.Books[i].imgUrl
                let id = data.Books[i].id

                $('.bookList').append(`
                    <div class="card">
                        <img src="${imgUrl}" alt="Card example image">
                        <div class="card-body">
                        <h4 class="card-title">${title}</h4>
                        <button onclick="updateBtn(${id})">
                            Detail
                        </button>
                        </div>
                    </div>
                `)
            }
        })
        .fail(err => {
            console.log(err,'error')
        })
}

function createBook (event) {
    event.preventDefault()
    let title = $('#title').val()
    let imgUrl = $('#imgUrl').val()

    $.ajax({
        method: 'POST',
        url: baseUrl + '/books',
        headers: {
            token: localStorage.token
        },
        data: {
            title,
            imgUrl
        }
    })
        .done(_ => {
            auth()
            $('.modal').hide()
        })
        .fail(err => {
            console.log(err,'error')
        })
}

function updateBtn(id) {
    $('.updatePage').show()
    $('.mainPage').hide()

    $.ajax({
        method: 'GET',
        url: baseUrl + '/books/' + id,
        headers: {
            token: localStorage.token
        }
    })
        .done(data => {
            $('#newtitle').val(data.title)
            $('#newimgUrl').val(data.imgUrl)
        })
        .fail(err => {
            console.log(err,'error')
        })
    
    
}