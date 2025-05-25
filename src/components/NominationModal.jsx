import { useState } from 'react'

function NominationModal({ candidate, onClose }) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (!email) {
      setError('Please enter your email')
      return
    }

    if (!email.endsWith('@alustudent.com')) {
      setError('Please use your school email address')
      return
    }

    setIsSubmitting(true)

    try {
      const checkResponse = await fetch(
        `http://localhost:3001/nominations?email=${email}`
      )
      const existingNominations = await checkResponse.json()

      if (existingNominations.length > 0) {
        throw new Error('You have already submitted a nomination')
      }

      const submitResponse = await fetch('http://localhost:3001/nominations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          candidateId: candidate.id,
          candidateName: candidate.name,
          position: candidate.role,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!submitResponse.ok) {
        throw new Error('Failed to submit nomination')
      }

      setSuccess(true)
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (err) {
      setError(err.message || 'An unknown error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        {success ? (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-medium text-gray-900">
              Nomination Successful!
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Thank you for nominating {candidate.name} for {candidate.position}.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Nominate {candidate.name}
            </h2>
            <p className="text-gray-600 mb-2">
              Position: <span className="font-medium text-[#6072e7]">{candidate.role}</span>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your School Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6072e7] focus:border-[#6072e7]"
                  placeholder="your.name@alustudent.com"
                />
              </div>
              {error && (
                <div className="mb-4 text-sm text-red-600 bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6072e7]"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6072e7] hover:bg-[#4a5acf] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6072e7] disabled:opacity-50"
                  disabled={isSubmitting} style={{ backgroundColor: '#6072e7' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Nomination'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// Correct way to export (at end of file)
export default NominationModal;