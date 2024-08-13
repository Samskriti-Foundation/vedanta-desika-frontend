// src/components/AudioPlayer.tsx
import { useEffect, useState } from "react"

const AudioPlayer = ({ pageName, id }: { pageName: string; id: number }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [status, setStatus] = useState<
    "idle" | "loading" | "succeeded" | "failed"
  >("idle")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAudio = async () => {
      setStatus("loading")
      try {
        const response = await fetch(
          `http://127.0.0.1:5501/${pageName.replace(
            "-",
            "_"
          )}/${pageName.replace("-", "_")}_${id}.mp3`
        ) // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const blob = await response.blob()
        setAudioUrl(URL.createObjectURL(blob))
        setStatus("succeeded")
      } catch (error: any) {
        setError(error.message)
        setStatus("failed")
      }
    }

    fetchAudio()
  }, [])

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {audioUrl && <audio controls src={audioUrl} />}
    </div>
  )
}

export default AudioPlayer
