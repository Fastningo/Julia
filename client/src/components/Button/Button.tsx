import './button.css'

type ButtonProps = {
  title: string
}

const Button = (props: ButtonProps) => {
  return (
    <div className="container">
      <button type="button">
        {props.title}
      </button>
    </div>
  )
}

export default Button