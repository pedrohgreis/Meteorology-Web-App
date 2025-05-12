import { Form, Login, LoginRegistered } from "./styles";

export const LoginPage = () => {
  return (
    <>
    
        <Login>
            <LoginRegistered>
              <Form>
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" name="" placeholder="Type your e-mail" />
                </div>
                

                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="" placeholder=" Type tour password" />
                </div>
              </Form>
            </LoginRegistered>
        </Login>
    </>
  );
};
