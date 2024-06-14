import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';

//wrap anyone that wants to use the teleported value inside a providerf
function App() {
    return(
        <>
           <RecoilRoot>
             <Count />
           </RecoilRoot>
        </>
    )
}
function Count() {
    return <div>
        <CountRender />
        <Buttons />
    </div>
}

function Buttons() {
    // const [count,setCount] = useRecoilState(countAtom);
    const setCount = useSetRecoilState(countAtom);
    console.log("button re-render")
    return <div>
        <button  onClick={() => { setCount(count => count+1 )}}>Incerese</button>
        <button  onClick={() => { setCount(count => count-1)}}>Decerese</button>
    </div>
}

function CountRender() {
    const count = useRecoilValue(countAtom)
    return<div>
        {count}
        <EventCountRedner />
    </div>
}
function EventCountRedner() {
    const count = useRecoilValue(countAtom)
    return(
        <div>
            {(count % 2 == 0)? "It is even" : null}
        </div>
    )
}
export default App
