import { Box } from "@mui/material"
import UICardProduct from "../molecules/ProductCard"
import { useFetchData } from "../../usecases/useFetchData"



const ProductList = () => {
  const { carsData } = useFetchData();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {carsData && carsData.map((item: any, idx: number) => {
        return (
          <Box key={idx} sx={{ width: 'fit-content' }}>
            <UICardProduct data={item} />
          </Box>
        )
      })}
    </div>
  )
}

export default ProductList