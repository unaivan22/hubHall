
var itemsTrending = [
    ['media/trending/trending0.png', 
        'Global coronavirus cases surpass 90 million in battle on new variant ', 
        '12 January 2020'],
    ['media/trending/trending1.png', 
        'Wall Street analysts are cautiously optimistic on British', 
        '12 January 2020'],
]
  
var data0 = itemsTrending.reduce((ac, ele) => {
  
    ac += `<div class="col-6">
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="card card-custom card-stretch gutter-b">
                <div class="card-body d-flex p-0">
                    <div class="flex-grow-1 card-rounded flex-grow-1 bgi-no-repeat">
                    <a href="javascript:;">
                        <img class="rounded img-highlight" src="${ele[0]}" alt="" style=" object-fit: cover;">
                    </a>    
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <span class="label label-info label-inline font-weight-bold mb-2 mt-4">Trending</span>
            <a href="javascript:;">
                <h5 class="font-weight-bold blog-title">${ele[1]}</h5>
            </a>    
            <p class="desc">${ele[2]}</p>
        </div> 
    </div> 
</div>
    `

    return ac;
  
  }, '')
document.getElementById("trending-content").innerHTML = data0;

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
            <a href="javascript:;">
                <img class="rounded" src="${ele[0]}" alt="" style="width: 100%; height: 300px; object-fit: cover;">
            </a>    
            </div>
        </div>
    </div>
</div>
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <a href="javascript:;">
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

var itemsSubStories = [
    ['media/sub/sub-0.png', 
        'How I Succeeded In My Online Bussiness', 
        'My beautiful journey, that started from zero.  Give five minutes to read my story. I am not a guru that has the ten bullet point list that will transform your life in a month', 
        'media/sub/author/author-sub-0.png',
        'Efi Asvesti', 23],
    ['media/sub/sub-1.png', 
        'Japanese Meal Comes With Pickles', 
        'How a tiny serving of Japanese pickles can make a huge difference. If you’ve ever picked up a Japanese bento box or ordered a traditional Japanese meal', 
        'media/sub/author/author-sub-1.png',
        'Eva Okumura', 94],
    ['media/sub/sub-2.png', 
        'America’s prettiest national parks winter', 
        'In winter, dropping temperatures and snowy landscapes mean you’ll need to prepare differently for a national park visit, but the pay off is well worth the time.',
        'media/sub/author/author-sub-2.png',
        'Rita Lowe', 4],
    ['media/sub/sub-3.png', 
        'Why Women Lose Interest ', 
        'The One Difference Between The Male and Female Brain That Most People Don’t Know About, And How It Could Be Hurting Your Relationships',
        'media/sub/author/author-sub-3.png',
        'Terrell Chavez', 22],
    ['media/sub/sub-4.png', 
        'A Guide to Minimalism in the Real World', 
        'You don’t have to live out of a backpack or move into a tiny house to experience the joys of a minimalist mindset.',
        'media/sub/author/author-sub-4.png',
        'Julie Mack', 227],
    ['media/sub/sub-5.png', 
        'An iOS Developer on React Native', 
        'When I first caught wind of React Native, I thought of it as nothing more than a way for web developers to dip their feet into native mobile apps.',
        'media/sub/author/author-sub-5.png',
        'Adam Mccoy', 12],
]
  
  let data2 = itemsSubStories.reduce((acc, ele) => {
  
    acc += `<div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 card-sub-stories">
                <a href="javascript:;">
                    <img class="rounded img-stories mb-4" src="${ele[0]}" alt="">
                </a>
                <a href="javascript:;">
                    <h4 class="font-weight-bold stories-title">${ele[1]}</h4>
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
                            <div class="text-dark-75 font-weight-bolder font-size-lg mb-0" id="demo">${ele[4]}</div> 
                        </a>
                        <a href="javascript:;" class="text-muted text-hover-primary font-weight-bold">${ele[5]} posts</a>
                    </div>
                </div>
            </div>`

    return acc;
  
  }, '')

document.getElementById("subs-stories").innerHTML = data2;