export default function TitleBlock({title}: {title: string}) { 
 return (
    <div className="title_block pt-10 text-white bg-black-half">
        <p className="container mx-auto text-[24px]"> {title} </p>
    </div>
 ); 
 }