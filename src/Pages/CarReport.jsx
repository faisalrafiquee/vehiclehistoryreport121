import React,{useRef} from 'react'
import InnerHero from '../Components/InnerHero'
import InnerPricing from '../Components/InnerPricing'

const CarReport = () => {
  const targetDivRef = useRef(null);

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
        title="Always get a car examined before purchasing it."
        description="How can I verify the history of a car imported from the United States? Vingator.com is the most dependable company for gathering correct information on cars by VIN for a fixed charge and providing a thorough report. Simple, quick, and, most importantly, effective."
        link="hahha"
        btnTitle="Get Report"
        imgPath={'assets/images/car-1.jpg'}
        handleButtonClick={handleButtonClick}
      />
       <InnerPricing
       targetDivRef={targetDivRef}
        pakageName={{
          p1:'Prime',
          p2:'Instant',
          p3:'Premium'
        }}
        Price={{
          price1: '46.99',
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
          "Theft Record",
        ]}
        list2={[
          "HQ Car Images",
          "Vehicle Overview",
          "Market Value",
          "Vehicle Specifications",
          " Sales Listing",
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
          route1:'car-report-prime',
          route2:'car-report-instant',
          route3:'car-report-premium',
        }}
      />
    </>
  )
}

export default CarReport