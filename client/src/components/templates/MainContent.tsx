import ProductList from '../organisms/ProductList';

import {
  Box,
  Toolbar,
} from '@mui/material/'

interface IPropsMainContent {
  defaultActiveTab?: string | null;
}
const drawerWidth = 240;


const MainContent: React.FC<IPropsMainContent> = ({ defaultActiveTab }) => {
  return (
    <>
      {
        defaultActiveTab === `Orders` ?
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />
            order table content
          </Box>
          :
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Toolbar />

            <ProductList />
          </Box>
      }
    </>
  )
}

export default MainContent;