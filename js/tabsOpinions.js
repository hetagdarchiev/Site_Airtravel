function tabs(buttons,sections)
{
    this.buttons = document.querySelectorAll(`.${buttons}`)
    this.tabs = document.querySelectorAll(`.${sections}`)

    this.funk = ()=>
    {
        this.buttons.forEach((element,index) => {
            element.addEventListener('click',()=> 
            {
                this.resetCheck(this.buttons,this.tabs)
                element.style.backgroundColor = "var(--purple--light)";

                this.tabs[index].classList.add('visible')
            })
        });
    }
    this.resetCheck = function(buttonsArray,tabs) 
    {
        buttonsArray.forEach((elem,index) =>
        {
            elem.style.backgroundColor = "var(--grey--light)"
            tabs[index].classList.remove('visible')
            tabs[index].classList.add('invisible')
        }
        )
    }
}

export let tab = new tabs('_circleButton','_tabs')