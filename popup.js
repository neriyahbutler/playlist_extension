//document.getElementById("playbutton").addEventListener("click", playMusic);

function playMusic(){
    alert("running");
    
    var bod = document.getElementsByTagName('body')[0];
    
    bod.insertAdjacentHTML('afterbegin', `
        <div class = "fuck">
            <button>test</button>
        </div>`
    )
}

document.getElementById("music_extension").onload = function(){
    document.getElementById("addPlaylist").addEventListener("click", overlayDisplayON);
    document.getElementById("addbtn").addEventListener("click", uploadData);
    
    chrome.storage.sync.get(null, function(data){
        var names = Object.keys(data);
        var urls = Object.values(data);
        
        console.log(names);
        console.log(urls);
        
        for (i = 0; i < names.length; i++)
            {
                createNewPlaylist.call(names[i], urls[i]);
            }
    })
    
      
}

function createNewPlaylist(name, url){    
    var musicChoice = document.createElement('div');
    musicChoice.className = "musicChoice";
    
    var optionDisplay = document.createElement("div");
    optionDisplay.className = "optionDisplay";
    var imageDisplay = document.createElement('img');
    imageDisplay.src = "27fdf1cd7658af3eff2daa8d2959ab6e3ed2e08f_hq.jpg";
    optionDisplay.appendChild(imageDisplay);
    
    var text_info = document.createElement('div');
    text_info.className = "text_info";
    text_info.innerHTML = name;
    
    var buttonsection = document.createElement('div');
    buttonsection.className = "buttonsection";
    
    var inputbutton = document.createElement('button');
    inputbutton.id = "playbutton";
    inputbutton.className = "playbutton";
    
    buttonsection.appendChild(inputbutton);   
    
    musicChoice.appendChild(optionDisplay);
    musicChoice.appendChild(text_info)
    musicChoice.appendChild(buttonsection)
    
    document.getElementById('musicOptions').appendChild(musicChoice);
    
    document.getElementById('musicOptions').appendChild(addPlaylistButton); 
    
    clickEvents.call();
    
}

function clickEvents()
{
    var playbuttonArray = document.getElementsByClassName("playbutton");

    for (var x = 0; x < playbuttonArray.length; x++){
        playbuttonArray[x].onclick = function()
        {
            playMusic.call();
        }
    } 
}

function overlayDisplayON(){
    document.getElementById('playlistOverlay').style.display = "block";
}

function overlayDisplayOFF(){
    document.getElementById("playlistOverlay").style.display = "none";
}

function uploadData()
{        
        var name = String(document.getElementById("playlist_name").value);
        var url = String(document.getElementById("playlist_url").value);
        chrome.storage.sync.set({[name]: url}, function(){ });      
}
