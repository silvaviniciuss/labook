
export const aboutPage = (navigate,language) =>{
    navigate(`/about/${language}`)
}

export const backPage = (navigate) => {
    navigate(-1)
}

export const backHomePage = (navigate) => {
    navigate("/")
}