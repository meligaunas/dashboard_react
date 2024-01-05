import { Form } from "react-bootstrap"


export const FormMovie = () => {
  return (
    <Form>
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInputTitle" placeholder="Título de la película"/>
  <label htmlFor="floatingInput">Título</label>
</div>
<div className="form-floating">
  <input type="number" className="form-control" id="floatingInputRating"/>
  <label htmlFor="floatingInputRating">Rating</label>
</div>
    </Form>
  )
}
