
; /* Start:"a:4:{s:4:"full";s:50:"/local/templates/prolaba/js/main.js?17365120731528";s:6:"source";s:35:"/local/templates/prolaba/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function Main (params) {
  this.init.bind(this)()
}

Main.prototype = {
  init: function () {
    const prototype = this
    this.customLoader()
    this.setTargetBlank()
  },

  customLoader: function () {

    BX.showWait = function () {
      const loader =
        '<div class="bx-cstm-loader loader-container"><div class="loader"></div></div>'
      document.body.insertAdjacentHTML('beforeend', loader)
      $('body').addClass('loaded-now')

      const loaderElement = document.querySelector('.bx-cstm-loader')
      setTimeout(() => {
        if (loaderElement) {
          loaderElement.classList.add('animated')
        }
      }, 10)
    }

    BX.closeWait = function () {
      window.isAjaxUpdated = true
      const arLoader = document.querySelectorAll('.bx-cstm-loader')
      arLoader.forEach((loader) => {

        setTimeout(() => {
          document.querySelector('html').style.overflow = 'auto'
          if (loader) {
            $('body').removeClass('loaded-now')
            loader.classList.remove('animated')
            loader.remove()
          }
        }, 400)
      })
    }
  },

  setTargetBlank: function () {
    BX.ready(function () {
      $('a').each(function (i) {
        let href = $(this).attr('href')
        if (href) {
          const isHttpOrHttps = href.includes('http') || href.includes('https')

          if (isHttpOrHttps) {
            $(this).attr('target', '_blank')
          }
        }
      })
    })
  },
}

/* End */
;; /* /local/templates/prolaba/js/main.js?17365120731528*/
