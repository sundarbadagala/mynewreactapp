import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'

export const useInfiniteScroll = (api, ref, count) => {
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + count);
        }
    }, []);
    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        }
        const observer = new IntersectionObserver(handleObserver, option);
        if (ref.current) observer.observe(ref.current);
    }, [handleObserver])

    const sendQuery = useCallback(async () => {
        try {
            await setLoading(true);
            await setError(false);
            const res = await axios.get(
                `${api}${page}`
            );
            const { results } = { ...res.data }
            setData((prev) => [...prev, ...results])
            setLoading(false);
        } catch (err) {
            setError('something went wrong');
        }
    }, [page]);

    useEffect(() => {
        sendQuery();
    }, [sendQuery, page]);

    return { loading, error, data }
}