

import React from "react";
import org1 from "../assets/Rajiv.jpg"
import org2 from "../assets/supratik-mukhopadhyay-sq.webp"
import org3 from "../assets/tnsingh.jpeg"
import { motion } from "framer-motion";


const workshopChairs = [
  {
    name: "Dr. Rajiv Misra",
    image: org1,
    description:
      "Dr. Rajiv Misra is a professor and Head of the computer science and engineering department at the Indian Institute of Technology Patna. Dr. Misra earned his Ph.D. M.Tech., and B.Tech. from IIT Kharagpur, IIT Bombay, and NIT Allahabad, respectively. Computer Communications (Networks), Big Data, IIOT, Cloud Computing, Distributed Systems and Algorithms, 5G & Beyond Networking, Network Slicing, AI-ML, UAV-assisted MEC, and other topics are among his research interests.",
    link: "https://www.iitp.ac.in/people/faculty/214:view-profile-25"  
  },
  {
    name: "Dr. Supratik Mukhopadhyay",
    image: org2,
    description:
      "Dr. Supratik Mukhopadhyay is a faculty member in Computer Science at Louisiana State University. His research interests lie in the areas of Artificial Intelligence/Machine Learning with applications to Education, Automated Drug Discovery, Satellite Imagery Recognition, Transportation Systems, Sustainable Buildings, Cyber-Physical Human Systems, etc. In these areas, Dr. Mukhopadhyay's research has been supported by NSF, NASA, ONR, DARPA, ARO, USDOT, NGA, DOE, NRL, state agencies, and industry. He has more than 120 publications in reputed journals and conferences and has three awarded US Patents.",
    link: "https://www.lsu.edu/cce/about/cce-directories/faculty-profiles/mukhopadhyay_supratik.php",
  },
  {
    name: "Dr. T.N. Singh",
    image: org3,
    description:
      "Dr. T.N. Singh is a Director at the Indian Institute of Technology, Patna. Dr. Singh received a Ph.D. degree from the Institute of Technology, BHU, India. His current research interests are Edge Intelligence, Artificial Neural Networks, and Cloud Computing. Dr. Singh’s research in these areas has been supported by various Govt. and non-Govt. Agencies. His h-index is 65, with more than 17000 citations.",
      link : "https://scholar.google.com/citations?user=YMP_vP8AAAAJ&hl=en"
  },
  // {
  //   name: "Mr. Praveen Kumar",
  //   image: "https://res.cloudinary.com/dz3yaj24a/image/upload/v1748791183/p_ilus3z.jpg",
  //   description:
  //     "Mr. Praveen Kumar is an Assistant Professor at B.P. Mandal College of Engineering and a Ph.D. scholar at IIT Patna. His research interests include UAVs, RIS, Deep RL, Transformers, and LLMs.",
  // },
];

const committeeList = [
  {
    name: "Prof. Gokarna Sharma",
    affiliation: "Kent State University",
  },
  {
    name: "Prof. Sandro Fiore",
    affiliation: "University of Trento, Italy",
  },
  {
    name: "Prof.Subhajit Sidhanta ",
    affiliation: "IIT Bhilai",
  },
  {
    name: "Prof.Yimin Zhu",
    affiliation: "Louisiana State University",
  },
  {
    name: "Prof.Hector Zapata",
    affiliation: "Louisiana State University",
  },
  {
    name: "Prof.Tairan Liu",
    affiliation: "California State University, Longbeach",
  },

  
];


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Organiser = () => {
  return (
    <section id="organiser" className="bg-sky-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Workshop Chairs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {workshopChairs.map((chair, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white border border-slate-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 p-6">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="w-20 h-20 object-cover rounded-full border-2 border-indigo-300"
                />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-700">
                    {chair.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {chair.link ? (
                      <a
                        href={chair.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View Profile
                      </a>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 text-sm text-slate-700 leading-relaxed">
                {chair.description}
              </div>
            </motion.div>
          ))}
        </div>

      <h2 className="text-3xl font-bold text-center text-slate-800 mt-20 mb-6">
  Technical Program Committee (TPC)
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
  {committeeList.map((member, index) => (
    <motion.div
      key={index}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="text-lg font-semibold text-indigo-700">{member.name}</h3>
      {/* {member.role && (
        <p className="text-sm text-slate-600 mt-1 italic">{member.role}</p>
      )} */}
      <p className="text-sm text-slate-600 mt-1">{member.affiliation}</p>
      {/* {member.phone && (
        <p className="text-sm text-slate-600 mt-1">
          📞 <a href={`tel:${member.phone}`} className="text-blue-600 underline">{member.phone}</a>
        </p>
      )}
      {member.email && (
        <p className="text-sm text-slate-600 mt-1">
          📧 <a href={`mailto:${member.email}`} className="text-blue-600 underline">{member.email}</a>
        </p>
      )} */}
    </motion.div>
  ))}
</div>


        
      </div>
    </section>
  );
};

export default Organiser;
