import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool,faArrowUpRightDots,faBolt,faScaleBalanced, faUserGear, faUserPlus} from '@fortawesome/free-solid-svg-icons'


const data=[
    {
        icon:<FontAwesomeIcon icon={faScaleBalanced} className=' text-customblue-200 fa-2x'/>,
        title:"Sales",
        para:"Spend more time selling, and less time on admin. Shorten your sales cycle by letting prospects schedule while they're in peak buying mode."
    },
    {
        icon:<FontAwesomeIcon icon={faUserPlus} className=' text-customblue-200 fa-2x'/>,
        title:"Recruiting",
        para:"Simplify recruitment by smoothing every aspect of the interview scheduling process, including automated follow-ups."
    },
    {
        icon:<FontAwesomeIcon icon={faSchool} className=' text-customblue-200 fa-2x'/>,
        title:"Education",
        para:"Control your office hours, and empower students and parents to schedule appointments easily."
    },
    {
        icon:<FontAwesomeIcon icon={faArrowUpRightDots} className=' text-customblue-200 fa-2x'/>,
        title:"Revenue Operations",
        para:"Streamline meeting and activity data. Calendly's native integrations with Salesforce and HubSpot ensure up-to-date reporting."
    },
    {
        icon:<FontAwesomeIcon icon={faBolt} className=' text-customblue-200 fa-2x '/>,
        title:"Marketing",
        para:"Convert interested prospects into scheduled meetings and demos faster. Skip steps that cause customer friction."
    },
    {
        icon:<FontAwesomeIcon icon={faUserGear} className=' text-customblue-200 fa-2x'/>,
        title:"Customer Success",
        para:"Offer exceptional support: Your clients will be delighted with one-click scheduling and increased responsiveness."
    },
]

export default data;