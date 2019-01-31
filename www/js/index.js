document.getElementById("getposition").addEventListener("click",getposition);
function getposition()
{
    var watchID=
        navigator.geolocation.getCurrentPosition (onSucess,onError);
    function onSucess(position)
    {
        alert('Latitude:'+
              position.coords.latitude      +'\n'+'Longitude:'          +positio.coords.longitude   +'\n'
              );
    }
    function onError(error)
    {
        alert('code:'   +error.code 
              +'\n'+'message:'+error.message+'\n');
    }
    }
