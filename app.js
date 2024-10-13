let btnAdd = document.querySelector(".add");
let btnCancel = document.querySelector(".cancel");
let addContainer = document.querySelector(".add-item");
let btnSave = document.querySelector(".save");
let mainContainer = document.querySelector(".main-container");
let itemain = document.querySelector(".main-container");

btnAdd.addEventListener("click", (e) => {

    addContainer.style.display = "flex";

});

btnCancel.addEventListener("click", (e) => {

    addContainer.style.display = "none";

});

btnSave.addEventListener("click", (e) => {
    save();
});

itemain.addEventListener("click", (e) => {

    let elem = e.target;
    console.log("awd");
    if (elem.classList.contains("remove")) {
        remove(elem);
    }
    else if (elem.classList.contains("edit")) {

        if (elem.textContent == "Edit") {
            edit(elem);
            elem.textContent = "Save";
        } else {
            saveitem(elem);
            elem.textContent = "Edit";
        }

    }

});

const saveitem = (elem) => {

    let parent = elem.parentElement.parentElement;
    let brother1 = elem.parentElement.previousElementSibling.previousElementSibling;
    let brother2 = elem.parentElement.previousElementSibling;
    if(brother1.value!="" && brother2.value!=""){

    let name = document.createElement("h2");
    name.classList = "h-info";
    name.textContent = brother1.value;

    let occup = document.createElement("p");
    occup.classList = "p-info";
    occup.textContent = brother2.value;


    parent.removeChild(brother1);
    parent.removeChild(brother2);

    parent.insertBefore(occup, elem.parentElement);
    parent.insertBefore(name, occup);


    }
  
};

const edit = (elem) => {
    let txtnume = document.createElement("input");
    txtnume.type = "text";
    txtnume.classList = "h-info edititem";
    txtnume.placeholder = "Name";

    let txtoccup = document.createElement("input");
    txtoccup.type = "text";
    txtoccup.classList = "p-info edititem";
    txtoccup.placeholder = "Occupation";

    let parent = elem.parentElement.parentElement;
    let brother1 = elem.parentElement.previousElementSibling.previousElementSibling;
    let brother2 = elem.parentElement.previousElementSibling;

    parent.removeChild(brother1);
    parent.removeChild(brother2);

    parent.insertBefore(txtoccup, elem.parentElement);
    parent.insertBefore(txtnume, txtoccup);

};

const remove = (elem) => {
    let item = elem.parentElement.parentElement;
    let parent = elem.parentElement.parentElement.parentElement;
    parent.removeChild(item);
};

const save = () => {

    let item = document.createElement("div");
    let txtName = document.querySelector(".txtname");
    let txtocc = document.querySelector(".txtoccupation");

    if (txtName.value != "" && txtocc.value != "") {
        item.classList = "main-item";
        item.innerHTML = `
     <img class="main-friend-pic" src="imagini/avatar1.png">
                <h2 class="h-info">${txtName.value}</h2>
                <p class="p-info">${txtocc.value}</p>
    
                <div class="btn-item-main">
                    <button class="edit btn-style">Edit</button>
                    <button class="remove btn-style">Remove</button>
                </div>
    `;

        mainContainer.insertBefore(item, mainContainer.firstElementChild);

        addContainer.style.display = "none";
    }
};