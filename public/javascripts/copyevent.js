function copyEvent() {
    const copyText = document.querySelector('#copy').innerText
    navigator.clipboard.writeText(copyText)
    .then(() => alert('內容已複製'))
    .catch(error => console.log(error))
}