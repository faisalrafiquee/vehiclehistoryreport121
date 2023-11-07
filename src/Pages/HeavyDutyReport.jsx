import React,{useEffect, useRef} from 'react'
import InnerHero from '../Components/InnerHero'
import InnerPricing from '../Components/InnerPricing'

const HeavyDutyReport = () => {
  const targetDivRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);
  const handleButtonClick = () => {
    // Scroll to the targetDiv
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <InnerHero
      id={1}
      title="It's always advisable to have a thorough inspection of a truck before making a purchase."
      
      description="To verify the history of a truck imported from the United States, thevinreport.com is your trusted source. They are known for their reliability in gathering accurate information about trucks through their VIN-based service for a fixed fee. Their reports are comprehensive, and the process is simple, quick, and, most importantly, highly effective in providing the information you need to make an informed decision."
      link="hahha"
      btnTitle="Get Report"
      imgPath={'assets/images/truck-1.jpg'}
      handleButtonClick={handleButtonClick}
    />
     <InnerPricing
     targetDivRef={targetDivRef}
      pakageName={{
        p1:'Standard',
        p2:'Instant',
        p3:'Premium'
      }}
      Price={{
        price1: '49.99',
        price2: '64.99',
        price3: '79.99',
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
        "Active/Expired Warranty"
      ]}
      list3={[
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
        "Active/Expired Warranty"
      ]}
      btnName={"Buy Now"}
      route={{
        route1:'truck-report-standard',
        route2:'truck-report-instant',
        route3:'truck-report-premium',
      }}
    />
  </>
  )
}

export default HeavyDutyReport