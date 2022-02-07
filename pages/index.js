import Head from 'next/head'
import Image from 'next/image'
import Exam from '../components/Exam'
import Header from '../components/Navbar1'
import styles from '../styles/Exam.module.css'
// import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className= {styles.body}>
    <Header />
   <Exam />

    </div>
  )
}
