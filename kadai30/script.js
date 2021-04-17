$(document).ready(function () {
    const param =location.search
        switch (param) {
            case "?param=alert":
                window.alert(param)
                break;
            case "?param=article":
                $("span#article").text(param)
            
                break;
        }
});