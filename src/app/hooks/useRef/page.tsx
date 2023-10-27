import VideoPanel from "@/app/(client-components)/video-panel";

export default function Page() {
    return <>
      <div>
        The component below uses &apos;useRef()&apos; hook to access a video HTML node.
        It also uses &apos;useEffect()&apos; to synchronize the video player with the &apos;isPlaying&apos; state.
      </div>
      <VideoPanel src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>    
    </>
}