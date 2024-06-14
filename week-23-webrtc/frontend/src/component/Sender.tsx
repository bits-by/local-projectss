import { useEffect, useState } from "react"

export function Sender() {

    const [socket, setSocket] = useState<WebSocket | null>(null)

    //create a socket conntion to a server.
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080')
        setSocket(socket);
        socket.onopen = () => {
            socket.send(JSON.stringify({type: 'sender'}));
        }        
    }, []);

    async function startSendingVideo() {
        //writing webrtc code here
        if(!socket)  return ;   
        //create an offer.
        const pc = new RTCPeerConnection();
        pc.onnegotiationneeded = async () => {
            console.log('onnegotiationneeded')
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);   
            socket?.send(JSON.stringify({type: 'createOffer', sdp: pc.localDescription}));
        }
       
        // video or audio 
        pc.onicecandidate = (event) => {
            console.log(event);
            if(event.candidate){
                socket?.send(JSON.stringify({type: "iceCandidate", candidate : event.candidate}))
            }
        }

        //socket handler...
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if(data.type === "createAnswer"){
                pc.setRemoteDescription(data.sdp);
            }else if(data.type === "iceCandidate"){
                pc.addIceCandidate(data.candidate);
            }
        }
        // const screen = await navigator.mediaDevices.getDisplayMedia({video: true, audio:  false}); 
        const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true });
        pc.addTrack(stream.getVideoTracks()[0]);

        const video = document.createElement('video');
        video.controls = true; 
        document.body.appendChild(video);
        video.srcObject = stream;
        setTimeout(() => {
            video.play();
        }, 1000);
        
    }
    return(
        <>
            Sender....
            <button onClick={startSendingVideo}>Send Video</button>
        </>
    )
}