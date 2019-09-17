let text = {
    id: '',
    title: $("#title").text(),
    paragraph: $("#paragraph").text()
}
// console.log(text)
$('#title').blur(function(){
    text.title = $("#title").text()    
    console.log(text)
})
$('#paragraph').blur(function(){
    text.paragraph = $("#paragraph").text()
    console.log(text)
})

$('.button').click(() =>{
    // $(".outputTitle").html(text.title)
    // $(".outputParagh").html(text.paragraph)
    $.ajax({
        type: "POST",
        url: "/test",
        data: text
    })     
})