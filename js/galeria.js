// Galeria de imagenes dinamica
const generaGaleria1 = () => {
    let imagenes = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10', 'img11', 'img12', 'img13', 'img14', 'img15', 'img16'];
    let galeria = document.getElementById('galeria1');

    for (let imagen of imagenes) {
        galeria.innerHTML += `
        <div class="col-lg-4 col-md-12 mb-4" >
        <div class="modal fade" id="${ imagen }" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body mb-0 p-0">
                        <div class="embed-responsive z-depth-5-half">
                            <a><img class="img-fluid z-depth-5" src="../asset/img/palpala/${ imagen }.png" alt="video" data-toggle="modal" data-target="#${ imagen }"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="img-mostrar">
        <a class="view overlay zoom">
            <img class="img-fluid z-depth-5 view" src="../asset/img/palpala/${ imagen }.png" alt="video" data-toggle="modal" data-target="#${ imagen }">
        </a>

        </div>
    </div>
    `;
    }
};
generaGaleria1();

const generaGaleria2 = () => {
    let imagenes = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12'];
    let galeria = document.getElementById('galeria2');

    for (let imagen of imagenes) {
        galeria.innerHTML += `
        <div class="col-lg-4 col-md-12 mb-4" >
        <div class="modal fade" id="${ imagen }" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body mb-0 p-0">
                        <div class="embed-responsive z-depth-5-half">
                            <a><img class="img-fluid z-depth-5" src="../asset/img/gral-san-martin/${ imagen }.png" alt="video" data-toggle="modal" data-target="#${ imagen }"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="img-mostrar">
        <a class="view overlay zoom">
            <img class="img-mostrar img-fluid z-depth-5 view" src="../asset/img/gral-san-martin/${ imagen }.png" alt="video" data-toggle="modal" data-target="#${ imagen }">
        </a>
        </div>
    </div>
    `;
    }
};
generaGaleria2();