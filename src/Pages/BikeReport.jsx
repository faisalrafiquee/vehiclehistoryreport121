import React,{useEffect, useRef} from 'react'
import InnerHero from '../Components/InnerHero'
import InnerPricing from '../Components/InnerPricing'

const BikeReport = () => {
  const targetDivRef = useRef(null);

  const handleButtonClick = () => {
    // Scroll to the targetDiv
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);
  return (
    <>
    <InnerHero
      id={1}
      title="It's always a wise choice to have a bike thoroughly inspected before making a purchase."
      description="To verify the history of a bike imported from the United States, you can rely on thevinreport.com, a trusted company that specializes in gathering accurate information based on a bike's VIN for a fixed fee. They provide a comprehensive report that is not only simple and quick but, most importantly, highly effective in providing you with the information you need to make an informed decision."
      link="hahha"
      btnTitle="Get Report"
      imgPath={"assets/images/bike-2.jpg"}
      handleButtonClick={handleButtonClick}
    />
    <InnerPricing
    targetDivRef={targetDivRef}
      pakageName={{
        p1: "Mini",
        p2: "Instant",
        p3: "Premium",
      }}
      Price={{
        price1: '40.99',
        price2: '30.99',
        price3: '50.99',
      }}
      time={{
        t1:'12 24 hours',
        t2:'30 minutes',
        t3:'60 minutes',
      }}
      list1={[
        "Vehicle Overview",
        "Market Value",
        "Vehicle Specifications",
        "Sales Listing",
        "Accident Record",
        "Salvage",
        "Theft Record"
      ]}
      list2={[
        "HQ Car Images",
        "Vehicle Overview",
        "Market Value",
        "Vehicle Specifications",
        "Sales Listing",
        "Accident Record",
        "Salvage",
        "Theft Record",
        "Title Record",
        "Impounds",
        "Exports",
        "Open Recalls",
        "Installed Options and Packages",
        "Active/Expire Warranty"
      ]}
      list3={[
        "2 Buyers Numbers from our Directory",
        "Buy one get another Report Free for Lifetime",
        "HQ Car Images",
        "Vehicle Overview",
        "Market Value",
        "Vehicle Specifications",
        "Sales Listing",
        "Accident Record",
        "Salvage",
        "Theft Record",
        "Title Record",
        "Impounds",
        "Exports",
        "Open Recalls",
        "Installed Options and Packages",
        "Active/Expire Warranty",
      ]}
      btnName={"Buy Now"}
      route={{
        route1:'bike-report-mini',
        route2:'bike-report-instant',
        route3:'bike-report-premium',
      }}
    />
  </>
  )
}

export default BikeReport