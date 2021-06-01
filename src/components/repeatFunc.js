import axios from 'axios';

export const downloadFuc = (linkURL, name) => {
    axios.get(linkURL, {
        responseType: 'arraybuffer',
        headers: {
            'Content-Type': 'audio/mpeg'
        }
    }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${name}.mp3`);
        document.body.appendChild(link);
        link.click();
    }).catch(error => alert(error));
}