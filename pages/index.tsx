import React from 'react'
import style from '../css/pages/index.module.css'
import Title from '../components/Title'
import Switch from "react-switch";


const Home = ()=>{

  const username = 'dennisdelima19pe';
  const [mode,setMode] = React.useState(false);
  console.log(mode);
  return (
    <main className={`${style.main} ${mode ? style.dark:style.light} `}>
     <div className={style.mode}>
       <Switch onChange={(checked)=> setMode(checked)} checked={mode}  />
     </div>
     <div className={style.content}>
      <div className={style.box}>
        <form className={style.form}>
          <Title Tag="h1" mode={mode}> Boas vindas de volta!</Title>
          <h2 className={style.subtitle}>AluraCord - Alura Matrix</h2>
          <input type="text"  />
          <button>Entrar</button> 
        </form>
       <div className={style.avatar_content}>
          <img  src={`https://github.com/${username}.png`}/>
          <span className={style.username}>{username}</span> 
       </div>     
      </div>
    </div>
    </main>
  )
}

export default Home;