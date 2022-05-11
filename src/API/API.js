import axios from "axios"

export const fetchCoffee = (setData, setError) => {
    axios.get('https://random-data-api.com/api/coffee/random_coffee?size=20')
        .then((res) => {
            setData(res.data)
        }).catch(err => {
            setError(err.message)
        })
}