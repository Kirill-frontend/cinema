'use client'
import Header from "./components/header";
import TitleBlock from "./components/title-block";
import BlueBlock from "./components/blue-block";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import FilmCard from "./components/film-card";

export default function Home() {
  let freakData = []

  freakData = Array.from({ length: 10 }, (v, k) => k)


  return (
    <>
      <Header></Header>
      <TitleBlock title="Новинки світового прокату" />
      <BlueBlock>
        <div className="slider_container container mx-auto">
          <Splide aria-label="My Favorite Images" options={{
            perPage: 5, pagination: false, classes: {
              arrows: 'splide__arrows splide_custom_arrows',
              arrow: 'splide__arrow splide_custom_arrow',
              prev: 'splide__arrow--prev splide_custom_arrow_prev',
              next: 'splide__arrow--next splide_custom_arrow_next',
            },
          }}>
            <SplideSlide>
              <FilmCard name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            </SplideSlide>
            <SplideSlide>
              <FilmCard name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            </SplideSlide>
            <SplideSlide>
              <FilmCard name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            </SplideSlide>
            <SplideSlide>
              <FilmCard name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            </SplideSlide>
            <SplideSlide>
              <FilmCard name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            </SplideSlide>
            <SplideSlide>
              <FilmCard name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            </SplideSlide>
            <SplideSlide>
              <FilmCard name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            </SplideSlide>
            <SplideSlide>
              <FilmCard name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            </SplideSlide>
            <SplideSlide>
              <FilmCard name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            </SplideSlide>
            <SplideSlide>
              <FilmCard name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            </SplideSlide>
          </Splide>
        </div>

      </BlueBlock >
      <div className="title_block pt-10 text-white bg-black-half">
        <div className="container mx-auto flex">
          <p className="container mx-auto text-[24px] flex-[1_0_75%]"> Останні надходження </p>
          <p className="container mx-auto text-[24px] text-center"> Підбірки </p>
        </div>

      </div>
      <div className="main_block bg-black-16">
        <div className="flex container mx-auto">
          <div className="latest_films flex-[1_0_65%] bg-blue-darker">
            <div className="flex flex-[1_0_65%] justify-items-start flex-wrap">
              {freakData.map((item, index) => {
                return (<FilmCard filmCardClass="flex-[0_0_20%]" key={index} name={"some name"} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>)
              })}
            </div>
            <div className="pagination flex justify-center flex-col items-center">
              <div className="button_more"> <button className="py-9 px-24 mb-7 text-white bg-[#164F6F] text-2xl rounded-full bordered">Завантажити ще</button> </div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm " aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only text-white">Previous</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: " ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:outline-offset-0" --> */}
                <a href="#" aria-current="page" className=" relative z-10 inline-flex items-center ring-1 ring-inset ring-gray-300 bg-blue-darker px-4 py-2 text-white text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm text-white font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0">2</a>
                <a href="#" className="relative hidden items-center px-4 py-2 text-sm text-white font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-white  ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white  ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0">9</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white  ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0">10</a>
                <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-700 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only text-white">Next</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
          <div className="selections flex flex-col align-center flex-[1_0_15%] bg-blue-block">
            <FilmCard name={"some name"} filmCardClass="selection" width={48} height={16} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            <FilmCard name={"some name"} filmCardClass="selection" width={48} height={16} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            <FilmCard name={"some name"} filmCardClass="selection" width={48} height={16} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            <FilmCard name={"some name"} filmCardClass="selection" width={48} height={16} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
            <FilmCard name={"some name"} filmCardClass="selection" width={48} height={16} src={"https://st2.depositphotos.com/1105977/9877/i/450/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"} ></FilmCard>
          </div>
        </div>
      </div>
    </>

  );
}
