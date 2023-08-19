let menu_icon = document.querySelector('.fa-bars') ;
let menu = document.querySelector('header .container nav');
let timers = document.querySelectorAll('.objectives .container #objectives .objective .objective-text h3');
menu_icon.onclick = () =>{
    menu_icon.onclick = () =>{
        if(menu.style.display=="none"){
            menu.style='display:flex';
            menu_icon.classList.remove('fa-bars')
            menu_icon.classList.add('fa-xmark')
        }else{
            menu.style='display:none';
            menu_icon.classList.remove('fa-xmark')
            menu_icon.classList.add('fa-bars')
        }
        }
    }


    let x = 0

      let change = function (item, counter) {
      
          if (x < counter) {
      
              item.innerText = `${x++}`
          }
      }

      for (let iterator of timers) {
        let counter = iterator.getAttribute("counter")
        setInterval(change, 10, iterator, counter)

    }
