const input = document.querySelector(".input-box");
const btnAdd = document.querySelector(".btn-add");
const btnClear = document.querySelector(".btn-clear");
const notesContainer = document.querySelector(".notes-container");

const date = new Date().toLocaleString("en-US");

const clearNote = function () {
  const btnClearNote = document.querySelectorAll("#myBtn-clear-note");
  for (let i = 0; i < btnClearNote.length; i++) {
    btnClearNote[i].onclick = function () {
      this.parentNode.parentNode.remove();
    };
  }
};

const openModal = function () {
  const points = document.querySelectorAll(".points");
  const modal = document.querySelectorAll("#myModal");
  const span = document.querySelectorAll("#close");
  const btn = document.querySelectorAll("#myBtn-seeMore");
  for (
    let i = 0;
    i < btn.length, i < modal.length, i < span.length, i < points.length;
    i++
  ) {
    //See-more
    btn[i].onclick = function () {
      modal[i].style.display = "block";
      points[i].style.display = "none";
    };
    //Close button when modal is open
    span[i].onclick = function () {
      modal[i].style.display = "none";
      points[i].style.display = "inline";
    };
    //Closing the modal window by clicking outside the modal content
    window.onclick = function (event) {
      if (event.target == modal[i]) {
        modal[i].style.display = "none";
        points[i].style.display = "inline";
      }
    };
  }
};

//Add button EventListner
btnAdd.addEventListener("click", function (e) {
  const inputString = input.value;
  if (inputString.length === 0) {
    alert("Please write something to add. 'ThankYou'");
  } else if (inputString.length < 25) {
    notesContainer.innerHTML += `
   <div class="note">
     <div>
       <p>
         ${inputString}
       </p>
       <button id="myBtn-clear-note" class='btn btn-clear-note'>
         <i class="fas fa-trash"></i>
       </button>
       <p class="date" style="margin-left: 77px;">${date}</p>
       </div>
   </div>
      `;
  } else {
    notesContainer.innerHTML += `<div class="note">
        <div>
           <p>
              ${inputString.slice(0, 25)} 
              <span class="points">......</span>
           </p>
            <button id="myBtn-seeMore" class='btn btn-seeMore'><i class="fas fa-info-circle"></i></button>
            <button id="myBtn-clear-note" class='btn btn-clear-note'><i class="fas fa-trash"></i></button>
            <p class="date">${date}</p>
         </div>
         <div id="myModal" class="modal">
           <div class="modal-content">
           <span class="close" id='close'>✖</span>
           <p> ${inputString} </p>
        </div>
     </div>`;
  }
  openModal();
  clearNote();
  input.value = "";
});

//Clear Button EventListner
btnClear.addEventListener("click", function () {
  notesContainer.innerHTML = "";
  input.value = "";
});
