function buttonClicked() {
    window.alert('clicked')
}
window
    .addEventListener(
        'DOMContentLoaded',
        function () {
            var btnObject = document.getElementById('btnAnother')
            btnObject
                .addEventListener(
                    'click',
                    function () {
                        //console.log('another button clicked')
                        var divObj = document.createElement('div')
                        divObj.id = 'spanMessage'
                        //divObj.className = 'messageStyle'
                        divObj.classList.add(
                            'messageStyle', 'borderStyle')
                        // divObj.style.backgroundColor = 'lime'
                        // divObj.innerText = '<b><i>another button clicked</i></b>'
                        divObj.innerHTML = '<b><i>another button clicked</i></b>'
                        document.body.appendChild(divObj)
                    }
                )
        }
    )
