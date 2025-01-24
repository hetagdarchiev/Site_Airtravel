function AddClass(clas) {
    this.classElement = document.querySelector(clas);
    
    this.init = function() {
        this.classElement.addEventListener('click', () => {

            this.classElement.classList.toggle('burger__menu--active');
            
        });
    }
}

export let addClas = new AddClass('.burger__menu');