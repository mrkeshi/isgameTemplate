//
class select_shop_sort{
     divoption=document.querySelector('#sort_selector') as HTMLDivElement
     sort_inner=document.querySelector('#data_sort_select') as HTMLSpanElement
     content=document.querySelector('.selector_sort_shop') as HTMLDivElement

    constructor(){
        this.content.addEventListener('click',()=>{
            this.divoption.classList.toggle('active-select')
            this.divoption.querySelectorAll('li').forEach((el)=>{
                el.addEventListener('click',()=>{
                this.sort_inner.innerHTML=el.innerHTML
                
                })
            })
        })
    }
}
new select_shop_sort()
