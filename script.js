function $(somefunc) {
    document.addEventListener('readystatechange', function() {

        if(document.readyState === 'interactive') {

            somefunc();

            document.addEventListener('DOMContentLoaded', () => {

                somefunc();

            })
        }
    })
}

$(function(){
    console.log(`i'm load`)
})

document.addEventListener('DOMContentLoaded', function() {
    alert('DOM loaded!')
})