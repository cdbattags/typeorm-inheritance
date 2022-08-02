import axios from 'axios'
import { useEffect } from 'react'

export default () => {
    useEffect(() => {
        axios.post(`api/add`, { data: `plz`})
        // axios.get(`api/get`)
    })

    return <div>HOME</div>
}
