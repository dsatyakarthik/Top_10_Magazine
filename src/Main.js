import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div class=" p-12 m-15 bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 justify-center sm:grid grid-cols-2 sm:p-5 md:p-12 lg:p-18 xl:p-20 xl:gap-12 xl:py-28 ">

          <div class="card trans2">
          <Link to="/billionaire" >
            <img class="coverimg" src='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters:format(jpg)/https://specials-images.forbesimg.com/imageserve/606b375d4a613254bf339318/0x0.jpg%3FcropX1%3D0%26cropX2%3D1536%26cropY1%3D0%26cropY2%3D863' alt='img1'/>
          <span class ="covertxt  ">Billionaires</span>
          </Link>
          </div>
          
          <div class=" card trans2">
          <Link to="/women" >
            <img class="coverimg" src='https://i.ytimg.com/vi/FEewmbv-i08/maxresdefault.jpg' alt='img2'/>
          <span class ="covertxt  ">Women Billionaires</span>
          </Link>
          </div>
          

          <div class=" card trans2">
          <Link to="indbill" >
            <img class="coverimg" src='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/09/richest-people-in-india-1569420889.jpg' alt='img3'/>
          <div class ="covertxt ">Indian Billionaires</div>
          </Link>
          </div>

          <div class=" card trans2">
          <Link to="/atheletes" >
            <img class="coverimg" src='https://www.sportico.com/wp-content/uploads/2022/05/TOP_ATHELETES_1280x720_with_title_alt.png?resize=681' alt='img4'/>
          <span class ="covertxt  ">Highest Paid Atheletes</span>
          </Link>
          </div>

          

      </div>
  )
}

export default Main
