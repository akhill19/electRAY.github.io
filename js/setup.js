/* ########## DOM LOAD ########## */
document.addEventListener("DOMContentLoaded", function() 
{

document.getElementById("year").innerHTML = new Date().getFullYear();

/* ########## 100vh Solution ############# */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});
/* ########## END 100vh Solution ############# */
    
/* ############ LOADING ############ */    
var go;  
var go_2;

/* *** START - Preload images  *** */ 
var imgLoad = imagesLoaded(document.querySelector('body'));
    
function onAlways(instance) 
{   
    const image_eventi_speed = document.querySelectorAll('img');
        
    // ########## Split text ##########
    splitText.init({
    selector: '[data-js="split-me"]'
    });
    // ########## End split text ##########

    
go_2='yes';

    if(go=='yes')
    {
    ok_load();
    }
}

imgLoad.on('done', onAlways);
/*  *** END Preload images *** */

setTimeout(function()
{
ok_load();
}, 3400);

function ok_load()
{
    go='yes'; 

    if(go_2=='yes')
    {
            
        document.querySelector('#loading').classList.add('hide');
        document.querySelector('#start h1').classList.add('show');
        document.querySelector('#cont_sp').classList.add('show');
        
        setTimeout(function()
        {
        smoothScroll.update();
        }, 100);

        
    }
}
/* ############ END LOADING ############ */

/* ############ ScrollTrigger Animation ############ */ 
const pageContainer = document.querySelector("[data-scroll-container]");

/* ############ LOCOMOTIVE ############ */
const smoothScroll = new LocomotiveScroll
({
    el: pageContainer,
    smooth: true,
    resetNativeScroll: true,
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: 
    {
    smooth: true
    },
    tablet: 
    {
    smooth: true
    },
    class: "active"
});
/* ############ END LOCOMOTIVE ############ */

var a="no";

var lastScroll = 0;
smoothScroll.on('scroll', (obj) => 
{
    const wer         = window.innerHeight;
    const winScroll   = obj.scroll.y;
    var height_cont = document.querySelector("#page-wrap").offsetHeight;
    height_cont -= wer;
    const scrolled    = (winScroll / height_cont) * 100;
    

    document.querySelector("#line span").style.width = scrolled+"%";

    if(a=="no")
    {
        a="yes";

        if(obj.scroll.y>10)
        {
            const currentScroll = obj.scroll.y;
            
            if (currentScroll <= 0) 
            {
            document.body.classList.remove("scrollUp");
            }

            if (currentScroll > lastScroll && ! document.body.classList.contains("scrollDown")) 
            {
                // down
                document.body.classList.remove("scrollUp");
                document.body.classList.add("scrollDown");
            } else if (
                currentScroll < lastScroll &&
                document.body.classList.contains("scrollDown")
            ){
                // up
                document.body.classList.remove("scrollDown");
                document.body.classList.add("scrollUp");
            }
            
            lastScroll = currentScroll;
        }else
        {
            document.body.classList.remove("scrollUp");
            document.body.classList.remove("scrollDown");
        }
        
        setTimeout(function()
        {
            a="no";
        }, 100);
    }
}); 

smoothScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(pageContainer, 
{
    scrollTop(value) 
    {
    return arguments.length ? smoothScroll.scrollTo(value, 0, 0) : smoothScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() 
    {
      return {
        top: smoothScroll.scroll.instance.scroll.y,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: smoothScroll.el.style.transform ? "transform" : "fixed"
});

ScrollTrigger.matchMedia
({
    "(min-width: 961px)": function() 
    {
        let sp = gsap.timeline({defaults:{ease:"none"}})
        .from("#sp", {transform:"translate(0, 0) scale(1)"}).to("#sp", { top:'50%', left:'50%', transform:"translate(-50%, -50%) scale(0.2)"})
        
        ScrollTrigger.create
        ({
            trigger: "#start",
            scroller: "#page-wrap",
            scrub: true,
            animation:sp,
            start: "-42%",
            end: "+=350%",
        })

        let text_sp = gsap.timeline({defaults:{ease:"easeOut"}})
        .to("#text_sp", {opacity:1, transform:"scale(1) translate(-50%, -50%)"})
            
        ScrollTrigger.create
        ({
            trigger: "#start",
            scroller: "#page-wrap",
            scrub: true,
            animation:text_sp,
            start: "10vh",
            end: "+=200%",
        })

        let sfondo_sp = gsap.timeline({defaults:{ease:"none"}})
        .to("#skatepark", {scale:1, opacity:1})
            
        ScrollTrigger.create
        ({
            trigger: "#start",
            scroller: "#page-wrap",
            scrub: true,
            animation:sfondo_sp,
            start: "top top",
            end: "+=150%"
        })

        let rotation_sp = gsap.timeline({defaults:{ease:"none"}})
        .to("#text_sp>img", {rotation:360 * 2})
            
        ScrollTrigger.create
        ({
            trigger: "#start",
            scroller: "#page-wrap",
            scrub: true,
            animation:rotation_sp,
            start: "10vh",
            end: "+=500%"
        })

        let skull = gsap.timeline({defaults:{ease:"none"}})
       .to("#boardSkull", { scale:1, top:'50%', left:'50%', transform:"translate(-50%, -50%)"})
        
        ScrollTrigger.create
        ({
            trigger: "#skull",
            scroller: "#page-wrap",
            scrub: true,
            animation:skull,
            start: "-10%",
            end: "+=200%",
        })
    },

    // tablet protrait
    "(max-width: 960px)": function() 
    {
        let sp = gsap.timeline({defaults:{ease:"none"}})
        .from("#sp", {transform:"translateY(0, 0) scale(1)"}).to("#sp", { top:'50%', left:'50%', transform:"translate(-50%, -50%) scale(0.3)"})
          
        ScrollTrigger.create
        ({
            trigger: "#start",
            scroller: "#page-wrap",
            scrub: true,
            animation:sp,
            start: "-22%",
            end: "+=300%",
        })

        let text_sp = gsap.timeline({defaults:{ease:"easeOut"}})
        .to("#text_sp", {opacity:1, transform:"scale(1) translate(-50%, -50%)"})
            
        ScrollTrigger.create
        ({
            trigger: "#start",
            scroller: "#page-wrap",
            scrub: true,
            animation:text_sp,
            start: "10vh",
            end: "+=200%",
        })

        let sfondo_sp = gsap.timeline({defaults:{ease:"none"}})
        .to("#skatepark", {scale:1, opacity:1})
            
        ScrollTrigger.create
        ({
            trigger: "#start",
            scroller: "#page-wrap",
            scrub: true,
            animation:sfondo_sp,
            start: "top top",
            end: "+=150%"
        })

        let rotation_sp = gsap.timeline({defaults:{ease:"none"}})
        .to("#text_sp>img", {rotation:360 * 2})
            
        ScrollTrigger.create
        ({
            trigger: "#start",
            scroller: "#page-wrap",
            scrub: true,
            animation:rotation_sp,
            start: "10vh",
            end: "+=500%"
        })

        let skull = gsap.timeline({defaults:{ease:"none"}})
       .to("#boardSkull", { scale:1, top:'50%', left:'50%', transform:"translate(-50%, -50%)"})
        
        ScrollTrigger.create
        ({
            trigger: "#skull",
            scroller: "#page-wrap",
            scrub: true,
            animation:skull,
            start: "-10%",
            end: "+=200%",
        })

    }
}); 


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => smoothScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



/* ############ END ScrollTrigger Animation ############ */ 



/* ############ Split text span ############ */ 
var splitText = (function()
{
    
    var config = 
    {
    selector: '[data-js="split-me"]',
    };
    
    var origTextArray = [];
    var _storedMQ = 0;
    var mediaQueries = 
    {
      mq320: 320,
      mq340: 340,
      mq360: 360,
      mq400: 400,
      mq480: 480,
      mq600: 600,
      mq720: 720,
      mq960: 960,
      mq1440: 1440,
    }
    
    var resizeable_elements = document.querySelectorAll(config.selector);

    function _checkIfMQChanged()
    {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var _currentMq = 0;
  
        if (_storedMQ == 0) _storedMQ = width;
  
        if (width >= mediaQueries.mq340 && width <= mediaQueries.mq360) {
        _currentMq = mediaQueries.mq340;
        } else if (width >= mediaQueries.mq360 && width <= mediaQueries.mq400) {
        _currentMq = mediaQueries.mq360;
        } else if (width >= mediaQueries.mq400 && width <= mediaQueries.mq480) {
        _currentMq = mediaQueries.mq400;
        } else if (width >= mediaQueries.mq480 && width <= mediaQueries.mq600) {
        _currentMq = mediaQueries.mq480;
        } else if (width >= mediaQueries.mq600 && width <= mediaQueries.mq720) {
        _currentMq = mediaQueries.mq600;
        } else if (width >= mediaQueries.mq720 && width <= mediaQueries.mq960) {
        _currentMq = mediaQueries.mq720;
        } else if (width >= mediaQueries.mq960 && width <= mediaQueries.mq1440) {
        _currentMq = mediaQueries.mq960;
        } else if (width >= mediaQueries.mq1440) {
        _currentMq = mediaQueries.mq1440;
         } else {
        _currentMq = mediaQueries.mq320;
        }
  
        if (_currentMq != _storedMQ){
        _storedMQ = _currentMq;
      
        return true;
        }
        return false;
    }
    
    /**
     * @private
     * @param {string} element
     * @returns {function}
     */
    
    var _splitMe = function(element) 
    {
    var originalText = element.textContent;
    element.textContent = '';
    origTextArray.push(originalText);
    var spanSections = [];
    
    Array.prototype.forEach.call(originalText.split(' '), function(el) 
    {
        var newSpan = document.createElement('span');
        newSpan.textContent = el + " ";
        element.appendChild(newSpan);
        element.style.paddingLeft = "20px";
        element.style.paddingRight = "20px";
        
        var index = newSpan.offsetTop - newSpan.scrollTop;
        
        if (spanSections[index] === undefined)
        {
        spanSections[index] = '';
        };
        
        spanSections[index] += newSpan.textContent;
        element.textContent = '';
        
        for (var i = 0; i < spanSections.length; i++)
        {
            if( spanSections[i] !== undefined )
            {
                var spanText = spanSections[i].trim();
                var newNewSpan = document.createElement('span');
                newNewSpan.innerHTML = '<span>'+spanText+'</span>'
                element.appendChild(newNewSpan);
            }
        }
    });
      
    if (element.style.removeProperty) 
    {
        element.style.removeProperty('padding-left');
        element.style.removeProperty('padding-right');
    } else {
        element.style.removeAttribute('padding-left');
        element.style.removeAttribute('padding-right');
    };
      
    var injectedSpan = element.getElementsByTagName('span');
    
    Array.prototype.forEach.call(injectedSpan, function(el) 
    {
    el.classList.add('split-item');
    });     
};
    
/**
* @private
* @returns {function}
*/

var _resize = function() 
{
    if (!_checkIfMQChanged()){ return; }
    
    for (var i = 0; i < resizeable_elements.length; i++) 
    {
        var el = resizeable_elements[i];
        el.innerHTML = "";
        var orig = origTextArray[i];
        el.textContent = orig;
        _splitMe(el);
    }
};
    
/**
 * @public
* @returns {function}
*/
var init = function(options) 
{  
    for (var prop in options) 
    {
        if (options.hasOwnProperty(prop)) 
        {
        config[prop] = options[prop];
        }
    };
     
    setTimeout(function () 
    {
        Array.prototype.forEach.call(document.querySelectorAll(config.selector), function (el, i) 
        {
        _splitMe(el);
        });
    }, 1500);
      
    window.onresize = function() 
    {
    _debouncer()
    }
};
    
var _debouncer = debounce(function() 
{
_resize(); 
}, 200);

function debounce(func, wait, immediate) 
{
    var timeout;

    return function() 
    {
        var context = this, args = arguments;
        var later = function() 
        {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
    
return {
      init: init
    }
  })();

/* ########## End split text ########## */ 


/* ############ SCROLL TO DIV ############ */
const url_link_bb = document.querySelectorAll('#navigation li a')
for (var i=0; i<url_link_bb.length; i++)
{
    url_link_bb[i].addEventListener('click', function(e) 
    {
        var href=this.getAttribute('href');

        document.querySelector('#load_scroll').classList.add('show');
        
            setTimeout(function()
            {
                document.querySelector('#navigation').classList.remove('open');
                document.querySelector('#navigation').classList.remove('close_ani');
                document.querySelector('#botton_nav').classList.remove('end');
            }, 1500);

            document.querySelector('#load_scroll').classList.add('hide');

            setTimeout (function()
            {
            document.querySelector('#load_scroll').classList.remove('show');
            document.querySelector('#load_scroll').classList.hide('show');
            }, 2700);

        smoothScroll.scrollTo(href);
        e.preventDefault(); 
    })
}


document.querySelector('.top_bar .button').addEventListener('click', function(e) 
{
smoothScroll.scrollTo('#buyit');
e.preventDefault(); 
});

/* ############ END SCROLL TO DIV ############ */

/* ############ Open/Close Menu ############ */
document.querySelector('#botton_nav').addEventListener("click", function(e)
{
    document.querySelector('#navigation').classList.add('open');
    document.querySelector('#close_menu').classList.add('end');


    setTimeout (function()
    {
    document.querySelector('#navigation').classList.add('active');
    document.querySelector('#close_menu').classList.remove('end');
    }, 1000);

    e.preventDefault();
});

document.querySelector('#close_menu').addEventListener("click", function(e)
{
    document.querySelector('#navigation').classList.remove('active');
    document.querySelector('#navigation').classList.add('close_ani');
    document.querySelector('#botton_nav').classList.add('end');

    setTimeout (function()
    {
    document.querySelector('#navigation').classList.remove('open');
    document.querySelector('#navigation').classList.remove('close_ani');
    document.querySelector('#botton_nav').classList.remove('end');
    }, 1600);

    e.preventDefault();
});
/*  ############  END  Open/Close Menu  ############  */

/* ############ POINTER FOLLOW MOUSE  ############# */
var mousepointerDiv=document.querySelector('#mousepointer>div>*');
var mousepointer=document.querySelector('#mousepointer');
var all_link;
var all_submit;
var all_title;

const cursor = document.querySelector('#mousepointer');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let speed = 0.5;
    
function animate() 
{
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;
    
    cursorX = cursorX + (distX * speed);
    cursorY = cursorY + (distY * speed);
    
    cursor.style.left = cursorX-40 + 'px';
    cursor.style.top = cursorY-40 + 'px';
    
    requestAnimationFrame(animate);
}

animate();
    
document.addEventListener('mousemove', (event) => 
{
mouseX = event.clientX+19;
mouseY = event.clientY+18;
})

mouse_mo();

function mouse_mo()
{
    all_link = document.querySelectorAll('a');
    
    for(var i=0; i<all_link.length; i++)
    {
        var el=all_link[i];
        el.addEventListener("mouseover", event => 
        {
        mousepointerDiv.classList.remove('active');
         mousepointer.classList.add('active');
        });

        el.addEventListener("mouseout", event => 
        {
        mousepointer.classList.remove('active');
        });
    }

    all_submit = document.querySelectorAll('input[type="range"]');
    for(var i=0; i<all_submit.length; i++)
    {
        var el=all_submit[i];
        el.addEventListener("mouseover", event => {
            mousepointerDiv.classList.remove('active');
            mousepointer.classList.add('active');
        });

        el.addEventListener("mouseout", event => {
            mousepointer.classList.remove('active');
        });
    }    
}
/* ############ END FOLLOW MOUSE  ############# */

function resize()
{
    change_size_font();
    

    setTimeout(function()
    {
    smoothScroll.update();
    },500)

       

    
}
  
window.addEventListener('resize', resize);

});