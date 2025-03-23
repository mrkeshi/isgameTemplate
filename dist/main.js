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
// dashboard user responsive menu
class DashbaordMobile {
    SiteMenu = document.querySelector('.userDashboard')
    closeMenu = document.querySelector('#closeMenuDashboard')
    StatusMobile = false;
    hamber = document.getElementById('openDashboardMenu')

    constructor() {
        if(this.hamber){
        this.hamber.addEventListener('click', () => {
            this.open()
        })
        this.closeMenu.addEventListener('click', () => {
            this.close()
        })
    }
    }
    open() {
        filterBody.classList.remove('hidden')
        document.querySelector('.userDashboard').style.left = 0
        console.log('open fast')

        this.StatusMobile = true;
    }
    close() {
        filterBody.classList.add('hidden')
        this.StatusMobile = false;
        this.SiteMenu.style.left = (-320 + 'px');
    }
}

//  focusSearch
if (document.getElementById('search')) {
    document.getElementById('search').addEventListener('focus', (e) => {
        if (document.getElementById('basic-addon2')) {
            document.getElementById('basic-addon2').style.zIndex = 46
        }
        e.target.style.zIndex = 45
        filterBody.classList.remove('hidden')
    })
    document.getElementById('search').addEventListener('focusout', (e) => {
        if (document.getElementById('basic-addon2')) {
            document.getElementById('basic-addon2').style.zIndex = 0
        }
        e.target.style.zIndex = 0
        filterBody.classList.add("hidden")
    })
}



// check focus out

function checkFocusOut(event, element, className) {

}


class MangeBoxDropDown {
    //  icon
    personBoxIcon = document.querySelector('.person_manage_icon')
    cardBoxIcon = document.querySelector('.card_manage_icon')
    // boxes
    personBox = document.getElementById('showusermanage')
    cardBox = document.getElementById('showcardmanage')
    // 
    constructor() {
        if (document.querySelector('.person_manage_icon')) {
            this.personBoxIcon.addEventListener('click', () => {
                if (this.personBox.classList.contains('showusermanage')) {

                    this.closePersonBox()
                } else {
                    this.openPersonBox()
                }
            })
        }

        if (document.querySelector('.card_manage_icon')) {
            this.cardBoxIcon.addEventListener('click', () => {

                if (this.cardBox.classList.contains('showcarmanage')) {
                    this.closeCardBox()
                } else {
                    this.openCardBox()
                }

            })
        }

    }
    openPersonBox() {
        this.personBoxIcon.style.zIndex = 99
        this.personBox.style.zIndex = 99
        this.personBox.classList.add('showusermanage')
        filterBody.classList.remove('hidden')
    }
    openCardBox() {
        this.cardBoxIcon.style.zIndex = 99
        this.cardBox.style.zIndex = 99
        this.cardBox.classList.add('showcarmanage')
        filterBody.classList.remove('hidden')
    }
    closePersonBox() {
        this.personBoxIcon.style.zIndex = 0
        this.personBox.style.zIndex = 0
        this.personBox.classList.remove('showusermanage')
        filterBody.classList.add('hidden')
    }
    closeCardBox() {
        this.cardBoxIcon.style.zIndex = 0
        this.cardBox.style.zIndex = 0
        this.cardBox.classList.remove('showcarmanage')
        filterBody.classList.add('hidden')

    }
}

class TabHome {
    // btns
    recentButton = document.getElementById('recent')
    populationButton = document.getElementById('population')
    // boxs
    recentBox = document.querySelector('.recent')
    populationBox = document.querySelector('.population')

    constructor() {
        this.recentButton.addEventListener('click', () => {
            this.toggle()
        })
        this.populationButton.addEventListener('click', () => {

            this.toggle()
        })

    }
    toggle() {
        this.recentButton.classList.toggle('active_tab_btn')
        this.populationButton.classList.toggle('active_tab_btn')

        this.recentBox.classList.toggle('hidden')
        this.populationBox.classList.toggle('hidden')
    }

}

class FormComment {
    clone = document.getElementById('comment_responde').cloneNode('true')
    cancelbtn = this.clone.querySelector('.cancel')
    replays = document.querySelectorAll('.replay-comment')
    constructor() {
        this.cancelbtn.classList.remove('hidden')
        this.replays.forEach((replay) => {
            replay.addEventListener('click', () => {
                console.log()
                replay.parentElement.parentElement.parentElement.appendChild(this.clone)
                this.clone.querySelector('textarea').focus()

                this.cancelbtn.addEventListener('click', (e) => {
                    e.preventDefault()
                    replay.parentElement.parentElement.parentElement.removeChild(this.clone)
                })

            })
        })
    }
}
const ResponsiveDashboard = new DashbaordMobile()
let seatcrmodal = null;
let formsearch = null;
let btnsearch = null;
if (document.querySelector('.search-modal')) {
    seatcrmodal = document.querySelector('.search-modal');
}
if (document.querySelector('.search-modal')) {
    formsearch = seatcrmodal.querySelector('#formsea')
}
if (document.getElementById('btnsearch')) {
    btnsearch = document.getElementById('btnsearch')
}
let checkopenedsearc = false

function closeSearch() {
    seatcrmodal.classList.remove('search-modal_show')
    filterBody.classList.add('hidden')
    checkopenedsearc = false

}
if (btnsearch) {
    btnsearch.addEventListener('click', () => {
        seatcrmodal.classList.add('search-modal_show')
        filterBody.classList.remove('hidden')
        checkopenedsearc = true

    })
}

let Mobi = new MobileMenu()
let Boxes = new MangeBoxDropDown()
window.addEventListener('click', (event) => {
    if (Boxes.personBox) {
        if (!Boxes.personBox.contains(event.target) && event.target.contains(filterBody)) {
            Boxes.closePersonBox()
        }
    }
    if (Boxes.cardBox) {
        if (!Boxes.cardBox.contains(event.target) && event.target.contains(filterBody)) {
            Boxes.closeCardBox()
        }
    }
    if (Mobi.SiteMenu) {
        if (!Mobi.SiteMenu.contains(event.target) && Mobi.StatusMobile && !Mobi.hamber.contains(event.target)) {
            Mobi.close()

        }
        if (formsearch) {
            if (!formsearch.contains(event.target) && !event.target.classList.contains('material-symbols-outlined') && checkopenedsearc == true) {
                closeSearch()
            }
        }
        if (ResponsiveDashboard.SiteMenu) {


            if (!ResponsiveDashboard.SiteMenu.contains(event.target) && ResponsiveDashboard.StatusMobile && event.target.contains(filterBody)) {
                ResponsiveDashboard.close()
            }
        }
    }
})

function CopyTextClipBoard() {


    var copyText = document.getElementById("myInput");


    copyText.select();
    copyText.setSelectionRange(0, 99999)


    navigator.clipboard.writeText(copyText.value);


}
