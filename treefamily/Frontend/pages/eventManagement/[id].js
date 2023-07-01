import React from 'react'
import MainPage from '../../components/EventManagementPage/eventManagement/GuestManagement/MainPage'
import { useRouter } from 'next/router'

export default function id() {
  const router = useRouter()
  const pid = router.query.id
  return (
    <MainPage pid={pid}/>
  )
}
