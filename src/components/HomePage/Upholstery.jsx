import Image from 'next/image'
import QuoteForm from './QuoteForm'
import { homepageAssets, homepageCopy } from "@/utils/helper";

const Upholstery = () => {
  return (
    <>
   <section className='xl:min-h-215.25 bg-cover bg-center bg-no-repeat'
     style={{backgroundImage: `url("${homepageAssets.heroBackground}")`}}>
      <div className='flex max-w-285 gap-55.25 mx-auto'>
        <div className='pt-50.25'>
            <div className='max-w-107.75 '>
                <h1 className='text-base font-medium leading-[120%] flex flex-col gap-1.5'>
                    {homepageCopy.hero.ratingLabel}
                    <Image src={homepageAssets.googleRating} width="194" height="32" alt=''/>
                </h1>
                <h2 className='text-5xl font-semibold leading-121 mt-4'> <span className='text-custom-green'>{homepageCopy.hero.headingAccent} </span>{homepageCopy.hero.headingRemainder}</h2>
                <p className='text-base font-normal leading-163 mt-4 max-w-107.25'>{homepageCopy.hero.description}</p>
                <button className='flex gap-2.5 mt-7.5 bg-custom-green py-3 px-7 rounded-full text-white leading-160'>
                    <Image src={homepageAssets.whatsapp} width="24" height="24" alt='' /> {homepageCopy.hero.contactLabel}
                </button>
            </div>
        </div>
        <div className='pt-5.75'>
            <Image src={homepageAssets.beforeAfter} alt='' width="479" height="610"/>
        </div>
     </div>

    </section>
    <div>
        <QuoteForm/>
    </div>
    </>
    
  )
}

export default Upholstery
