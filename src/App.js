import './App.css';
import Body from './components/Body';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import VideoContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';
import { Provider } from 'react-redux';
import store from './utils/store';
import SearchedVideoList from './components/SearchedVideoList';


const routerPro=new createBrowserRouter(
  [{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"",
        element:<VideoContainer/>
      },
      {
        path:"watch",
        element:<WatchPage />
      },
      {
        path:":category",
        element:<VideoContainer/>
      },
      // {
      //   path:"javaScript",
      //   element:<VideoContainer />
      // },
      // {
      //   path:"reactjs",
      //   element:<TrendingVideos />
      // },
      {
        path:"/search/:search",
        element:<SearchedVideoList />
      }
    
    ]
    
    
  }
  ]
)

function App() {

  
  return (
    <div>
      <Provider store={store} >
        
    <RouterProvider router={routerPro} />
    </Provider>
    </div>
  );
}

export default App;
