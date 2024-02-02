import { faqCard,nftCard,perfumeAd,resultsCard,makerPrelaunch, multistepForm,notifications,pwordGenerator,rpsSite,bodyMass,clockSite,portfolio,quiz,taskManager,movieSite,speakerSite } from './const'



export const data = [
    {
      id:1,
      level:"Newbie",
      description:"Getting your feet wet with HTML, CSS and a bit of Javascript in building small single components.",
      samples:[
        {id:1,title:"FAQ-Card",description:"A spruced up faq card with drop-down behavior, a running carousel and staggered intro animation for an enhanced UX.",technology:["HTML","CSS","ThreeJS","React","Blender"],img:faqCard,site:"https://frontend3dsolution.vercel.app/",translate:-105,code:"https://github.com/jgreen721/frontend3dsolution"},
        {id:2,title:"NFT-Card",description:"A centered NFT card with hover effects.",technology:["HTML","CSS"],img:nftCard,site:"https://jgreen721.github.io/frontend_challenges/nftfigma/",translate:0,code:"https://github.com/jgreen721/frontend_challenges/tree/master/nftfigma"},
        {id:3,title:"Perfume Ad",description:"An animated perfume-ad card with staggered animation, as well as a 3d solution with custom gltf models and a camera panning intro.",technology:["HTML","CSS","ThreeJS","React","Blender"],img:perfumeAd,site:"https://perfume3d.vercel.app/",translate:105,site:"",code:"https://github.com/jgreen721/perfume3d"},
        {id:4,title:"Survey Card",description:"A results summary card with theme-toggles and JS that measures the spoofed data and determine to invoke confetti via 3rd party lib",technology:["HTML","CSS","JS"],img:resultsCard,site:"https://jgreen721.github.io/frontend_challenges/results_summary/",translate:210,site:"",code:"https://github.com/jgreen721/frontend_challenges/tree/master/results_summary"},
      ]
    },
    {
      id:2,
      level:"Beginner",
      description:"Building out small sites and applying responsive positioning to page elements.",
      samples:[
        {id:1,title:"Maker Prelaunch",description:"",technology:["HTML","CSS","JS"],img:makerPrelaunch,site:"https://jgreen721.github.io/frontend_challenges/maker-prelaunch/",translate:-105},
        {id:2,title:"MultistepForm",description:"Multisteps form with persistence data allowing users to change answers at any stage of the form.",technology:["HTML","CSS","JS"],img:multistepForm,site:"https://do-multistepform-dcdfuwwgc-jgreen721.vercel.app/",translate:0},
        {id:3,title:"Notifications Snippet",description:"Elevate your user experience with our sleek notification snippet crafted in JavaScript. This minimalist yet powerful feature keeps users informed in real-time, ensuring a seamless and engaging interaction with your application.",technology:["HTML","CSS","JS"],img:notifications,site:"https://jgreen721.github.io/frontend_challenges/notificationsapp/",translate:105},
        {id:4,title:"Password Generator",description:"Embark on a secure digital journey with our stylish JavaScript password generator. This user-friendly app effortlessly creates strong passwords, bridging the gap between accessibility and heightened online security in today's cyber landscape.",technology:["HTML","CSS","JS"],img:pwordGenerator,site:"https://jgreen721.github.io/frontend_challenges/passwd_gen/",translate:210},
      ]
    },
    {
      id:3,
      level:"Junior",
      description:"Continuing on with more advanced designs and deeper functionality",
      samples:[
        {id:1,title:"Body Mass Calculator",description:"Experience versatility with our Body Mass Calculator, ingeniously designed to compute your body mass in both pounds and kilograms. This user-friendly tool provides a holistic perspective on fitness, allowing you to effortlessly toggle between units, promoting a well-rounded approach to health monitoring and goal setting.",technology:["HTML","CSS","React"],img:bodyMass,site:"https://frontend3dsolution.vercel.app/",translate:-105},
        {id:2,title:"Clock UI",description:"",technology:["HTML","CSS","JS"],img:clockSite,site:"https://clockapp-react.vercel.app/",translate:0},
        {id:3,title:"Portfolio Demo",description:"",technology:["HTML","CSS","JS"],img:portfolio,site:"https://portfolio-challenge-three.vercel.app/",translate:105},
        {id:4,title:"Programming Quiz",description:"",technology:["HTML","CSS","JS"],img:quiz,site:"https://jgreen721.github.io/frontend_challenges/results_summary/",translate:210},
      ]
    },
    {
      id:4,
      level:"Senior",
      description:"Fully functional sites ready for a backend server and to go into production.",
      samples:[
        {id:1,title:"Movie Site",description:"",technology:["HTML","CSS","React"],img:movieSite,site:"https://fe-entertainmentwebapp.vercel.app/",translate:-105},
        {id:2,title:"Task Manager",description:"",technology:["HTML","Tailwind","React"],img:taskManager,site:"https://react-feedbackmanager.vercel.app/",translate:0},
        {id:3,title:"SpeakerSite",description:"",technology:["HTML","CSS","JS"],img:perfumeAd,site:"https://perfume3d.vercel.app/",translate:105},
        {id:4,title:"Survey Card",description:"",technology:["HTML","CSS","JS"],img:resultsCard,site:"https://jgreen721.github.io/frontend_challenges/results_summary/",translate:210},
      ]
    },
  ]