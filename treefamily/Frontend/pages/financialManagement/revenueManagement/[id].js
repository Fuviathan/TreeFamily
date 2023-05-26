import MainPage from '../../../components/FinacialManagementPage/revenueManagement/RevenueCategory/MainPage'
import { useRouter } from 'next/router'

export default function category() {
  const router = useRouter()
  console.log(router.query.id)
  const pid = router.query.id
  return (
    <MainPage pid={pid}/>
  )
}
