import React from 'react'

function App() {
  return (
    <div className="w-[90vw] md:w-[40vw] bg-black mx-auto flex flex-col gap-[20px] justify-center">
        <h1 className="w-[100%] text-[3em] flex flex-col mx-auto text-white md:primary-color">Speech Recognition</h1>
        <h2 className="text-gray-600">Available in Chrome only</h2>
        <div id="chatBox" className="chatBox w-[100%] flex flex-col justify-center gap-[20px]"> 
            <p id="fn" className="fn bg-secondary-color reply">Hello there, welcome here is a list of command that i understand more command would be added as time goes on and you are free to suggest a command for my creator, To know more about him say the command "Open Portfolio".
            <ul>
                <li>Hi</li>
                <li>Who created you</li>
                <li>Open portfolio</li>
                <li>Open "WEBISTE" e.g open google</li>
            </ul>
            </p>
        </div>
    </div>
  )
}

export default App