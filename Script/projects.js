//Instgram console Demo for post,like,comment and share

likepost = async() => {
    return new Promise((likepost)=>{
        setTimeout(()=>{
            likepost("Like the Post Successfully")
        },3000)
    })
}


commentpost = async() => {
    return new Promise((commentpost)=>{
        setTimeout(()=>{
            commentpost("Comment the Post Successfully")
        },3000)
    })
}


sharepost = async() => {
    return new Promise((sharepost)=>{
        setTimeout(()=>{
            sharepost("Share the Post Successfully")
        },3000)
    })
}

async function postCode(){
    var post = new Promise((createpost)=> {
        setTimeout(()=>{
            createpost("Post Created Successfully")
        },3000)
        
    })

    const [pos,like,comment,share] = await Promise.all([post,likepost(),commentpost(),sharepost()])
    console.log(pos)
    console.log(like)
    console.log(comment)
    console.log(share)
}
postCode()