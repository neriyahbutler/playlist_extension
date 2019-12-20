
document.getElementById("playbutton").addEventListener("click", playMusic);


function playMusic(){
    alert("fuck");
}


document.getElementById("addPlaylist").addEventListener("click", addPlaylist);

function addPlaylist(){
    //alert("beginning of creation");
    
    overlayDisplayON.call();
    
    createNewPlaylist.call();
  }


function createNewPlaylist()
{
    var addPlaylistButton = document.getElementById("addPlaylistButton").cloneNode(true);
    
    document.getElementById("addPlaylistButton").outerHTML = "";
    
    var musicChoice = document.createElement('div');
    musicChoice.className = "musicChoice";
    
    var optionDisplay = document.createElement("div");
    optionDisplay.className = "optionDisplay";
    var imageDisplay = document.createElement('img');
    imageDisplay.src = "27fdf1cd7658af3eff2daa8d2959ab6e3ed2e08f_hq.jpg";
    optionDisplay.appendChild(imageDisplay);
    
    var text_info = document.createElement('div');
    text_info.className = "text_info";
    text_info.innerHTML = "Umaru Playlist 2";
    
    var buttonsection = document.createElement('div');
    buttonsection.className = "buttonsection";
    var inputbutton = document.createElement('input');
    inputbutton.type = "image";
    inputbutton.src = "playbuttonv2.png";
    inputbutton.id = "playbutton";
    buttonsection.appendChild(inputbutton);
    
    musicChoice.appendChild(optionDisplay);
    musicChoice.appendChild(text_info)
    musicChoice.appendChild(buttonsection)
    
    document.getElementById('musicOptions').appendChild(musicChoice);
    
    document.getElementById('musicOptions').appendChild(addPlaylistButton);
}

function overlayDisplayON(){
    document.getElementById('playlistOverlay').style.display = "block";
}

function overlayDisplayOFF(){
    document.getElementById("playlistOverlay").style.display = "none";
}

var counter = Number(1);

window.onload = function() {
    chrome.storage.sync.get(null, function (data) { console.info(data) });
    
    document.getElementById("addbtn").onclick = function() {
        var name = String(document.getElementById("playlist_name").value);
        var url = String(document.getElementById("playlist_url").value);
        
        chrome.storage.sync.get([name], function(data){
            if(typeof data.name == 'undefined')
                {
                    chrome.storage.sync.set({[name]: url}, function(){
                    alert("key created");})
                }
            else{alert("key already exists");}
        })
        
        
    }
}