import { v4 as uuidv4 } from "uuid";
interface ExperienceProps {
  company: string;
  location: string;
  position: string;
  duration: string;
  duties: string[];
}

export default function Experience() {
  const experienceItems: ExperienceProps[] = [
    {
      company: "Classictech Nepal",
      location: "Baneshwor",
      position: "Network Solution Engineer",
      duration: "Oct 2023 - Present",
      duties: [
        "Researched oxygen concentrator working",
        "Developed prototype, learned electronics and 3D drawing",
      ],
    },
    {
      company: "Insight Technology Private Limited",
      location: "Lalitput",
      position: "Network Engineer",
      duration: "Nov 2020 - Aug 2023",
      duties: [
        "Routing, Switching, Network Management",
        "Protocols: OSPF, EIGRP, DHCP, DNS, TCP, UDP, VPN (IPsec, DMVPN, L2TP)",
        "Security: Firewall, Active Directory, NAC, SOC, SIEM",
      ],
    },
    {
      company: "Antarikchya Pratisthan Nepal",
      location: "Kathmandu",
      position: "Intern",
      duration: "Aug 2020 - Nov 2020",
      duties: [
        "Researched oxygen concentrator working",
        "Developed prototype, learned electronics and 3D drawing",
      ],
    },
  ];
  return (
    <>
      {experienceItems.map((item) => (
        <section key={uuidv4()} className="mt-6">
          <div>
            <div className="flex justify-between">
              <div className="text-cyan-500">
                <p>{item.company}</p>
                <p>{item.location}</p>
              </div>
              <div className="text-cyan-500">
                <p>{item.position}</p>
                <p>{item.duration}</p>
              </div>
            </div>
            <ul className="ml-2 text-gray-50">
              {item.duties.map((duty) => (
                <li key={uuidv4()}> - {duty}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
