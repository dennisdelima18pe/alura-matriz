import appConfig from '../config.json'
import style from '../css/components/title.module.css';
const  Title = ({Tag,children,mode}) => {

  console.log("MODO",mode ? "style.dark":"style.light")

  return (

    <Tag className={`${style.title} ${mode ? style.teste:style.teste} `}>{children}</Tag>
)

}
export default Title