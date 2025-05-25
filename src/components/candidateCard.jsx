function CandidateCard({ candidate, onNominate }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={`/src/assets/${candidate.img}`} 
        alt={candidate.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{candidate.name}</h2>
        <p className="text-blue-600">{candidate.role}</p>
        <p className="text-gray-600 my-2">{candidate.bio}</p>
        <button
          onClick={onNominate}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Nominate
        </button>
      </div>
    </div>
  )
}

export default CandidateCard;