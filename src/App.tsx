import UseScrollandMenubarReset from "./Hooks/UseScrollandMenubarReset"
import Router from "./Router"

function App() {
    return (
        <div className='App max-h-screen overflow-y-auto font-danafa'>
            <div className='content  RTL bg-lightWhite text-Gray dark:bg-darkBlack dark:text-lightWhite'>
                <UseScrollandMenubarReset />
                <Router />
            </div>
        </div>
    )
}

export default App
