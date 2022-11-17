import React from 'react'
import First from '../../components/first'
import { useSampleContext } from '../../contexts/SampleContext'
import './styles.css'

const Home = () => {
    const {hello} = useSampleContext()
  return (
    <div>
        <First/>
        Home
        {hello}
    </div>
  )
}

export default Home