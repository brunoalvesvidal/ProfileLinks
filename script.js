function toggleMode(){
    const body = document.body
    body.classList.toggle("light")

    const img = document.querySelector("#profile img")
    const altDark = "perfil dark"
    const altLight = "perfil light"
        if (body.classList.contains("light")){
        img.setAttribute("src", "./assets/Avatarlight.png")
        img.setAttribute("alt", altLight)

    
    }
        else{
        img.setAttribute("src", "./assets/Avatar.png")
        img.setAttribute("alt", altDark)
        
    }

}