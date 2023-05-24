
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



export const Register = () => {
  const schema = yup.object().shape({
    user: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")]).required()
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <h2 className="register-title">Sign up</h2>
        <div className="register-input-container">
          <input type="text" placeholder="User" {...register("user")} className="register-input" />
        </div>
        <div className="register-input-container">
          <input type="text" placeholder="Email" {...register("email")} className="register-input" />
        </div>
        <div className="register-input-container">
          <input type="password" placeholder="Password" {...register("password")} className="register-input" />
        </div>
        <div className="register-input-container">
          <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} className="register-input" />
        </div>
        <div className="register-button-container">
          <button type="submit" className="register-button">Submit</button>
        </div>
      </form>
      <div className="register-image-container">
        <img src="src\images\CashGrab-logo.png" alt="Registration Image" className="register-image" />
      </div>
    </div>
  );
};
