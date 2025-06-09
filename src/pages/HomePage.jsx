import assets from "../assets/assets";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import banner from "../assets/banner.png";
// import NominationModal from '../components/NominationModal'
import NominationModal from "../components/NominationModal";
const candidates = [
  {
    name: "Immaculata Emmanuel",
    role: "SRC Treasurer",
    img: assets.immaculata,
  },
  {
    name: "Elera Obari",
    role: "SRC Vice President",
    id: 2,
    img: assets.elera,
  },
  // {
  //   name: "Umar Kamani",
  //   role: "SRC President",
  //   id: 3,
  //   img: assets.umar,
  // },
  {
    name: "Tako Nellyvine MIZERO",
    id: 3,
    role: "SRC Secretary",
    img: assets.nelly,
  },
  {
    id: 4,
    name: "Chisom Louisa Obueze",
    role: "SRC Vice President",
    img: assets.chisom,
  },
  {
    id: 5,
    name: "Olivier Ishimwe",
    role: "SRC Social Transformation Committee Head",
    img: assets.olivier,
  },
  // {
  //   id: 7,
  //   name: "Farhaan Khuroolah",
  //   role: "SRC Clubs and Societies Committee Head",
  //   img: assets.farhaan,
  // },
  {
    id: 6,
    name: "Kimunila Zhakata",
    role: "SRC Clubs and Societies Committee Head",
    img: assets.kimunila,
  },
  {
    id: 7,
    name: "Yvette Uwase Ishimwe",
    role: "SRC Clubs and Societies Committee Head",
    img: assets.yvette,
  },
  // {
  //   id: 9,
  //   name: "Janique maduray",
  //   role: "SRC Secretary",
  //   img: assets.janique,
  // },
  {
    id: 8,
    name: "Lisette Mukiza",
    role: "SRC Academic Affairs Committee Head",
    img: assets.lisette,
  },
  {
    id: 9,
    name: "Yahya Bouhaik",
    role: "SRC President",
    img: assets.yahya,
  },
  {
    id: 10,
    name: "Amahn Heuvel",
    role: "ALU Alive SRC Committee Head ",
    img: assets.ahman,
  },
];

function HomePage() {
  return (
    <div className="min-h-[100vh] py-[4rem] px-[2rem] bg-[#f0f0ff]">
      <div
        className="w-full bg-cover bg-center h-[10rem] flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-white text-[3rem] font-bold italic ">
          ALU SRC 2025 Candidates
        </h1>
      </div>
      <ul
        className="grid w-full"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
          gridGap: "2rem",
        }}
      >
        {candidates.map((candidate) => (
          <li
            key={candidate.id}
            className="flex items-center gap-[2rem] flex-col w-full justify-between bg-white shadow-md rounded-lg p-4"
          >
            <img
              src={candidate.img}
              // new URL(`../assets/${candidate.img}`, import.meta.url).href
              alt={candidate.name}
              className="w-32 h-32 object-cover rounded-full"
              onError={(e) => {
                e.target.src = new URL(
                  `../assets/default-profile.jpg`,
                  import.meta.url
                ).href;
              }}
            />
            <h2 className="text-xl font-bold text-center">{candidate.name}</h2>
            <p className="text-[#6072e7] font-medium">{candidate.role}</p>
            <p className="text-gray-600 text-sm text-center">{candidate.bio}</p>
            {/* <Button
              onClick={() => console.log(`Nominated ${candidate.name}`)}
              className="bg-[#6072e7] text-white px-4 py-2 rounded hover:bg-[#4a5acf] transition-colors"
            >
              Nominate
            </Button> */}
          </li>
        ))}
      </ul>
    </div>
  );

  // export default function HomePage() {
  //   const [candidates, setCandidates] = useState([])
  //   const [selectedCandidate, setSelectedCandidate] = useState(null)
  //   const [showModal, setShowModal] = useState(false)
  //   const [isLoading, setIsLoading] = useState(true)
  //   const [error, setError] = useState('')

  //   useEffect(() => {
  //     const fetchCandidates = async () => {
  //       try {
  //         const response = await fetch('http://localhost:3001/candidates')
  //         if (!response.ok) throw new Error('Failed to fetch candidates')
  //         const data = await response.json()
  //         setCandidates(data)
  //       } catch (err) {
  //         setError(err.message || 'An unknown error occurred')
  //       } finally {
  //         setIsLoading(false)
  //       }
  //     }

  //     fetchCandidates()
  //   }, [])

  //   const handleNominateClick = (candidate) => {
  //     setSelectedCandidate(candidate)
  //     setShowModal(true)
  //   }

  //   const handleCloseModal = () => {
  //     setShowModal(false)
  //     setSelectedCandidate(null)
  //   }

  //   if (isLoading) {
  //     return (
  //       <div className="flex justify-center items-center min-h-[100vh]">
  //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6072e7]"></div>
  //       </div>
  //     )
  //   }

  //   if (error) {
  //     return (
  //       <div className="flex justify-center items-center min-h-[100vh]">
  //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
  //           {error}
  //         </div>
  //       </div>
  //     )
  //   }

  //   return (
  //     <div className="min-h-[100vh] py-[4rem] px-[2rem] bg-[#f0f0ff]">
  //       <div className="bg-cover bg-center h-[10rem] flex justify-center items-center" style={{ backgroundImage: `url(${banner})` }}>
  //         <p className="text-white text-3xl font-bold">Student Election Nominations</p>
  //       </div>

  //       <ul className="grid w-full" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))", gridGap: '2rem' }}>
  //         {candidates.map((candidate) => (
  //           <li key={candidate.id} className="flex items-center gap-[2rem] flex-col w-full justify-between bg-white shadow-md rounded-lg p-4">
  //             <img
  //               src={new URL(`../assets/${candidate.img}`, import.meta.url).href}
  //               alt={candidate.name}
  //               className="w-32 h-32 object-cover rounded-full"
  //               onError={(e) => {
  //                 e.target.src = new URL(`../assets/default-profile.jpg`, import.meta.url).href
  //               }}
  //             />
  //             <h2 className="text-xl font-bold text-center">{candidate.name}</h2>
  //             <p className="text-[#6072e7] font-medium">{candidate.role}</p>
  //             <p className="text-gray-600 text-sm text-center">{candidate.bio}</p>
  //             <button
  //               onClick={() => handleNominateClick(candidate)}
  //               className="bg-[#6072e7] text-white px-4 py-2 rounded hover:bg-[#4a5acf] transition-colors"
  //               style= {{backgroundColor: "#6072e7"}}
  //             >
  //               Nominate
  //             </button>
  //           </li>
  //         ))}
  //       </ul>

  //       {showModal && selectedCandidate && (
  //         <NominationModal
  //           candidate={selectedCandidate}
  //           onClose={handleCloseModal}
  //         />
  //       )}
  //     </div>
  //   )
}

export default HomePage;

// }
