const apiDirectory = document.querySelector('.api-directory');
const title = document.getElementById('title');
const divv = document.querySelector('.main-content');
const sub = document.getElementById('sub');
const queryvalue = document.getElementsByClassName('query');
const btnres = document.getElementsByClassName('btnres');
let apiUrl = '';
const getlink = {
    blackai: 'http://adonisapi.bgfxd.repl.co/api/blackbox?query=',
    bard: 'http://nodejs.bucky-26.rep.co/ask-bard?message=',
    advice: 'http://adonisapi.bgfxd.repl.co/api/advice',
    yt: 'http://adonisapi.bgfxd.repl.co/api/ytdl?url=',
    ff: 'http://adonisapi.bgfxd.repl.co/api/funfact',
    hf: 'http://adonisapi.bgfxd.repl.co/api/figure?name=',
    ngl: 'api/proxy',
    grammar: 'http://adonisapi.bgfxd.repl.co/api/grammar?query=',
    anime: 'http://adonisapi.bgfxd.repl.co/api/sfw/neko'
};
const subtitle = {
    blackai: ' Blackai API is AI Powered By Google LambDa Language model',
    bard: 'bard api is an unofficial API of Google Bard AI ',
    advice: 'Advice API is an API that gives a random Advice',
    yt: 'Yt api is a Youtube Video Downloader that uses Google API',
    ff: 'The Facts API provides tons of random interesting facts about science, literature, philosophy, and other cool topics.',
    hf: 'The Historical Figures API allows you to search for historical figures',
    ngl: 'Spammer API is an NGL Spammer API that sends a spam amount of messages',
    grammar: 'Grammar Check is an API that fixes the grammatical errors in your text',
    anime: 'Anime API is an API that returns an anime image'
};

const sub0 = {
    blackai: 'Return a Response From blackbox Ai.',
    bard: 'Return a Text or Image response depending on your Prompt.',
    advice: '',
    yt: 'Return a URL That Contains the downloadable video.',
    ff: 'api/funfact',
    hf: 'Returns a list of up to 10 people that match the search parameters.',
    ngl: '',
    grammar: '',
    anime: 'Return an image URL'
};
const apiUrls = {
    blackai: 'api/blackbox',
    bard: 'api/bard',
    advice: 'api/advice',
    yt: 'api/ytdl',
    ff: 'api/funfact',
    hf: 'api/historyfigure',
    ngl: 'api/proxy',
    grammar: 'api/grammarly',
    anime: 'api/waifu'
};
const apiparams = {
    blackai: 'query(required) - Your Prompt to the Blackbox Ai',
    bard: 'query(required) - Your Prompt to the Bard Ai',
    advice: 'none',
    yt: 'url(required) - Youtube Video URL',
    ff: 'none',
    hf: 'name/title(required) - choose between name or title ',
    ngl: '',
    grammar: 'query(required) - Sentence or paragraph you want to fix the grammatical errors',
    anime: 'category(required) - the image category you want; visit https://waifu.pics/docs to check available categories'
};

apiDirectory.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const apires = document.createElement('button');
        const apidemo = document.createElement('h3');
        const gett = document.createElement('code');
        const params = document.createElement('h3');
        const params_text = document.createElement('p');
        const httpget = document.createElement('p');
        const apiName = event.target.id.toLowerCase();
        const apiurl = document.createElement('p');
        const apiget = document.createElement('a');
        const getjson = document.createElement('a');
        const query = document.createElement('input');
        params_text.classList.add('params_text');
        apidemo.classList.add('demo');
        gett.classList.add('getss');
        apidemo.textContent = 'Endpoints Request URL';
        httpget.classList.add('httpget');
        params.classList.add('params');
        apiurl.classList.add('apiurl');
        query.classList.add('query');
        apires.classList.add('btnres');
        const query1 = queryvalue.value;
        apiUrl = apiUrls[apiName];
        query.placeholder = 'Test';
        params.textContent = 'Parameters';
        gett.textContent = 'HTTP GET';
        title.textContent = event.target.textContent;
        httpget.textContent = sub0[apiName];
        params_text.textContent = apiparams[apiName];
        apiurl.textContent = `${apiUrl}`;
        sub.textContent = subtitle[apiName];
        getjson.textContent = getlink[apiName];
        getjson.href = getlink[apiName];
        apires.textContent = 'Send Request';
        const br = document.createElement('br');
        console.log(`Clicked on ${apiName}`);
        const test = '<p>Test</p>';
        getjson.classList.add('endpoints');

        divv.innerHTML = '';
        divv.appendChild(apiurl);
        divv.appendChild(gett);
        divv.appendChild(httpget);
        divv.appendChild(params);
        divv.appendChild(params_text);
        divv.appendChild(apidemo);
        divv.appendChild(getjson);
        divv.appendChild(query);

        divv.appendChild(br);
        divv.appendChild(apires);
        apires.addEventListener('click', ress);

    }
});

async function ress() {
    const params_value = document.querySelector('.query').value;
    const endpoints = document.querySelector('.endpoints');
    const q = params_value;
    const endpointsapi = endpoints.href;
 const data1 = `${endpointsapi}${q}`;
  

    try {
        fetch(data1)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          return response.json(); 
        })
        .then((data) => {
          console.log(data); // Use the parsed JSON data
        })
        .catch((error) => {
          console.error(error);
        });
      
    } catch (error) {
        console.error(error);
    }
}

