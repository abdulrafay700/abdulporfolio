// text animated


const text = document.querySelector(".animate-text");
const textLoad= () => {
    setTimeout(() => {
        text.textContent = "I am a Blogger"
    }, 0);


    setTimeout(() => {
        text.textContent = "I am a Youtuber"
    }, 4000);

    setTimeout(() => {
        text.textContent = "I am a Developer"
    }, 8000);


    // setTimeout(() => {
    //     text.textContent = "I am a Code Lover"
    // }, 12000);
}


textLoad();
setInterval(textLoad,12000)



// text animated ended

/////------------ window loader animation
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".pageLoader").style.display = "none";
        document.querySelector(".main").classList.remove("hidden");
        // document.querySelector(".home-section").classList.add("active");

        // Add class to trigger animations beacaue after loader animation not working properly so write it here
        ScrollReveal().reveal('section', { delay: 100, scale: 2 ,easing:"ease-out", interval:100});
    }, 1000);
});





// working for creating a tab for about
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");
tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        // for display tab color and change to active
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        // for content elements experience and skills show
        //data-target attribute that points to the HTML Element that will be changed. to getting the data
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.activate").classList.remove("activate");
        aboutSection.querySelector(target).classList.add("activate");
    }

});


///// ========for porfolio navigation web and graphics navigation
const porfoliotab =  document.querySelector(".portfolio-tab")//these are buttons
const portfolioContent =  document.querySelector(".portfolio-section")//from the parent side
porfoliotab.addEventListener("click",(e)=>{
    if(e.target.classList.contains("portfolio-nav") && !e.target.classList.contains("active")){
        porfoliotab.querySelector(".active").classList.remove("active");
        e.target.classList.add("active")


        const target = e.target.getAttribute("data-target");
        console.log(target)
        portfolioContent.querySelector(".portfolio-content.activate").classList.remove("activate");
        portfolioContent.querySelector(target).classList.add("activate");
        
        
    }
});

/// porfolio navigation correct by chat gpt
// const portfolioTab = document.querySelector(".portfolio-tab");
// portfolioTab.addEventListener("click", (e) => {
//     if (e.target.classList.contains("portfolio-nav") && !e.target.classList.contains("active")) {
//         portfolioTab.querySelector(".active").classList.remove("active");
//         e.target.classList.add("active");

//         const targets = e.target.getAttribute("data-target");

//         // Remove the "activate" class from all portfolio contents
//         document.querySelectorAll(".portfolio-content").forEach(content => {
//             content.classList.remove("activate");
//         });

//         // Add the "activate" class to the targeted content
//         document.querySelector(targets).classList.add("activate");
//     }
// });


// ========== working for a portfolio poppup window =================

document.addEventListener("click", (e) => {
if(e.target.classList.contains("view-project-button")){
    togglePortfolioPopup()
    document.querySelector(".portfolio-popup").scrollTo = (110,0);
    // calling the function callbacks function gatting or the data
    togglePortfolioItemDetails(e.target.parentElement);
}

});

function togglePortfolioPopup(){
    // the porfolio pop is dsplay none open class add the css dispay block
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    // this line blur the main window
    document.querySelector(".main").classList.toggle("fade-out");  
}
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);
    


// portfolio item details replacement
function togglePortfolioItemDetails(portfolioItem){
    console.log(portfolioItem)
    // this code take the data from the thumbnail and then replace it into the popup window image replace
    document.querySelector(".pp-thumbnail img").src = // first paste into popup
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src; //second the line original value
    console.log(portfolioItem)
    // heading replace
    document.querySelector(".pp-header h3").innerHTML = 
   portfolioItem.querySelector(".portfolio-item-title").innerHTML;
// paragraph  replace
   document.querySelector(".pp-body").innerHTML = 
   portfolioItem.querySelector(".portfolio-item-details").innerHTML;
   
}

// if someone click outside of the popup window
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup()
    }
    // console.log(e.target)
});


