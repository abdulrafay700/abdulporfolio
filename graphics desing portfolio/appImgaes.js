var imgData = [
    {
    img:"graphics desing portfolio/images/CALENDER1.jpg",
    imgTilte :"calenderer 1",
    openLink : "graphics desing portfolio/images/CALENDER1.jpg"
    },

    {
        img:"graphics desing portfolio/images/CALENDER2.jpg",
        imgTilte :"calenderer 2",
        openLink : "graphics desing portfolio/images/CALENDER2.jpg"
    },

    {
        img : "graphics desing portfolio/images/GOOGLE FORM COVER THUM.jpg",
        imgTilte : "Social media banner ",
        openLink : "graphics desing portfolio/images/GOOGLE FORM COVER.jpg"
    },

    {
        img : "graphics desing portfolio/images/DIGITAL MARKETING 2.jpg",
        imgTilte : "Digital marketing poster",
        openLink : "graphics desing portfolio/images/DIGITAL MARKETING 2.jpg"
        
    },

    {
        img: "graphics desing portfolio/images/thumbnail2.jpg",
        imgTilte : "Web designing poster",
        openLink : "graphics desing portfolio/images/thumbnail2.jpg"
    },

    {
        img: "graphics desing portfolio/images/Final Social Media Marketing with footer.jpg",
        imgTilte : "social media marketing poster",
        openLink : "graphics desing portfolio/images/Final Social Media Marketing with footer.jpg"
    },

    {
        img : "graphics desing portfolio/images/Social Media Marketing.jpg",
        imgTilte : "social media marketing poster",
        openLink : "graphics desing portfolio/images/Social Media Marketing.jpg"

        
    },

    {
        img : "graphics desing portfolio/images/Accounting Record 2.jpg",
        imgTilte : "social media marketing poster",
        openLink : "graphics desing portfolio/images/Accounting Record 2.jpg",
    },

    {
        img : "graphics desing portfolio/images/INFformation Consultant final thumb.jpg",
        imgTilte : "social media poster",
        openLink : "graphics desing portfolio/images/INFformation Consultant final.jpg",
    },

    {
        img :"graphics desing portfolio/images/INFOGRAPHIC INFORAMTION CONSULTANT.jpg",
        imgTilte : "social media poster",
        openLink :"graphics desing portfolio/images/INFOGRAPHIC INFORAMTION CONSULTANT.jpg",

    },

    {
        img :"graphics desing portfolio/images/thumbnail3.jpg",
        imgTilte : "social media banner",
        openLink :"graphics desing portfolio/images/banner.jpg",
    },

    {
        img : "graphics desing portfolio/images/axitude3.jpg",
        imgTilte : "social media poster",
        openLink : "graphics desing portfolio/images/axitude3.jpg",
    }
]

imgData.forEach(function(itemData,index){

    console.log(imgData[index].img) //both or same working
    console.log( itemData.img)
    
    document.querySelector('.graphics-portfolio').innerHTML += `
    
<div class="graphics-items">
<div class="graphics-items-thumbnail">

         <img class="graphicImg" src="${itemData.img}" alt="">
    </a>
</div>

<div class="graphics-item-title">
    <h3>${itemData.imgTilte}</h3>
</div>
</div>
`
    
})
