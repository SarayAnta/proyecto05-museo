

<div className="like-button">

<button className="like" onDoubleClickClick={() => handleLike(bicycle.id)}> /
        
    </button>
    {bicycle.likes}
</div>

/*
let likes = 0;
function sumar(){
  contador++;
  document.getElementById("likes").innerHTML = contador;

}
document.getElementById("likes").addEventListener("click", sumar);



        const likeButtons = document.querySelectorAll('.like-button');

        // Añade un evento de clic a cada botón
        likeButtons.forEach(button => {
          button.addEventListener('click', function() {
            // Encuentra el contador correspondiente a este botón
            const counter = this.nextElementSibling;
        
            // Incrementa el contador
            counter.textContent = parseInt(counter.textContent, 10) + 1;
          });
        });
        */