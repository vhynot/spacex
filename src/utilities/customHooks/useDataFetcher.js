import {useState, useEffect} from 'react';

function useDataFetcher(param) {
    const [items, setItems] = useState([]);
    const [rocket, setRocket] = useState({
        flickr_images: [],
        height: [],
        diameter: [],
        mass: []
     });
    const [isLoading, setIsLoading] = useState(false);
    const [isFetched, setIsFetched] = useState(false);

    async function fetchItem() {
        setIsLoading(true);
        const data = await fetch(`https://api.spacexdata.com/v3/${param}`);
        const dataJSON = await data.json();
        setItems(dataJSON);
        setRocket(dataJSON);
        setIsFetched(true);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchItem(param);
    }, [param])

    return {items, rocket, isLoading, isFetched}
}

export default useDataFetcher;