// const getData = () => {
//     return new Promise((resolve, reject) => {
//         fetch('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json').then((data) => {
//             resolve(data.json());
//         }).catch((err) => {
//             reject(err);
//         })
//     })
// };

// function dataShow(){
//    getData().then(data => {
//        console.log(data);
//    }).catch(err => {
//        alert(err);
//    });
// }

function dataShow(){
    axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
      .then(function (response) {
        // handle success
        console.log(response.data);
        document.querySelector('.playlist-title').innerHTML = response.data.name;
        document.querySelector('.artist').innerHTML = response.data.artists[0].name;
        document.querySelector('.album').innerHTML = response.data.album.name;
        document.querySelector('#playlist-image').src = response.data.album.images[0].url;
      })
      .catch(function (error) {
        // handle error
        alert(error);
      })
}