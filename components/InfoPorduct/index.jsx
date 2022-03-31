import Myswiper from '../MySwiper'

const InfoPorduct = ({ porduct }) => {
  const photos = porduct.fields.imgCard

  console.log('porduct', porduct)
  return (
    <div className="flex flex-col h-screen w-full  ">
      <div className=" w-full my-6 justify-center contents-center items-center flex flex-row ">
        <Myswiper photos={photos} />
      </div>

      <div className="flex flex-row flex-wrap content-center justify-center items-center">
        info
      </div>
    </div>
  )
}

export default InfoPorduct
