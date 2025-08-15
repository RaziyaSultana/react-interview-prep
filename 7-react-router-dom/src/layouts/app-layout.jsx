import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/header'

const AppLayout = () => {
  const navigation = useNavigate();

  const isLoading = navigation.state === "loading";
  return (
    <div>
        React Router dom Layout
        {/* header  */}
        <Header />
        {/* loading  */}
        {isLoading && <div>Loading...</div>}
        {/* pages  */}
        <Outlet />
        {/* footer  */}
    </div>
  )
}

export default AppLayout