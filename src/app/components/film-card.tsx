
export default function FilmCard(film: {name: string, src: string, width?: number, height?: number, filmCardClass?: string}) { 
 return (
  <>
    <div className={`film_card flex flex-col items-center pt-4 pb-5 ${film.filmCardClass ? film.filmCardClass : ''}`}>
      <div className={`film_card_img flex ${film.height ? `h-${film.height}` : 'h-56'} ${film.width ? `w-${film.width}` : 'w-32 '}`}> <img className="w-full h-full" src={film.src} alt="" /> </div>
      <div className="film_card_title text-white text-center text-[20px]"> { film.name } </div>
    </div>
  </>
 ); 
 }