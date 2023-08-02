//
var select_shop_sort = /** @class */ (function () {
    function select_shop_sort() {
        var _this = this;
        this.divoption = document.querySelector('#sort_selector');
        this.sort_inner = document.querySelector('#data_sort_select');
        this.sort_inner.addEventListener('click', function () {
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

