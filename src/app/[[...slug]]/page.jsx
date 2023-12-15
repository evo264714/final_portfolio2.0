'use client'
 
import dynamic from 'next/dynamic'
import '../../../src/index.css'
 
const App = dynamic(() => import('../../App'), { ssr: false })
 
export default function Page() {
  return <App />
}