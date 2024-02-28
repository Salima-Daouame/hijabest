import PictureItem from '../Helpers/PictureItem';
import { PictureList } from '../Helpers/PictureList';


function Home() {
  return (
    <div id="home" className="p-5 md:p-10">  
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
      {PictureList.map((pictureItem, key) => {
                return (
                  <PictureItem
                    Key={key}
                    image={pictureItem.image}
                    />
                );
              })}
      </div>
    </div>
  )
}

export default Home
