const extractText = () => {

    const fileInput = document.getElementById('imageInput');
    const outPutDiv = document.getElementById('output');

    const imagesFile = fileInput.files[0];

    if(!imagesFile){

        outPutDiv.innerText = 'Please select an image file.'
        return;
    }

    Tesseract.recognize(
        imagesFile,
        'eng'
    ).then(({data}) => {
        
         outPutDiv.innerText = data.text;
    }).catch((error) => {
         
        console.error('Error', error);
        outPutDiv.innerText = 'Error' ;
    })
}