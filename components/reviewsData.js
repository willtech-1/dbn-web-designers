import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { CgGym } from "react-icons/cg";
import { IoIosBusiness } from "react-icons/io";

const reviewsData = [
    {
      id: 100,
      name: 'Ndumiso Khumalo',
      job: 'Business Owner',
      image: <FcBusinessman />,
      text:
        "Fully functioning website with all features I wanted, contact form works and is connected to my email...thanks to you afile digital!",
    },
    {
      id: 101,
      name: 'Fortune Buthelezi',
      job: 'Personal Trainer',
      image: <CgGym />,
      text:
        'Thank you for your professionalism... now it is easier for clients to reach me.',
    },
    {
      id: 102,
      name: 'Khanyisiwe Sibisi',
      job: 'Business Woman',
      image: <FcBusinesswoman />,
      text:
        'Thanks for building me such a beautiful website, delivering work on time and your quick responses!',
    },
    {
      id: 103,
      name: 'Kyle Fisherman',
      job: 'Business Owner',
      image: <IoIosBusiness />,
      text:
        'You guys gave me the exact work that I asked for... thank you so much!',
    },
  ];
  
  export default reviewsData;