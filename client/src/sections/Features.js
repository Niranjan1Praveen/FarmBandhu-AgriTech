import FeatureCard from "@/components/ui/featureCard";
import Tags from "@/components/ui/tags";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/ui/avatar";
import Key from "@/components/ui/key";
import dashboard from "@/assets/images/dashboard-new.png";
import WaterDropletCards from "@/components/ui/dropCard";
const features = [
  "CSR Impact Dashboards",
  "Verified Internships",
  "NGO Event Matching",
  "Volunteer Leaderboards",
  "Geo-tagged Reporting",
  "Media-ready PR Kits",
  "Skill-based Volunteer Mapping",
];

export default function Features() {
  return (
    <section className="py-24 px-4 flex items-center justify-center" id="features">
      <div className="container">
        <div className="flex justify-center">
          <Tags title={"Platform Features"} />
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-3xl mx-auto">
          Tech for <span className="text-lime-400">Social Impact</span>
        </h2>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {/* Card-1 */}
          <FeatureCard
            title={"Real-time CSR Dashboards"}
            description={
              "Corporates can track volunteer hours, trees planted, and households impacted—automatically aligned with Schedule VII and ESG metrics."
            }
            className="md:col-span-2 lg:col-span-1"
          >
            {/* Avatars */}
            <div className="aspect-video flex items-center justify-center">
              {/* <div className={"z-40"}>
                <Image
                  src={avatar1}
                  alt="NGO Leader"
                  className="rounded-full"
                />
              </div>
              <div className={"-ml-6 border-indigo-500 z-30"}>
                <Image src={avatar2} alt="Student" className="rounded-full" />
              </div>
              <div className={"-ml-6 border-amber-500 z-20"}>
                <Image
                  src={avatar3}
                  alt="Corporate Executive"
                  className="rounded-full"
                />
              </div>
              <div className={"-ml-6 border-transparent rounded-full"}>
                <div className="size-full rounded-full bg-neutral-700 inline-flex items-center justify-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="size-1.5 rounded-full bg-white inline-flex"
                      key={i}
                    ></span>
                  ))}
                </div>
              </div> */}
              <Image src={dashboard} className="rounded-xl" height={650} width={650}/>
            </div>
          </FeatureCard>

          {/* Card-2 */}
          <FeatureCard
            title={"Volunteer Recognition System"}
            description={
              "Top-performing student volunteers unlock badges, internship opportunities, and 'Lunch with Leaders' sessions with industry professionals."
            }
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-3xl font-bold text-white/20 text-center leading-relaxed">
                Impact shouldn’t go unnoticed. <br /> We 
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"> reward </span> it
              </p>
            </div>
          </FeatureCard>

          {/* Card-3 */}
          <FeatureCard
            title={"Smart Event Matching"}
            description={
              "NGOs create verified events and receive matched volunteers based on interest, location, and skills—streamlining outreach and logistics."
            }
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
          >
            <div className="aspect-video flex items-center justify-center gap-4 flex-wrap">
              <Key className={"w-28"}>Skill</Key>
              <Key className={"w-28"}>Location</Key>
              <Key className={"w-28"}>Interest</Key>
            </div>
          </FeatureCard>
        </div>

        {/* Other Features */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border-white/10 inline-flex gap-3 items-center px-3 md:px-5 py-1.5 md:py-2 rounded-2xl hover:scale-105 transition duration-500 group"
            >
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
