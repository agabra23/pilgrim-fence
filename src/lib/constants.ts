const phoneNumber = "(508) 224-5627";

const pathnames = {
  home: "/",
  contact: "/contact",
  howItWorks: "/how-it-works",
  faq: "/faq",
  about: "/about",
  gallery: "/gallery",
  contactConfirmation: "/contact-confirmation",
  fencing: {
    wood: "/fencing/wood",
    vinyl: "/fencing/vinyl",
    aluminum: "/fencing/aluminum",
    chainLink: "/fencing/chain-link",
  },
};

const companyEmail = "info@pilgrimfenceco.com";

const address = "P.O. Box 1112, Plymouth MA";
const zipCode = "02362";

const copyright = `© ${new Date().getFullYear()} by Pilgrim Fence LLC`;

const galleryImages = [
  // aluminum
  "/photos/aluminum/IMG_3205.jpg",
  "/photos/aluminum/IMG_4661.jpeg",
  "/photos/aluminum/IMG_5668.jpg",
  "/photos/aluminum/IMG_5674.JPG",
  "/photos/aluminum/IMG_5925.jpg",
  "/photos/aluminum/IMG_69161Fixed.jpeg",
  "/photos/aluminum/aluminumhero.jpg",

  // chainLink
  "/photos/chainLink/DSC01314.JPG",
  "/photos/chainLink/DSC01318.JPG",
  "/photos/chainLink/IMG_1109.JPEG",
  "/photos/chainLink/IMG_2142.jpg",
  "/photos/chainLink/IMG_66141.JPG",
  "/photos/chainLink/chainhero.JPG",

  // vinyl
  "/photos/vinyl/DSC01299.JPG",
  "/photos/vinyl/DSC01330.JPG",
  "/photos/vinyl/IMG_21422.jpg",
  "/photos/vinyl/IMG_2144.jpg",
  "/photos/vinyl/IMG_5141.JPG",
  "/photos/vinyl/IMG_57921.jpg",
  "/photos/vinyl/IMG_5823.JPG",
  "/photos/vinyl/IMG_5991.JPG",
  "/photos/vinyl/IMG_67021.png",
  "/photos/vinyl/vinylhero.JPG",

  // wood
  "/photos/wood/DSC01263.JPG",
  "/photos/wood/DSC01305.JPG",
  "/photos/wood/IMG_11601.JPG",
  "/photos/wood/IMG_2009.jpg",
  "/photos/wood/IMG_5044.jpg",
  "/photos/wood/IMG_5072.jpg",
  "/photos/wood/IMG_5966.JPG",
  "/photos/wood/wood1.JPG",
  "/photos/wood/woodhero.JPG",
];

const faqQuestions = [
  {
    question: "Can you help me choose the best fence style for my project?",
    answer:
      "Absolutely! With years of experience in Landscape Design and product knowledge, our team can help you choose the best materials for your outdoor space.",
  },
  {
    question:
      "How do I know where my property line is? Do I need to get a survey?",
    answer:
      "Oftentimes, your local Town Hall Building Dept will have a Plot Plan or Septic Design Plan that could show the property lines. If you are unsure, an updated survey is always nice to have for your own records. We work with many local surveyors that we could recommend. *Pilgrim Fence is not responsible for locating property bounds.",
  },
  {
    question: "How do I properly care for my fence once it is installed?",
    answer:
      "Depending on the type of material, a good starting point is to “let it breathe.” Don’t let leaves and debris pile up in front or behind your fence. Most repairs we see are from avoidable buildup of debris causing stress to the fence materials. Cut back bushes and trees. Lightly power wash Vinyl. Preventative maintenance goes a long way. Apply Sealer to Cedar fences every 3-5 years to preserve its original color and prolong rot damage.",
  },
  {
    question: "Do you offer an installation warranty?",
    answer:
      "We do! We offer 1 year installation warranty on our fence installation. Some vendors offer 5 years. We feel that’s just a sales tactic. If there are ANY issues with your fence installation, we would know within a week or a month, let alone, a year. We value repeat clients, and always take care of any issues that may arise. Manufacturer warranties differ by product. Contact us for specific product warranty information.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Of course! Go to our photo gallery to see our recent installations. There’s also plenty more on our Instagram and Facebook pages. If you’d like to see a project that is similar to yours in person, we have many clients that would be happy to have you stop by to see for yourself. We can arrange that.",
  },
  {
    question: "How much will the fence cost?",
    answer:
      "Like most things, fences come in all shapes and sizes. During our initial walkthrough, we will discuss what type of fence you’re looking for, length of fence, how many gates, and many other factors. We don’t want to give anyone “sticker shock” when they receive the estimate, so our team will always be upfront and guide you to a fence product that best fits your budget.",
  },
  {
    question: "I don’t get along with my neighbor. Can I install a 12’ fence?",
    answer:
      "This one gets a little tricky. Every town has Bylaws that often depict how high a fence can be without pulling a building permit. Even if a building permit is pulled for fences greater than 6’, Massachusetts does have a “nuisance law” (chapter 49, section 21) for fences that exceed 6’ high that are “maliciously erected or maintained for the purpose of annoying the owners or occupants of adjoining property.” Best advice. Talk to your neighbors about your fence installation and follow your town bylaws height restrictions.",
  },
  {
    question: "How long will it take to install my fence?",
    answer:
      "We have a skilled team of installers who prioritize time management on job sites. As the old saying goes, “time is money.” That being said, we will never rush a job either. Quality is never sacrificed. Depending on the project and materials, a rough estimate is 1 day for every 125 ft of fence installed. Give or take.",
  },
  {
    question:
      "I bought some fence panels and posts at a big box retail store. Can you install them for me?",
    answer:
      "We do not typically install materials that are not provided by our suppliers. Every situation is different. We would be happy to come take a look at what you’ve purchased and see if it’s something we could install for you. Please note: We only offer installation warranties on professional grade products we purchase.",
  },
  {
    question:
      "A tree fell over and knocked over my fence. Can you be here tomorrow?",
    answer:
      "This exact scenario happens more often than you could believe. We try our BEST to accommodate these requests because we understand that most of the time, your fence provides security or privacy for you and your pets.",
  },
  {
    question: "Why should I choose Pilgrim Fence?",
    answer:
      "The bottom line is because we care. We understand you have many options for fence contractors in the area to choose from. What makes us different is that we don’t think of our clients as transactions. Since the beginning, we have been a family operated, local small business. We buy from local vendors. We live in your community (Plymouth). Our kids might go to school with your kids. With a reputation that has kept us in business for 50 years, we care about the work we put out. Please be sure to check out our testimonials and reviews and see what past clients have to say about their experience with us. We look forward to hearing from you!",
  },
];

export {
  phoneNumber,
  pathnames,
  companyEmail,
  address,
  zipCode,
  copyright,
  galleryImages,
  faqQuestions,
};
