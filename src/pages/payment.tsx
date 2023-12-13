import axios from 'axios'
import { useEffect } from 'react'

const Payment = () => {
  const send = async () => {
    await axios({
      url: 'https://test.paycom.uz',
      method: 'post',
      data: { merchant: '6566dfdc94dc4293bdd3f3dd', amount: '5000', callback: '/', lang: 'uz' },
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    send()
  }, [])

  return <div>Payme</div>
}

export default Payment
