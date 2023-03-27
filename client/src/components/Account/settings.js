
import { FormControl, FormGroup } from '@mui/material'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Styles from './settings.module.css'



const AccountSettings = () => {

 return (

     <div className={Styles["user-view__content"]}>
                <div className={Styles["user-view__form-container"]}>
                  <h2 className={`${Styles["ma-bt-md"]}}`} >Your account settings</h2>
                  <form>
                    <Form.Group>
                      <Form.Label className={Styles["form__label"]} for="name">Name</Form.Label>
                      <Form.Control className={Styles["form__input"]} id="name" type="text" value="HASSAN AMGHARID" required="" name="name" />
                    </Form.Group>
                    <Form.Group className="ma-bt-md">
                      <Form.Label className={Styles["form__label"]} for="email">Email address</Form.Label>
                      <Form.Control className={Styles["form__input"]} id="email" type="email" value="amgharid2015@gmail.com" required="" name="email" />
                    </Form.Group>
                    <Form.Group className={`${Styles["form__photo-upload"] }`} >
                      <img className={Styles["form__user-photo"]} src="" alt="User photo" />
                      <Form.Control className={Styles["form__upload"]} type="file" accept="image" id="photo" name="photo" />
                      <Form.Label for="photo">Choose new photo</Form.Label>
                    </Form.Group>
                    <Form.Group className={`${Styles["form__group"]} ${Styles["right"]}`}>
                      <Button className={`${Styles["btn--small"]} ${Styles["btn--brown"]} ${Styles["btn--save-password"]}`}>Save settings</Button>
                    </Form.Group>
                  </form>
               </div>
              <div className={Styles["line"]}>&nbsp;</div>
            <div className={Styles["user-view__form-container"]}>
              <h2 className={Styles["ma-bt-md"]}>Password change</h2>
              <Form>
                 <Form.Group>
                    <Form.Label className={Styles["form__label"]} for="password-current">Current password</Form.Label>
                    <Form.Control className={Styles["form__input"]} id="password-current" type="password" placeholder="••••••••" required="" minlength="8" />
                  </Form.Group>
                  <Form.Group >
                  <Form.Label class="form__label" for="password">New password</Form.Label>
                  <Form.Control className={Styles["form__input"]} id="password" type="password" placeholder="••••••••" required="" minlength="8" />
                 </Form.Group>
                 <Form.Group className={Styles["ma-bt-lg"]}>
                    <Form.Label className={Styles["form__label"]} for="password-confirm">Confirm password</Form.Label>
                    <Form.Control className={Styles["form__input"]} id="password-confirm" type="password" placeholder="••••••••" required="" minlength="8"/>
                  </Form.Group>
                  <Form.Group className={`${Styles["form__group"]} ${Styles["right"]}`}>
                      <Button className={`${Styles["btn--small"]} ${Styles["btn--brown"]} ${Styles["btn--save-password"]}`} >Save password</Button>
                      <Button className={`${Styles["btn--small"]} ${Styles["btn--brown"]} ${Styles["btn--close-account"]}`}>Delete my account</Button>
                  </Form.Group>
                </Form>
              </div>
              </div>
 )

}
export default AccountSettings