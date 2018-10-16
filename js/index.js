function removeClass(obj, ClassName){
    if(obj.className.indexOf(' ') !== -1){
        obj.className = obj.className.replace(' '+ ClassName, '');
    }
    else{
        obj.className = obj.className.replace(ClassName, '');
    }
}
function addClass(obj, ClassName){
    if(obj.className.length === 0){
        obj.className = ClassName;
    }
    else{
        obj.className += (' ' + ClassName);
    }
}
function insertAfter(obj, newobj){
    let parent = obj.parentNode;
    if(obj === parent.lastElementChild){
        parent.appendChild(newobj);
    }
    else{
        parent.insertBefore(newobj, obj.nextSibling);
    }
}
window.onload = function(){
    (function LeftMenuListener(){
        let li_detail_List = document.querySelectorAll('.row-nav .li-detail');
        for(let i of li_detail_List){
            i.addEventListener('mouseover', function(e){
                e = e || window.event;
                let LiName = this.parentNode;
                for(let i of li_detail_List){
                    removeClass(LiName, 'li-select');
                }
                addClass(LiName, 'li-select');
            });
            i.addEventListener('mouseout',function(e){
                e = e || window.event;
                let LiName = this.parentNode;
                removeClass(LiName, 'li-select');
            });
        }
    })();
    (function followSearchPage(){
        let hotMovie = document.getElementsByClassName('content')[0];
        let searchPageFixed = document.getElementsByClassName('search-page-fixed')[0];
        window.onscroll = function (e){
            let t = document.documentElement.scrollTop||document.body.scrollTop;
            console.log(t);
            console.log(hotMovie.offsetTop);
            if(t > hotMovie.offsetTop){
                searchPageFixed.style.top = '0px';
            }
            else{
                searchPageFixed.style.top = '-72px';
            }
        }
    }());
};