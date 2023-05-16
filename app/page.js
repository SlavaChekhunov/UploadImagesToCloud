
import Dropzone from "@/components/Dropzone"


const Home = () => {
  return (
    <section className="section flex flex-center flex-col mt-10">
    <h1 className="title text-3x1 font-bold">Upload Files</h1>
    <Dropzone/>
    </section>
  )
}

export default Home