import Image from "next/image";
import { title } from "process";
import BlackPage from '@/app/black/page'
import WhitePage from '@/app/white/page'

export default function Home() {
  return <div className="" >
    <BlackPage />
    <WhitePage />

  </div>
}

