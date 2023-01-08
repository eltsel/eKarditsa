const axios = require('axios');
const cheerio = require('cheerio');
var convert = require('xml-js');
const { CURSOR_FLAGS } = require('mongodb');
//
const accepted= {
    "https://www.larissanet.gr":{
        selectors:{main:".jeg_inner_content",title:".entry-header",thumbnail:".jeg_featured.featured_image .thumbnail-container img",end:".post_share",strip:['[data-google-query-id]','[id*="google_ads_iframe"]','.jeg_featured.featured_image .thumbnail-container','.post-after',]}
    },
    "https://www.eleftheria.gr":{
        selectors: {main:".itemBody", thumbnail: ".itemImage img", title: ".itemTitle", end: "", strip: []}
    }
}
const getRss = async()=>{
    let rss = await axios.get(`https://news.google.com/rss/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFUyTkdNeEVnSmxiQ2dBUAE?hl=el&gl=GR&ceid=GR%3Ael`);
    if(rss.data){
        const acceptedURLs = Object.keys(accepted)
        let parsed = convert.xml2json(rss.data, {compact: true, spaces: 4});
        let final = [];
        try {
            parsed = JSON.parse(parsed)
            let articles = ((((parsed||{}).rss||{}).channel||{}).item||[]);
            for (const a of articles) {
                if(acceptedURLs.includes(a.source._attributes.url)){
                    let res = await axios.get(a.link._text)
                    if(res.data){
                        const $ = cheerio.load(res.data);
                        let mainSelector = accepted[a.source._attributes.url].selectors.main;
                        let titleSelector = accepted[a.source._attributes.url].selectors.title;
                        let thumbnailSelector = accepted[a.source._attributes.url].selectors.thumbnail;
                        let endSelector = accepted[a.source._attributes.url].selectors.end;
                        let strips = accepted[a.source._attributes.url].selectors.strip;
                        console.log(mainSelector);
                        let el = $(mainSelector);
                        el.find(endSelector).nextAll().remove();
                        strips.forEach(s => {
                            el.find(s).remove();
                        });
                        final.push({thumbnail:$(thumbnailSelector).attr('src'),title:el.find(titleSelector).text(),credit:{name:a.source._text,url:a.source._attributes.url},html:el.html()})
                    }
                }
            }
            return final;
        } catch (error) {
            console.log(error);
            return [];            
        }
    }
}
const getNews = async ()=>{
    let html = await axios.get(`https://news.google.com/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNRFUyTkdNeEVnSmxiQ2dBUAE?hl=el&gl=GR&ceid=GR%3Ael`)
    if((html||{}).data){
        let pool = [];
        const $ = cheerio.load(html.data)
        $('.D9SJMe article').each((_idx,el)=>{
            let obj = {
                image:$(el).find('figure img').attr('src')
            }
            pool.push(obj)
        })
        return pool
    }else{
        console.log('lol');
        return [];
    }
}


module.exports.getNews = getNews 
module.exports.getRss = getRss 