//-------------------------- for toggler menu to open and close menu design by me------------//
// let togglerbtn = document.querySelector(".nav-toggler")
// let togglerMenu = document.querySelector(".nav")
// togglerbtn.addEventListener("click",()=>{
// togglerMenu.classList.toggle("show-toggle")
// console.log("toggler");
// });
//-------------------------- End   for toggler menu to open and close menu------------//


// === start for origonal toggel
let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",() =>{
togglerNavbar();
});
function togglerNavbar(){
    document.querySelector(".header").classList.toggle("active");

}
// === end for origonal toggel


////// ---------------activate section--------------
document.body.addEventListener("click", (e) =>{
if(e.target.classList.contains("link-item")){
    togglerNavbar();
}
});





//////////// for image popup================================////

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("graphicImg")){
        console.log(e.target.parentElement)
        // img function calling
        toggleImgPopup()
        // and when your click gent the parent element details of when you click 
        imgCopier(e.target.parentElement)
        
        // document.querySelector(".portfolio-popup").scrollTo = (110,0);
        // // calling the function callbacks function
        // togglePortfolioItemDetails(e.target.parentElement);

    }
});

//// for img popup function

const  toggleImgPopup=() =>{
// this line add csss into img-pop to display block in open class 
document.querySelector(".img-popup").classList.toggle("open");
// this line blur the main page 
document.querySelector(".main").classList.toggle("fade-out")
}
// this line out from the function apply on the x close button to close the window
document.querySelector(".imgPop-close").addEventListener("click",toggleImgPopup);

// for imgData or image copier functio
const imgCopier = (imgData)=>{
    console.log( imgData);
    document.querySelector(".imgPaste").src = // JIS main lana hai wo pahly ai ga
   imgData.querySelector(".graphics-items-thumbnail img").src 
}














//////======color changer theme=====================/////
document.querySelector("#color_change_1").addEventListener("click", ()=>{
    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "assets/colors/black.css");
    document.getElementsByTagName("head")[0].appendChild(element);
});

document.querySelector("#color_change_2").addEventListener("click", ()=>{
    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "assets/colors/defaultColor.css");
    document.getElementsByTagName("head")[0].appendChild(element);
});

document.querySelector("#color_change_3").addEventListener("click", ()=>{
    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "assets/colors/gg01.css");
    document.getElementsByTagName("head")[0].appendChild(element);
});

document.querySelector("#color_change_4").addEventListener("click", ()=>{
    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "assets/colors/mycss.css");
    document.getElementsByTagName("head")[0].appendChild(element);
});

document.querySelector("#color_change_5").addEventListener("click", ()=>{
    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "assets/colors/mycss.css");
    document.getElementsByTagName("head")[0].appendChild(element);
});
//////======color changer theme end=====================/////




//======= point #1 for learning
// e.target(show the element with content in html)
// example <p class="data">pak</p> when you click on its show on this way

// point # 2 console.log(e.target.hash);
// you will get id value or #values data


// =======> window load Increment



// for Visitors

window.addEventListener("load", () => {
    // Retrieve existing visit records from localStorage
    let storedRecords = localStorage.getItem("records");
    let visitRecords;

    // Check if there are existing records
    if (storedRecords) {
        visitRecords = JSON.parse(storedRecords);
        // Increment the counter
        visitRecords.personsCount += 1;
        console.log(visitRecords.personsCount);
        document.getElementById("totalVistior").innerHTML = visitRecords.personsCount
    } else {
        // If no records exist, initialize with count 1
        visitRecords = {
            personsCount: 1
        };
        console.log("Total Visitor COunter is" + visitRecords.personsCount);
    }

    // Store the updated records in localStorage
    localStorage.setItem("records", JSON.stringify(visitRecords));
});




// const tour =  driver({
//     steps: [
//       { element: '#jsGear', popover: { title: 'Sidebar categories', description: 'Navigate to desired category.' } },
     
//     ]
//   })
  
//   tour.drive()



// google sheeet sending message

document.querySelector('#contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log the success message from the Google Apps Script
        Swal.fire({
        title: "Form Submitted",
        text: "Thank you for reaching out to us. We will get back to you soon.",
        icon: "success"
        });
    })
    .catch(error => console.error('Error!', error.message));
});

