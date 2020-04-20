function useCreateImage(){
    
    function imageOnLoad(background, Load, handleLoad) {
        const img = new Image();
        img.src = background;
        if (!Load){
            img.onload = () => {
                handleLoad()
            }
        }
    }
    return {imageOnLoad}
}

export default useCreateImage
