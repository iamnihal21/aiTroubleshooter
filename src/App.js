// import React, { useState } from 'react';

// function TroubleshootComponent() {
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');

//   const handleQuestionChange = (event) => {
//     setQuestion(event.target.value);
//   };

//   const handleGenerateClick = async () => {
//     const { GoogleGenerativeAI } = require("@google/generative-ai");
//     // Access your API key as an environment variable (see "Set up your API key" above)
//     const genAI = new GoogleGenerativeAI("AIzaSyCzXtqrnFCVSh5U8FCh0HZv_PO-MBvESTQ");

//     async function run() {
//       // For text-only input, use the gemini-pro model
//       const model = genAI.getGenerativeModel({ model: "gemini-pro"});

//       const prompt = question;  // Pass the question directly, assuming it's a string
//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       const text = response.text();
//       console.log(text);
//       setAnswer(text); // Set the answer state with the generated text
//     }

//     // Call the run function
//     await run();
//   }


//   return (
//     <div>
//       <nav className="bg-gray-800">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="relative flex h-16 items-center justify-between">
//             <div className="flex-shrink-0">
//               <img className="h-8 w-auto"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8HsKDcXjVEvOb31IFbTFsN8jOIINz0487Io8W77VJw&s"
//                 alt="RCTI" />
//             </div>
//             <div className="flex flex-grow justify-center">
//               <a href="#"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 font-extrabold font-mono text-lg text-center">Solve
//                 problem with AI</a>
//             </div>
//             <div className="flex-shrink-0"></div>
//           </div>
//         </div>
//       </nav>
//       <div className="mainBox flex min-h-full flex-col justify-center">
//         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 outerBox border border-light-500 my-10 rounded">
//           <h2 className="m-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">Give Question</h2>
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <div className="mt-2">
//               <input
//                 id="plaintext1"
//                 name="textInput"
//                 type="text"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
//                 placeholder="Troubleshoot your PC"
//                 style={{ padding: '10px' }}
//                 value={question}
//                 onChange={handleQuestionChange}
//               />
//             </div>
//             <div>
//               <button
//                 id="encryptButton1"
//                 type="button"
//                 className="my-10 flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
//                 onClick={handleGenerateClick}
//               >
//                 Generate
//               </button>
//             </div>
//             <textarea
//               id="ciphertext1"
//               rows="1"
//               cols="5"
//               className="px-4 py-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 readonly"
//               readOnly
//               placeholder="Steps to solve"
//               value={answer}
//               onClick={handleGenerateClick}
//             />
//           </div>
//         </div>
//       </div>
//       <p className="mt-10 text-center text-sm text-gray-500">
//         Follow this steps to solve issue without any Tutorial
//       </p>
//     </div>
//   );
// }

// export default TroubleshootComponent;
import React, { useState, useEffect, useRef } from 'react';
import '../src'

function TroubleshootComponent() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const textAreaRef = useRef(null);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleGenerateClick = async () => {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI("AIzaSyCzXtqrnFCVSh5U8FCh0HZv_PO-MBvESTQ");

    async function run() {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = question;  // Pass the question directly, assuming it's a string
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      setAnswer(text); // Set the answer state with the generated text
    }

    // Call the run function
    await run();
  }

  // Dynamically adjust the height of the textarea based on its content
  const textAreaStyle = {
    height: answer.split('\n').length * 1.5 + 'rem' // Adjust 1.5rem based on your design
  };

  // Check if scrolling is needed and show/hide the scrollbar
  useEffect(() => {
    if (textAreaRef.current) {
      const isScrollable = textAreaRef.current.scrollHeight > textAreaRef.current.clientHeight;
      if (isScrollable) {
        textAreaRef.current.classList.add('scrollable');
      } else {
        textAreaRef.current.classList.remove('scrollable');
      }
    }
  }, [answer]);

  return (
    <div>
      <nav className="bg-gray-800" style={{ width: '100%', zIndex: 1 }}>
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex-shrink-0">
                <img className="h-8 w-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8HsKDcXjVEvOb31IFbTFsN8jOIINz0487Io8W77VJw&s"
                  alt="RCTI" />
              </div>
              <div className="flex flex-grow justify-center">
                <a href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 font-extrabold font-mono text-lg text-center">Solve
                  problem with AI</a>
              </div>
              <div className="flex-shrink-0"></div>
            </div>
          </div>
        </nav>
      </nav>
      <div className="mainBox flex min-h-full flex-col justify-center" style={{ marginTop: '4rem' }}>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 outerBox ">
          <h2 className="m-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">Give Question</h2>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="mt-2">
              <input
                ref={textAreaRef}
                id="plaintext1"
                name="textInput"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                placeholder="Troubleshoot your PC"
                style={{ padding: '10px' }} // Dynamically set height
                value={question}
                onChange={handleQuestionChange}
              />
            </div>
            <div>
              <button
                id="encryptButton1"
                type="button"
                className="my-10 flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                onClick={handleGenerateClick}
              >
                Generate
              </button>
            </div>
            <textarea
              id="ciphertext1"
              rows="1"
              cols="5"
              className="px-4 py-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 readonly"
              readOnly
              placeholder="Steps to solve"
              value={answer}
              style={{...textAreaStyle}}
              onClick={handleGenerateClick}
            />
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-gray-500" style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1 }}>
        Follow this steps to solve issue without any Tutorial
      </p>
    </div>
  );
}

export default TroubleshootComponent;
