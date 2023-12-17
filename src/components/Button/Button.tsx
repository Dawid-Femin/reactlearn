import style from './Button.module.scss'

function Button(props: {value: string, name: string}) {
    const {name, value} = props

    const button = () => {
        console.log(value)
    }

    return (
        <button onClick={button} className={style.button}>{name}</button>
    )
}

export default Button