import clas
export default function FormButton({ variant, children, ...props }) {
  return (
    <button className={`${classes.button} ${classes[variant]}`} {...props}>
      {children}
    </button>
  );
}
