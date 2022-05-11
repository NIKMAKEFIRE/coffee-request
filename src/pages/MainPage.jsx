import React, { useEffect, useState } from 'react'
import { fetchCoffee } from '../API/API'
import Menu from '../components/MenuCard/MenuCard'
import Preloader from '../UI/Preloader'


const MainPage = ({ }) => {
    const [fetchData, setFetchData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchingData()
    }, [])

    const fetchingData = () => {
        setIsLoading(true)
        fetchCoffee(setFetchData, setError)
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }

    if (!fetchData.length) {
        return (
            <h1 style={{ textAlign: 'center', margin: '240px 0' }}>Кофе не найдено...</h1>
        )
    }

    return (
        <>
            {error && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '170px' }}>
                {`${error} | Невозможно получить данные, проверьте корректность запроса`}</div>}
            {
                isLoading
                    ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '190px' }}>
                        <Preloader />
                    </div>
                    : fetchData.map(data => <Menu key={data.id} data={data} />)
            }
        </>
    )
}

export default MainPage