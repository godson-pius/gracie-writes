import { useState } from 'react'
import './App.css'
import AuthContextProvider from './context/authContext';
import BlogContextProvider from './context/blogContext';
import CommentContextProvider from './context/commentContext';
import Index from "./routes";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <CommentContextProvider>
            <Index />
          </CommentContextProvider>
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  )
}
export default App
