"use strict";
//
var select_shop_sort = /** @class */ (function () {
    function select_shop_sort() {
        var _this = this;
        this.divoption = document.querySelector('#sort_selector');
        this.sort_inner = document.querySelector('#data_sort_select');
        this.content = document.querySelector('.selector_sort_shop');
        this.content.addEventListener('click', function () {
            _this.divoption.classList.toggle('active-select');
            _this.divoption.querySelectorAll('li').forEach(function (el) {
                el.addEventListener('click', function () {
                    _this.sort_inner.innerHTML = el.innerHTML;
                });
            });
        });
    }
    return select_shop_sort;
}());

let filterBody = document.getElementById('filter-overflow');




// Responsive Menu(1)
class MobileMenu {
    SiteMenu = document.querySelector('.SiteMenu');
    closeMenu = document.getElementById('closeMenu');
    StatusMobile = false;
    hamber = document.querySelector('.hamber-logo');
    constructor() {
        this.hamber.addEventListener('click', () => {
            this.open();
        });

        closeMenu.addEventListener('click', () => {
            this.close()
        })
    }
    open() {
        console.log(filterBody)
        filterBody.classList.remove('hidden')
        this.SiteMenu.style.right = (0 + '%');
        this.StatusMobile = true;
    }
    close() {
       filterBody.classList.add('hidden')
        this.StatusMobile = false;
        this.SiteMenu.style.right = (-320 + 'px');
    }

}
//  focusSearch
document.getElementById('search').addEventListener('focus',(e)=>{
    e.target.style.zIndex=999
    filterBody.classList.remove('hidden')
  })
  document.getElementById('search').addEventListener('focusout',(e)=>{
    e.target.style.zIndex=0
    filterBody.classList.add("hidden")
  })
  

// check focus out

function checkFocusOut(event,element,className){

}


class MangeBoxDropDown{
    //  icon
    personBoxIcon=document.querySelector('.person_manage_icon')
    cardBoxIcon=document.querySelector('.card_manage_icon')
    // boxes
    personBox= document.getElementById('showusermanage')
    cardBox= document.getElementById('showcardmanage')

    constructor(){
        this.personBoxIcon.addEventListener('click',()=>{
               if(this.personBox.classList.contains('showusermanage')){
             
                this.closePersonBox()
               }else{
                this.openPersonBox()
               } 
        })
        this.cardBoxIcon.addEventListener('click',()=>{
            if(this.cardBox.classList.contains('showcarmanage')){
                this.closeCardBox()
            }else{
                this.openCardBox()

            }
        })
 

    }

    openPersonBox(){
        this.personBoxIcon.style.zIndex=99
        this.personBox.style.zIndex=99
        this.personBox.classList.add('showusermanage')
        filterBody.classList.remove('hidden')

    }

    openCardBox(){
        this.cardBoxIcon.style.zIndex=99
        this.cardBox.style.zIndex=99
        this.cardBox.classList.add('showcarmanage')
        filterBody.classList.remove('hidden')

    }

    closePersonBox(){
        this.personBoxIcon.style.zIndex=0
        this.personBox.style.zIndex=0
        this.personBox.classList.remove('showusermanage')
        filterBody.classList.add('hidden')

    }
    closeCardBox(){
        this.cardBoxIcon.style.zIndex=0
        this.cardBox.style.zIndex=0
        this.cardBox.classList.remove('showcarmanage')
        filterBody.classList.add('hidden')

    }
}
