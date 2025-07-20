let plist = document.querySelectorAll(".p")
let pbox = document.querySelectorAll(".product-box")
// console.log(plantlist[0].textContent)
let userinput = document.querySelector("#userinput")
userinput.addEventListener("keyup",function(){
   var enterval = this.value.toUpperCase()
  for(let i=0;i<plist.length;i+=1){
    if(plist[i].textContent.toUpperCase().indexOf(enterval)<0){
        pbox[i].style.display="none"
    }
    else{
        pbox[i].style.display="block"
    }
  }

})

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[name="tags"]');
    const products = document.querySelectorAll(".product-box");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterProducts);
    });

    function filterProducts() {
        const checkedValues = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value.toLowerCase());

        products.forEach(product => {
            const tags = product.dataset.tags.toLowerCase();

            if (checkedValues.length === 0) {
                product.style.display = "block";
                return;
            }
            const isMatch = checkedValues.some(val => tags.includes(val));
            product.style.display = isMatch ? "block" : "none";
        });
    }
});
