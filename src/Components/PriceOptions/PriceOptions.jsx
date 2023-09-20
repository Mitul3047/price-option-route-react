import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const gymMembershipOptions = [
        {
          id: 1,
          name: "Basic Membership",
          description: "Access to basic gym facilities",
          price: 30.00,
          features: [
            "Unlimited access to gym equipment",
            "Locker room access",
            "No commitment"
          ]
        },
        {
          id: 2,
          name: "Premium Membership",
          description: "Access to premium gym facilities and services",
          price: 50.00,
          features: [
            "Unlimited access to gym equipment",
            "Locker room access",
            "Group fitness classes",
            "Personal training sessions (2 per month)",
            "No commitment"
          ]
        },
        {
          id: 3,
          name: "Annual Membership",
          description: "One-year membership with extra benefits",
          price: 450.00,
          features: [
            "Unlimited access to gym equipment",
            "Locker room access",
            "Group fitness classes",
            "Personal training sessions (4 per month)",
            "Sauna and steam room access",
            "No commitment"
          ]
        },
        {
          id: 4,
          name: "Student Membership",
          description: "Special membership for students",
          price: 25.00,
          features: [
            "Unlimited access to gym equipment",
            "Locker room access",
            "No commitment",
            "Valid student ID required"
          ]
        }
      ];
      
    
      


    return (
        <div className="">
            <h2 className="text-5xl text-center my-6">Best Price in the town</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-2/3 f mx-auto md:w-full md:px-7  ">
           {
                gymMembershipOptions.map(gymMembershipOption =>(
                    //  (console.log(gymMembershipOption)
                
                <div key={gymMembershipOption.id} >
                <PriceOption gymMembershipOption={gymMembershipOption} ></PriceOption>
                </div>
                     ))
            }
           </div>
        </div>
    );
};

export default PriceOptions;