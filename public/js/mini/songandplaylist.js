"use strict";var songAndPlaylistHandler={playlistid:null,bigArray:[],townName:null,urlToUserPlaylist:null,initButton:function(){var t=document.getElementById("savelink");t.textContent="Save The Playlist",t.setAttribute("href","#"),t.removeAttribute("target"),t.addEventListener("click",songAndPlaylistHandler.createPlaylist,!0)},createPlaylist:function(t){songAndPlaylistHandler.createPlaylist()},getSongs:function(){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var e=JSON.parse(t.responseText);if(0!=e.tracks.items.length){for(var n=0;n<e.tracks.items.length;n++){var a=r=e.tracks.items[n].preview_url,s=r=e.tracks.items[n].id,r=e.tracks.items[n].name,l=e.tracks.items[n].external_urls.spotify,i=e.tracks.items[n].artists[0].name,o=e.tracks.items[n].uri,d=null;(null!==e.tracks.items[n].album.images[0]||void 0!==e.tracks.items[n].album.images[0])&&(d=e.tracks.items[n].album.images[0].url);var u={artistName:i,trackName:r,id:s,preurl:a,uri:o,img:d,url:l};songAndPlaylistHandler.bigArray.push(u)}songAndPlaylistHandler.loopout(songAndPlaylistHandler.bigArray)}else{songAndPlaylistHandler.setCardName(),songAndPlaylistHandler.getCoverArt();var y=document.getElementById("songs");y.textContent="No songs where found, try again in real town. Or search for one"}}else(403==t.readyState||404==t.status||500==t.status)&&songAndPlaylistHandler.apiError("spotify")},t.open("POST","http://xn--dagsfrkaffe-vfb.nu:1337/searchTracks",!0),t.send(songAndPlaylistHandler.townName)},createPlaylist:function(){var t=new XMLHttpRequest,e=[];t.onreadystatechange=function(){if(4==t.readyState&&200==t.status){var n=JSON.parse(t.responseText);songAndPlaylistHandler.urlToUserPlaylist=n.link,songAndPlaylistHandler.playlistid=n.id;for(var a=0;a<songAndPlaylistHandler.bigArray.length;a++)e.push(songAndPlaylistHandler.bigArray[a].uri);songAndPlaylistHandler.addTracksToplaylist(e)}else(403==t.readyState||404==t.status||500==t.status)&&songAndPlaylistHandler.apiError("spotify")},t.open("POST","http://xn--dagsfrkaffe-vfb.nu:1337/createplaylist",!0),t.send(JSON.stringify({name:"Låtar om "+songAndPlaylistHandler.townName}))},apiError:function(t){document.getElementById("songs").textContent="Unefortunaly is "+t+" down at the moment"},addTracksToplaylist:function(t){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var t=(e.responseText,document.getElementById("savelink"));t.removeEventListener("click",songAndPlaylistHandler.createPlaylist,!0),t.textContent="The Playslist Is Saved, Click Here To View It",t.setAttribute("href",songAndPlaylistHandler.urlToUserPlaylist),t.setAttribute("target","_blank")}};var n=JSON.stringify({plid:songAndPlaylistHandler.playlistid,pit:t});console.log(JSON.parse(n)),e.open("POST","http://xn--dagsfrkaffe-vfb.nu:1337/addTracksToPlayList",!0),e.send(n)},loopout:function(t){songAndPlaylistHandler.setCardName(),songAndPlaylistHandler.getCoverArt();for(var e=document.getElementById("songs"),n=0;n<t.length;n++){var a=document.createElement("li"),s=document.createElement("audio");s.setAttribute("src",t[n].preurl);var r=document.createElement("a");r.setAttribute("href",t[n].url),r.setAttribute("target","_blank"),r.className="collection-item",r.textContent=t[n].artistName+" - "+t[n].trackName,s.setAttribute("controls",""),a.appendChild(r),e.appendChild(r)}load.loadCheck()},getCoverArt:function(){for(var t=0;4>t;t++)void 0!=songAndPlaylistHandler.bigArray[t]||null!=songAndPlaylistHandler.bigArray[t]?document.getElementById(t).setAttribute("src",songAndPlaylistHandler.bigArray[t].img):document.getElementById(t).setAttribute("src","../pics/1.png")},setCardName:function(){document.getElementById("cTitle").textContent="Heres The List Of All Spotify Tracks About "+songAndPlaylistHandler.townName+":"},emptyResponse:function(){songAndPlaylistHandler.bigArray=[],document.getElementById("songs").innerHTML=""}};window.onload=songAndPlaylistHandler.initButton();