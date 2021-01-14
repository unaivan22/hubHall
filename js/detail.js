var itemsHighlightStorie = [
    ['media/highlight/highlight.png', 
        'Tips for Sharing code between NuxtJS Projects', 
        'Many companies have multiple portals, and having them share common code is certainly the scenario we’d prefer, so what are the challenges to sharing code between Nuxt projects? Normally shared code is in the form of an npm package with importable components, and that can be done with Nuxt', 
        'media/highlight/author/author.png',
        'Debra Johanson', 145],
]
  
var data1 = itemsHighlightStorie.reduce((aca, ele) => {
  
    aca += `<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <div class="card card-custom card-stretch gutter-b">
        <div class="card-body d-flex p-0">
            <div class="flex-grow-1 card-rounded flex-grow-1 bgi-no-repeat">
            <a href="detail.html">
                <img class="rounded" src="${ele[0]}" alt="" style="width: 100%; height: 300px; object-fit: cover;">
            </a>    
            </div>
        </div>
    </div>
</div>
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <a href="detail.html">
        <h1 class="display-3 font-weight-bold blog-title">${ele[1]}</h1>
    </a>    
    <p class="desc">${ele[2]}</p>
    <div class="d-flex align-items-center">
        <div class="symbol symbol-45 symbol-sm flex-shrink-0"> 
            <a href="javascript:;">
                <img class="user-photo" src="${ele[3]}"alt="photo">
            </a>        
        </div>
        <div class="ml-4">
            <a href="javascript:;">
                <div class="text-dark-75 font-weight-bolder font-size-lg mb-0">${ele[4]}</div> 
            </a>
            <a href="javascript:;" class="text-muted text-hover-primary font-weight-bold">${ele[5]} posts</a>
        </div>
    </div>
</div>  
    `

    return aca;
  
  }, '')
document.getElementById("highlight-storie").innerHTML = data1;