
import Button from "@/components/Button"
import Dropzone from "@/components/Dropzone"
import Special from "@/components/Special"
import Target from "@/components/Target"
import Text from "@/components/Text"


const Home = () => {
  return (
    <section className="section flex flex-center flex-col mt-10">
    <h1 className="title text-3x1 font-bold">Upload Files</h1>
      <Button />
      <Text />
      <Special />
      <Target />
    <Dropzone/>
    </section>
  )
}

export default Home