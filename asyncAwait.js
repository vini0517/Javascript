//async simple example

/*async function asAw() {
    var Promise = new Promise(function (response) {
            setTimeout(function() {
                //console.log(response) it wll give error
                response("example of async and await")
            }, 1000)
        })

        console.log(await Promise)
}

asAw()*/

//kind of our insta
async function commentcode() {
    return new Promise(
        function (commentvalue) {
            setTimeout(function () {
                commentvalue("this is my first post's comment icon ")

            }, 1000)

        })

}
async function likecode() {
    return new Promise(
        function (likevalue) {
            setTimeout(function () {
                likevalue("this is my first post's like icon ")

            }, 1000)

        })


}
async function post() {
    let post = new Promise(function (Postresponse) {
        setTimeout(function () {
            Postresponse("this is my first post")

        }, 1000)
    })
    var[feed,comment,like]=await Promise.all([post,commentcode(),likecode()])
    console.log(feed)
    console.log(comment)
    console.log(like)
}
post()

