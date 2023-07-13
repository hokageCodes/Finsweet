import CompanyHero from "../components/companyHero/CompanyHero";
import Expertise from "../components/expertise/Expertise";
import Newsletter from "../components/newsletter/Newsletter";
import OurVision from "../components/vision/OurVision";
import OurTeam from '../components/ourTeam/OurTeam'

export default function CompanyPage() {
    return (
        <div>
            <CompanyHero />
            <Expertise />
            <OurVision />
            <OurTeam />
            <Newsletter />
        </div>
    )
}
