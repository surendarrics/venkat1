
import { Outlet } from 'react-router-dom'
import Home from '../home/Home'
import Sidebar from '../sidebar/Sidebar'
import './Layout.scss'

const Layout = () => {
  return (
<div className='App'>
<Sidebar/>
<div className="page">
  <span className="tags top-tags">
  &lt;html&gt; <br/>
    &lt;body&gt;
  </span>


 <Outlet/>
  <span className='tags bottom-tags'>
 &lt;/body&gt;
 <br/>
 <span className='bottom-tag-html'>
&lt;/html&gt;
 </span>
  </span>
</div>
</div>
  )
}

export default Layout