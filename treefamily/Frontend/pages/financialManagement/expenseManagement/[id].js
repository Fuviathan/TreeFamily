import MainPage from '../../../components/FinacialManagementPage/expenseManagement/ExpenseCategory/MainPage'
import { useRouter } from 'next/router'

export default function category() {
  const router = useRouter()
  const pid = router.query.id
  return (
    <MainPage pid={pid}/>
  )
}
